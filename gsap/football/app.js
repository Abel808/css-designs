

gsap.set('p',{y:-100})

gsap.set('img',{y:"-600",rotationZ:-293})

gsap.set('.prog',{scaleX:0})



gsap.to('img', {
    duration:2.5,
    ease: "bounce.out",
    y: -10,
    rotationZ:0,
    onComplete: para,
    });


    function para(){
        gsap.to('p',{
            y:0
        })

        gsap.to('.prog',{
            scaleX:1
        })
    }