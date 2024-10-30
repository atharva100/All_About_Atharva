import project1 from "/kisandar.png";
import project2 from "/ipl.avif";
import project3 from "/sort.png";
import project4 from "/kuber.jpg";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Varun Soni",
  role: "Full Stack Developer",
  subheading:
    "Currently a third-year Computer Engineering student with a strong background in data analysis and web development. Winner of Mumbai Hacks 2024 in the FinTech category. Experienced in developing innovative solutions and proficient in leveraging data insights to drive impactful results.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Kisandar",
    description:
      " Kisandar is a contract farming platform which aims to bridge the gap between farmers and buyers, enabling streamlined contract farming and empowering farmers with better opportunities.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project1,
    link: "https://github.com/varunsoni3404/Kisandar",
  },
  {
    id: 2,
    title: "IPL_Win_Predictor",
    description:
      "This machine learning model, built using logistic regression, predicts the probability of a team winning an IPL match based on the current match situation. Get ready to make data-driven predictions!",
    techStack: ["Python", "Pandas", "scikit-learn"],
    imgSrc: project2,
    link: "https://github.com/varunsoni3404/IPL_Win_Predictor",
  },
  {
    id: 3,
    title: "Sorting Visualiser",
    description:
      "A simple program which animates bubble sort, insertion sort and selection sort. Can be used to teach sorting algorithms visually for better understanding.",
    techStack: ["HTML", "CSS","JavaScript"],
    imgSrc: project3,
    link: "https://github.com/varunsoni3404/Sortin-Visualiser",
  },
  {
    id: 4,
    title: "Kuber",
    description:
      "Kuber is a comprehensive finance management solution designed to help users with all their financial needs, from investment planning to taxation. Powered by Generative AI, Kuber offers personalized financial insights and recommendations to ensure that users make informed decisions efficiently and effortlessly.",
    techStack: ["React", "Flask", "Tailwind CSS"],
    imgSrc: project4,
    link: "#",
  }
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="" />,
  },
  {
    name: "CSS",
    icon: <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="" />,
  },
  {
    name: "JavaScript",
    icon: <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="" />,
  },
  {
    name: "React",
    icon: <img src="https://img.icons8.com/?size=100&id=35989&format=png&color=228BE6" alt="" />,
  },
  {
    name: "Node.js",
    icon: <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" />,
  },
  {
    name: "Express.js",
    icon: <img src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF" />,
  },
  {
    name: "MongoDB",
    icon: <img src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="" />
  },
  {
    name: "Tailwind CSS",
    icon: <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="" />,
  },
  {
    name: "Python",
    icon: <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="" />,
  },  
  {
    name: "Pandas",
    icon: <img src="https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000" alt="" />,
  },  
  {
    name: "Power BI",
    icon: <img src="https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000" alt="" />,
  },  
  {
    name: "Flask",
    icon: <img src="https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=FFFFFF" alt="" />,
  },  
];

export const EXPERIENCES = [
  {
    yearRange: "Jun 2024 - Aug 2024",
    role: "Data analyst",
    company: "Ambit Finvest",
    description:
      " Worked on data cleaning, refactored code, and automated tasks using Python. Additionally, created interactive dashboards in Looker Studio to visualize data insights. ",
    techStack: ["Python", "Pandas", "Looker Studio", "Power BI", "SQL"],
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "KJ Somaiya College of Engineering",
    duration: "2022 - 2026",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  }
];

