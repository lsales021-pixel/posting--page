const formulario = document.querySelector('#formulario-post');
const tituloInput = document.querySelector('#titulo-post');
const conteudoInput = document.querySelector('#conteudo-post');

const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        title: titulo.value,
        body: conteudo.value, 
        userId: 1
    };

    fetch('https://typicode.com', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao tentar enviar o post');
        }
        return response.json();
    })
    .then(jsonRetornado => {
        tituloRenderizar.innerHTML = data.title;
        conteudoRenderizar.innerHTML = data.body;
        formulario.reset();
    })
    .catch(error => {
        console.error('Houve um problema com a requisição:', error);
        alert('Erro ao enviar o post. Tente novamente.');
    });
});
