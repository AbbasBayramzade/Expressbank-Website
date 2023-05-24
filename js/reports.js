// ********************** REPORTS SECTION **************************

let plus = document.querySelector(".main_report")

let ul = document.querySelector(".show_hidden")

let img = document.getElementById("toggle_img")

plus.addEventListener("click",function(){

   ul.classList.toggle("selected")

   changeImg()

})

function changeImg(){
 
    img.src = "./assets/minus_faq.svg"

}



