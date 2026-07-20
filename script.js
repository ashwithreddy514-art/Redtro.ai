document.documentElement.classList.add('js');
const primaryNav = document.querySelector('.nav > nav');
if (primaryNav) Object.assign(primaryNav.style, { position: 'absolute', left: '50%', transform: 'translateX(-50%)' });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('shown'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal, .service-card, .project, .detail-list article, .case').forEach((el) => observer.observe(el));
