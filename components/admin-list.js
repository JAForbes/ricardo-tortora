// const els = document.querySelectorAll(".block-close")
// const blocks = document.querySelectorAll(".hidden.grid.grid-cols-1.w-full")
// for (let i = 0; i < els.length; i++){
//     els[i].addEventListener("click",(event) =>{
//         for(let z = 0; z < blocks.length; z++){
//             blocks[z].classList.add("hidden")
//         }
//         els[i].querySelector(".hidden.grid.grid-cols-1.w-full").classList.remove("hidden")
//     })
// }

///
//
const els = document.querySelectorAll(".block-close")
const blocks = document.querySelectorAll(".hidden.grid.grid-cols-1.w-full")
// let listFlag = true
for (let i = 0; i < els.length; i++){
    let listFlag = true
    els[i].addEventListener("click",(event) =>{
        if(listFlag) {
            for (let z = 0; z < blocks.length; z++) {
                blocks[z].classList.add("hidden")
            }
            els[i].querySelector(".hidden.grid.grid-cols-1.w-full").classList.remove("hidden")
            listFlag = false
        } else {
            for (let z = 0; z < blocks.length; z++) {
                blocks[z].classList.add("hidden")
            }
            //els[i].querySelector(".hidden.grid.grid-cols-1.w-full").classList.remove("hidden")
            listFlag = true
        }
    })
}


//
// const els = document.querySelectorAll(".block-close")
// const blocks = document.querySelectorAll(".hidden.grid.grid-cols-1.w-full")
// let listFlag = true
// for (let i = 0; i < els.length; i++){
//     //let listFlag = true
//     els[i].addEventListener("click",(event) =>{
//         if(listFlag) {
//             for (let z = 0; z < blocks.length; z++) {
//                 blocks[z].classList.add("hidden")
//             }
//             els[i].querySelector(".hidden.grid.grid-cols-1.w-full").classList.remove("hidden")
//             listFlag = false
//         } else {
//             for (let z = 0; z < blocks.length; z++) {
//                 blocks[z].classList.add("hidden")
//             }
//             //els[i].querySelector(".hidden.grid.grid-cols-1.w-full").classList.remove("hidden")
//             listFlag = true
//         }
//         searchTrue = document.querySelectorAll(".hidden.grid.grid-cols-1.w-full")
//         console.log(" all blocks = "+ blocks.length + " | now = "+ searchTrue.length)
//
//         //  if(blocks.length === searchTrue.length){
//         //      els[i].querySelector(".hidden.grid.grid-cols-1.w-full").classList.remove("hidden")
//         // listFlag = false
//         // }
//     })
// }