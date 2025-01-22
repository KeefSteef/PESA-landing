new Glide(".glide", {
  type: "slider",
  animationDuration: 2000,
  perView: 1,
  gap: 0,
}).mount();

document.querySelector(".hero-button").addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".welcome-section").offsetTop,
    behavior: "smooth",
  }),
);
