var rule = CSSRulePlugin.getRule(".social ion-icon"); //get the rule
var t1 = gsap.timeline({ paused: true });


t1.to(".one", {
    y:6, 
    backgroundColor: "#ffffff",
    duration: .8,
    rotation: 45,
    ease: "expo.inOut()"
});

t1.to(".two", {
    backgroundColor: "#ffffff",
    y: -6,
    duration: .8,
    rotation: -45,
    ease: "expo.inOut()",
    delay: -0.8
});

t1.to(".jackie", {
    color: "#ffffff",
    ease: "expo.inOut()",
    delay: -.5
});

t1.to(".social ion-icon", {
    color: "#ffffff",
    ease: "expo.inOut()",
    delay: -.5
});

t1.to(".contact a", {
    color: "#ffffff",
    ease: "expo.inOut()",
    delay: -.5
});

t1.to("#nav-overlay", {
    top: "0%",
    right: "0%",
    duration: .8,
    ease: "expo.inOut()",
    delay: -.8
});

t1.from("#nav-overlay ul li", {x: -200, duration: .8, opacity: 0, ease: "back.inOut(1.7)", stagger: .1, delay: -0.5});

t1.reverse();
$(document).on("click", ".toggle", function() {
    t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function() {
    t1.reversed(!t1.reversed());
});