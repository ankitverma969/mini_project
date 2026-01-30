document.addEventListener("DOMContentLoaded", () => {


  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".hero-image img");

  if (heroText && heroImage) {
    heroText.style.opacity = "0";
    heroImage.style.opacity = "0";

    setTimeout(() => {
      heroText.style.transition = "opacity 1s ease";
      heroImage.style.transition = "opacity 1s ease";

      heroText.style.opacity = "1";
      heroImage.style.opacity = "1";
    }, 300);
  }

  const skillsData = {
    ai: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "NLP"],

    frontend: [
      "HTML", "CSS", "Tailwind CSS", "JavaScript",
      "React.js", "React Router", "Redux", "Context API"
    ],

    backend: ["Node.js", "Express.js", "Mongoose"],

    api: ["RESTful APIs", "Fetch API", "Postman", "OAuth2"],

    database: ["MySQL", "MongoDB", "Firebase"],

    languages: ["C", "C++", "Python", "JavaScript", "Java"],

    tools: ["Git", "GitHub", "VS Code", "Linux", "Windows"],

    core: [
      "Data Structures & Algorithms",
      "Algorithm Optimization",
      "JWT Authentication"
    ]
  };

  const track = document.getElementById("skills-track");
  const tabs = document.querySelectorAll(".tab");


  function renderSkills(type) {
    if (!track) return;

    track.innerHTML = "";


    const skills = [...skillsData[type], ...skillsData[type]];

    skills.forEach(skill => {
      const div = document.createElement("div");
      div.className = "skill-item";
      div.textContent = skill;
      track.appendChild(div);
    });

    // Restart animation
    track.style.animation = "none";
    track.offsetHeight; // trigger reflow
    track.style.animation = "scrollSkills 15s linear infinite";
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const skillType = tab.getAttribute("data-skill");
      renderSkills(skillType);
    });
  });

  renderSkills("ai");

});
