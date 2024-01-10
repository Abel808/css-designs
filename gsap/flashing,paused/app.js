


let box =document.querySelector(".container")
let txt = document.querySelector("p")

let boxAnime = gsap.to(box,{

    height: "28vw",
    width: "24vw",
    borderRadius:"2%",
    paused:true,
})


let textAnime = gsap.to(txt,{
   
    x:"0%",
    fontSize:"4rem",
    paused:true,
})


box.addEventListener('mouseover',()=>{
    boxAnime.play()
    textAnime.play()
   
})

box.addEventListener('mouseleave',()=>{
    boxAnime.reverse()
    textAnime.reverse()
   
})