// script.js
function criarDivs(quantidade, cor, nome) {
    const coresContainer = document.getElementById('cores1');

    for (let i = 0; i < quantidade; i++) {
        const divPrincipal = document.createElement('div');
        divPrincipal.classList.add('cor-element');

        const squareContainer = document.createElement('div');
        squareContainer.classList.add('square-container');
        squareContainer.style.backgroundColor = cor;

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        const texto = document.createElement('p');
        texto.textContent = nome;
        textContainer.appendChild(texto);

        divPrincipal.appendChild(squareContainer);
        divPrincipal.appendChild(textContainer);

        coresContainer.appendChild(divPrincipal);
    }
}

// Exemplo de uso
criarDivs(12, 'red', 'Vermelho');
criarDivs(12, 'blue', 'Azul');
