function criarDivs(colorList=[]) {
    let container = document.getElementById('cores1');
    let newDiv = "";

    colorList.forEach(e => {
        let cor = e.cor;
        let name = e.nome;

        newDiv += `<div class='cor-element'>
                        <div class='square-container' style='background-color:${cor}'></div>
                        <div class='text-container'>
                            <p>${name}</p>
                        </div>
                    </div>`;
    });

    container.innerHTML = newDiv;
}