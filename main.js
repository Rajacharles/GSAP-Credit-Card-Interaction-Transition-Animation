
let t1 = gsap.timeline({ paused: true, reversed: true });
let watch = false;
const card = document.querySelector(".container");

card.addEventListener("click", (e) => {
  if (!watch) {
    t1.play();
    watch = true;
  } else {
    t1.reverse();
    watch = false;
  }
});

t1.to(
  ".container",
  {
    ease: "power1.inOut",
    height: 280,
  },
  0
);

t1.to(
  ".sim",
  {
    ease: "power1.inOut",
    bottom: 40,
    opacity: 0.5,
  },
  0.5
);

t1.to(
  ".card-logo",
  {
    ease: "power1.inOut",
    right: -150,
  },
  0.6
);

t1.to(
  ".logo",
  {
    ease: "power1.inOut",
    left: 30,
    top:45,
  },
  0.5
);

t1.to(
  ".card-balance",
  {
    ease: "power1.inOut",
    y:80,
    x: 20,
    scale: 1.1,
  },
  0.5
);

t1.to(
  ".card-name",
  {
    ease: "power1.inOut",
    y:80,
  },
  0.5
);

t1.to(
  ".card-number",
  {
    ease: "power1.inOut",
    right: 40,
    opacity: 0.5
  },
  0.5
);

t1.to(
  ".due-date",
  {
    ease: "power1.inOut",
    right: 40,
    opacity: 0.5
  },
  0.5
);