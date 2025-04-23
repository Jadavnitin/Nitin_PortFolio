const projectData = [
   {
      title: {
         en: "Resume Builder",
         hi: "रिज़्यूमे बिल्डर"
      },
      description: {
         en: "This project uses Express.js with Handlebars (HBS) for dynamic templating and Mongoose for MongoDB integration. It ensures data validation with Validator.js and manages environment variables with Dotenv, while the frontend is built using simple JavaScript for a lightweight user experience.",
         hi: "यह प्रोजेक्ट Express.js और Handlebars (HBS) का उपयोग करता है और Mongoose के साथ MongoDB एकीकरण करता है। यह Validator.js के साथ डेटा सत्यापन सुनिश्चित करता है और Dotenv के साथ पर्यावरण चर प्रबंधित करता है, जबकि फ्रंटेंड को सरल जावास्क्रिप्ट का उपयोग करके हल्के उपयोगकर्ता अनुभव के लिए बनाया गया है।"
      },
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "Handlebars", "NPM"],
      link: "https://resume-builders-lemon.vercel.app/",
      image: "/ResumeBuilders.png",
      categories: {
         en: ["Favorite"], 
         hi: ["पसंदीदा"] 
      },
      techStack: [
         { name: "HTML5", iconClass: "devicon-html5-plain colored text-3xl" },
         { name: "CSS3", iconClass: "devicon-css3-plain colored text-3xl" },
         { name: "JavaScript", iconClass: "devicon-javascript-plain text-3xl colored" },
         { name: "Node.js", iconClass: "devicon-nodejs-plain-wordmark colored text-3.5xl", style: { fontSize: "3.8rem" } },
         { name: "Express.js", iconClass: "devicon-express-original text-3xl colored" },
         { name: "Handlebars", iconClass: "devicon-handlebars-original-wordmark text-3xl colored", style: { fontSize: "3.8rem" } },
         { name: "NPM", iconClass: "devicon-npm-original-wordmark colored text-3.5xl", style: { fontSize: "3.8rem" } },
      ],
      footerYear: 2024,
      githubLink: "https://github.com/Jadavnitin/resume_builders",
      liveLink: "https://resume-builders-lemon.vercel.app/",
   },

   {
      title: {
         en: "Password Manager",
         hi: "पासवर्ड मैनेजर"
      },
      description: {
         en: "This project is built using Express.js with Handlebars (HBS) for templating and Mongoose for MongoDB integration. It includes JWT for authentication, bcrypt for password hashing, cookie-parser for session management, and Validator for data validation, ensuring a secure and efficient backend.",
         hi: "यह प्रोजेक्ट Express.js और Handlebars (HBS) का उपयोग करके टेम्पलेटिंग के लिए बनाया गया है और MongoDB एकीकरण के लिए Mongoose का उपयोग करता है। इसमें प्रमाणीकरण के लिए JWT, पासवर्ड हैशिंग के लिए bcrypt, सत्र प्रबंधन के लिए cookie-parser और डेटा सत्यापन के लिए Validator शामिल है, जो एक सुरक्षित और प्रभावी बैकएंड सुनिश्चित करता है।"
      },
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "Handlebars", "NPM"],
      link: "https://password-manager-2025.vercel.app/",
      image: "/Password_Manager.jpg",
      categories: {
         en: ["Favorite"],
         hi: ["पसंदीदा"]
      },
      techStack: [
         { name: "HTML5", iconClass: "devicon-html5-plain colored text-3xl" },
         { name: "CSS3", iconClass: "devicon-css3-plain colored text-3xl" },
         { name: "JavaScript", iconClass: "devicon-javascript-plain text-3xl colored" },
         { name: "Node.js", iconClass: "devicon-nodejs-plain-wordmark colored text-3.5xl", style: { fontSize: "3.8rem" } },
         { name: "Express.js", iconClass: "devicon-express-original text-3xl colored" },
         { name: "Handlebars", iconClass: "devicon-handlebars-original-wordmark text-3xl colored", style: { fontSize: "3.8rem" } },
         { name: "NPM", iconClass: "devicon-npm-original-wordmark colored text-3.5xl", style: { fontSize: "3.8rem" } },
      ],
      footerYear: 2024,
      githubLink: "https://github.com/Jadavnitin/password_manager",
      liveLink: "https://password-manager-2025.vercel.app/",
   },
   
   {
      title: {
         en: "Code Snippet",
         hi: "कोड स्निपेट"
      },
      description: {
         en: "This project is built using React.js with React Router DOM for navigation, Styled Components for styling, and MUI for UI enhancements. It features Monaco Editor, CodeMirror, PrismJS, and React Syntax Highlighter for code editing and formatting, with JS PDF, HTML-to-Image, and HTML2Canvas for exporting content as images or PDFs.",
         hi: "यह प्रोजेक्ट React.js का उपयोग करके React Router DOM के लिए नेविगेशन, Styled Components के लिए स्टाइलिंग और MUI के लिए UI सुधार करता है। इसमें Monaco Editor, CodeMirror, PrismJS, और React Syntax Highlighter शामिल हैं, जो कोड संपादन और स्वरूपण के लिए हैं, साथ ही JS PDF, HTML-to-Image, और HTML2Canvas का उपयोग करके सामग्री को छवियों या PDFs के रूप में निर्यात करते हैं।"
      },
      technologies: ["React.js", "Styled Components", "React Router", "Prism.js", "JsPdf", "CodeMirror", "Prettier", "HTML2Canvas", "NPM"],
      link: "https://code-snippet-nine.vercel.app/",
      image: "/Code Snippets.png",
      categories: {
         en: ["Favorite", "Dev Tool"],
         hi: ["पसंदीदा", "डेव टूल"]
      },
      techStack: [
         { name: "React.js", iconClass: "devicon-react-original-wordmark text-3xl colored" },
         { name: "Styled Components", iconSrc: "/styled-components.svg" },
         { name: "React Router", iconClass: "devicon-reactrouter-plain-wordmark colored text-3.5xl", style: { fontSize: "3.8rem" } },
         { name: "Prism.js", iconClass: "devicon-prisma-original colored text-3xl" },
         { name: "JsPdf", iconSrc: "/jspdf.svg" },
         { name: "CodeMirror", iconSrc: "/CodeMirror.svg", style: { width: "2.5rem", height: "2.5rem" } },
         { name: "Prettier", iconSrc: "/Prettier.png", style: { width: "2rem", height: "2rem" } },
         { name: "HTML2Canvas", customIcon: "FaCamera" },
         { name: "NPM", iconClass: "devicon-npm-original-wordmark colored text-3.5xl", style: { fontSize: "3.8rem" } },
      ],
      footerYear: 2024,
      githubLink: "https://github.com/Jadavnitin/code_snippet",
      liveLink: "https://code-snippet-nine.vercel.app/",
   },
   
   {
      title: {
         en: "Product Store",
         hi: "उत्पाद स्टोर",
      },
      description: {
         en: "Product Store is a modern, responsive web application built with React 19 that allows users to manage a list of products — including adding, editing, deleting, and filtering. It features image upload with compression, category-based filtering, pagination, sorting, and beautiful UI elements. The app uses a powerful combination of tools and libraries to deliver a seamless user experience.",
         hi: "प्रोडक्ट स्टोर एक आधुनिक, उत्तरदायी वेब एप्लिकेशन है जो React 19 का उपयोग करके बनाया गया है और उपयोगकर्ताओं को उत्पादों की सूची प्रबंधित करने की अनुमति देता है — जैसे जोड़ना, संपादित करना, हटाना और फ़िल्टर करना। इसमें इमेज अपलोड, श्रेणी आधारित फ़िल्टरिंग, पेजिनेशन और सुंदर UI विशेषताएं शामिल हैं।",

      },
      technologies: [
         "React.js",
         "Styled Components",
         "React Router",
         "Axios",
         "Redux Toolkit",
         "Antdesign",
         "SweetAlert",
         "NPM",
      ],
      link: "https://product-store-jet-three.vercel.app/signin",
      image: "/product_store.png",
      categories: {
         en: ["Favorite"],
         hi: ["पसंदीदा"],

      },
      techStack: [
         {
            name: "React.js",
            iconClass: "devicon-react-original-wordmark text-3xl colored",
         },
         {
            name: "Styled Components",
            iconSrc: "/styled-components.svg",
         },
         {
            name: "React Router",
            iconClass: "devicon-reactrouter-plain-wordmark colored",
            style: { fontSize: "3.8rem" },
         },
         {
            name: "Axios",
            iconClass: "devicon-axios-plain-wordmark colored",
            style: { fontSize: "3.5rem" },
         },
         {
            name: "Redux Toolkit",
            iconClass: "devicon-redux-original colored",
            style: { fontSize: "2.25rem" },
         },
         {
            name: "Antdesign",
            iconClass: "devicon-antdesign-plain-wordmark colored",
            style: { fontSize: "4.5rem" },
         },
         {
            name: "SweetAlert",
            iconSrc: "/sweetalertlogo.svg",
            style: { width: "4rem", height: "3rem" },
         },
         {
            name: "NPM",
            iconClass: "devicon-npm-original-wordmark colored",
            style: { fontSize: "3.8rem" },
         },
      ],
      footerYear: 2024,
      githubLink: "https://github.com/Jadavnitin/product_store",
      liveLink: "https://product-store-jet-three.vercel.app/signin",
   },
   {
      title: {
         en: "Dice Game",
         hi: "पासा खेल",
      },
      description: {
         en: "Developed an interactive dice game using React with multi-page navigation via React Router. Implemented dynamic game logic with real-time dice roll animations, score tracking, and condition-based outcomes. Styled the UI with responsive CSS for a clean, user-friendly experience.",
         hi: "React का उपयोग करके एक इंटरैक्टिव पासा गेम विकसित किया, जिसमें React Router के माध्यम से मल्टी-पेज नेविगेशन शामिल है। इसमें रीयल-टाइम पासा रोल एनिमेशन, स्कोर ट्रैकिंग और शर्तों पर आधारित परिणामों के साथ डायनामिक गेम लॉजिक को लागू किया गया। उपयोगकर्ता-अनुकूल अनुभव के लिए UI को उत्तरदायी CSS से स्टाइल किया गया।",
      },
      technologies: ["CSS3", "React.js", "React Router", "NPM"],
      link: "https://dicegame-one-beige.vercel.app/",
      image: "/dice_game.png",
      
      categories: {
         en: ["Game"],
         hi: ["खेल"],
      },
      
      techStack: [
      
         {
            name: "CSS3",
            iconClass: "devicon-css3-plain colored text-3xl",
         },
         {
            name: "React.js",
            iconClass: "devicon-react-original-wordmark text-3xl colored",
         },
         {
            name: "React Router",
            iconClass: "devicon-reactrouter-plain-wordmark colored text-3.5xl",
            style: { fontSize: "3.8rem" },
         },
         {
            name: "NPM",
            iconClass: "devicon-npm-original-wordmark colored text-3.5xl",
            style: { fontSize: "3.8rem" },
         },
      ],
      footerYear: 2024,
      githubLink: "https://github.com/Jadavnitin/dicegame",
      liveLink: "https://dicegame-one-beige.vercel.app/",
   },
   {
      title: {
         en: "Battery Status",
         hi: "बैटरी स्थिति",
      },
      description: {
         en: "Developed a web-based battery status indicator using the Battery Status API. The app displays real-time battery percentage, charging status, and updates dynamically as the battery state changes. Designed a clean and responsive UI using CSS for an intuitive user experience.",
         hi: "Battery Status API का उपयोग करके एक वेब-आधारित बैटरी स्थिति संकेतक विकसित किया। यह ऐप बैटरी का प्रतिशत, चार्जिंग स्थिति को रीयल-टाइम में दिखाता है और बैटरी की स्थिति बदलते ही अपने आप अपडेट होता है। CSS का उपयोग करके एक साफ-सुथरी और उत्तरदायी UI डिज़ाइन की गई है ताकि उपयोगकर्ता अनुभव सहज हो।",
      },
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "https://battery-status-seven.vercel.app/",
      image: "/Battery_Status.png",
      categories: {
         en: ["Web"],
         hi: ["वेब"],
      },
      techStack: [
         {
            name: "HTML5",
            iconClass: "devicon-html5-plain colored text-3xl",
         },
         {
            name: "CSS3",
            iconClass: "devicon-css3-plain colored text-3xl",
         },
         {
            name: "JavaScript",
            iconClass: "devicon-javascript-plain text-3xl colored",
         },
      ],
      footerYear: 2024,
      githubLink: "https://github.com/Jadavnitin/battery_status",
      liveLink: "https://battery-status-seven.vercel.app/",
   }
];

export default projectData;