const collapseExpandBtn = document.querySelector("#btn-collapse-expand")
const header = document.querySelector("header .links")
collapseExpandBtn.addEventListener("click", () => {
    header.classList.toggle("hide")
})
// document.addEventListener("DOMContentLoaded", () => {
//     const circle= document.querySelector(".back-to-top .circle")
//     window.addEventListener("scroll", () => {
//         const height = window.innerHeight
//         const fullHeight = document.body.clientHeight
//         const scrolled= window.scrollY
//         const progress = (scrolled / (fullHeight - height)) * 100

//         circle.style.transform = `rotate(${(progress * 3.6) - 90}deg)`
//     })
// })
