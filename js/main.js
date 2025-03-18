const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

document.querySelectorAll(".nav__links a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        window.location.href = target;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".scroll-reveal").forEach(element => {
        element.classList.remove("hidden");
    });
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 800,
};

const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

ScrollReveal().reveal(".header__content h1, .header__content h3", {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
});


ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 800,
});

ScrollReveal().reveal(".header__content .contact-btn", {
    ...scrollRevealOption,
    delay: 1100,
});

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});
ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2500,
});

const fleet1 = document.querySelector(".fleet__wrapper-1 .fleet__images");
const fleet2 = document.querySelector(".fleet__wrapper-2 .fleet__images");

const fleet1Content = Array.from(fleet1.children);
const fleet2Content = Array.from(fleet2.children);

fleet1Content.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    fleet1.appendChild(duplicateNode);
});

fleet2Content.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    fleet2.appendChild(duplicateNode);
});

const banner = document.querySelector(".banner__clients");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".banner__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".banner__btn", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal('.scroll-reveal', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 200,
});
