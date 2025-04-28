
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Eager to learn, adapt, and contribute to real-world projects with clean, scalable code.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "pcbg2.jpg",
    spareImg: "",
  },

  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Gaining real-world experience by building full-stack projects",
    description: "From REST APIs to responsive UIs",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mind Sync",
    des: "Built a lightweight wearable using ESP32-CAM and LLMs to capture visual data and generate natural language summaries for smart memory recall. Designed for low-power operation, edge-first processing,",
    img: "/mindsync.png",
    iconLists: [
      "/mongodb.png",
      "/nodejs.png",
      "/reactjs.png",
      "/express.png",
      "/tailwind.png",
      "/huggingface.png",
    ],
    link: "https://mind-sync-eight.vercel.app/",
  },
  {
    id: 2,
    title: "Mock AI Interviewer",
    des: "The Mock AI Interviewer enhances interview skills with AI-driven simulations, real-time video integration, and detailed feedback, helping students and freshers.",
    img: "/Mock.png",
    iconLists: ["/next.svg", "/tailwind.png", "/gemini.png"],
    link: "https://mock-ai-snowy.vercel.app/",
  },
  {
    id: 3,
    title: "AiPPY",
    des: "AIpply uses cutting-edge artificial intelligence to help you prepare for interviews, highlight your strengths, and land your dream job.",
    img: "/aipply.png",
    iconLists: [
      "/spring.png",
      "/reactjs.png",
      "/nodejs.png",
      "/express.png",
      "/tailwind.png",
      "/gemini.png",
    ],
    link: "https://mock-ai-snowy.vercel.app/",
  },

  {
    id: 4,
    title: "Teachers Connect",
    des: "Teacher Connect is a comprehensive web application designed to streamline teacher-student interactions through an efficient appointment scheduling system.",
    img: "https://i.ibb.co/YQP0TWn/Screenshot-2024-11-22-223447.png",
    iconLists: [
      "/mongodb.png",
      "/nodejs.png",
      "/reactjs.png",
      "/express.png",
      "/tailwind.png",
    ],
    link: "https://teacher-connect.onrender.com/",
  },

  {
    id: 5,
    title: "Smart Mirror",
    des: "Developed a Smart Mirror with real-time data integration using Kali Linux, Features include interactive voice control, weather updates, calendar integration. Demonstrated skills in IoT, software development.",
    img: "/Mirror.jpeg",
    iconLists: ["/javascript.png"],
    link: "https://github.com/thejaAshwin62/Smart-Mirror",
  },
  {
    id: 6,
    title: "AR Appliences",
    des: "Developed an AR app allows users to visualize home appliances in their space, providing an immersive and interactive experience. Demonstrated expertise in AR development, Unity, and enhancing user engagement through innovative technology",
    img: "/AR.png",
    iconLists: ["/unity2.png"],
    link: "",
  },
  {
    id: 7,
    title: "Odyssey Journey",
    des: "My project offers users a seamless experience to book and manage ship events. This platform caters to both event organizers and attendees",
    img: "/ship.png",
    iconLists: [
      "/tailwind.png",
      "/nodejs.png",
      "/express.png",
      "/mongodb.png",
      "/reactjs.png",
    ],
    link: "https://github.com/thejaAshwin62/Odyssey-Journey",
  },
  {
    id: 8,
    title: "EA Infinity",
    des: "esports_Arena, is a dynamic platform that allows users to book and participate in esports tournaments for popular games,Players can register for matches,The platform features an integrated admin panel.",
    img: "https://i.ibb.co/GxtJ5RL/ea.png",
    iconLists: [
      "/tailwind.png",
      "/nodejs.png",
      "/express.png",
      "/mongodb.png",
      "/reactjs.png",
    ],
    link: "https://ea-infinity.onrender.com",
  },
  {
    id: 9,
    title: "Jobify",
    des: "Job tracking is part of the project management processes within field service operations. It’s what you follow to keep an eye on the pipeline of jobs and their statuses.",
    img: "/jobify.png",
    iconLists: ["/nodejs.png", "/mongodb.png", "/express.png", "/reactjs.png"],
    link: "https://jobify-mern-bubi.onrender.com/",
  },
  {
    id: 10,
    title: "Tinger",
    des: "I deploy a Basic ReactJS website which extracts news/article body from a URL and uses GPT to summarize (and optionally translate) the article content. Useful for text mining purposes (ScrapeNinja.net).",
    img: "/Tinger.jpeg",
    iconLists: ["/reactjs.png", "/gemini.png"],
    link: "ttps://tinger-finity.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "The Smart Mirror project earned a distinguished third-place finish at the Intercollege Hackathon, a testament to its inventive design and strategic implementation.",
    name: "Mahendra Educational Institutions",
    title: "Catch-24 | Hackathon",
  },
  {
    quote:
      "My project was selected as one of the top eight teams at the prestigious Indian Cyber Security Hackathon. Recognized for its innovation, technical depth, and real-world applicability, the project stood out among numerous competitive entries from across the country. This achievement reflects a strong commitment to cutting-edge problem-solving and excellence in the field of cybersecurity.",
    name: "Christ University",
    title: "ARDC's | CS hackathon",
  },
  {
    quote:
      "The AR Appliances project has been selected for the third round of the prestigious Government Hackathon. This advancement reflects the project's innovative use of augmented reality to revolutionize appliance interactions. Recognized for its potential to bring meaningful change, the project has garnered attention for its forward-thinking design",
    name: "MSME Government of India",
    title: "MSME | Idea Hackathon",
  },
  {
    quote:
      "Acquired in-depth expertise and a comprehensive understanding of HTML, CSS, and JavaScript, mastering the core technologies essential for building dynamic and responsive web applications.",
    name: "Imagecon Academy",
    title: "Web Development Intenship,",
  },
  {
    quote:
      "Gained expertise and a thorough understanding of Android Studio, Flutter, and the Dart programming language, enabling the development of cross-platform mobile applications with seamless user experiences and high performance.",
    name: "Imagecon Academy",
    title: "Mobile Application Development Intenship",
  },
  {
    quote:
      "Noticed and gained a strong understanding of key concepts within the MERN stack (MongoDB, Express, React.js, and Node.js), enabling the development of full-stack web applications with efficient backend and dynamic, responsive front-end interfaces.",
    name: "Sona college of technology",
    title: "Full Stack Development Workshop",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern - Neuron.ai",
    desc: "Built a teacher-student appointment scheduling app using React, Node.js, Express.js, and MongoDB, ensuring scalability and performance",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - Imagecon Academy",
    desc: "Acquired expertise and understanding in Android Studio, Flutter, and Dart Language",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/thejaAshwin62",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/theja-ashwin/",
  },
];

