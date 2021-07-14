// const elements = document.querySelectorAll(".details")
// for (let i = 0; i < elements.length; i++) {
//     elements[i].querySelector(".text-indigo-600.font-normal.cursor-pointer.details-block").addEventListener("click", (event) => {
//         console.log("открываем")
//         event.target.innerHTML = `X-close`
//         var blockDetails = event.target.parentNode.parentNode.querySelector(".grid.grid-cols-1.w-full")
//         if (blockDetails) {
//             blockDetails.classList.remove("hidden")
//             var close = event.target
//             close.addEventListener("click", (event) => {
//                 console.log("закрываем")
//                     event.target.innerHTML = `details`
//                     var blockDetails2 = event.target.parentNode.parentNode.querySelector(".grid.grid-cols-1.w-full")
//                     if (blockDetails2) {
//                         blockDetails2.classList.add("hidden")
//                     }
//                 })
//         }
//     })
// }
document.addEventListener("DOMContentLoaded",open)
function open() {
    const elements = document.querySelectorAll(".details")
    for (let i = 0; i < elements.length; i++) {
        elements[i].querySelector(".text-indigo-600.font-normal.cursor-pointer").addEventListener("click", (event) => {

            event.target.innerHTML = `X-close`
            var blockDetails = event.target.parentNode.parentNode.querySelector(".hidden.grid.grid-cols-1.w-full")
            if (blockDetails) {
                console.log("OPEn BLOCK")
                blockDetails.classList.remove("hidden")
                close()
            }
        })
    }
}
function close() {
    const closeEl = document.querySelectorAll(".details")
    for (let z = 0; z < closeEl.length; z++) {
        closeEl[z].querySelector(".text-indigo-600.font-normal.cursor-pointer").addEventListener("click", (event) => {

            event.target.innerHTML = `details`
            var blockDetails2 = event.target.parentNode.parentNode.querySelector(".grid.grid-cols-1.w-full")
            if (blockDetails2) {
                console.log("CLOSE BLOCK")
                blockDetails2.classList.add("hidden")
                open()
            }
        })
    }
}
