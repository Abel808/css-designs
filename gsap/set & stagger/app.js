// let imge = document.querySelector('img');
// let txt = document.querySelector('p')
// let mask = document.querySelector('.mask')

gsap.set("img",{
       y:-1000
})


gsap.set('p',{
    opacity:0,
})
 

gsap.to("img",{
  y:0,
  scale:1.6,
  duration:2.2,
  stagger:0.2,
  ease:"power4.out",
  onComplete: scalen
 
})


function scalen(){

    gsap.to('p',{
        opacity:1,
        color:"white",
        duration:1.2,
        
    })
    
    gsap.to("img",{
       
       scale:1,
       duration:1
        
      //   oncomplete:
      })
      
}

