document.documentElement.classList.add('js');
const primaryNav = document.querySelector('.nav > nav');
if (primaryNav) Object.assign(primaryNav.style, { position: 'absolute', left: '50%', transform: 'translateX(-50%)' });
document.querySelectorAll('.brand').forEach((brand) => {
  brand.innerHTML = '<span class="logo-mark">R</span><span class="logo-word">Redtro</span><span class="logo-ai">.ai</span>';
});
const logoStyling = document.createElement('style');
logoStyling.textContent = `
  .brand{display:inline-flex!important;align-items:center;gap:0;letter-spacing:-.045em!important}
  .logo-mark{display:grid!important;place-items:center;width:25px;height:25px;margin-right:7px;border-radius:8px;background:linear-gradient(145deg,#d3fbff,#67cffa 45%,#1769dc);border:1px solid rgba(231,255,255,.7);box-shadow:0 0 20px rgba(96,224,255,.38),inset 0 1px rgba(255,255,255,.6);color:#06152b!important;font:800 14px Manrope!important;letter-spacing:-.12em}
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
const headerLineExtension = document.createElement('style');
headerLineExtension.textContent = `
  @media (min-width:761px){.nav.wrap{width:calc(100% - 64px);max-width:none}}
`;
document.head.appendChild(headerLineExtension);
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('shown'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal, .service-card, .project, .detail-list article, .case').forEach((el) => observer.observe(el));

const enquiryUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdmMzbyJTbHjOdFrkWx8YLRt3ZrQ-f3NFz_hkxbewfzSuqM5g/viewform';
const chatStyle = document.createElement('style');
chatStyle.textContent = `
  .redtro-chat{position:fixed;right:24px;bottom:24px;z-index:30;font-family:Manrope,Arial,sans-serif}
  .chat-toggle{width:56px;height:56px;border:1px solid rgba(190,244,255,.62);border-radius:18px;background:linear-gradient(145deg,#c7f8ff,#72dafc 48%,#1f74e5);box-shadow:0 13px 35px rgba(0,145,255,.34),inset 0 1px rgba(255,255,255,.72);color:#06152b;font-size:23px;font-weight:800;cursor:pointer;transition:transform .25s ease,box-shadow .25s ease}
  .chat-toggle:hover{transform:translateY(-4px);box-shadow:0 18px 45px rgba(0,171,255,.44),inset 0 1px rgba(255,255,255,.8)}
  .chat-panel{position:absolute;right:0;bottom:68px;width:min(360px,calc(100vw - 32px));overflow:hidden;border:1px solid rgba(190,242,255,.22);border-radius:23px;background:rgba(7,14,34,.84);box-shadow:0 22px 70px rgba(0,0,0,.42),inset 0 1px rgba(255,255,255,.08);backdrop-filter:blur(25px);opacity:0;transform:translateY(14px) scale(.98);pointer-events:none;transition:opacity .22s ease,transform .22s ease}
  .redtro-chat.open .chat-panel{opacity:1;transform:none;pointer-events:auto}
  .chat-head{display:flex;align-items:center;gap:10px;padding:17px 18px 15px;border-bottom:1px solid rgba(190,242,255,.12)}
  .chat-mark{display:grid;place-items:center;width:28px;height:28px;border-radius:9px;background:linear-gradient(145deg,#d3fbff,#67cffa 45%,#1769dc);color:#06152b;font:800 15px Manrope;box-shadow:0 0 18px rgba(96,224,255,.32)}
  .chat-head strong{font-size:13px}.chat-head span{display:block;margin-top:1px;color:#82e6ff;font:10px 'DM Mono',monospace}.chat-close{margin-left:auto;width:28px;height:28px;border:0;border-radius:8px;background:transparent;color:#a6b9c7;font-size:20px;cursor:pointer}
  .chat-messages{height:256px;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:9px;scrollbar-width:thin;scrollbar-color:#477ea0 transparent}
  .chat-bubble{max-width:87%;padding:10px 12px;border-radius:14px;font-size:12px;line-height:1.55}.chat-bubble.bot{align-self:flex-start;background:rgba(151,229,255,.1);border:1px solid rgba(176,239,255,.12);color:#d8f5ff;border-bottom-left-radius:4px}.chat-bubble.user{align-self:flex-end;background:#b9efff;color:#071422;border-bottom-right-radius:4px}
  .chat-prompts{display:flex;gap:7px;overflow:auto;padding:0 16px 12px}.chat-prompts button{flex:0 0 auto;border:1px solid rgba(164,230,255,.22);border-radius:99px;background:rgba(151,229,255,.06);padding:7px 9px;color:#c5f3ff;font:600 10px Manrope;cursor:pointer}.chat-prompts button:hover{background:rgba(151,229,255,.15)}
  .chat-form{display:flex;gap:8px;padding:12px 14px 14px;border-top:1px solid rgba(190,242,255,.1)}.chat-form input{min-width:0;border:1px solid rgba(190,242,255,.16);border-radius:10px;background:rgba(255,255,255,.045);padding:10px;color:#ecfbff;font:12px Manrope}.chat-form input:focus{border-color:#84e7ff}.chat-form button{border:0;border-radius:10px;background:#b9efff;padding:0 12px;color:#071422;font-weight:800;cursor:pointer}.chat-complete-link{display:inline-flex;margin-top:9px;padding:9px 11px;border-radius:9px;background:#b9efff;color:#071422!important;text-decoration:none;font-size:11px;font-weight:800}
  @media(max-width:760px){.redtro-chat{right:18px;bottom:18px}.chat-panel{bottom:66px}.chat-toggle{width:52px;height:52px;border-radius:16px}}
`;
document.head.appendChild(chatStyle);

const chatWidget = document.createElement('aside');
chatWidget.className = 'redtro-chat';
chatWidget.setAttribute('aria-label', 'Redtro website assistant');
chatWidget.innerHTML = `
  <section class="chat-panel" aria-live="polite">
    <div class="chat-head"><div class="chat-mark">R</div><div><strong>Redtro Assistant</strong><span>ONLINE · HERE TO HELP</span></div><button class="chat-close" type="button" aria-label="Close chat">×</button></div>
    <div class="chat-messages"><div class="chat-bubble bot">Hi! I can help you explore websites, AI automations, and AI agents. Ask a question, or choose “Start a project” and I’ll take your details here.</div></div>
    <div class="chat-prompts"><button type="button" data-chat="Website pricing">Website pricing</button><button type="button" data-chat="AI automation">AI automation</button><button type="button" data-chat="Start a project">Start a project</button></div>
    <form class="chat-form"><input aria-label="Message Redtro" autocomplete="off" placeholder="Ask a question..." /><button type="submit" aria-label="Send message">↑</button></form>
  </section>
  <button class="chat-toggle" type="button" aria-label="Open Redtro chat">R</button>
`;
document.body.appendChild(chatWidget);

const chatPanel = chatWidget.querySelector('.chat-panel');
const chatMessages = chatWidget.querySelector('.chat-messages');
const chatInput = chatWidget.querySelector('.chat-form input');
const addChatMessage = (kind, message) => {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${kind}`;
  bubble.textContent = message;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};
const chatApplication = { active: false, step: '', fullName: '', email: '', phone: '', service: '' };
const getChatReply = (message) => {
  const question = message.toLowerCase();
  if (question.includes('website') || question.includes('web')) return 'Website projects start from ₹20,000. We build fast, premium sites that make your brand feel credible from the first scroll.';
  if (question.includes('automation') || question.includes('automate')) return 'AI automations start from ₹10,000. We connect your lead capture, follow-ups, notifications, and operations so work keeps moving.';
  if (question.includes('agent') || question.includes('chatbot')) return 'Our AI agents are tailored to your business—handling leads, support, scheduling, research, and more. Tell us what you want the agent to do.';
  if (question.includes('price') || question.includes('cost') || question.includes('budget')) return 'Websites begin at ₹20,000 and AI automations begin at ₹10,000. AI agents are quoted based on the work they need to handle.';
  if (question.includes('start') || question.includes('project') || question.includes('contact') || question.includes('quote') || question.includes('apply')) return 'I can take your enquiry here. What is your full name?';
  return 'Thanks for sharing. For a tailored recommendation and quote, please use our enquiry form—our team will reply by email.';
};
const serviceFromMessage = (message) => {
  const value = message.toLowerCase();
  if (value.includes('website') || value.includes('web')) return 'websit with ai';
  if (value.includes('agent')) return 'ai agent';
  if (value.includes('automation') || value.includes('automate')) return 'AI automations';
  return '';
};
const startApplication = () => {
  chatApplication.active = true;
  chatApplication.step = 'name';
  chatApplication.fullName = '';
  chatApplication.email = '';
  chatApplication.phone = '';
  chatApplication.service = '';
  addChatMessage('bot', 'Great—what is your full name?');
};
const showCompletedApplication = () => {
  const params = new URLSearchParams({
    usp: 'pp_url',
    'entry.731666129': chatApplication.fullName,
    'entry.44425736': chatApplication.email,
    'entry.100926193': chatApplication.phone,
    'entry.370895404': chatApplication.service
  });
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble bot';
  bubble.textContent = 'Your details are ready. Open the completed enquiry form to review and submit it.';
  const completeLink = document.createElement('a');
  completeLink.className = 'chat-complete-link';
  completeLink.href = `${enquiryUrl}?${params.toString()}`;
  completeLink.target = '_blank';
  completeLink.rel = 'noopener';
  completeLink.textContent = 'Open completed form ↗';
  bubble.appendChild(completeLink);
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatApplication.active = false;
};
const handleApplicationAnswer = (message) => {
  if (chatApplication.step === 'name') {
    chatApplication.fullName = message;
    chatApplication.step = 'email';
    addChatMessage('bot', 'Thanks. What is your email address?');
    return;
  }
  if (chatApplication.step === 'email') {
    if (!/^\S+@\S+\.\S+$/.test(message)) { addChatMessage('bot', 'Please enter a valid email address so we can reply to you.'); return; }
    chatApplication.email = message;
    chatApplication.step = 'phone';
    addChatMessage('bot', 'What is your mobile number?');
    return;
  }
  if (chatApplication.step === 'phone') {
    if (message.replace(/\D/g, '').length < 10) { addChatMessage('bot', 'Please enter a valid mobile number (at least 10 digits).'); return; }
    chatApplication.phone = message;
    chatApplication.step = 'service';
    addChatMessage('bot', 'Which service do you need: Website with AI, AI agent, or AI automations?');
    return;
  }
  if (chatApplication.step === 'service') {
    const service = serviceFromMessage(message);
    if (!service) { addChatMessage('bot', 'Please choose one: Website with AI, AI agent, or AI automations.'); return; }
    chatApplication.service = service;
    showCompletedApplication();
  }
};
const sendChatMessage = (message) => {
  const cleanMessage = message.trim();
  if (!cleanMessage) return;
  addChatMessage('user', cleanMessage);
  chatInput.value = '';
  if (chatApplication.active) { window.setTimeout(() => handleApplicationAnswer(cleanMessage), 250); return; }
  if (/start|project|contact|quote|apply/i.test(cleanMessage)) { window.setTimeout(startApplication, 250); return; }
  window.setTimeout(() => {
    addChatMessage('bot', getChatReply(cleanMessage));
  }, 350);
};
chatWidget.querySelector('.chat-toggle').addEventListener('click', () => { chatWidget.classList.toggle('open'); if (chatWidget.classList.contains('open')) chatInput.focus(); });
chatWidget.querySelector('.chat-close').addEventListener('click', () => chatWidget.classList.remove('open'));
chatWidget.querySelector('.chat-form').addEventListener('submit', (event) => { event.preventDefault(); sendChatMessage(chatInput.value); });
chatWidget.querySelectorAll('[data-chat]').forEach((button) => button.addEventListener('click', () => sendChatMessage(button.dataset.chat)));

const workGrid = document.querySelector('.case-grid');
if (workGrid) {
  const hrDashboardStyle = document.createElement('style');
  hrDashboardStyle.textContent = `
    .hr-dashboard{grid-column:1/-1}.hr-dashboard .case-screen{height:430px;background:radial-gradient(circle at 82% 10%,rgba(90,226,255,.3),transparent 27%),linear-gradient(145deg,#071b38,#0b3158);padding:28px;color:#ecfbff;box-shadow:0 20px 65px rgba(0,127,216,.2)}.hr-dashboard small{color:#94eaff}.hr-dashboard h2{margin:38px 0 0;font-size:58px;line-height:.91}.hr-dashboard h2 span{color:#93edff}.hr-window{position:absolute;right:28px;bottom:25px;left:28px;display:grid;grid-template-columns:1.35fr .8fr;gap:11px;padding:13px;border:1px solid rgba(202,246,255,.22);border-radius:14px;background:rgba(2,19,44,.58);backdrop-filter:blur(9px)}.hr-chart{height:76px;padding:10px;background:rgba(162,235,255,.08);border-radius:9px}.hr-chart span{display:block;color:#8ddff7;font:9px 'DM Mono',monospace}.hr-chart i{display:block;width:100%;height:36px;margin-top:9px;background:linear-gradient(135deg,transparent 0 8%,#80eaff 9% 12%,transparent 13% 24%,#80eaff 25% 29%,transparent 30% 48%,#80eaff 49% 53%,transparent 54% 67%,#80eaff 68% 72%,transparent 73%);opacity:.95}.hr-stat{display:flex;flex-direction:column;justify-content:center;padding:10px;border-radius:9px;background:linear-gradient(145deg,rgba(103,219,255,.23),rgba(14,88,154,.38))}.hr-stat b{font-size:29px;letter-spacing:-.07em}.hr-stat span{margin-top:2px;color:#c6f6ff;font:9px 'DM Mono',monospace}@media(max-width:760px){.hr-dashboard .case-screen{height:330px}.hr-dashboard h2{font-size:45px}.hr-window{right:18px;bottom:18px;left:18px}}
  `;
  document.head.appendChild(hrDashboardStyle);
  workGrid.insertAdjacentHTML('afterbegin', `
    <article class="case hr-dashboard"><div class="case-screen"><small>WORKSHPHERE.AI / HR DASHBOARD</small><h2>People, in<br /><span>focus.</span></h2><div class="hr-window"><div class="hr-chart"><span>TEAM ACTIVITY</span><i></i></div><div class="hr-stat"><b>48</b><span>TEAM MEMBERS</span></div></div></div><div class="case-caption"><div><h3>Workshphere.ai</h3><p>Featured HR dashboard · People operations</p></div><span>FEATURED</span></div></article>
  `);
}
