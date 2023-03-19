import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  vidkart,
  portfolio,
  asg,
  infosys,
  gradeup,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "Problem solver",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];
console.log(asg);
const experiences = [
  {
    title: "Backend Developer Intern",
    company_name: "ASG Technologies",
    icon: asg,
    iconBg: "#383E56",
    date: "May 2020 - July 2020",
    points: [
      "Used node.js, express, and mongodb for developing backend , sendgrid for sending emails",
      "Developed the register/login functionality for teacher/ student",
      "Allowed them to verify their emails by sending otp ",
      "Added the forget password functionality",
      "Teachers can add/delete the video lectures",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Gradeup | BYJU's Exam Prep",
    icon: gradeup,
    iconBg: "#123",
    date: "August 2021 - May 2022",
    points: [
      "Worked with react.js for frontend, and node.js for backend ",
      "Developed a login and logout capability for five static contact numbers in order to quickly perform user operations by internal team for analysis. Also created an API for deleting those numbers. Reduced login time for developer by 90%",
      "Built a feature for inserting each row of csv file into DB and appending a column of status as success or failure.",
      "Revamped batch/demo class page.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Infosys",
    iconBg: "#383E56",
    date: "June 2022 - Present",
    icon: infosys,
    points: [
      "Developed progress bar to show the different states of the order.",
      "Created tiles to show the different statistics of the orders",
    ],
  },
];

const projects = [
  {
    name: "Vidkart",
    description:
      "By this website student can sell/buy the items in the campus. They can upload the picture and fill up the detail about the item. Buyer can contact the seller.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: vidkart,
    source_code_link: "https://github.com/deepesharya123/vidkart",
  },
  {
    name: "Portfolio Website",
    description: "A resume that is represented in form attractice website ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
