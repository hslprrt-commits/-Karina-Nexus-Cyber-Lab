# Karina Nexus — Cyber Lab

موقع ثابت ثنائي اللغة (العربية والإنجليزية) لمشاريع الأمن السيبراني، أدوات المتصفح، الدروس، وروابط المجتمع. يمكن التبديل بين اللغتين من زر EN/عربي في أعلى الصفحة، ويُحفظ الاختيار على الجهاز إن كان تخزين المتصفح متاحاً.

## التشغيل محلياً
افتح `index.html` في المتصفح. ميزة SHA-256 تعتمد على Web Crypto؛ تعمل عادةً على HTTPS أو localhost.

## النشر مجاناً على GitHub Pages
1. ارفع محتويات هذا المجلد إلى جذر مستودع GitHub، وتأكد أن `index.html` في الجذر.
2. افتح **Settings → Pages**.
3. في **Build and deployment** اختر **Deploy from a branch**.
4. اختر `main` و`/(root)` ثم **Save**.
5. انتظر اكتمال النشر وافتح الرابط الذي يظهر في صفحة Pages.

## قبل النشر
- في `index.html` استبدل روابط `https://github.com/` بروابط مستودعاتك الحقيقية.
- رابط Discord الحالي: `https://discord.gg/W9sM87Pyr`.
- عدّل أسماء ووصف المشاريع في قسم `#projects`.
- لا تضع مفاتيح API أو كلمات مرور أو أسرار في ملفات الواجهة.

## ما يعمل دون خادم؟
- الموقع الثابت، الأقسام، الدروس، روابط GitHub وDiscord.
- SHA-256 للنصوص، تقدير تقريبي لقوة كلمة المرور، Base64، وتنسيق رؤوس HTTP المنسوخة. تعمل هذه الأدوات محلياً في المتصفح ولا ترسل مدخلاتها إلى خادم.

## ما يحتاج Backend؟
- الحسابات وتسجيل الدخول، قاعدة بيانات، حفظ المشاريع/النتائج، لوحة إدارة ديناميكية، نموذج تواصل يرسل فعلياً، API خاص، أو فحص حي لخوادم وأهداف بعيدة.
- لا يمكن تشغيل خادم Node/Python أو قواعد بيانات من GitHub Pages وحده. يمكن ربط الواجهة لاحقاً بخدمة Backend منفصلة.

## هيكل المشروع
```text
karina-nexus-cyber-lab/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── favicon.svg
```

## تنبيه أمان
هذا مشروع تعليمي. لا تختبر إلا الأنظمة التي تملكها أو لديك تصريح واضح لاختبارها. مقياس قوة كلمة المرور تقريبي ولا يضمن أن كلمة المرور آمنة.

## New features
- Bilingual safe CTF challenge with fictional sample credentials, answer validation, and a hint.
- Karina AI demo assistant with predefined educational replies that run locally in the browser; it is not connected to a real AI model and sends no prompts to a server.
- Navigation keeps Arabic/English switching and the existing Discord invite (`https://discord.gg/W9sM87Pyr`).

## Real AI integration
GitHub Pages is static hosting. To connect a real AI provider, create a separate backend/API and store the provider key as a server-side secret. Never put API keys in `script.js` or other public files.


## Deploy Karina AI with Grok on Vercel
1. Import this repository/project into Vercel. Keep `index.html`, `script.js`, `styles.css`, and the `api/` directory in the project root (or the project root set to this folder).
2. In Vercel, open **Settings → Environment Variables** and add `XAI_API_KEY` with your xAI API key. Select Production (and Preview if needed). Never put the key in `index.html`, `script.js`, GitHub, or chat.
3. Deploy or redeploy the project. The frontend calls `/api/chat`, so the website and API must be hosted on the same Vercel project/domain for this configuration.
4. Open the deployed Vercel URL and test Karina AI with a harmless question. API usage may incur charges depending on your xAI account/credits; check your xAI console.
5. Do not submit passwords, personal information, or secrets to the AI. Consider adding rate limiting before sharing the public URL.

The serverless endpoint is `api/chat.js`. It accepts POST JSON `{ "message": "..." }`, enforces a 4,000-character limit, and reads `XAI_API_KEY` only from the server environment.
