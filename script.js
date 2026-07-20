document.documentElement.classList.add('js');
const primaryNav = document.querySelector('.nav > nav');
if (primaryNav) Object.assign(primaryNav.style, { position: 'absolute', left: '50%', transform: 'translateX(-50%)' });
document.querySelectorAll('.brand').forEach((brand) => {
  brand.innerHTML = '<span class="logo-mark">R</span><span class="logo-word">Redtro</span><span class="logo-ai">.ai</span>';
});
const logoStyling = document.createElement('style');
logoStyling.textContent = `
  .brand{display:inline-flex!important;align-items:center;gap:7px;letter-spacing:-.045em!important}
  .logo-mark{display:grid!important;place-items:center;width:25px;height:25px;border-radius:8px;background:linear-gradient(145deg,#d3fbff,#67cffa 45%,#1769dc);border:1px solid rgba(231,255,255,.7);box-shadow:0 0 20px rgba(96,224,255,.38),inset 0 1px rgba(255,255,255,.6);color:#06152b!important;font:800 14px Manrope!important;letter-spacing:-.12em}
  .logo-word{color:#f1fbff!important;font:800 20px Manrope!important}.logo-ai{color:#8feaff!important;font:600 20px Manrope!important}
`;
document.head.appendChild(logoStyling);
const visualRefinement = document.createElement('style');
visualRefinement.textContent = `
  body{background:#050816} body:before{content:"";position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at 15% 15%,rgba(47,163,255,.14),transparent 30%),radial-gradient(circle at 85% 58%,rgba(63,221,255,.09),transparent 29%);z-index:-1}
  .nav{background:rgba(5,8,22,.4);backdrop-filter:blur(20px);border-radius:0 0 22px 22px}
  .service-card,.project-visual,.cta,.detail-list article,.contact-page>div:last-child{border-color:rgba(211,243,255,.18)!important;border-radius:22px;box-shadow:inset 0 1px rgba(255,255,255,.055),0 16px 55px rgba(0,27,66,.19);backdrop-filter:blur(26px)}
  .service-card{background:linear-gradient(145deg,rgba(117,211,255,.11),rgba(12,20,43,.46) 68%)} .service-card.featured{background:linear-gradient(145deg,rgba(60,171,255,.23),rgba(10,17,39,.56) 72%)}
  .service-card:hover,.project:hover .project-visual,.cta:hover{transform:translateY(-7px);border-color:rgba(143,232,255,.45)!important;box-shadow:0 22px 65px rgba(0,152,255,.17),inset 0 1px rgba(255,255,255,.11)}
  .service-card,.project-visual,.cta{transition:transform .35s ease,border-color .35s ease,box-shadow .35s ease}
  @media (min-width:761px){.services-preview{grid-template-columns:1.18fr .82fr;grid-template-rows:1fr 1fr;gap:16px}.services-preview .service-card.featured{grid-row:span 2;min-height:640px}.services-preview .service-card:not(.featured){min-height:312px}.services-preview .service-card:not(.featured) .service-icon{margin:21px 0 17px}.services-preview .service-card:not(.featured) h3{font-size:23px}.services-preview .service-card:not(.featured) p{margin-bottom:0}}
`;
document.head.appendChild(visualRefinement);
const cardLayoutCorrection = document.createElement('style');
cardLayoutCorrection.textContent = `
  @media (min-width:761px){
    .services-preview{grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:auto;gap:16px}
    .services-preview .service-card.featured,.services-preview .service-card:not(.featured){grid-row:auto;min-height:440px}
    .services-preview .service-card:not(.featured) .service-icon{margin:37px 0 25px}
    .services-preview .service-card:not(.featured) h3{font-size:25px}
    .services-preview .service-card:not(.featured) p{margin-bottom:0}
  }
`;
document.head.appendChild(cardLayoutCorrection);
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('shown'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal, .service-card, .project, .detail-list article, .case').forEach((el) => observer.observe(el));
