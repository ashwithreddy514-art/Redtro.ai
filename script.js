document.documentElement.classList.add('js');
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('shown'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal, .service-card, .project, .detail-list article, .case').forEach((el) => observer.observe(el));
