const courses = [
  ["🎓","Web Development","Learn HTML, CSS and web development.","https://developer.mozilla.org/en-US/docs/Learn"],
  ["📈","YouTube & SEO","Official learning resources for creators and SEO.","https://support.google.com/youtube/"],
  ["🤖","AI Learning","Learn AI concepts and responsible AI basics.","https://www.ibm.com/think/topics/artificial-intelligence"],
  ["🐙","Git & GitHub","Learn version control and GitHub basics.","https://docs.github.com/en/get-started"],
  ["🎨","AI Art","Explore generative AI concepts and tools.","https://www.adobe.com/products/firefly.html"],
  ["✍️","Prompt Engineering","Learn practical prompting concepts.","https://platform.openai.com/docs/guides/prompt-engineering"],
  ["📱","Flutter","Official Flutter learning resources.","https://docs.flutter.dev/get-started/learn-flutter"],
  ["🧩","Figma","Learn UI/UX and design workflows.","https://help.figma.com/"],
  ["🌐","WordPress","Official WordPress learning resources.","https://learn.wordpress.org/"],
  ["📊","Google Ads","Official Google Ads learning center.","https://skillshop.withgoogle.com/"]
];

const tools = [
["🤖","ChatGPT","AI assistant","AI","https://chatgpt.com/"],
["✨","Gemini","AI assistant","AI","https://gemini.google.com/"],
["🖼️","Canva","Design & graphics","Design","https://www.canva.com/"],
["🎨","Adobe Express","Quick design","Design","https://www.adobe.com/express/"],
["🧠","Adobe Firefly","Generative AI","AI","https://firefly.adobe.com/"],
["📝","Google Docs","Online documents","Office","https://docs.google.com/"],
["📊","Google Sheets","Online spreadsheets","Office","https://sheets.google.com/"],
["📽️","Google Slides","Presentations","Office","https://slides.google.com/"],
["☁️","Google Drive","Cloud storage","Storage","https://drive.google.com/"],
["📧","Gmail","Email","Communication","https://mail.google.com/"],
["🔎","Google Search","Web search","Search","https://www.google.com/"],
["📚","Google Scholar","Research papers","Education","https://scholar.google.com/"],
["🐙","GitHub","Code hosting","Coding","https://github.com/"],
["💻","GitHub Docs","GitHub help","Coding","https://docs.github.com/"],
["🦊","GitLab","Code collaboration","Coding","https://gitlab.com/"],
["⚡","CodePen","Online code editor","Coding","https://codepen.io/"],
["🧪","JSFiddle","Test web code","Coding","https://jsfiddle.net/"],
["🌐","MDN Web Docs","Web documentation","Coding","https://developer.mozilla.org/"],
["📖","W3Schools","Web tutorials","Education","https://www.w3schools.com/"],
["🧑‍💻","freeCodeCamp","Free coding courses","Education","https://www.freecodecamp.org/"],
["🐍","Python","Official Python site","Coding","https://www.python.org/"],
["☕","Java","Official Java site","Coding","https://www.java.com/"],
["🟦","TypeScript","TypeScript docs","Coding","https://www.typescriptlang.org/"],
["⚛️","React","React docs","Coding","https://react.dev/"],
["🟢","Node.js","JavaScript runtime","Coding","https://nodejs.org/"],
["🔥","Firebase","App development","Coding","https://firebase.google.com/"],
["▲","Vercel","Web deployment","Hosting","https://vercel.com/"],
["🌊","Netlify","Web deployment","Hosting","https://www.netlify.com/"],
["☁️","Cloudflare","Web infrastructure","Hosting","https://www.cloudflare.com/"],
["🖼️","Unsplash","Free images","Media","https://unsplash.com/"],
["📷","Pexels","Free stock media","Media","https://www.pexels.com/"],
["🎬","Pixabay","Free media","Media","https://pixabay.com/"],
["🎥","YouTube","Video platform","Media","https://www.youtube.com/"],
["🎞️","YouTube Studio","Creator dashboard","Media","https://studio.youtube.com/"],
["🎵","YouTube Audio Library","Creator music","Media","https://www.youtube.com/audiolibrary"],
["🎬","CapCut","Video editor","Video","https://www.capcut.com/"],
["✂️","Clipchamp","Video editor","Video","https://clipchamp.com/"],
["🎙️","Audacity","Audio editor","Audio","https://www.audacityteam.org/"],
["🎚️","Adobe Podcast","Audio tools","Audio","https://podcast.adobe.com/"],
["📄","Adobe Acrobat","PDF tools","PDF","https://www.adobe.com/acrobat/online.html"],
["📑","Smallpdf","PDF tools","PDF","https://smallpdf.com/"],
["📋","iLovePDF","PDF tools","PDF","https://www.ilovepdf.com/"],
["🔗","TinyURL","Short links","Marketing","https://tinyurl.com/"],
["🔗","Bitly","Link management","Marketing","https://bitly.com/"],
["📈","Google Analytics","Web analytics","SEO","https://analytics.google.com/"],
["🔍","Google Search Console","Search performance","SEO","https://search.google.com/search-console/"],
["🧭","Google Trends","Search trends","SEO","https://trends.google.com/"],
["📝","Google Keyword Planner","Keyword research","SEO","https://ads.google.com/home/tools/keyword-planner/"],
["🧰","Google PageSpeed","Site performance","SEO","https://pagespeed.web.dev/"],
["🔐","Have I Been Pwned","Breach checking","Security","https://haveibeenpwned.com/"],
["🔑","Bitwarden","Password manager","Security","https://bitwarden.com/"],
["🛡️","VirusTotal","File/URL scanning","Security","https://www.virustotal.com/"],
["📦","Dropbox","Cloud storage","Storage","https://www.dropbox.com/"],
["🗂️","OneDrive","Cloud storage","Storage","https://onedrive.live.com/"],
["🍎","iCloud","Apple cloud","Storage","https://www.icloud.com/"],
["📅","Google Calendar","Calendar","Productivity","https://calendar.google.com/"],
["✅","Google Keep","Notes","Productivity","https://keep.google.com/"],
["⏱️","Pomofocus","Pomodoro timer","Productivity","https://pomofocus.io/"],
["🗒️","Notion","Notes & workspace","Productivity","https://www.notion.so/"],
["📌","Trello","Project boards","Productivity","https://trello.com/"],
["💬","Slack","Team communication","Communication","https://slack.com/"],
["📹","Zoom","Video meetings","Communication","https://zoom.us/"],
["📞","Google Meet","Video meetings","Communication","https://meet.google.com/"],
["💼","LinkedIn","Professional network","Career","https://www.linkedin.com/"],
["📄","Indeed","Jobs","Career","https://www.indeed.com/"],
["💻","Fiverr","Freelance marketplace","Freelancing","https://www.fiverr.com/"],
["🧑‍💼","Upwork","Freelance marketplace","Freelancing","https://www.upwork.com/"],
["🛒","Shopify","Online stores","Business","https://www.shopify.com/"],
["🛍️","WooCommerce","E-commerce","Business","https://woocommerce.com/"],
["💳","PayPal","Online payments","Finance","https://www.paypal.com/"],
["📦","Daraz","Online marketplace","Shopping","https://www.daraz.pk/"],
["🧮","Calculator","Quick calculation","Utilities","https://www.google.com/search?q=calculator"],
["🌦️","Weather","Weather search","Utilities","https://www.google.com/search?q=weather"],
["💱","Currency Converter","Currency conversion","Utilities","https://www.google.com/search?q=currency+converter"],
["📏","Unit Converter","Unit conversion","Utilities","https://www.google.com/search?q=unit+converter"],
["🗺️","Google Maps","Maps & directions","Utilities","https://maps.google.com/"],
["📦","Can I Use","Browser support","Coding","https://caniuse.com/"],
["🎨","Coolors","Color palettes","Design","https://coolors.co/"],
["🔤","Google Fonts","Free web fonts","Design","https://fonts.google.com/"],
["🧩","Font Awesome","Icons","Design","https://fontawesome.com/"],
["📐","TinyWow","Online tools","Utilities","https://tinywow.com/"],
["🧹","Remove.bg","Remove image background","Design","https://www.remove.bg/"],
["🔎","Google Lens","Image search","Search","https://lens.google.com/"],
["🖼️","Photopea","Online image editor","Design","https://www.photopea.com/"],
["🎨","Pixlr","Online photo editor","Design","https://pixlr.com/"],
["📊","Datawrapper","Charts & data","Data","https://www.datawrapper.de/"],
["📓","Kaggle","Datasets & learning","Data","https://www.kaggle.com/"],
["📚","Coursera","Online learning","Education","https://www.coursera.org/"],
["🎓","edX","Online learning","Education","https://www.edx.org/"],
["📘","MIT OpenCourseWare","Free university materials","Education","https://ocw.mit.edu/"],
["📖","Khan Academy","Free learning","Education","https://www.khanacademy.org/"],
["📰","Grammarly","Writing assistant","Writing","https://www.grammarly.com/"],
["✍️","LanguageTool","Grammar checker","Writing","https://languagetool.org/"],
["🔄","DeepL","Translation","Writing","https://www.deepl.com/translator"],
["🌐","Google Translate","Translation","Writing","https://translate.google.com/"],
["🧾","Google Forms","Online forms","Office","https://forms.google.com/"],
["🖥️","OBS Studio","Screen recording","Video","https://obsproject.com/"],
["📸","Loom","Screen recording","Video","https://www.loom.com/"],
["📦","Internet Archive","Digital archive","Education","https://archive.org/"],
["🔗","QR Code Generator","QR codes","Utilities","https://www.qr-code-generator.com/"],
["🖼️","TinyPNG","Image compression","Utilities","https://tinypng.com/"],
["📁","WeTransfer","File transfer","Storage","https://wetransfer.com/"],
["🔧","JSON Formatter","Format JSON","Coding","https://jsonformatter.org/"],
["🧪","Regex101","Test regular expressions","Coding","https://regex101.com/"],
["🔐","Let's Encrypt","Free certificates","Security","https://letsencrypt.org/"]
];

const courseGrid = document.getElementById("courseGrid");
courses.forEach(c=>{
  const el=document.createElement("article");
  el.className="course";
  el.innerHTML=`<div class="icon">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p><a href="${c[3]}" target="_blank" rel="noopener noreferrer">Open course →</a>`;
  courseGrid.appendChild(el);
});

const toolGrid=document.getElementById("toolGrid");
const search=document.getElementById("toolSearch");
const filter=document.getElementById("categoryFilter");
const empty=document.getElementById("emptyState");
const categories=[...new Set(tools.map(t=>t[3]))].sort();
categories.forEach(c=>{const o=document.createElement("option");o.value=c;o.textContent=c;filter.appendChild(o)});

function renderTools(){
  const q=search.value.trim().toLowerCase(), cat=filter.value;
  toolGrid.innerHTML="";
  const list=tools.filter(t=>(cat==="all"||t[3]===cat)&&(!q||t[1].toLowerCase().includes(q)||t[2].toLowerCase().includes(q)||t[3].toLowerCase().includes(q)));
  empty.hidden=list.length!==0;
  list.forEach(t=>{
    const el=document.createElement("article");el.className="tool";
    el.innerHTML=`<div class="icon">${t[0]}</div><h3>${t[1]}</h3><p>${t[2]} • ${t[3]}</p><a href="${t[4]}" target="_blank" rel="noopener noreferrer">Open tool ↗</a>`;
    toolGrid.appendChild(el);
  });
}
search.addEventListener("input",renderTools); filter.addEventListener("change",renderTools); renderTools();
document.getElementById("year").textContent=new Date().getFullYear();

const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
