function toggleMenu(){

let menu = document.getElementById("menu")

if(menu.style.left === "0px"){
menu.style.left = "-250px"
}else{
menu.style.left = "0px"
}

}

/* FECHAR MENU AO CLICAR FORA */

document.addEventListener("click", function(event){

let menu = document.getElementById("menu")
let button = document.querySelector(".menu-icon")

if(
menu.style.left === "0px" &&
!menu.contains(event.target) &&
!button.contains(event.target)
){
menu.style.left = "-250px"
}

})
