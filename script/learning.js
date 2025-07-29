const buttons = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

buttons.forEach(btn => btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
}));

  const data = [
    {
      title: "Web Fundamentals",
      lessons: [
        { name: "HTML5 & Semantic Markup", icon: "tik", time: "15 min" },
        { name: "CSS3 & Flexbox/Grid", icon: "tik", time: "15 min" },
        { name: "JavaScript ES6+", icon: "play", time: "15 min" },
        { name: "DOM Manipulation", icon: "circle", time: "15 min" }
      ]
    },
    {
      title: "React Basics",
      lessons: [
        { name: "Components & JSX", icon: "circle", time: "20 min" },
        { name: "Props & State", icon: "circle", time: "25 min" },
        { name: "Event Handling", icon: "circle", time: "30 min" },
        { name: "Project: Todo App", icon: "circle", time: "30 min" }
      ]
    },
    {
      title: "Advanced JavaScript",
      lessons: [
        { name: "Async/Await & Promises", icon: "circle", time: "20 min" },
        { name: "ES6+ Features", icon: "circle", time: "25 min" },
        { name: "JavaScript Modules", icon: "circle", time: "30 min" },
        { name: "Project: Weather App", icon: "circle", time: "30 min" }
      ]
    }

  ];

  const dropdown = document.getElementById("dropdown");

  dropdown.innerHTML = data.map((section) => {
    const lessonsHTML = section.lessons.map(lesson => `
      <div class="course">
        <div class="log"><img src="/assets/icons/${lesson.icon}.png" alt=""></div>
        <div class="nam">
          <div class="txt"><p>${lesson.name}</p></div>
          <div class="time"><p><img src="/assets/icons/time.png" alt=""> ${lesson.time}</p></div>
        </div>
      </div>
    `).join('');

    return `
      <div class="drop">
        <button class="btn" onclick="toggleDropdown(this)">
          <span>${section.title}</span>
          <img src="assets/icons/rightarrow.png" alt="arrow">
        </button>
        <div class="lessons">${lessonsHTML}</div>
      </div>
    `;
  }).join('');

  function toggleDropdown(button) {
    const lessonsDiv = button.nextElementSibling;
    button.classList.toggle("active");
    lessonsDiv.style.display = lessonsDiv.style.display === "block" ? "none" : "block";
  }


const keyConcepts = [
    {
      color: "#22D3EE",
      title: "Arrow Functions",
      description: "Concise function syntax with lexical this binding"
    },
    {
      color: "#F472B6",
      title: "Destructuring",
      description: "Extract values from arrays and objects"
    },
    {
      color: "#FACC15",
      title: "Template Literals",
      description: "Enhanced string formatting with embedded expressions"
    },
    {
      color: "#4ADE80",
      title: "Modules",
      description: "Import/export functionality for code organization"
    }
  ];

  const container = document.getElementById("key-container");

  container.innerHTML = `
    <div id="key" class="lbox">
      <h4><span></span><span>Key Concepts</span></h4>
      <div id="key-box">
        ${keyConcepts.map(concept => `
          <div class="concept">
            <span style="color: ${concept.color};">•</span>
            <span><strong>${concept.title}:</strong> ${concept.description}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;  


const resources = [
    "JavaScript ES6 Cheat Sheet (PDF)",
    "Practice Exercises",
    "MDN Documentation Links"
  ];

  document.getElementById("key-box-container").innerHTML = `
    <div id="key-box">
      ${resources.map(item => `
        <div class="concept">
          <span><img src="/assets/icons/bluepage.png" alt=""></span>
          <span>${item}</span>
          <span><img src="/assets/icons/download.png" alt=""></span>
        </div>
      `).join('')}
    </div>
     `;

document.getElementById("code-container").innerHTML = `
    <textarea name="t" id="textbox">
// Arrow Function
const add = (a, b) => a + b;

// Destructuring
const {name, age} = person;

// Template Literal
const message = \`Hello, \${name}!\`;
    </textarea>
  `;  