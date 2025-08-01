var feature=document.querySelector('.features-section');
var Week1=document.querySelector('#Week1');
var Week2=document.querySelector('#Week2');
var Week3=document.querySelector('#Week3');
var Week4=document.querySelector('#Week4');
var Week5=document.querySelector('#Week5');
var Week6=document.querySelector('#Week6');
var rmtitle=document.querySelector('.roadmap-title');
var lessonsgrid=document.querySelector('.lessons-grid');

var featurecard='';

const featurecarddata=[
    {img:'assets/icons/play-fill.png',title:'HD Video Lessons',disc:'50+ hours of content'},
    {img:'assets/icons/two-sided-angle.png',title:'Hands-on Projects',disc:'8 real-world projects'},
     {img:'assets/icons/award.png',title:'Certificate',disc:'Industry recognized'},
      {img:'assets/icons/codezicon.png',title:'CodeZ Coins',disc:'Earn 1000+ coins'}

];
featurecarddata.forEach(function(elem){
    featurecard+=`
     <div class="feature-card">
                <img src="${elem.img}"
                    alt="HD Video">
                <h3>${elem.title}</h3>
                <p>${elem.disc}</p>
            </div>
    `;

});
feature.innerHTML=featurecard;

// for mastriskills-section
  const newSkills= [
  "Build responsive websites with HTML, CSS, JavaScript",
  "Create RESTful APIs with Node.js and Express",
  "Implement authentication and security",
  "Follow industry best practices",
  "Master React.js with hooks and state management",
  "Work with MongoDB and database design",
  "Deploy applications to production",
  "Build a complete full-stack portfolio"
];

  function createMasteryItem(text) {
    const item = document.createElement('div');
    item.className = 'mastery-item';

    const img = document.createElement('img');
    img.src = "assets/icons/ticmark.png";
    img.alt = "check";

    const span = document.createElement('span');
    span.textContent = text;

    item.appendChild(img);
    item.appendChild(span);
    return item;
  }

  function addTwoBalancedColumns(skills) {
    const grid = document.querySelector('.mastery-grid');
    const mid = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, mid);
    const secondHalf = skills.slice(mid);
       
    [firstHalf, secondHalf].forEach(columnSkills => {
      const column = document.createElement('div');
      column.className = 'mastery-column';

      columnSkills.forEach(skill => {
        column.appendChild(createMasteryItem(skill));
      });

      grid.appendChild(column);
    });
  }
  addTwoBalancedColumns(newSkills);

// for weeks section
 const weeksdata = {

  Week1: {
    title: "Web Fundamentals",
    description: "Master the building blocks of web development",
    lessons: [
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "HTML5 & Semantic Markup",
        lesson: "Lesson 1",
        duration: "15 min",
        badge: { type: "free", icon: "ri-gift-fill", label: "free" },
        button: { text: "Watch free", icon: "ri-play-large-line", id: "free" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "CSS3 & Flexbox/Grid",
        lesson: "Lesson 2",
        duration: "20 min",
        badge: { type: "free", icon: "ri-gift-fill", label: "free" },
        button: { text: "Watch free", icon: "ri-play-large-line", id: "free" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "JavaScript ES6+",
        lesson: "Lesson 3",
        duration: "25 min",
        badge: { type: "free", icon: "ri-gift-fill", label: "free" },
        button: { text: "Watch free", icon: "ri-play-large-line", id: "free" }
      },
      {
        type: "project",
        icon: "ri-code-line",
        title: "DOM Manipulation",
        lesson: "Lesson 4",
        duration: "18 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      }
    ]
  },

  Week2: {
    title: "Advanced JavaScript",
    description: "Deep dive into modern JavaScript concepts",
    lessons: [
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "Async/Await & Promises",
        lesson: "Lesson 1",
        duration: "22 min",
        badge: { type: "free", icon: "ri-gift-fill", label: "free" },
        button: { text: "Watch free", icon: "ri-play-large-line", id: "free" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "ES6+ Features",
        lesson: "Lesson 2",
        duration: "20 min",
        badge: { type: "premium", icon: "ri-gift-fill", label: "premium" },
         button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "JavaScript Modules",
        lesson: "Lesson 3",
        duration: "16 min",
         badge: { type: "premium", icon: "ri-gift-fill", label: "premium" },
         button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "project",
        icon: "ri-code-line",
        title: "Project: Weather App",
        lesson: "Lesson 4",
        duration: "45 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      }
    ]
  },
  
  Week3: {
    title: "React Fundamentals",
    description: "Build dynamic user interfaces with React",
    lessons: [
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "Components & JSX",
        lesson: "Lesson 1",
        duration: "22 min",
        badge: { type: "free", icon: "ri-gift-fill", label: "free" },
        button: { text: "Watch free", icon: "ri-play-large-line", id: "free" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "Props & State",
        lesson: "Lesson 2",
        duration: "20 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
       },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "Event Handling",
        lesson: "Lesson 3",
        duration: "16 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "project",
        icon: "ri-code-line",
        title: "Project: Todo App",
        lesson: "Lesson 4",
        duration: "45 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      }
    ]
  },
  
  Week4: {
    title: "Advanced React",
    description: "Master hooks, context, and routing",
    lessons: [
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "Hooks (useState, useEffect)",
        lesson: "Lesson 1",
        duration: "30 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "Context API",
        lesson: "Lesson 2",
        duration: "25 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "JReact Router",
        lesson: "Lesson 3",
        duration: "20 min",
         badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "project",
        icon: "ri-code-line",
        title: "Project: E-commerce Frontend",
        lesson: "Lesson 4",
        duration: "60 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      }
    ]
  },
  
  Week5: {
    title: "Node.js Backend",
    description: "Build powerful server-side applications",
    lessons: [
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "Node.js Fundamentals",
        lesson: "Lesson 1",
        duration: "25 min",
        badge: { type: "free", icon: "ri-gift-fill", label: "free" },
        button: { text: "Watch free", icon: "ri-play-large-line", id: "free" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "Express.js Framework",
        lesson: "Lesson 2",
        duration: "30 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "REST API Design",
        lesson: "Lesson 3",
        duration: "35 min",
       badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "project",
        icon: "ri-code-line",
        title: "Authentication & JWT",
        lesson: "Lesson 4",
        duration: "40 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      }
    ]
  },
  
  Week6: {
    title: "Database & MongoDB",
    description: "Master database design and operations",
    lessons: [
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "MongoDB Fundamentals",
        lesson: "Lesson 1",
        duration: "28 min",
       badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "Mongoose ODM",
        lesson: "Lesson 2",
        duration: "32 min",
       badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "video",
        icon: "ri-play-large-line",
        title: "JDatabase Design Patterns",
        lesson: "Lesson 3",
        duration: "25 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      },
      {
        type: "project",
        icon: "ri-code-line",
        title: "Project: Blog Backend",
        lesson: "Lesson 4",
        duration: "50 min",
        badge: { type: "premium", icon: "ri-lock-2-line", label: "Premium" },
        button: { text: "Unlock", icon: "ri-vip-crown-line", id: "premium" }
      }
    ]
  },
};


function handleWeekClick(weekId) {
  document.querySelectorAll('.week-btn').forEach(btn => {
    btn.style.background = "";
  });
  document.getElementById(weekId).style.background = 'linear-gradient(to right, #17AECF, #D254A0)';

  lessonsgrid.innerHTML = "";
  const data = weeksdata[weekId];
  rmtitle.querySelector("h3").innerText = `${data.title} `;
  rmtitle.querySelector("p").innerText = `${data.description}`;

const weeklwsiondata=data.lessons;
  weeklwsiondata.forEach(lesson => {
    const card = document.createElement("div");
    card.className = "lesson-card";
    card.innerHTML = `
      <div class="lesson-info">
        <span class="lesson-type ${lesson.type}">
          <i class="${lesson.icon}"></i> ${lesson.type}
        </span>
        <h4>${lesson.title}</h4>
        <p>${lesson.lesson}</p>
      </div>
      <div class="lesson-meta">
        <span class="duration">
          ${lesson.duration}
          <span class="${lesson.badge.type}-badge">
            <i class="${lesson.badge.icon}"></i> ${lesson.badge.label}
          </span>
        </span>
        <button class="watch-btn" id="${lesson.button.id}" onclick="window.location.href='learning.html'">
          <i class="${lesson.button.icon}"></i> ${lesson.button.text}
        </button>
      </div>
    `;
    lessonsgrid.appendChild(card);
  });
}
document.querySelectorAll(".week-btn").forEach(btn => {
  btn.addEventListener("click",()=>handleWeekClick(btn.id));
});
handleWeekClick('Week1')


