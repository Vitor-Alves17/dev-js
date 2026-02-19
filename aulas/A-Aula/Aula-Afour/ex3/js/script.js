const buttonEl = document.getElementById("altbtn");
const divMsg = document.getElementById("msg");

buttonEl.addEventListener("click", function(){
    if(divMsg.classList.contains("oculto")){
        divMsg.classList.remove("oculto");
    } else {
        divMsg.classList.add("oculto");
    }
})