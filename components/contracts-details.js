const els = document.querySelectorAll(".block-close")
const blocks = document.querySelectorAll(".hidden.grid.grid-cols-1.w-full")
for (let i = 0; i < els.length; i++){
    els[i].addEventListener("click",(event) =>{
        for(let z = 0; z < blocks.length; z++){
            blocks[z].classList.add("hidden")
        }
        event.target.parentNode.parentNode.querySelector(".hidden.grid.grid-cols-1.w-full").classList.remove("hidden")
    })
}


// var elements = document.querySelectorAll(".details")
// open(elements)
//
// function open(elements) {
//     if (typeof elements !== 'undefined') {
//         for (let i = 0; i < elements.length; i++) {
//             elements[i].querySelector(".text-indigo-600.font-normal.cursor-pointer.block-close").addEventListener("click", (event) => {
//                 event.target.parentNode.parentNode.classList.add("open-details-block")
//                 event.target.classList.remove("block-close")
//                 event.target.classList.add("block-open")
//                 event.target.innerHTML = `X-close`
//                 const blockDetails = event.target.parentNode.parentNode.querySelector(".hidden.grid.grid-cols-1.w-full")
//                 if (blockDetails) {
//                     blockDetails.classList.remove("hidden")
//                     //console.log("OPEN BLOCK")
//                     closeEl = document.querySelectorAll(".open-details-block")
//                     close(closeEl)
//
//                 }
//             })
//         }
//     }
// }
//
// function close(closeEl) {
//     if (typeof closeEl !== 'undefined') {
//         for (let z = 0; z < closeEl.length; z++) {
//             closeEl[z].querySelector(".text-indigo-600.font-normal.cursor-pointer.block-open").addEventListener("click", (event) => {
//                 event.target.parentNode.parentNode.classList.remove("open-details-block")
//                 event.target.classList.remove("block-open")
//                 event.target.classList.add("block-close")
//                 event.target.innerHTML = `details`
//                 const blockDetails2 = event.target.parentNode.parentNode.querySelector(".grid.grid-cols-1.w-full")
//                 if (typeof blockDetails2 !== 'undefined') {
//                     blockDetails2.classList.add("hidden")
//                     //console.log("CLOSE BLOCK" )
//                     elements = document.querySelectorAll(".details")
//                     open(elements)
//
//                 }
//             })
//         }
//     }
// }
