const checkBoxEl = document.querySelector("#visibilidade-das-marcacoes");
const divFotoAnotadaEl = document.querySelector(".foto-anotada")

const xDaMarcacaoEl = document.querySelector("#x-da-marcacao");
const yDaMarcacaoEl = document.querySelector("#y-da-marcacao");
const larguraDaMarcacaoEl = document.querySelector("#largura-da-marcacao");
const alturaDaMarcacaoEl = document.querySelector("#altura-da-marcacao");

const tituloDaMarcacaoEl = document.querySelector("#titulo-da-marcacao");
const contetudoDaMarcacaoEl = document.querySelector("#conteudo-da-marcacao");
const corDaMarcacaoEl = document.querySelector("#cor-da-marcacao");

checkBoxEl.addEventListener("change", function (){
    if(checkBoxEl.checked){
        divFotoAnotadaEl.classList.add("marcacoes-ocultas");
    }
    else{
        divFotoAnotadaEl.classList.remove("marcacoes-ocultas");
    }
});

for(const marcacaoEl of marcacoesEls){
    marcacaoEl.addEventListener("click", function (event){
        const marcacaoSelecionadaEl = document.querySelector(".selecionada");
        marcacaoSelecionadaEl.classList.remove("selecionada");

        const marcacaoASerSelecionadaEl = event.currentTarget;
        marcacaoASerSelecionadaEl.classList.add("selecionada");
        
        xDaMarcacaoEl.value = parseInt(marcacaoASerSelecionadaEl.style["left"]);
        yDaMarcacaoEl.value = parseInt(marcacaoASerSelecionadaEl.style["top"]);
        larguraDaMarcacaoEl.value = parseInt(marcacaoASerSelecionadaEl.style["width"]);
        alturaDaMarcacaoEl.value = parseInt(marcacaoASerSelecionadaEl.style["height"]);

        tituloDaMarcacaoEl.value = marcacaoASerSelecionadaEl.dataset.titulo;
        contetudoDaMarcacaoEl.value = marcacaoASerSelecionadaEl.dataset.conteudo;
        corDaMarcacaoEl.value = marcacaoASerSelecionadaEl.dataset.cor;

        let formato = undefined;
        if(marcacaoASerSelecionadaEl.classList.contains("formato-oval")){
            formato = "formato-oval";
        }
        else{
            formato = "formato-retangular";
        }

        const formatoEl = document.querySelector(`input[value=${formato}]`);
        formatoEl.checked = true;
    });
}