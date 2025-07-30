const buttons = document.querySelectorAll(".phase-nav button");
const phaseContent = document.querySelector(".phase-content");

const phaseDetails = [
  {
    title: "Foundation Phase",
    desc: "Master the fundamentals and set up your development environment",
    topics: [
      "Programming Basics",
      "Git & GitHub",
      "Development Setup",
      "First Project",
    ],
  },
  {
    title: "Specialization Phase",
    desc: "Deep dive into your selected tech tracks",
    topics: ["Frontend/Backend Dev", "State Management", "Database", "APIs"],
  },
  {
    title: "Integration Phase",
    desc: "Build scalable mini-projects with real use cases",
    topics: ["Team Projects", "CI/CD", "Cloud Deployment", "Security"],
  },
  {
    title: "Capstone Project",
    desc: "Design and develop a fully functional real-world application",
    topics: ["Capstone Planning", "Development", "Testing", "Launch"],
  },
];

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const { title, desc, topics } = phaseDetails[index];
    phaseContent.innerHTML = `
      <div class="plane">🚀</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="topics">
        ${topics
        .map(
          (topic) => `
          <div class="topic-card">
            <div class="icon"><img src="assets/icons/Component 1 (12).png" alt="icon"></div>
            <div class="label">${topic}</div>
            <div class="progress"></div>
          </div>`
        )
        .join("")}
      </div>`;
  });
});

// Download Button Functionality
const downloadBtn = document.querySelector(".btn.download");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    // We need to change actual path of our curriculum PDF file
    window.open("OurPDFPath", "_blank");
  });
}

if (window.innerWidth <= 700) {
  document.querySelector(".tracks-grid").style.gridTemplateColumns = "1fr";
} else {
  document.querySelector(".tracks-grid").style.gridTemplateColumns =
    "repeat(2, 1fr)";
}

function adjustLayout() {
  const width = window.innerWidth;

  const tracksGrid = document.querySelector(".tracks-grid");
  if (tracksGrid) {
    tracksGrid.style.gridTemplateColumns =
      width <= 700 ? "1fr" : "repeat(2, 1fr)";
  }

  const phaseContent = document.querySelector(".phase-content");
  if (phaseContent) {
    phaseContent.style.padding = width <= 768 ? "1.5rem" : "3.5rem";
  }

  const transformCards = document.querySelector(".transform-cards");
  if (transformCards) {
    transformCards.style.flexDirection = width <= 768 ? "column" : "row";
    transformCards.style.width = width <= 768 ? "100%" : "40.7rem";
  }

  const transformNote = document.querySelector(".transform-note");
  if (transformNote) {
    transformNote.style.width = width <= 768 ? "100%" : "658px";
    transformNote.style.padding = width <= 768 ? "0 1rem" : "";
  }
}