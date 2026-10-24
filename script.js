const $ = (id) => document.getElementById(id);
$("year").textContent = new Date().getFullYear();

const translations = {
  ar: {
    pageTitle:"Karina Nexus | مختبر الأمن السيبراني",pageDescription:"Karina Nexus Cyber Lab — مشاريع الأمن السيبراني، أدوات تقنية، ودروس تعليمية آمنة.",menuLabel:"فتح القائمة",hashPlaceholder:"اكتب النص هنا…",passwordPlaceholder:"أدخل قيمة تجريبية",basePlaceholder:"اكتب نصاً هنا",headerPlaceholder:"Content-Type: application/json",
    navHome:"الرئيسية",navProjects:"المشاريع",navTools:"الأدوات",navLearn:"التعلّم",navCommunity:"المجتمع",
    eyebrow:"مختبر تعليمي للأمن السيبراني",heroTitle:'افهم الأنظمة.<br><span>اختبر بأمان.</span>',
    heroLead:"منصة Karina Nexus تجمع مشاريع الأمن السيبراني، أدوات تقنية تعمل داخل المتصفح، ودروساً عملية لبناء مهاراتك بطريقة مسؤولة.",
    exploreTools:"استكشف الأدوات",viewProjects:"شاهد المشاريع",heroNote:"التعلّم والاختبار فقط على أنظمة تملكها أو لديك تصريح لاختبارها.",coreCaption:"بيئة تعليمية آمنة",
    statOne:"تعلّم عملي",statTwo:"أدوات داخل المتصفح",statThree:"مشاريع مفتوحة المصدر",statFour:"أمان ومسؤولية",
    projectsTitle:'مشاريع <span>المختبر</span>',projectsLead:"مساحة لعرض مشاريعك، توثيقها، وربط كل مشروع بمستودعه على GitHub.",
    projectOneTitle:"Karina Security Toolkit",projectOneDesc:"مجموعة أدوات تعليمية بسيطة للتحليل والتحقق المحلي.",
    projectTwoTitle:"Web Safety Notes",projectTwoDesc:"ملاحظات وأمثلة لفهم أساسيات أمان تطبيقات الويب.",
    projectThreeTitle:"Cyber Lab Notes",projectThreeDesc:"مسار تعليمي منظّم مع ملخصات وتمارين آمنة.",githubLink:"فتح GitHub ↗",
    projectsHint:"ملاحظة: روابط GitHub أعلاه أمثلة؛ استبدلها بروابط مستودعاتك الحقيقية داخل index.html.",
    toolsTitle:'أدوات <span>تقنية</span>',toolsLead:"أدوات خفيفة تعمل محلياً في المتصفح، دون إرسال النصوص إلى خادم.",
    hashTitle:"مولّد SHA-256",hashDesc:"احسب بصمة نص باستخدام Web Crypto.",textLabel:"النص المراد حساب بصمته",hashButton:"احسب البصمة",
    passwordTitle:"مقياس قوة كلمة المرور",passwordDesc:"تقييم تقريبي محلي، لا يحفظ كلمة المرور.",passwordLabel:"أدخل كلمة مرور تجريبية",
    strengthEmpty:"أدخل قيمة لعرض التقييم",passwordDisclaimer:"لا تستخدم كلمة مرورك الحقيقية في أي أداة تجريبية.",
    encoderTitle:"ترميز وفك Base64",encoderDesc:"للنصوص فقط؛ ليس تشفيراً آمناً.",baseLabel:"النص",encode:"ترميز",decode:"فك الترميز",
    headerTitle:"منسّق رؤوس HTTP",headerDesc:"نظّم رؤوس HTTP منسوخة لتحليلها يدوياً.",headerLabel:"الصق الرؤوس (كل سطر مفتاح: قيمة)",formatHeaders:"تنسيق الرؤوس",
    learnTitle:'مسار <span>التعلّم</span>',learnLead:"ابدأ بالأساسيات، ثم انتقل إلى التدريب العملي ضمن مختبرات قانونية.",
    lessonOneTitle:"أساسيات الشبكات والويب",lessonOneDesc:"افهم DNS وHTTP وTLS وعناوين IP وكيف تتواصل الأنظمة.",
    lessonTwoTitle:"مبادئ الحماية الرقمية",lessonTwoDesc:"كلمات المرور، المصادقة متعددة العوامل، النسخ الاحتياطي والتحديثات.",
    lessonThreeTitle:"مقدمة في أمان تطبيقات الويب",lessonThreeDesc:"تعرّف على التحقق من المدخلات والجلسات والصلاحيات بشكل دفاعي.",
    lessonFourTitle:"مختبرات تدريب قانونية",lessonFourDesc:"تدرّب في بيئات مخصصة مثل OWASP Juice Shop أو PortSwigger Web Security Academy.",
        navCtf:"تحديات CTF",navAi:"Karina AI",
    ctfTitle:'ساحة <span>التحديات</span>',ctfLead:"تحديات قصيرة ببيانات وهمية للتدرّب على التفكير الأمني بشكل قانوني وآمن.",ctfChallengeTitle:"التحدي 01: اكتشف الخلل",ctfChallengeDesc:"راجع سجل دخول تجريبي وحدد أي كلمة مرور تُعدّ ضعيفة.",ctfAnswerLabel:"اكتب اسم المستخدم صاحب كلمة المرور الأضعف",ctfAnswerPlaceholder:"demo_01 أو demo_03",ctfCheck:"تحقّق من الإجابة",ctfHint:"تلميح",ctfReady:"جاهز؟ حلّل الأمثلة ثم أرسل إجابتك.",ctfCorrect:"إجابة صحيحة! كلمات المرور الشائعة أو القصيرة يسهل تخمينها. +10 نقاط تدريبية.",ctfWrong:"مو صحيح بعد. قارن طول كلمة المرور ومدى شيوعها، ثم جرّب مرة ثانية.",ctfHintText:"التلميح: ابحث عن كلمة مرور شائعة أو قصيرة جداً، وتذكّر أن المثال يحتوي على أكثر من إجابة ضعيفة.",ctfDisclaimer:"كل البيانات هنا وهمية للتعلّم فقط. لا تستخدم هذه التمارين ضد حسابات حقيقية.",ctfMissionTitle:"مهمتك التالية",ctfMissionDesc:"افهم الفكرة قبل الانتقال إلى مختبرات التدريب المصرّح بها.",ctfMissionOne:"تمييز كلمات المرور الشائعة",ctfMissionTwo:"فهم أهمية التحقق من المدخلات",ctfMissionThree:"قراءة سجلات التطبيق بحثاً عن مؤشرات",ctfExternal:"تابع التدريب في PortSwigger ↗",
    aiTitle:'مساعد <span>Karina AI</span>',aiLead:"مساعد تعليمي محلي يوجّهك إلى مفاهيم الأمن السيبراني وأدوات الموقع.",aiLocal:"مساعد Karina المتصل",aiNoApi:"GROK API",aiWelcome:"مرحباً! اسألني عن SHA-256 أو Base64 أو HTTP headers أو أساسيات الأمن السيبراني.",aiQuestionLabel:"سؤالك",aiPlaceholder:"مثلاً: ما الفرق بين Base64 والتشفير؟",aiAsk:"اسأل Karina",aiClear:"مسح",aiEmpty:"ستظهر الإجابة هنا.",aiDisclaimer:"تُرسل الأسئلة إلى خدمة Karina عبر خادم Vercel ومزوّد Grok. لا ترسل كلمات مرور أو بيانات شخصية أو أسراراً.",aiBlank:"اكتب سؤالاً أولاً.",aiBase64:"Base64 هو ترميز لتحويل البيانات إلى نص قابل للنقل، وليس تشفيراً ولا يحمي السرية. لا تضع بيانات حساسة فيه.",aiHash:"SHA-256 دالة تجزئة أحادية الاتجاه تنتج بصمة ثابتة الطول. تُستخدم للتحقق من سلامة البيانات، وليست تشفيراً قابلاً لفكّه.",aiHeaders:"راجع رؤوس الأمان مثل Content-Security-Policy وX-Content-Type-Options وStrict-Transport-Security. الإعداد الصحيح يعتمد على التطبيق، واختبر التغييرات في بيئة تملكها.",aiPassword:"استخدم كلمة مرور طويلة وفريدة لكل خدمة، ومدير كلمات مرور ومصادقة متعددة العوامل. لا تدخل كلمات مرورك الحقيقية في أدوات تجريبية.",aiWeb:"ابدأ بفهم HTTP والجلسات والتحقق من المدخلات والتحكم بالوصول. تدرب فقط في مختبرات مخصصة مثل PortSwigger Academy أو OWASP Juice Shop.",aiGeneral:"أقدر أساعدك بمعلومات عامة عن SHA-256 وBase64 وHTTP headers وكلمات المرور وأساسيات أمان الويب. جرّب سؤالاً محدداً عن أحد هذه المواضيع.",
communityTitle:'ابنِ وتعلّم <span>مع المجتمع</span>',communityLead:"شارك المشاريع، ناقش أفكارك، وتابع التحديثات مع مجتمع Karina Nexus.",joinDiscord:"انضم إلى Discord ↗",
    communityHint:"استبدل الروابط العامة بروابط مجتمعك ومستودعاتك.",hostingTitle:'استضافة <span>ذكية</span>',hostingLead:"ابدأ مجاناً بصفحات ثابتة، وأضف خادماً فقط عندما تحتاج بيانات أو حسابات.",
    freeTitle:"يعمل على GitHub Pages",freeDesc:"الواجهة، الدروس الثابتة، روابط المشاريع، وأدوات المتصفح مثل SHA-256 وBase64.",
    serverTitle:"يحتاج Backend عند التوسّع",serverDesc:"تسجيل الدخول، قواعد البيانات، حفظ النتائج، لوحة إدارة، API خاص أو فحص خوادم عن بُعد.",
    footerText:"مختبر للتعلّم والبناء المسؤول. استخدم المعرفة لحماية الأنظمة لا للإضرار بها."
  },
  en: {
    pageTitle:"Karina Nexus | Cyber Lab",pageDescription:"Karina Nexus Cyber Lab — cybersecurity projects, technical tools, and safe learning resources.",menuLabel:"Open menu",hashPlaceholder:"Type text here…",passwordPlaceholder:"Enter a sample value",basePlaceholder:"Type text here",headerPlaceholder:"Content-Type: application/json",
    navHome:"Home",navProjects:"Projects",navTools:"Tools",navLearn:"Learn",navCommunity:"Community",
    eyebrow:"CYBERSECURITY LEARNING LAB",heroTitle:'Understand systems.<br><span>Test safely.</span>',
    heroLead:"Karina Nexus brings together cybersecurity projects, browser-based technical tools, and practical lessons to build skills responsibly.",
    exploreTools:"Explore tools",viewProjects:"View projects",heroNote:"Learn and test only on systems you own or are authorized to assess.",coreCaption:"A safe learning environment",
    statOne:"Hands-on learning",statTwo:"In-browser tools",statThree:"Open-source projects",statFour:"Safety & responsibility",
    projectsTitle:'LAB <span>PROJECTS</span>',projectsLead:"Showcase your projects, document them, and link each one to its GitHub repository.",
    projectOneTitle:"Karina Security Toolkit",projectOneDesc:"A small educational toolkit for local analysis and validation.",
    projectTwoTitle:"Web Safety Notes",projectTwoDesc:"Notes and examples for understanding web application security.",
    projectThreeTitle:"Cyber Lab Notes",projectThreeDesc:"A structured learning path with summaries and safe exercises.",githubLink:"Open GitHub ↗",
    projectsHint:"Note: GitHub links above are examples. Replace them with your real repository URLs in index.html.",
    toolsTitle:'TECHNICAL <span>TOOLS</span>',toolsLead:"Lightweight tools run locally in your browser without sending text to a server.",
    hashTitle:"SHA-256 Generator",hashDesc:"Hash text using the Web Crypto API.",textLabel:"Text to hash",hashButton:"Generate hash",
    passwordTitle:"Password Strength Meter",passwordDesc:"A local, approximate estimate; nothing is stored.",passwordLabel:"Enter a sample password",
    strengthEmpty:"Enter a value to see the estimate",passwordDisclaimer:"Do not enter your real password into demo tools.",
    encoderTitle:"Base64 Encode / Decode",encoderDesc:"For text only; this is not encryption.",baseLabel:"Text",encode:"Encode",decode:"Decode",
    headerTitle:"HTTP Header Formatter",headerDesc:"Format copied HTTP headers for manual review.",headerLabel:"Paste headers (one Key: Value per line)",formatHeaders:"Format headers",
    learnTitle:'LEARNING <span>PATH</span>',learnLead:"Start with fundamentals, then move to hands-on practice in legal labs.",
    lessonOneTitle:"Networking and Web Fundamentals",lessonOneDesc:"Learn DNS, HTTP, TLS, IP addresses, and how systems communicate.",
    lessonTwoTitle:"Digital Defense Basics",lessonTwoDesc:"Passwords, multi-factor authentication, backups, and updates.",
    lessonThreeTitle:"Introduction to Web Application Security",lessonThreeDesc:"Understand input validation, sessions, and authorization defensively.",
    lessonFourTitle:"Legal Practice Labs",lessonFourDesc:"Practice in purpose-built environments such as OWASP Juice Shop or PortSwigger Web Security Academy.",
        navCtf:"CTF Challenges",navAi:"Karina AI",
    ctfTitle:'CTF <span>ARENA</span>',ctfLead:"Short challenges using fictional data to practice security thinking legally and safely.",ctfChallengeTitle:"Challenge 01: Spot the Weakness",ctfChallengeDesc:"Review a sample login log and identify weak passwords.",ctfAnswerLabel:"Enter a username with a weakest password",ctfAnswerPlaceholder:"demo_01 or demo_03",ctfCheck:"Check answer",ctfHint:"Hint",ctfReady:"Ready? Review the examples and submit your answer.",ctfCorrect:"Correct! Common or short passwords are easier to guess. +10 practice points.",ctfWrong:"Not quite. Compare password length and how common it is, then try again.",ctfHintText:"Hint: Look for a common or very short password. More than one example is weak.",ctfDisclaimer:"All data here is fictional for learning only. Never use these exercises against real accounts.",ctfMissionTitle:"Next missions",ctfMissionDesc:"Understand the concept before moving to authorized training labs.",ctfMissionOne:"Recognize common passwords",ctfMissionTwo:"Understand input validation",ctfMissionThree:"Read application logs for indicators",ctfExternal:"Continue at PortSwigger ↗",
    aiTitle:'<span>Karina AI</span> Assistant',aiLead:"A local learning assistant for cybersecurity concepts and site tools.",aiLocal:"Connected Karina assistant",aiNoApi:"GROK API",aiWelcome:"Hello! Ask about SHA-256, Base64, HTTP headers, or cybersecurity basics.",aiQuestionLabel:"Your question",aiPlaceholder:"For example: How is Base64 different from encryption?",aiAsk:"Ask Karina",aiClear:"Clear",aiEmpty:"Your answer will appear here.",aiDisclaimer:"Questions are sent to Karina through a Vercel server and the Grok provider. Do not send passwords, personal data, or secrets.",aiBlank:"Please enter a question first.",aiBase64:"Base64 is an encoding that converts data into transport-friendly text. It is not encryption and does not provide confidentiality. Never put sensitive data in it.",aiHash:"SHA-256 is a one-way hash function that produces a fixed-length digest. It helps verify data integrity; it is not reversible encryption.",aiHeaders:"Review security headers such as Content-Security-Policy, X-Content-Type-Options, and Strict-Transport-Security. Correct settings depend on the app; test changes in an environment you own.",aiPassword:"Use long, unique passwords for every service, a password manager, and multi-factor authentication. Do not enter real passwords into demo tools.",aiWeb:"Start with HTTP, sessions, input validation, and access control. Practice only in dedicated labs such as PortSwigger Academy or OWASP Juice Shop.",aiGeneral:"I can provide general guidance about SHA-256, Base64, HTTP headers, passwords, and web security basics. Try a specific question about one of these topics.",
    communityTitle:'BUILD AND LEARN <span>TOGETHER</span>',communityLead:"Share projects, discuss ideas, and follow updates with the Karina Nexus community.",joinDiscord:"Join Discord ↗",
    communityHint:"Replace generic links with your community and repository URLs.",hostingTitle:'SMART <span>HOSTING</span>',hostingLead:"Start free with static pages, and add a server only when you need accounts or data.",
    freeTitle:"Works on GitHub Pages",freeDesc:"The UI, static lessons, project links, and browser tools such as SHA-256 and Base64.",
    serverTitle:"Backend needed as you grow",serverDesc:"Login, databases, saved results, admin dashboards, private APIs, or remote server scanning.",
    footerText:"A lab for responsible learning and building. Use knowledge to protect systems, not harm them."
  }
};
let language = "ar";
try {
  const savedLanguage = localStorage.getItem("karina-nexus-language");
  if (savedLanguage === "en" || savedLanguage === "ar") language = savedLanguage;
} catch { /* Storage may be unavailable; Arabic remains the default. */ }

function applyLanguage() {
  const isArabic = language === "ar";
  const direction = isArabic ? "rtl" : "ltr";
  document.documentElement.lang = language;
  document.documentElement.dir = direction;
  document.body.dir = direction;
  document.title = translations[language].pageTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = translations[language].pageDescription;
  $("langSwitch").textContent = isArabic ? "EN" : "عربي";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[language][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const value = translations[language][el.dataset.i18nPlaceholder];
    if (value !== undefined) el.placeholder = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const value = translations[language][el.dataset.i18nAria];
    if (value !== undefined) el.setAttribute("aria-label", value);
  });
  try { localStorage.setItem("karina-nexus-language", language); } catch { /* Language switching still works for this page. */ }

  const p = $("passwordInput").value;
  if (p) updatePasswordStrength();
  else $("strengthLabel").textContent = translations[language].strengthEmpty;
}

$("langSwitch").addEventListener("click", () => {
  language = language === "ar" ? "en" : "ar";
  applyLanguage();
});
applyLanguage();

$("menuToggle").addEventListener("click", () => {
  const open = $("mainNav").classList.toggle("open");
  $("menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(a => a.addEventListener("click", () => {
  $("mainNav").classList.remove("open");
  $("menuToggle").setAttribute("aria-expanded", "false");
}));

$("hashButton").addEventListener("click", async () => {
  const value = $("hashInput").value;
  if (!value) { $("hashOutput").textContent = "SHA-256: " + (language === "ar" ? "أدخل نصاً أولاً." : "Enter text first."); return; }
  if (!window.crypto?.subtle) { $("hashOutput").textContent = language === "ar" ? "Web Crypto غير متاح؛ افتح الموقع عبر HTTPS." : "Web Crypto unavailable; open the site over HTTPS."; return; }
  try {
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
    const hash = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2,"0")).join("");
    $("hashOutput").textContent = "SHA-256: " + hash;
  } catch { $("hashOutput").textContent = language === "ar" ? "تعذر حساب البصمة." : "Could not calculate hash."; }
});

function updatePasswordStrength() {
  const p = $("passwordInput").value;
  const variety = [/[a-z]/.test(p),/[A-Z]/.test(p),/[0-9]/.test(p),/[^A-Za-z0-9]/.test(p)].filter(Boolean).length;
  let score = 0;
  if (p.length >= 8) score++;
  if (p.length >= 12) score++;
  if (p.length >= 16) score++;
  if (variety >= 2) score++;
  if (variety >= 3) score++;
  const pct = Math.min(100, score * 20);
  $("strengthBar").style.width = pct + "%";
  $("strengthBar").style.background = score <= 1 ? "#ff647c" : score <= 3 ? "#ffc45c" : "#60f3bd";
  const labels = language === "ar" ? ["ضعيفة جداً","ضعيفة","متوسطة","جيدة","قوية","قوية جداً"] : ["Very weak","Weak","Fair","Good","Strong","Very strong"];
  $("strengthLabel").textContent = p ? labels[score] : translations[language].strengthEmpty;
}
$("passwordInput").addEventListener("input", updatePasswordStrength);

function utf8ToBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach(b => binary += String.fromCharCode(b));
  return btoa(binary);
}
function base64ToUtf8(text) {
  const binary = atob(text.trim());
  const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
  return new TextDecoder("utf-8", {fatal:true}).decode(bytes);
}
$("encodeButton").addEventListener("click", () => {
  try { $("baseOutput").textContent = utf8ToBase64($("baseInput").value); }
  catch { $("baseOutput").textContent = language === "ar" ? "تعذر الترميز." : "Encoding failed."; }
});
$("decodeButton").addEventListener("click", () => {
  try { $("baseOutput").textContent = base64ToUtf8($("baseInput").value); }
  catch { $("baseOutput").textContent = language === "ar" ? "صيغة Base64 غير صحيحة أو ليست UTF-8." : "Invalid Base64 or non-UTF-8 text."; }
});
$("formatHeaders").addEventListener("click", () => {
  const lines = $("headerInput").value.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  if (!lines.length) { $("headerOutput").textContent = "—"; return; }
  const parsed = lines.map(line => {
    const i = line.indexOf(":");
    return i > 0 ? [line.slice(0,i).trim(), line.slice(i+1).trim()] : [null,line];
  });
  $("headerOutput").textContent = parsed.map(([key,val]) => key ? `${key}: ${val}` : `⚠ ${val}`).join("\n");
});

// Safe, fictional CTF exercise: accepts either intentionally weak sample.
$("ctfCheck").addEventListener("click", () => {
  const answer = $("ctfAnswer").value.trim().toLowerCase();
  const correct = ["demo_01", "demo_03"].includes(answer);
  const key = correct ? "ctfCorrect" : "ctfWrong";
  $("ctfFeedback").textContent = translations[language][key];
  $("ctfFeedback").style.color = correct ? "#60f3bd" : "#ffc45c";
});
$("ctfHint").addEventListener("click", () => {
  $("ctfFeedback").textContent = translations[language].ctfHintText;
  $("ctfFeedback").style.color = "";
});
$("ctfAnswer").addEventListener("keydown", e => { if (e.key === "Enter") $("ctfCheck").click(); });

// Real AI requests go through the same-origin Vercel backend; API keys never enter browser code.
let aiBusy = false;
$("aiAsk").addEventListener("click", async () => {
  const question = $("aiQuestion").value.trim();
  const output = $("aiResponse");
  if (!question) { output.textContent = translations[language].aiBlank; return; }
  if (aiBusy) return;
  aiBusy = true;
  $("aiAsk").disabled = true;
  output.textContent = language === "ar" ? "Karina تفكر..." : "Karina is thinking...";
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: question })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "Request failed");
    output.textContent = typeof data.reply === "string" ? data.reply : (language === "ar" ? "وصل رد غير متوقع." : "Unexpected response.");
  } catch (error) {
    output.textContent = language === "ar"
      ? "ما كدرت أتصل بـ Grok. تأكد أن الموقع منشور على Vercel وأن XAI_API_KEY مضاف، ثم أعد النشر."
      : "Could not connect to Grok. Ensure the site is deployed on Vercel and XAI_API_KEY is configured, then redeploy.";
  } finally {
    aiBusy = false;
    $("aiAsk").disabled = false;
  }
});
$("aiClear").addEventListener("click", () => {
  $("aiQuestion").value = "";
  $("aiResponse").textContent = translations[language].aiEmpty;
});
$("aiQuestion").addEventListener("keydown", e => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") $("aiAsk").click(); });

