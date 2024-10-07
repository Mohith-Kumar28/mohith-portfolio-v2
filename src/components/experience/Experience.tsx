import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Edstruments",
    position: "Frontend Developer",
    time: "Sept 2024 - Present",
    location: "Hybrid, Bangalore",
    description:
      "As a Front End Developer at Edstruments, I'm currently focused on developing various features for our billing management software using ReactJS. This platform is utilized by schools and NGOs to streamline their financial processes. My work involves enhancing the functionality and user experience of the application, ensuring it meets the unique needs of our diverse client base. I collaborate closely with team members across different countries, which has sharpened my cross-cultural communication skills and broadened my perspective on global software development practices.",
    tech: [
      "ReactJS",
      "Material UI",
      "Redux",
      "Team Collaboration",
    ],
  },
  {
    title: "MapUp",
    position: "Fullstack Developer",
    time: "Aug 2023 - Sept 2024",
    location: "Remote",
    description:
      "Worked closely with data and development teams to launch an MVP and gather feedback from users for TollTally website. Integrated an industry-standard plugin for the Motive marketplace, ensuring scalability for up to 100,000 users using a combo of AWS and ExpressJS . Created a map visualization for toll data, enhancing performance with a 580% faster loading time. Refactored the TollGuru dashboard from WordPress to Astro, improving load times and delivering a clean, consistent UI.",
    tech: [
      "NextJS",
      "ExpressJS",
      "MongoDB",
      "TypeScript",
      "AWS",
      "Git",
      "Astro",
      "Team Collaboration",
    ],
  },
  {
    title: "Foozy",
    position: "Fullstack Developer",
    time: "Aug 2022 - Jul 2023",
    location: "LPU, Punjab",
    description:
      "Whipped up a fancy food ordering app in the blink of an eye (4 months, but who's counting?). Helped local vendors go digital, raked in some decent sales during the pilot. Tech stack? Oh, you know, the usual suspects: Next.js, Tailwind CSS, Express.js, MongoDB. Threw in some Figma magic for good measure. Deployed on Vercel, Railway, and MongoDB Atlas because we're all about that scalable, reliable life.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Figma",
      "Redux",
      "Google OAuth",
      "Firebase OTP",
      "Web Push notification",
      "Web BLE",
    ],
  },
  {
    title: "Freelance",
    position: "Part Time",
    time: "Jan 2023 - Present",
    location: "Remote",
    description:
      "Collaborated with various clients across various industries. Leveraged strong communication skills and design expertise to exceed expectations and deliver exceptional results. Remained up-to-date with the latest design trends to provide innovative solutions.",
    tech: ["Figma", "Wordpress", "Canva", "Product Management"],
  },
  {
    title: "NexCart",
    position: "Part Time",
    time: "Jul 2021 - Mar 2022",
    location: "Remote",
    description:
      "Developed a web application to display dashboard data received from over 2000 shopkeepers associated with NexCart. Using ReactJS, I created an admin dashboard with a responsive and user-friendly interface. Additionally, I implemented Apex charts and React Lightweight charts to create interactive charts and graphs.",
    tech: [
      "ReactJS",
      "Responsive Design",
      "Data Visualization",
      "Dashboard Development",
    ],
  },
];
