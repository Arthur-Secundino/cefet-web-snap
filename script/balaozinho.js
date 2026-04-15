const balaozinhoEl = document.querySelector("#balaozinho");
const marcacoesEls = document.querySelectorAll(".marcacao")

for(const marcacaoEl of marcacoesEls){
    marcacaoEl.addEventListener("mouseover", function (event){
        const marcacao = event.currentTarget;
        const conteudoBalaozinho = `<h2>${marcacao.dataset.titulo}<\h2><p>${marcacao.dataset.conteudo}<\p>`;
        balaozinhoEl.innerHTML = conteudoBalaozinho;
        balaozinhoEl.style.color = marcacao.data-crossOriginIsolated;
    });

    marcacaoEl.addEventListener("mouseout", function (){
        balaozinhoEl.innerHTML = "";
    });

    marcacaoEl.addEventListener("mousemove", function (event){
        const posX = event.pageX + "px";
        const posY = event.pageY + "px";

        balaozinhoEl.style.top = posY;
        balaozinhoEl.style.left = posX;
    });
}