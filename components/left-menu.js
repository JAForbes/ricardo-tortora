let flag = true
document.querySelector(".new-inner-block").querySelector(".new-list").addEventListener("click", () => {
    if(flag) {
        document.querySelector(".new-inner-menu").classList.add("new-active-block")
        document.querySelector(".new-after").src = `../images/arrow-bottom-menu.png`
        flag = false
    } else{
        document.querySelector(".new-inner-menu").classList.remove("new-active-block")
        document.querySelector(".new-after").src = `../images/arrow-right-menu.png`
        flag = true
    }
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
