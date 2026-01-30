
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".hero-image img");

  // Simple fade-in animation using JS class toggle
  heroText.style.opacity = "0";
  heroImage.style.opacity = "0";

  setTimeout(() => {
    heroText.style.transition = "opacity 1s ease";
    heroImage.style.transition = "opacity 1s ease";

    heroText.style.opacity = "1";
    heroImage.style.opacity = "1";
  }, 300);
});
