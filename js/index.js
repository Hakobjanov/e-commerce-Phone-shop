//AOS animation init
AOS.init();

//navigation
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});

//glide js
const slider1 = document.querySelector("#glide_1");
const slider2 = document.querySelector("#glide_2");

if (slider1) {
  new Glide(slider1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();
}

if (slider2) {
  new Glide(slider2, {
    type: "carousel",
    startAt: 0,
    hoverpause: true,

    perView: 4,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}
