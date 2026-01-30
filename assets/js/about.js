

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");

  // Simple reveal effect on page load
  aboutSection.style.opacity = "0";
  aboutSection.style.transform = "translateY(30px)";

  setTimeout(() => {
    aboutSection.style.transition = "all 0.8s ease";
    aboutSection.style.opacity = "1";
    aboutSection.style.transform = "translateY(0)";
  }, 200);
});
