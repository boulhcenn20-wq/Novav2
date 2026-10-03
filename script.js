const WHATSAPP_NUMBER = "212XXXXXXXXX"; // Replace with your WhatsApp number, e.g. 212612345678

const translations = {
  en: {
    "nav.services":"Services","nav.work":"Work","nav.process":"Process","nav.pricing":"Pricing","nav.contact":"Contact","nav.cta":"Start a project",
    "hero.available":"Available for new projects","hero.title":"Websites that look expensive.<br>Built to get results.","hero.text":"NOVA creates fast, modern websites and landing pages for businesses that want to look credible, stand out and turn visitors into customers.","hero.primary":"See our work <span>↗</span>","hero.secondary":"Get a free quote","hero.trust1":"Responsive on every screen","hero.trust2":"Fast loading","hero.trust3":"SEO-ready",
    "services.kicker":"WHAT WE BUILD","services.title":"A better website is<br><span>business infrastructure.</span>","services.text":"Not just a pretty page. Every section has a job: explain, build trust, answer objections and make the next step obvious.",
    "service1.title":"Business Website","service1.text":"A polished online home for companies, local businesses, professionals and startups.","service2.title":"Landing Page","service2.text":"One focused page designed around a clear offer, call-to-action and conversion path.","service3.title":"Online Presence","service3.text":"Portfolio, personal brand, restaurant, agency or creator site with a distinctive visual identity.","service.learn":"Discuss a project →",
    "work.kicker":"CONCEPT PROJECTS","work.title":"Built to make<br><span>the first impression count.</span>","work.text":"These are concept examples showing the kind of visual direction NOVA can create. Replace them with your real client projects as your portfolio grows.",
    "process.kicker":"HOW IT WORKS","process.title":"Simple process.<br><span>Serious output.</span>","process1.title":"Discover","process1.text":"We understand your business, offer, audience and the action you want visitors to take.","process2.title":"Design","process2.text":"We shape the visual direction, layout, copy hierarchy and mobile experience.","process3.title":"Build","process3.text":"The design becomes a responsive, fast website with clean HTML, CSS and JavaScript.","process4.title":"Launch","process4.text":"We publish, test the key screens and give you the files and deployment structure.",
    "pricing.kicker":"STARTING POINTS","pricing.title":"Clear packages.<br><span>Custom when needed.</span>","pricing.text":"Sample starting prices for your sales presentation. Change these numbers to match your offer before sending the site to a client.","price1.text":"For a simple professional online presence.","price2.text":"For businesses that need a stronger sales website.","price3.text":"For custom experiences, portfolios and advanced needs.","price.cta":"Request this package →",
    "about.kicker":"THE NOVA APPROACH","about.title":"Less noise. More clarity.<br><span>Better digital presence.</span>","about.text":"We combine sharp visual design with simple communication. The goal is not to impress another designer — it is to make your customer understand what you do and what to do next.",
    "contact.kicker":"READY WHEN YOU ARE","contact.title":"Let's build something<br><span>worth clicking.</span>","contact.text":"Tell us what you sell, who you serve and what you want your website to achieve.","contact.note":"Replace the WhatsApp number in script.js with your own number before publishing.",
    "form.name":"Your name","form.business":"Business name","form.message":"Tell us briefly what you need...","form.button":"Send via WhatsApp ↗"
  },
  fr: {
    "nav.services":"Services","nav.work":"Réalisations","nav.process":"Processus","nav.pricing":"Tarifs","nav.contact":"Contact","nav.cta":"Démarrer un projet",
    "hero.available":"Disponible pour de nouveaux projets","hero.title":"Des sites qui paraissent premium.<br>Conçus pour donner des résultats.","hero.text":"NOVA crée des sites modernes et rapides pour les entreprises qui veulent gagner en crédibilité et transformer leurs visiteurs en clients.","hero.primary":"Voir nos projets <span>↗</span>","hero.secondary":"Demander un devis","hero.trust1":"Responsive","hero.trust2":"Rapide","hero.trust3":"Prêt pour le SEO",
    "services.kicker":"CE QUE NOUS CRÉONS","services.title":"Un bon site est une<br><span>infrastructure commerciale.</span>","services.text":"Chaque section a un objectif : expliquer, rassurer, répondre aux objections et rendre l'action suivante évidente.",
    "service1.title":"Site professionnel","service1.text":"Une présence en ligne soignée pour entreprises, commerces, professionnels et startups.","service2.title":"Landing Page","service2.text":"Une page ciblée autour d'une offre claire et d'un appel à l'action.","service3.title":"Présence digitale","service3.text":"Portfolio, marque personnelle, restaurant, agence ou créateur avec une identité visuelle distinctive.","service.learn":"Parler du projet →",
    "work.kicker":"PROJETS CONCEPT","work.title":"Conçu pour réussir<br><span>la première impression.</span>","work.text":"Des exemples conceptuels pour montrer la direction visuelle possible. Remplacez-les par vos vrais projets au fur et à mesure.",
    "process.kicker":"NOTRE MÉTHODE","process.title":"Un processus simple.<br><span>Un résultat sérieux.</span>","process1.title":"Découverte","process1.text":"Nous comprenons votre activité, votre offre, votre audience et l'action souhaitée.","process2.title":"Design","process2.text":"Nous construisons la direction visuelle, la structure et l'expérience mobile.","process3.title":"Développement","process3.text":"Le design devient un site responsive, rapide et propre en HTML, CSS et JavaScript.","process4.title":"Mise en ligne","process4.text":"Nous publions, testons les écrans clés et préparons la structure de déploiement.",
    "pricing.kicker":"POINTS DE DÉPART","pricing.title":"Des forfaits clairs.<br><span>Du sur-mesure si besoin.</span>","pricing.text":"Prix de départ d'exemple pour votre présentation commerciale. Modifiez-les avant de les envoyer à un client.","price1.text":"Pour une présence en ligne simple et professionnelle.","price2.text":"Pour une entreprise qui veut un site plus orienté vente.","price3.text":"Pour des besoins personnalisés et des expériences avancées.","price.cta":"Demander ce forfait →",
    "about.kicker":"L'APPROCHE NOVA","about.title":"Moins de bruit. Plus de clarté.<br><span>Une meilleure présence digitale.</span>","about.text":"Nous combinons design visuel et communication simple. Le but est d'aider votre client à comprendre ce que vous faites et quoi faire ensuite.",
    "contact.kicker":"PRÊT À COMMENCER ?","contact.title":"Créons quelque chose<br><span>qui mérite un clic.</span>","contact.text":"Dites-nous ce que vous vendez, à qui vous vous adressez et ce que votre site doit accomplir.","contact.note":"Remplacez le numéro WhatsApp dans script.js par votre propre numéro avant publication.",
    "form.name":"Votre nom","form.business":"Nom de l'entreprise","form.message":"Décrivez brièvement votre besoin...","form.button":"Envoyer via WhatsApp ↗"
  },
  ar: {
    "nav.services":"الخدمات","nav.work":"الأعمال","nav.process":"طريقة العمل","nav.pricing":"الأسعار","nav.contact":"تواصل معنا","nav.cta":"ابدأ مشروعك",
    "hero.available":"متاح لمشاريع جديدة","hero.title":"مواقع تبدو <em>احترافية وفاخرة.</em><br>ومصممة لتحقيق النتائج.","hero.text":"NOVA تصمم مواقع حديثة وسريعة للشركات التي تريد بناء الثقة، التميز عن المنافسين وتحويل الزوار إلى عملاء.","hero.primary":"شاهد أعمالنا <span>↗</span>","hero.secondary":"اطلب عرض سعر","hero.trust1":"متوافق مع كل الشاشات","hero.trust2":"سريع التحميل","hero.trust3":"جاهز لمحركات البحث",
    "services.kicker":"ماذا نبني","services.title":"الموقع الجيد هو<br><span>جزء من بنية عملك.</span>","services.text":"ليس مجرد تصميم جميل. كل قسم له وظيفة: شرح الخدمة، بناء الثقة، إزالة الاعتراضات وتوجيه العميل للخطوة التالية.",
    "service1.title":"موقع شركة","service1.text":"واجهة احترافية للشركات والمتاجر والمهنيين والمشاريع الناشئة.","service2.title":"صفحة هبوط","service2.text":"صفحة مركزة حول عرض واضح وزر إجراء ومسار تحويل بسيط.","service3.title":"حضور رقمي","service3.text":"بورتفوليو، علامة شخصية، مطعم، وكالة أو صانع محتوى بهوية بصرية مميزة.","service.learn":"ناقش مشروعك ←",
    "work.kicker":"مشاريع تجريبية","work.title":"مصممة لتجعل<br><span>الانطباع الأول قوياً.</span>","work.text":"هذه أمثلة تجريبية توضح مستوى الاتجاه البصري الممكن. استبدلها بأعمال العملاء الحقيقية مع نمو معرض أعمالك.",
    "process.kicker":"كيف نعمل","process.title":"خطوات بسيطة.<br><span>نتيجة احترافية.</span>","process1.title":"الفهم","process1.text":"نفهم نشاطك وعرضك وجمهورك والإجراء الذي تريد من الزائر القيام به.","process2.title":"التصميم","process2.text":"نحدد الهوية البصرية وترتيب المحتوى وتجربة الهاتف.","process3.title":"التطوير","process3.text":"نحوّل التصميم إلى موقع سريع ومتجاوب باستخدام HTML وCSS وJavaScript.","process4.title":"الإطلاق","process4.text":"ننشر الموقع ونختبر الشاشات الأساسية ونجهز ملفات النشر.",
    "pricing.kicker":"باقات مبدئية","pricing.title":"أسعار واضحة.<br><span>ومخصصة عند الحاجة.</span>","pricing.text":"هذه أسعار مبدئية تجريبية لعرض خدماتك. عدّلها لتناسب عرضك قبل إرسال الموقع للعميل.","price1.text":"لحضور رقمي بسيط واحترافي.","price2.text":"للشركات التي تحتاج موقعاً أقوى للبيع وجذب العملاء.","price3.text":"للتجارب المخصصة والبورتفوليو والاحتياجات المتقدمة.","price.cta":"اطلب هذه الباقة ←",
    "about.kicker":"منهج NOVA","about.title":"ضوضاء أقل. وضوح أكثر.<br><span>حضور رقمي أقوى.</span>","about.text":"نجمع بين التصميم القوي والتواصل البسيط. الهدف ليس إبهار المصممين، بل جعل العميل يفهم ما تقدمه وما الخطوة التالية.",
    "contact.kicker":"جاهز للبدء؟","contact.title":"لنصنع شيئاً<br><span>يستحق النقرة.</span>","contact.text":"أخبرنا ماذا تبيع، ومن تخدم، وماذا تريد من موقعك أن يحقق.","contact.note":"استبدل رقم WhatsApp داخل script.js برقمك قبل النشر.",
    "form.name":"اسمك","form.business":"اسم الشركة","form.message":"اكتب باختصار ماذا تحتاج...","form.button":"إرسال عبر WhatsApp ↗"
  }
};

let currentLang = localStorage.getItem("novaLang") || "en";

function applyLanguage(lang){
  currentLang = lang;
  localStorage.setItem("novaLang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.getElementById("langBtn").textContent = lang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.dataset.placeholder;
    if(translations[lang][key]) el.placeholder = translations[lang][key];
  });
}

document.getElementById("langBtn").addEventListener("click", () => {
  const next = currentLang === "en" ? "fr" : currentLang === "fr" ? "ar" : "en";
  applyLanguage(next);
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  menuBtn.textContent = mobileMenu.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".mobile-menu a").forEach(a => {
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  if(WHATSAPP_NUMBER.includes("X")){
    alert("Replace WHATSAPP_NUMBER in script.js with your real WhatsApp number first.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `Hello NOVA!%0A%0AName: ${encodeURIComponent(name)}%0ABusiness: ${encodeURIComponent(business)}%0AProject: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
});

applyLanguage(currentLang);
