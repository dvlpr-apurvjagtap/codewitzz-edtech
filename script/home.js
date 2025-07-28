var container = document.querySelector('.sub-div');
const data = [
    {
        img: "assets/icons/video-icon.png",
        titl: "HD Video Lessons",
        dec: "Crystal clear recorded lessons with expert instructors covering every concept in detail."
    },
    {
        img: "assets/icons/Quizz.png",
        titl: "Interactive Quizzes",
        dec: "Test your knowledge with smart quizzes that adapt to your learning pace."
    },
    {
        img: "assets/icons/Certi-icon.png",
        titl: "Cool Certificates",
        dec: "Earn industry-recognized certificates and showcase your achievements."
    },
    {
        img: "assets/icons/project-icon.png",
        titl: "Real Projects",
        dec: "Build actual projects that you can proudly add to your portfolio."
    },
    {
        img: "assets/icons/mentor-icon.png",
        titl: "Live Mentorship",
        dec: "Get personalized guidance from industry experts in weekly sessions."
    },
    {
        img: "assets/icons/job-place-icon.png",
        titl: "Job Placement",
        dec: "95% placement rate with top companies through our extensive network."
    },
    {
        img: "assets/icons/codez-coin-icon.png",
        titl: "CodeZ Coins",
        dec: "Earn coins as you learn and redeem them for discounts and exclusive content."
    },
    {
        img: "assets/icons/gami-lern-icon.png",
        titl: "Gamified Learning",
        dec: "Level up your skills with streaks, XP points, and achievement badges."
    }
];

let condata = "";

data.forEach(function (elem) {
    condata += `
     <div class="elm" id="elm">
         <img src="${elem.img}" alt="Video Thumbnail">
         <h3 align="center">${elem.titl}</h3>
         <p align="center">${elem.dec}</p>
     </div>
     `;
});

container.innerHTML = condata;
//cards data
var cardbox = document.querySelector('.path-card');
const carddata = [
    {
        img: "assets/images/Full-stack.png",
        titl: " Web Full Stack",
        dec: "Master React, Node.js & MongoDB",
        subp: "Build complete web applications from frontbackend with modern technologies.",
        rating: "4.9",
        stud: "15K students",
        weeks: "12 weeks",
        a: "React.js",
        b: "Node.js",
        c: "MongoDB",
        d: "Express.js",
        price: "9,999",
        price1: "14,999",
        offer: "33% OFF",
        color: "linear-gradient(to right, #06B6D4, #2563EB)"

    },
    {
        img: "assets/images/Fluter-dev.png",
        titl: " Data Science",
        dec: "Python, ML & AI Fundamentals",
        subp: "Master data analysis, machine learning, and AI to become a data scientist.",
        rating: "4.9",
        stud: "12K students",
        weeks: "16 weeks",
        a: "Python",
        b: "ML",
        c: "TensorFlow",
        d: "DSA",
        price: "11,999",
        price1: "16,999",
        offer: "29% OFF",
        color: "linear-gradient(to right, #F97316, #DC2626)"

    },
    {
        img: "assets/images/Data-s.png",
        titl: " Flutter Development",
        dec: "Build Cross-Platform Mobile Apps",
        subp: "Create stunning mobile apps for iOS and Android with a single codebase.",
        rating: "4.8",
        stud: "9K students",
        weeks: "10 weeks",
        a: "Flutetr",
        b: "Dart",
        c: "Firebase",
        d: "State MGT",
        price: "8,999",
        price1: "12,999",
        offer: "31% OFF",
        color: "linear-gradient(to right, #A855F7, #DB2777)"

    }


];

let cardsdata = "";

carddata.forEach(function (card) {
    cardsdata += `
      <div class="card">
                            <img src="${card.img}" alt="" id="card-img">
                            <div class="card-text">
                                <h3> ${card.titl}</h3>
                                <p>${card.dec}</p>
                                <p id="card-p-text">${card.subp}</p>
                                <div class="card-rate">
                                    <div class="element">
                                        <img src="assets/icons/Star-icon.png" alt="">
                                        <span id="sub-rate1">${card.rating} </span>

                                    </div>
                                    <div class="element">
                                        <img src="assets/icons/Stud1.png" alt="">
                                        <span id="sub-rate">${card.stud}</span>
                                    </div>
                                    <div class="element">
                                        <img src="assets/icons/time-icon.png" alt="">
                                        <span id="sub-rate">${card.weeks}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-btn">
                                <div class="c-btn">${card.a}</div>
                                <div class="c-btn">${card.b}</div>
                                <div class="c-btn">${card.c}</div>
                                <div class="c-btn">${card.d} </div>
                            </div>
                            <div class="price-div">
                                <div class="price">
                                    <h3>₹ ${card.price}</h3>

                                </div>
                                <div class="price1">
                                    <p>₹ ${card.price1}</p>
                                </div>
                                <button class="p-btn"> ${card.offer}</button>
                            </div>

                            <button class="start-btn"style="background: ${card.color}";>Start Learning Now
                                <img src="assets/icons/Component 1.png">
                            </button>

                        </div>
     `;
});

cardbox.innerHTML = cardsdata;




var achivementes = document.querySelector('.heading');
const Revive = [
    {
        img: "assets/images/Priya.png",
        name: "Priya Sharma",
        dec: "Full Stack Developer at TCS",
        ratingimg: "assets/icons/Rating-icon.png",
        rev: "Codewitzz transformed my career completely. The hands-on projects and  mentorship helped me land my dream job in just 6 months!",
        now_work: "Now at TCS"
    },
    {
        img: "assets/images/Priya.png",
        name: "Sneha Patel",
        dec: " Data Scientist at Infosys",
        ratingimg: "assets/icons/Rating-icon.png",
        rev: "The CodeZ coin system motivated me to complete courses faster. I earned enough coins to unlock advanced courses for free!",
        now_work: "Now at Infosys"
    },
    {
        img: "assets/images/Rahul Gupta.png",
        name: "Rahul Gupta",
        dec: "Full Stack Developer at TCS",
        ratingimg: "assets/icons/Rating-icon.png",
        rev: "The internship program is incredible. Real projects, amazing mentors, and the gamification made learning so engaging!",
        now_work: "Now at Flipkart"
    }
];

let achive = "";

Revive.forEach(function (studrev) {
    achive += `
    <div class="priya" id="st">

                        <div class="priya-div">
                            <img src="${studrev.img}" alt="">
                            <div class="priya-text">
                                <span id="p-name">${studrev.name}</span>
                                <p>${studrev.dec}</p>
                            </div>
                        </div>
                        <div class="priya-rating">
                            <img src="${studrev.ratingimg}" alt="" id="star1">
                            <img src="${studrev.ratingimg}" alt="" id="star1">
                            <img src="${studrev.ratingimg}" alt="" id="star1">
                            <img src="${studrev.ratingimg}" alt="" id="star1">
                            <img src="${studrev.ratingimg} " alt="" id="star1">
                        </div>
                        <p class="reviev">"${studrev.rev}"</p>
                        <h4 id="now-work">${studrev.now_work}</h4>
                    </div>

     `;
});

achivementes.innerHTML = achive;




var codez_coin = document.querySelector('.ern_code');
const codez = [
    {
        heading:"Complete a lesson",
        text:"+10"
    },
    {
        heading:"Pass quiz (80%+)",
        text:"+50"
    },
    {
        heading:"Submit a project",
        text:"+100"
    },
    {
        heading:"Daily login strek (7 Days )",
        text:"+50"
    },
    {
        heading:"Refer a friend",
        text:"+500"
    },
    {
        heading:"Course completion",
        text:"+1000"
    }

];

let coin = "";

codez.forEach(function (coins) {
    coin += `
    <div class="c-c">
                            <p>${coins.heading}</p>
                            <div class="c-sub">
                                <img src="assets/icons/point-icon.png" alt="">
                            ${coins.text}
                            </div>
                            </div>

     `;
});

codez_coin.innerHTML = coin;
