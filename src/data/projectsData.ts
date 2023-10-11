import portfolio from "@/assets/project_imgs/portfolio.png";
import racwood from "@/assets/project_imgs/racwood.png";
import marketingnet from "@/assets/project_imgs/marketingnet.png";
import madailab from "@/assets/project_imgs/madailab.png";
import proctoringnet from "@/assets/project_imgs/proctoringnet.png";
import chatSearchNSave from "@/assets/project_imgs/chatSearchNSave.png";
import dictionary1 from "@/assets/project_imgs/dictionary1.png";
import allinone from "@/assets/project_imgs/ideogram_allinone.png";
import { Projects } from "../../types";
import { nanoid } from "nanoid";

export const projects: Projects = {
  2023: [
    {
      id: nanoid(),
      title: "My Portfolio",
      img: portfolio,
      description:
        "Explore my showcase of diverse web projects, encompassing front-end and back-end development. This portfolio not only reflects my technical skills but also highlights my passion for creating innovative and user-centric web solutions. Discover a collection of web applications, websites, and more that demonstrate my dedication to crafting seamless digital experiences.",
      github: new URL("https://github.com/DeepakGunpal/portfolio"),
      link: new URL("https://portfolio-deepakgunpal.vercel.app/"),
      tech: [
        "Nextjs 13",
        "TypeScript",
        "Framer Motion",
        "TailwindCSS",
        "ShadcnUI",
        "valtio",
      ],
      context: "Personal",
      status: "Live",
    },
    {
      id: nanoid(),
      title: "Racwood.com - Art and Craft Handicraft Furniture Website",
      img: racwood,
      description:
        "Lead developer for Racwood.com, an online platform specializing in art and craft handicraft furniture. Leveraged my expertise in the Next.js, TypeScript, and more to create a visually appealing and user-friendly website. Integrated admin panel, payment gateway, and optimized performance for a seamless customer experience.",
      link: new URL("https://racwood.vercel.app/"),
      tech: [
        "Nextjs 13.5 (App Router)",
        "TypeScript",
        "Framer Motion",
        "TailwindCSS",
        "ShadcnUI",
        "NextUI",
        "Recoil",
        "GraphQl",
        "Zod",
        "MongoDB",
        "Github",
        "Cloudinary",
      ],
      context: "Freelancer",
      status: "Work In Progress",
    },
    {
      id: nanoid(),
      title: "MAd Ai Lab - Marketing Advertising AI Lab",
      img: madailab,
      description:
        "A research papers library for researchers and students. Provides filtered and searchable access to selected papers for effective knowledge building.",
      contributions: [
        "Recommended and led the adoption of Next.js 13 App Router for this new product, MAd Ai Lab, to leverage its improved routing, SEO and other capabilities.",
        "Successfully implemented Figma designs in Next.js, maintaining a high fidelity between design and the final product.",
        "Set up the project in Next.js with the latest app router, ensuring efficient navigation and improved performance.",
        "Implemented authentication, enhancing the security of the application.",
      ],
      link: new URL("https://madailab.com/"),
      tech: [
        "Nextjs 13.5 (App Router)",
        "Redux",
        "NodeJS",
        "JavaScript",
        "MongoDB",
        "Gitlab",
        "Bootstrap",
      ],
      context: "MentorStudents.org",
      status: "Work In Progress",
    },
    {
      id: nanoid(),
      title: "Chat SearchNSave - Chrome Extension For ChatGpt",
      img: chatSearchNSave,
      description:
        "Manage and organize your ChatGPT conversations effortlessly with the Chat Search and Save Chrome extension. Auto-save, advanced search, and seamless navigation make it a must-have tool for enhanced productivity.",
      contributions: [
        "Implemented authentication for the Chrome extension, safeguarding user data and interactions.",
        "Enabled users to search older conversations, improving the accessibility and usability of the extension.",
        "Implemented a feature to send crash reports via email, allowing for rapid bug identification and resolution.",
        "Designed and developed a welcoming page to provide a user-friendly onboarding experience.",
      ],
      link: new URL(
        "https://chromewebstore.google.com/detail/chat-searchnsave/jbknbieibfhhdkcopebpddjgfkaophcc"
      ),
      tech: ["HTML", "CSS", "JavaScript", "Chrome APIs", "Bootstrap"],
      context: "MentorStudents.org",
      status: "Live",
    },
    {
      id: nanoid(),
      title: "MarketingNet.com - Get Better At Marketing",
      img: marketingnet,
      description:
        "A comprehensive Ads library and platform for digital marketers, offering a rich collection of articles and resources",
      contributions: [
        "Implemented Figma designs for several pages in React, ensuring a seamless transition from design to development.",
        "Developed admin pages to track key metrics, providing valuable insights for data-driven decision-making.",
      ],
      link: new URL("https://marketingnet.com/"),
      tech: [
        "React",
        "Redux",
        "NodeJS",
        "JavaScript",
        "MongoDB",
        "Gitlab",
        "Bootstrap",
        "ExpressJs",
        "Puppeteer",
      ],
      context: "MentorStudents.org",
      status: "Work In Progress",
    },
    {
      id: nanoid(),
      title: "ProctoringNet - Online Interview Test Platform",
      img: proctoringnet,
      description:
        "ProctoringNet is a cutting-edge Online Interview Test Platform that streamlines the interview process. It offers advanced proctoring features, admin tools for candidate evaluation, and a seamless experience for both candidates and interviewers.",
      contributions: [
        "Developed admin pages to track each candidate's answers, providing a comprehensive view of candidate performance.",
        "Implemented functionality to view video and screen recordings of candidates during tests, enhancing the assessment process.",
        "Successfully merged smaller chunks of blob files from candidate's screen and video recordings, ensuring seamless playback and analysis of recorded content.",
      ],
      tech: [
        "React",
        "Redux",
        "NodeJS",
        "JavaScript",
        "MongoDB",
        "Gitlab",
        "Bootstrap",
        "ExpressJs",
      ],
      context: "MentorStudents.org",
      status: "Work In Progress",
    },
  ],
  2022: [
    {
      id: nanoid(),
      title: "All In One",
      img: allinone,
      description:
        "All In One platform - your ultimate destination for local shopping convenience. Whether you're a vendor looking to expand your reach, a customer in search of nearby shops, a delivery rider seeking opportunities, or an admin in need of insightful business data, we've got you covered. With vendor registration, order tracking, wallet payments, and robust admin tools, we bring local commerce to your fingertips.",
      contributions: [
        `As a developer for 'All In One,' I have built the complete backend for this project. My key contributions include:`,
        `Vendor Module:
        - Designed and implemented the vendor registration system, enabling seamless onboarding for sellers.
        - Developed the admin dashboard for order tracking and comprehensive performance metrics.`,
        `Customer Module:
        - Created the location-based vendor finder, simplifying the shopping experience for customers.
        - Integrated a secure wallet system, allowing customers to recharge and make hassle-free in-app payments.
        - Implemented order tracking functionality, keeping customers informed about their deliveries.`,
        `Rider Module:
        - Established a rider registration feature, opening up earning opportunities for delivery personnel.`,
        `Admin Module:
        - Developed the admin panel for efficient vendor management and analysis.
        - Implemented order and payment tracking with date filtering for data-driven decision-making.`,
      ],
      tech: [
        "NodeJS",
        "JsonWebToken",
        "MongoDB",
        "GitHub",
        "ExpressJs",
        "RazorPay",
        "Cloudinary",
        "Digital Ocean",
      ],
      context: "Freelancer",
      status: "Delivered",
    },
    {
      id: nanoid(),
      title: "Dictionary",
      img: dictionary1,
      description:
        "Experience the power of language with our Dictionary App, powered by Oxford Dictionaries APIs. Access a wealth of knowledge with comprehensive definitions, synonyms, antonyms, and pronunciation guides. Explore the richness of words and their meanings, all in the palm of your hand.",
      github: new URL("https://github.com/DeepakGunpal/dictionary"),
      link: new URL("https://dgdictionary.onrender.com/"),
      tech: [
        "React",
        "NodeJS",
        "JavaScript",
        "MongoDB",
        "GitHub",
        "ExpressJs",
        "Oxford Dictionaries Apis",
      ],
      context: "Personal",
      status: "Live",
    },
  ],
};
