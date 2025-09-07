// Page load animation
window.addEventListener("load", function() {
    document.querySelector(".hey").classList.add("popup");
});

// Mobile menu functionality
let mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Navigation active state
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThistab");
        }
    });
});

// Console message
console.log("%c Designed and Developed by Shreeyash Patil ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");

// Back to top button
let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    scrollFunction();
};

// Disable right click on images
document.addEventListener("contextmenu", function(e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

// Footer avatar eye movement
let Pupils = document.getElementsByClassName("footer-pupil");
let pupilsArr = Array.from(Pupils);
let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = e => {
    fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;
    let x = pupilStartPoint + fracXValue * pupilRangeX;
    let y = pupilStartPoint + fracYValue * pupilRangeY;
    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
};

const windowResize = e => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// Certification Modal Functions
function openCertificationModal(imageName, title) {
    const modal = document.getElementById("certificationModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    
    modalImage.src = `src/webp/${imageName}`;
    modalTitle.textContent = title;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeCertificationModal() {
    const modal = document.getElementById("certificationModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("certificationModal");
    if (event.target === modal) {
        closeCertificationModal();
    }
}

// Close modal with Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeCertificationModal();
    }
});