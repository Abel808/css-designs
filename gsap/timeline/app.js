


let tl = gsap.timeline({ ease:"steps(12)"})


tl 
    .to(['#a','#b','#c'],{
        scaleY:1,
        stagger:0.2,
        duration:1.5
    })
    .to('h1',{ scaleX:1,duration:2,ease:'elastic.out',transformOrigin:'left'})
    .to('#a',{scaleY:0 })
    .to('#c',{scaleY:0, transformOrigin:'bottom'},'-=0.5')
    .to('#b',{height:'100vh'})
    .to('h1',{fontSize:'2.4rem'},'-=0.5')
   


