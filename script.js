// Typed text effect
const phrases = [
  "Estudiante de Sistemas",
  "Desarrollador Web",
  "Apasionado por la tecnología",
  "Buscando mis primeras prácticas"
];
let pIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById("typed-text");

function type() {
  const word = phrases[pIdx];
  el.textContent = deleting ? word.substring(0, cIdx--) : word.substring(0, cIdx++);
  let delay = deleting ? 60 : 100;
  if (!deleting && cIdx === word.length + 1) { delay = 1800; deleting = true; }
  else if (deleting && cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; delay = 400; }
  setTimeout(type, delay);
}
setTimeout(type, 500);

// Navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open"))
);

// Skill bars on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll(".skill-fill").forEach(bar => {
        bar.style.width = bar.dataset.width + "%";
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll(".skills-grid").forEach(el => observer.observe(el));

// Fade-in sections
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll(".skill-card, .project-card, .contact-item, .about-grid").forEach(el => {
  el.classList.add("fade-in");
  fadeObserver.observe(el);
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  btn.textContent = "¡Mensaje enviado!";
  btn.style.background = "#3fb950";
  setTimeout(() => { btn.textContent = "Enviar mensaje"; btn.style.background = ""; e.target.reset(); }, 3000);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
