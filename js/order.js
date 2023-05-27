// **************************** REQUIREMENTS SECTION *********************

let btn_see = document.querySelector(".see_details")

let details = document.querySelector(".more_req_details")

btn_see.addEventListener("click",function(){
    details.classList.toggle("active")
})