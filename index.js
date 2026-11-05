// =====================================
// FAVOUR OKEZUE PORTFOLIO
// JAVASCRIPT FUNCTIONALITIES
// =====================================


// 1. DARK AND LIGHT MODE

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.replace("fa-moon", "fa-sun");

    } else {

        icon.classList.replace("fa-sun", "fa-moon");

    }

});


// 2. MOBILE HAMBURGER MENU

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.replace("fa-bars", "fa-times");

    } else {

        icon.classList.replace("fa-times", "fa-bars");

    }

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.replace("fa-times", "fa-bars");

    });

});


// 3. SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll("section").forEach(function (section) {

    section.classList.add("hidden");

    observer.observe(section);

});


// 4. DYNAMIC TYPING EFFECT

const roles = [

    "Software Developer",

    "AI Enthusiast",

    "Creative Technologist",

    "Computer Scientist",

    "Future AI/ML Engineer"

];

let roleIndex = 0;

let characterIndex = 0;

let deleting = false;

const roleElement = document.getElementById("typing-text");


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent = currentRole.substring(
            0,
            characterIndex + 1
        );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        roleElement.textContent = currentRole.substring(
            0,
            characterIndex - 1
        );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex = (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}


typeEffect();


// CONTACT FORM

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("contact-subject").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        const status = document.getElementById("form-status");

        if (!name || !email || !subject || !message) {
            status.textContent = "Please complete all the fields.";
            return;
        }

        const yourEmail = "YOUR_EMAIL@example.com";

        const emailSubject = encodeURIComponent(subject);
        const emailBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        const mailtoLink =
            `mailto:${yourEmail}?subject=${emailSubject}&body=${emailBody}`;

        status.textContent =
            "Opening your email application to send the message...";

        window.location.href = mailtoLink;
    });
}


// =============================
// BACK TO TOP BUTTON
// =============================

const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }

    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}


// =============================
// AUTOMATIC COPYRIGHT YEAR
// =============================

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}