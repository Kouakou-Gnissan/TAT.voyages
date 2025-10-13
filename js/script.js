const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});

// Animations ScrollReveal pour les nouvelles sections
ScrollReveal().reveal('.section__header', {
  ...scrollRevealOption,
  origin: "top"
});

ScrollReveal().reveal('.destination__card', {
  ...scrollRevealOption,
  interval: 200,
  delay: 500
});

ScrollReveal().reveal('.service__card', {
  ...scrollRevealOption,
  interval: 150,
  delay: 600
});

ScrollReveal().reveal('.testimonial__card', {
  ...scrollRevealOption,
  interval: 200,
  delay: 700
});

ScrollReveal().reveal('.newsletter__content', {
  ...scrollRevealOption,
  delay: 800
});

// Animation pour les éléments au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Observer les éléments avec la classe scroll-reveal
document.addEventListener('DOMContentLoaded', () => {
  const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
  scrollRevealElements.forEach(el => observer.observe(el));
});