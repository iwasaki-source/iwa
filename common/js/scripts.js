const hero = document.querySelector(".hero__wrapper");

const tl = gsap.timeline();


tl.fromTo(
  hero,
  { scaleY: 0, scaleX: 0.7, translateY: "-15%", transformOrigin: "bottom",},
  { scaleY: 0.8, duration: 1.5, ease: Sine.easeIn}
  ).fromTo(
  hero,
  { },
  { scaleY: 1, scaleX: 1, duration: 0.3, translateY: "0%", ease: Power0.easeIn},"-=0.2"
  );
