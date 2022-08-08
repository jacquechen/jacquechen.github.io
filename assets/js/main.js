var rule = CSSRulePlugin.getRule(".social ion-icon"); //get the rule
var t1 = gsap.timeline({ paused: true });


t1.to(".one", {
    y:6, 
    backgroundColor: "#ffffff",
    duration: .8,
    rotation: 45,
    ease: "expo.inOut()",
    delay:-.8
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
    delay: -.8,
    opacity: 1
});

t1.from("#nav-overlay ul li", {x: -200, duration: .8, opacity: 0, ease: "back.inOut(1.7)", stagger: .1, delay: -0.5});

t1.reverse();
$(document).on("click", ".toggle", function() {
    t1.reversed(!t1.reversed());
});
$(document).on("click", "a.linkoverlay", function() {
    t1.reversed(!t1.reversed());
});

const scrollTween = gsap.to(".bar", {yPercent: 400, ease: "none", paused: true});

function updateScrollBar() {
  scrollTween.progress(scrollY / (document.body.scrollHeight - innerHeight));
}
window.addEventListener("resize", updateScrollBar);
window.addEventListener("scroll", updateScrollBar);

//Scroll Loop
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: 0,
  end: "max",
  onLeave: self => {
    self.scroll(1);
    ScrollTrigger.update();
  },
  onLeaveBack: self => {
    self.scroll(ScrollTrigger.maxScroll(window)-1);
    ScrollTrigger.update();
  }
});

// Parallax !!!!!! disabled due to issues with scroll and animation !!!!!!
/*
const observerElements = document.querySelectorAll('.trigger-element');

const observerOptions = {
  root: null,
  rootMargin: '0px 0px',
  threshold: 0
};

observerElements.forEach(el => {
  
  const box = el.querySelector('.box');
  el.tl = gsap.timeline({paused: true});
  
  el.tl
    .to(box, {y: -280, ease: 'power2.inOut'})
  
  el.observer = new IntersectionObserver(entry => {
    if (entry[0].intersectionRatio > 0) {
      gsap.ticker.add(el.progressTween)
    } else {    
      gsap.ticker.remove(el.progressTween)
    }
  }, observerOptions);
  
  el.progressTween = () => {
    // Get scroll distance to bottom of viewport.
    const scrollPosition = (window.scrollY + window.innerHeight);
    // Get element's position relative to bottom of viewport.
    const elPosition = (scrollPosition - el.offsetTop);
    // Set desired duration.
    const durationDistance = (window.innerHeight + el.offsetHeight);
    // Calculate tween progresss.
    const currentProgress = (elPosition / durationDistance);
    // Set progress of gsap timeline.     
    el.tl.progress(currentProgress);
  }

  el.observer.observe(el);
});

$(window).on('load', function() {

    $(this).impulse();
});
*/
//tabs

(function($, document) {
    
      // get tallest tab__content element
      let height = -1;

		$('.tab__content').each(function() {
			height = height > $(this).outerHeight() ? height : $(this).outerHeight();
         $(this).css('position', 'absolute');
		});
      
      // set height of tabs + top offset
		$('[data-tabs]').css('min-height', height + 40 + 'px');
   
}(jQuery, document));

// Create a lightbox
(function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Add image and caption to lightbox

  $lightbox
    .append($img)
    .append($caption);

  // Add lighbox to document

  $('body').append($lightbox);

  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Get image link and description
    var src = $(this).attr("data-image-hd");
    var cap = $(this).attr("alt");

    // Add data to lighbox

    $img.attr('src', src);
    $caption.text(cap);

    // Show lightbox

    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

}());



