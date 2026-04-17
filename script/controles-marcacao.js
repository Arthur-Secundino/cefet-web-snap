const checkBoxEl = document.querySelector("#visibilidade-das-marcacoes");
const divFotoAnotadaEl = document.querySelector(".foto-anotada")

const xDaMarcacaoEl = document.querySelector("#x-da-marcacao");
const yDaMarcacaoEl = document.querySelector("#y-da-marcacao");
const larguraDaMarcacaoEl = document.querySelector("#largura-da-marcacao");
const alturaDaMarcacaoEl = document.querySelector("#altura-da-marcacao");

const tituloDaMarcacaoEl = document.querySelector("#titulo-da-marcacao");
const conteudoDaMarcacaoEl = document.querySelector("#conteudo-da-marcacao");
const corDaMarcacaoEl = document.querySelector("#cor-da-marcacao");

const radioFormatoRetangularEl = document.querySelector("input[value=formato-retangular]");
const radioFormatoOvalEl = document.querySelector("input[value=formato-oval]");

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
        conteudoDaMarcacaoEl.value = marcacaoASerSelecionadaEl.dataset.conteudo;
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

xDaMarcacaoEl.addEventListener("change", function (event){
    const marcacaoEl = document.querySelector(".selecionada");
    marcacaoEl.style["left"] = event.currentTarget.value + "px";
});

yDaMarcacaoEl.addEventListener("change", function (event){
    const marcacaoEl = document.querySelector(".selecionada");
    marcacaoEl.style["top"] = event.currentTarget.value + "px";
});

larguraDaMarcacaoEl.addEventListener("change", function (event){
    const marcacaoEl = document.querySelector(".selecionada");
    marcacaoEl.style["width"] = event.currentTarget.value + "px";
});

alturaDaMarcacaoEl.addEventListener("change", function (event){
    const marcacaoEl = document.querySelector(".selecionada");
    marcacaoEl.style["height"] = event.currentTarget.value + "px";
});

tituloDaMarcacaoEl.addEventListener("change", function (event){
    const marcacaoEl = document.querySelector(".selecionada");
    marcacaoEl.dataset.titulo = event.currentTarget.value;
});

conteudoDaMarcacaoEl.addEventListener("change", function (event){
    const marcacaoEl = document.querySelector(".selecionada");
    marcacaoEl.dataset.conteudo = event.currentTarget.value;
});

corDaMarcacaoEl.addEventListener("change", function (event){
    const marcacaoEl = document.querySelector(".selecionada");
    marcacaoEl.dataset.cor = event.currentTarget.value;
});

radioFormatoRetangularEl.addEventListener("change", function (){
    const marcacaoEl = document.querySelector(".selecionada");
    marcacaoEl.classList.remove("formato-oval");
    marcacaoEl.classList.add("formato-retangular")
});

radioFormatoOvalEl.addEventListener("change", function (){
    const marcacaoEl = document.querySelector(".selecionada");
    marcacaoEl.classList.remove("formato-retangular");
    marcacaoEl.classList.add("formato-oval");
});