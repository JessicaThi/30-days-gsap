//Based on this Tutorial : https://www.youtube.com/watch?v=BZ8cH__0WFc
//from YouTube channel "Le Designer du Web - Enzo Ustariz"

const allRonds = document.querySelectorAll(".rond");
const allBoxes = document.querySelectorAll(".box");

const controller = new ScrollMagic.Controller();

allBoxes.forEach((box) => {
  for (i = 0; i < allBoxes.length; i++) {
    if (
      allRonds[i].getAttribute("data-anim") === box.getAttribute("data-anim")
    ) {
      let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 });

      let scene = new ScrollMagic.Scene({
        triggerElement: allRonds[i],
        reverse: false,
      })
        .setTween(tween)
        .addTo(controller);
    }
  }
});
