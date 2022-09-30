gsap.registerPlugin(ScrollTrigger);

// for first image
gsap.to(".animations-container.one", {
  x: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".animations-container.one",
    start: "top 60%",
    end: () =>
      `+=${document.querySelector(".animations-container.one").offsetHeight}`,
    // markers: true,
    toggleActions: "restart reverse restart reverse",
  },
});

//` for second image
gsap.to(".animations-container.two", {
  x: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".animations-container.two",
    start: "top 60%",
    end: () =>
      `+=${document.querySelector(".animations-container.two").offsetHeight}`,
    // markers: true,
    toggleActions: "restart reverse restart reverse",
  },
});

//` for third image
gsap.to(".animations-container.third", {
  y: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".third-outer",
    start: "top 60%",
    end: () =>
      `+=${
        document.querySelector(".animations-container.third").offsetHeight + 50
      }`,
    // markers: true,
    toggleActions: "restart reverse restart reverse",
  },
});

//` for fourth image
gsap.to(".animations-container.fourth", {
  y: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".fourth-outer",
    start: "top 60%",
    end: () =>
      `+=${
        document.querySelector(".animations-container.fourth").offsetHeight + 50
      }`,
    //markers: true,
    toggleActions: "restart reverse restart reverse",
  },
});
