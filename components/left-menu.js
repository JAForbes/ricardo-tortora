document.querySelector(".new-inner-block").addEventListener("mouseover", () => {
    document.querySelector(".new-inner-menu").classList.add("new-active-block")
    document.querySelector(".new-after").src = `../images/arrow-bottom-menu.png`
})
document.querySelector(".new-inner-block").addEventListener("mouseout", () => {
    document.querySelector(".new-inner-menu").classList.remove("new-active-block")
    document.querySelector(".new-after").src = `../images/arrow-right-menu.png`
})

const listLinks = document.querySelectorAll(".new-leftMenu-color>li>a")
for (let i = 0; i < listLinks.length; i++) {
    listLinks[i].addEventListener("click", (event) => {
        for (let z = 0; z < listLinks.length; z++) {
            listLinks[z].parentNode.classList.remove("new-active")
        }
        event.target.parentNode.classList.add("new-active")
    })
}
