const checkBoxEl = document.querySelector("#visibilidade-das-marcacoes");
const divFotoAnotadaEl = document.querySelector(".foto-anotada")

checkBoxEl.addEventListener("change", function (){
    if(checkBoxEl.checked){
        divFotoAnotadaEl.classList.add("marcacoes-ocultas");
    }
    else{
        divFotoAnotadaEl.classList.remove("marcacoes-ocultas");
    }
});