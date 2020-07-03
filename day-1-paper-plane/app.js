//Based on this Tutorial : https://www.youtube.com/watch?v=fR0tHI0nFYk&t=0s
//from YouTube channel Dev Ed

const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 100, y: -20 },
    { x: 300, y: 10 },
    { x: 500, y: 100 },
    { x: 750, y: -100 },
    { x: 550, y: -50 },
    { x: 450, y: 100 },
    { x: 600, y: 100 },
    { x: 700, y: 50 },
    { x: window.innerWidth, y: -250 },
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".paper-plane", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 2000,
  triggerHook: 0,
})
  .setTween(tween)
  .setPin(".animation")
  .addTo(controller);