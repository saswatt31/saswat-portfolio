import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saswat Pattanaik",
  initials: "SP",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Development Engineer · Full-Stack & AI/ML Systems",
  summary:
    "Hey there! I'm Saswat Pattanaik – an SDE with production experience across the full SDLC, system design, REST API development, CI/CD deployment, and cloud infrastructure. I've shipped SaaS platforms and AI/ML pipelines for international clients in Agile remote teams. I'm currently diving deep into Machine Learning (ML) and am actively seeking an internship. Beyond coding, I love watching anime, traveling solo, and seizing every opportunity to learn and build something exciting. Let’s connect! You can find me on [Twitter](https://x.com/SaswatPatt86285) and [GitHub](https://github.com/saswatt31). Feel free to check out my [resume!](https://docs.google.com/document/d/1sXrooB9xPJB6ov1BvxPcmJeL2TNi9T9_/edit?usp=sharing&ouid=101735334093907301993&rtpof=true&sd=true)",
  avatarUrl: "/PROFILE.jpeg",
  skills: [
    "React.js",
    "Next.js 14",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Python",
    "C++",
    "Go",
    "REST API Design",
    "Socket.io",
    "WebRTC",
    "SSE",
    "Tailwind CSS",
    "ShadCN",
    "Framer Motion",
    "Chart.js",
    "Claude API",
    "Gemini API",
    "RAG",
    "Groq (Llama 3.3 70B)",
    "YOLOv8",
    "Qdrant",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Supabase",
    "Appwrite",
    "Prisma",
    "Drizzle ORM",
    "Docker",
    "GitHub CI/CD",
    "Vercel",
    "Stripe",
    "System Design",
    "Agile/Scrum",
    "SDLC",
    "Unit Testing",
    "Microservices",
    "Event Sourcing",
    "Data Structures",
    "Algorithms"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "saswatpattanaik.dev@gmail.com",
    tel: "+91-9692105452",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saswatt31",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saswat-pattanaik/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/NeuralNova_",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "saswatpattanaik.dev@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CVBold.io / Webxcell Digital",
      href: "#",
      badges: [],
      location: "Remote, UK",
      title: "Freelance Software Developer",
      logoUrl: "",
      start: "April 2026",
      end: "Present",
      description:
        "Architected a 9-step CV builder (Next.js 14, TypeScript, Zustand) with full Stripe subscription lifecycle and RBAC Pro feature gating, reducing user drop-off across the checkout funnel. Built 7 AI career tools (CV scorer, ATS analyzer, interview coach) using Anthropic Claude API with SSE streaming, per-user quota enforcement, and secure JSONB storage in Supabase (PostgreSQL + RLS). Collaborated in Agile sprints — code reviews, REST API design, and iterative production releases within a 3-person distributed team.",
    },
    {
      company: "Independent Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Freelance Software Developer",
      logoUrl: "",
      start: "2024",
      end: "2025",
      description:
        "Abhail Physiotherapy (Ireland): Map-integrated booking platform with real-time slot availability — increased patient acquisition. TheKnowAI (US): AI-powered career-risk analyzer computing AI-replacement probability from LinkedIn data with personalized upskilling recommendations.",
    },
    {
      company: "Referrush",
      href: "https://www.referrush.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/referrush.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Currently working as a software engineer at Referrush building the product that includes their web application and shopify apps and extensions that will help thousands of brands in increasing their sales through direct customer referrals.",
    },
    {
      company: "Keyshade",
      href: "https://www.keyshade.xyz/",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/keyshade.png",
      start: "November 2024",
      end: "Jan 2025",
      description:
        "Currently working as a frontend engineer at Keyshade developing frontends for their Platform and Web application. Collaborating with the backend team to ship code with minimum production time errors and building with full efficiency. Being part of an open-source organization, also taking parts in PR reviews on Github.",
    },
    {
      company: "ChaiFluence",
      badges: [],
      href: "#",
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/chaifluence.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Incorporated the first website for the organization. Boosted operations by 50% through efficient AI integration in day-to-day processes.Devised strategy to increase the social media presence by 100%.",
    },
    {
      company: "The IT Studio",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Technical Content Developer",
      logoUrl: "./building.png",
      start: "July 2023",
      end: "November 2023",
      description:
        "Delivered technical content related to technologies like TypeScript, Next.js, and React.js for the organization's web application and social media handles. Worked with 10+ clients in setting up their web application and providing content in the technical domain. Boosted the organization's social media presence by 80% in the span of 3 months.",
    },
  ],
  education: [
    {
      school: "Sri Sri University, Cuttack",
      href: "https://srisriuniversity.edu.in/",
      degree: "B.Tech, Computer Science",
      logoUrl: "/SSU.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "CodeSync — Collaborative Code Editor",
      href: "https://code-sync-chi-one.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Implemented Operational Transformation (OT) for conflict-free concurrent edits + P2P video/audio via WebRTC (STUN/TURN) — zero merge conflicts in live sessions. Integrated Judge0 sandboxed execution, Event-Sourced Time Travel replay, Redis Pub/Sub horizontal scaling, and Gemini AI code analysis.",
      technologies: [
        "Next.js",
        "Socket.io",
        "WebRTC",
        "Redis",
        "MongoDB",
        "Judge0",
        "Gemini API"
      ],
      links: [
        {
          type: "Website",
          href: "https://code-sync-chi-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saswatt31/CodeSync",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "StreetScan — Smart Infrastructure Reporting",
      href: "https://street-scan-tw9z.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Dual-AI validation (YOLOv8 + Gemini severity scoring 0–100) across IoT, CV pipeline, and citizen portal — reduced false-positive reports; geo-clustering merges duplicates within 15 m.",
      technologies: [
        "Next.js 14",
        "Supabase",
        "YOLOv8",
        "Gemini 1.5 Flash",
        "ESP32",
        "C++"
      ],
      links: [
        {
          type: "Website",
          href: "https://street-scan-tw9z.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saswatt31/street-scan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FitMind AI v2.0",
      href: "https://fit-mind-ai-five.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "A high-performance RAG pipeline (FastEmbed + Qdrant + Llama 3.3 70B) delivering TDEE/BMR-calibrated 7-day meal & workout protocols via real-time SSE streaming, with vision-enabled meal analysis and support for multiple local profiles.",
      technologies: [
        "FastAPI",
        "Qdrant",
        "Sentence-Transformers",
        "Llama 3.3 70B",
        "Groq"
      ],
      links: [
        {
          type: "Website",
          href: "https://fit-mind-ai-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saswatt31/FitMindAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Invoicer",
      href: "https://github.com/saswatt31/Invoicer",
      dates: "",
      active: true,
      description:
"Invoicer is a powerful yet intuitive invoicing application designed to streamline payments and track invoices effortlessly. Whether you're a freelancer, small business owner, or enterprise, Invoicer helps you create, send, and manage invoices with ease.",
      technologies: [
        "Next.js",
        "Typescript",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
        "React Hook Form",
        "Stripe",
        "Clerk",
        "Drizzle ORM"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://youtu.be/PB7ZsftjHoU?si=hFuq7Tucc5PaYCV-",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/saswatt31/Invoicer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/invoicer.png",
      video:
        "",
    },
    {
      title: "Scloud",
      href: "https://github.com/saswatt31/Scloud",
      dates: "",
      active: true,
      description:
        "Scloud lets you store, sync, and access your files from anywhere. Enjoy seamless backups, file sharing, and top-tier security for all your data. 🚀🔒",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
        "Prisma",
        "Cloudinary",
        "Express.js",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/saswatt31/Invoicer",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/saswatt31/Scloud",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Scloud.png",
      video: "",
    },
    {
      title: "HoloConnect",
      href: "https://github.com/saswatt31/HoloConnect",
      dates: "",
      active: true,
      description:
        "HoloConnect is a fast, reliable video calling app for crystal-clear conversations. Enjoy high-quality calls, end-to-end encryption, screen sharing, and group meetings—all in one place. Stay connected anytime, anywhere! 🚀",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
        "Prisma",
        "WebRTC",
        "Socket.io",
        "Express.js",
        "Redis"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://minerush.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/saswatt31/HoloConnect",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/HoloConnect.png",
      video: "",
    },
    {
      title: "Genix",
      href: "https://github.com/saswatt31/Genix",
      dates: "",
      active: true,
      description:
        "Genix is an AI-powered content generator that creates engaging Twitter threads, LinkedIn posts, and Instagram captions effortlessly. 🚀✨",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
        "Prisma",
        "Socket.io",
        "Express.js",
        "Gemini",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://digitalinknew.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/saswatt31/Genix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Genix.png",
      video:
        "",
    },
    // {
    //   title: "TypeMaster",
    //   href: "https://typemaster-typingtest.netlify.app/",
    //   dates: "",
    //   active: true,
    //   description:
    //     "Want to 2x your productivity as a developer. There's no hack, learn typing with your 10 fingers and start working with double productivity. Start practising now!",
    //   technologies: [
    //     "React.js",
    //     "JavaScript",
    //     "TailwindCSS",
    //     "NPM",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://typemaster-typingtest.netlify.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/poswalsameer/TypeMaster",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/keyboard.jpg",
    //   video:
    //     "",
    // },
  //   {
  //     title: "Nitro Dash",
  //     href: "https://sameerposwal.itch.io/nitro-dash",
  //     dates: "",
  //     active: true,
  //     description:
  //       "A fun 2D car racing game. The goal is to beat your best friend's high score. Jump into it now!",
  //     technologies: [
  //       "C#",
  //       "Unity Game Engine"
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://sameerposwal.itch.io/nitro-dash",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/poswalsameer/Nitro-Dash",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "/nitro.jpg",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Leetcost",
  //     href: "https://leetcost.vercel.app",
  //     dates: "",
  //     active: true,
  //     description:
  //       "Are you too much passionate about DSA and Leetcode? Enter your leetcode username and get insights on how much time you have given to the platform.",
  //     technologies: [
  //       "Next.js",
  //       "TypeScript",
  //       "TailwindCSS",
  //       "ShadCN",
  //       "APIs",
  //       "NPM",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://leetcost.vercel.app",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/poswalsameer/Leetcost",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "/leetcost.png",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Scanly",
  //     href: "https://scanlyapp.vercel.app",
  //     dates: "",
  //     active: true,
  //     description:
  //       "Do you want to extract texts from your government IDs or even any random image? This application can come to your rescue!",
  //     technologies: [
  //       "Next.js",
  //       "TypeScript",
  //       "TailwindCSS",
  //       "ShadCN",
  //       "Tesseract.js",
  //       "NPM",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://scanlyapp.vercel.app",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/poswalsameer/Scanly",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "/scanly.png",
  //     video:
  //       "",
  //   },
  ],
  hackathons: [
    {
      title: "Lucide Icons",
      dates: "",
      location: "",
      description:
        "Rectified the issue of the wrong INKSCAPE image used on the deployed website.",
      image:
        "/lucide.png",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/lucide-icons/lucide/pull/2382",
        },
      ],
    },
    {
      title: "Codemod",
      dates: "",
      location: "",
      description:
        "Fixed inconsistent text color in the Clerk UI component.",
      image:
        "/codemod.jpg",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/codemod-com/codemod/pull/1352",
        },
      ],
    },
    {
      title: "Tabler",
      dates: "",
      location: "",
      description:
        "Repaired the wrong border styling used in the ribbon start class.",
      image:
        "/tabler.png",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/tabler/tabler/pull/1936",
        },
      ],
    },
    {
      title: "Keyshade",
      dates: "",
      location: "",
      description:
        "Added logic for joining the waitlist one time with one email only.",
      image:
        "/keyshade.png",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/keyshade-xyz/keyshade/pull/492",
        },
      ],
    },
    {
      title: "Shelf",
      dates: "",
      location: "",
      description:
        "Removed the extra $ sign appearing on the popup in workspaces tab.",
      image:
        "/shelf.png",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/Shelf-nu/shelf.nu/pull/1348",
        },
      ],
    },
    {
      title: "100xDevs",
      dates: "",
      location: "",
      description:
        "Conditionally rendered the `p` tag to show `per annum` text only when minSalary && maxSalary is valid.",
      image:
        "/100xdevs.jpg",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/code100x/job-board/pull/377",
        },
      ],
    },
    {
      title: "BM Samay",
      dates: "",
      location: "",
      description:
        "Revamped the privacy policy page to simplify the user experience.",
      image:
        "/samay.jpg",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/Bot-Rakshit/bm_frontend/pull/145",
        },
      ],
    },
  ],
} as const;
