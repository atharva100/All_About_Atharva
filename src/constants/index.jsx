import project1 from "/kisandar.png";
import project2 from "/medbot.png";
import project3 from "/sort.png";
import project4 from "/kuber3.png";

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
  name: "Atharva Karawade",
  role: "Data Engineer",
  subheading:
    "Electronics Engineering graduate with a strong background in Data Engineering and Business Intelligence. Passionate about leveraging data to make smarter business decisions.\nLets connect!",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Kisandar",
    description:
      " Kisandar is a contract farming platform which aims to bridge the gap between farmers and buyers, enabling streamlined contract farming and empowering farmers with better opportunities.",
    techStack: ["React", "Node.js", "Express", "MongoDB","Gemini"],
    imgSrc: project1,
    link: "https://www.youtube.com/watch?v=Ljp99-6vJHk",
  },
  
  {
    id: 4,
    title: "Kuber",
    description:
      "Kuber is a comprehensive finance management solution designed to help users with all their financial needs, from investment planning to taxation. Powered by Generative AI, Kuber offers personalized financial insights and recommendations to ensure that users make informed decisions efficiently and effortlessly.",
    techStack: ["React", "Flask", "Tailwind CSS","LLama","PowerBI"],
    imgSrc: project4,
    link: "https://www.youtube.com/watch?v=yDGxCU26grs&t=2s",
  },
  {
    id: 2,
    title: "MediBot",
    description:
      "A user-friendly medical chatbot designed to assist elderly individuals by providing preliminary solutions for minor health concerns, enhancing accessibility and convenience in healthcare",
    techStack: ["Flask", "SQLite","scikit-learn","Claude LLM"],
    imgSrc: project2,
    link: "https://docs.google.com/presentation/d/1wjtElj1uBlyeKYcRIJzmPkTAdeUd-jIZ/edit?usp=drive_link&ouid=107082091845779620794&rtpof=true&sd=true",
  },
];

export const SKILLS = [

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
    name: "Tableau",
    icon: <img src="https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000" alt="" />,
  },  

  {
    name: "Scikitlearn",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="" />,
  },  
  {
    name: "AzureML",
    icon: <img src="https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000" alt="" />,
  },  
  {
    name: "Apache Airflow",
    icon: <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iIzAxN2NlZSIgZD0ibTIuNTQ0IDEyN2w2MC44MS02Mi4zMzJhMS4xMjQgMS4xMjQgMCAwIDAgLjEzNS0xLjQzN2MtMy42OTgtNS4xNjItMTAuNTIxLTYuMDU4LTEzLjA1LTkuNTI3Yy03LjQ5LTEwLjI3NS05LjM5LTE2LjA5Mi0xMi42MS0xNS43M2ExIDEgMCAwIDAtLjU4NS4zMDhMMTUuMjc4IDYwLjhDMi42NCA3My43NDQuODI0IDEwMi4yNzUuNDk2IDEyNi4xNjdhMS4xOSAxLjE5IDAgMCAwIDIuMDQ4LjgzMyIvPjxwYXRoIGZpbGw9IiMwMGFkNDYiIGQ9Ik0xMjYuOTkgMTI1LjQ2TDY0LjY1OCA2NC42NDdhMS4xMjQgMS4xMjQgMCAwIDAtMS40MzktLjEzNmMtNS4xNjIgMy43LTYuMDU4IDEwLjUyMS05LjUyNyAxMy4wNWMtMTAuMjc1IDcuNDktMTYuMDkyIDkuMzkxLTE1LjczIDEyLjYxYTEgMSAwIDAgMCAuMzA4LjU4M2wyMi41MTggMjEuOTY2YzEyLjk0NCAxMi42MzggNDEuNDc1IDE0LjQ1NCA2NS4zNjcgMTQuNzgyYTEuMTkgMS4xOSAwIDAgMCAuODM1LTIuMDQxeiIvPjxwYXRoIGZpbGw9IiMwNGQ2NTkiIGQ9Ik02MC43OTIgMTEyLjcyYy03LjA3Ni02LjkwMy0xMC4zNTUtMjAuNTU5IDMuMjA2LTQ4LjcxOWMtMjIuMDQ2IDkuODUzLTI5Ljc3MSAyMi44MDMtMjUuOTcyIDI2LjUxMXoiLz48cGF0aCBmaWxsPSIjMDBjN2Q0IiBkPSJNMTI1LjQ1IDEuMDExTDY0LjY0MyA2My4zNDNhMS4xMiAxLjEyIDAgMCAwLS4xMzYgMS40MzdjMy43IDUuMTYzIDEwLjUyIDYuMDU4IDEzLjA1IDkuNTI3YzcuNDkgMTAuMjc1IDkuMzkzIDE2LjA5MiAxMi42MSAxNS43M2EuOTguOTggMCAwIDAgLjU4NS0uMzA4bDIxLjk2Ni0yMi41MThjMTIuNjM4LTEyLjk0NCAxNC40NTQtNDEuNDc1IDE0Ljc4Mi02NS4zNjdhMS4xOTMgMS4xOTMgMCAwIDAtMi4wNS0uODMyeiIvPjxwYXRoIGZpbGw9IiMxMWUxZWUiIGQ9Ik0xMTIuNzMgNjcuMjExYy02LjkwMyA3LjA3Ni0yMC41NTkgMTAuMzU1LTQ4LjcyMS0zLjIwNmM5Ljg1MyAyMi4wNDYgMjIuODAzIDI5Ljc3MSAyNi41MTEgMjUuOTcyeiIvPjxwYXRoIGZpbGw9IiNlNDM5MjEiIGQ9Im0xLjAwMiAyLjU1bDYyLjMzMiA2MC44MDdhMS4xMjQgMS4xMjQgMCAwIDAgMS40MzYuMTM1YzUuMTYzLTMuNyA2LjA1OC0xMC41MiA5LjUyNy0xMy4wNWMxMC4yNzUtNy40OSAxNi4wOTItOS4zOSAxNS43MzEtMTIuNjFhMSAxIDAgMCAwLS4zMDgtLjU4NEw2Ny4yMDIgMTUuMjgyQzU0LjI1OCAyLjY0NCAyNS43MjcuODI4IDEuODM1LjVhMS4xOSAxLjE5IDAgMCAwLS44MzMgMi4wNSIvPjxwYXRoIGZpbGw9IiNmZjc1NTciIGQ9Ik02Ny4yMTIgMTUuMjg0YzcuMDc2IDYuOTA0IDEwLjM1NSAyMC41NTktMy4yMDYgNDguNzIxQzg2LjA1MiA1NC4xNTMgOTMuNzc3IDQxLjIgODkuOTc4IDM3LjQ5NHoiLz48cGF0aCBmaWxsPSIjMGNiNmZmIiBkPSJNMTUuMjc5IDYwLjhDMjIuMTgzIDUzLjcyNCAzNS44MzggNTAuNDQ1IDY0IDY0LjAwNkM1NC4xNDggNDEuOTYgNDEuMTk3IDM0LjIzNSAzNy40ODkgMzguMDM0eiIvPjxjaXJjbGUgY3g9IjY0LjAwOSIgY3k9IjYzLjk5NSIgcj0iMi43MTgiIGZpbGw9IiM0YTQ4NDgiLz48L3N2Zz4=" alt="" />,
  },  


  {
    name: "MongoDB",
    icon: <img src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="" />
  },
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
    name: "Flask",
    icon: <img src="https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=FFFFFF" alt="" />,
  },  
];

export const EXPERIENCES = [
  {
    yearRange: "Jan 2025 - July 2025",
    role: "Data Engineering",
    company: "Global Payex Pvt Ltd",
    description:
      "Led a team for the development of an ensemble model for classification of financial documents with a model accuracy of over 96%. Leveraged Apache Airflow and AzureML for efficient pipeline development for the entire process flow of the project",
    techStack: ["Python", "Pandas", "Looker Studio", "Power BI", "SQL"],
  },
  {
    yearRange: "June 2024 - Spetember 2024",
    role: "Data analyst",
    company: "Indian Institute of Technology, Bombay",
    description:
      "Interned in the prestigious SINE incubator lab of IIT Bombay to analyse patient records and identify patterns in disease symptoms and diagnosis trends. Developed data driven models to assess risk factors and improve diagnostic accuracy for common ailments. Effectively applied predictive analytics to reduce diagnostic time by 25%",
    techStack: ["Python", "Pandas", "Looker Studio", "Power BI", "SQL"],
  }

];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology in Electronics Engineering(Minors in Computer Engineering)",
    institution: "KJ Somaiya College of Engineering",
    duration: "2021 - 2025",
    description:
      "Graduated with a minors degree in Computer Engineering with a curriculum tailored towards data analytics and business intelligence.",
  },
  {
    id: 1,
    degree: "12th HSC(92.5%)",
    institution: "Pace Junior Science College",
    duration: "2021 - 2025",
    description:
      "Graduated with a minors degree in Computer Engineering with a curriculum tailored towards data analytics and business intelligence.",
  },
  {
    id: 1,
    degree: "10th SSC(94%)",
    institution: "Vasant Vihar High School",
    duration: "2005 - 2019",
    description:
      "Graduated with a minors degree in Computer Engineering with a curriculum tailored towards data analytics and business intelligence.",
  }
];

