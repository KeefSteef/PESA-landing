new Glide(".glide", {
  type: "carousel",
  autoplay: 6000,
  gap: 0,
  animationDuration: 1500,
}).mount();

document.querySelector(".hero-button").addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".welcome-section").offsetTop,
    behavior: "smooth",
  }),
);
