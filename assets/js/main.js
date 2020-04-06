$(document).ready(function() {

    var t1 = gsap.timeline({ paused: true });

    t1.to(".one", {
        y:6, 
        duration: 1,
        rotation: 45,
        ease: back.inOut(1.7)
    });

    t1.to(".two", {
        y: -6,
        duration: 1,
        rotation: -45,
        ease: back.inOut(1.7),
        delay: -0.8
    });

    t1.to("#nav-overlay", {
        top: "0%",
        duration: 1,
        ease: expo.inOut(1.7),
        delay: -2
    });

    t1.from("#nav-overlay ul li", {x: -200, duration: 1, opacity: 0, ease: back.inOut(1.7), stagger: .5});

    t1.reverse();
    $(document).on("click", ".toggle-btn", function() {
        t1.reversed(!t1.reversed());
    });
    $(document).on("click", "a", function() {
        t1.reversed(!t1.reversed());
    });
});