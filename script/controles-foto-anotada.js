const filtroFotoEl = document.querySelector("#filtro-da-foto");
const imagemFotoAnotada = document.querySelector(".foto-anotada > img");

filtroFotoEl.addEventListener("change", function (event){
    const opcaoSelecionada = event.currentTarget.value;
    imagemFotoAnotada.style.filter = opcaoSelecionada;
});