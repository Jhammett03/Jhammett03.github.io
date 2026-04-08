/* ── Scroll animations ── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

/* ── Mobile menu toggle ── */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/* ── Active nav link for current page ── */
const currentFile = window.location.pathname.split('/').pop() || 'main.html';
document.querySelectorAll('.navbar__links, .navbar__btn .button').forEach(link => {
    const linkFile = (link.getAttribute('href') || '').split('/').pop();
    if (linkFile === currentFile) {
        link.classList.add('nav__active');
    }
});

/* ── Typewriter effect ── */
const roles = [
    'AI/ML Engineer',
    'Full-Stack Developer',
    'Systems Programmer',
    'RL Researcher'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.querySelector('.typewriter__text');

function type() {
    if (!typewriterEl) return;
    const current = roles[roleIndex];

    typewriterEl.textContent = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);

    charIndex += isDeleting ? -1 : 1;

    let delay = isDeleting ? 55 : 95;

    if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 350;
    }

    setTimeout(type, delay);
}

setTimeout(type, 900);
