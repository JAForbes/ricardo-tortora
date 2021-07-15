const buttonClick = document.querySelector(".double-buttons")
buttonClick.querySelector(".button-left").addEventListener("click",(event)=>{
    buttonClick.querySelector(".button-right").classList.toggle("bg-opacity-50")
    buttonClick.querySelector(".button-right").classList.toggle("bg-opacity-100")
    switcher(event)
})
buttonClick.querySelector(".button-right").addEventListener("click",(event)=>{
    buttonClick.querySelector(".button-left").classList.toggle("bg-opacity-100")
    buttonClick.querySelector(".button-left").classList.toggle("bg-opacity-50")
    switcher(event)
})
function switcher(event){
    event.target.classList.toggle("bg-opacity-100")
    event.target.classList.toggle("bg-opacity-50")
    const buttonHidden = event.target.parentNode.parentNode.querySelector(".content-for-button.hidden")
    const buttonShow = event.target.parentNode.parentNode.querySelector(".content-for-button.show")
    buttonHidden.classList.toggle("hidden")
    buttonHidden.classList.toggle("show")
    buttonShow.classList.toggle("hidden")
    buttonShow.classList.toggle("show")
}