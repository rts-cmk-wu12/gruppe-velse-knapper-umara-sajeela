


/********************************************* */



const xtras = document.querySelectorAll(".xtra-txt")
/*console.log(xtras)*/
const buttons = document.querySelectorAll("#readmore")

for(let i = 0; i < xtras.length; i++){
xtras[i].style.display = "none"
}

for(let i = 0; i < buttons.length; i++){
buttons[i].addEventListener("click", showHide)
}

function showHide(){
let txt = this.previousElementSibling
console.log(txt)
if(txt.style.display === "none"){
txt.style.display = "block"
this.textContent = "Læs mindre"

} else{
txt.style.display = "none"
this.textContent = "Læs mere"
}
}