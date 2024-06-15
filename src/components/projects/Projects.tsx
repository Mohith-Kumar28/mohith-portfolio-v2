import React, { useState } from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import { motion } from "framer-motion";
import { OutlineButton } from "../buttons/OutlineButton";
import MiniProjectCard from "./MiniProjectCard";

export const Projects = () => {
  const [viewAllOpen, setViewAllOpen] = useState(false);
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <motion.div
        initial={false}
        animate={viewAllOpen ? "open" : "closed"}
        style={{
          overflow: "hidden",
        }}
        variants={{
          open: {
            height: "fit-content",
          },
          closed: {
            height: 800,
          },
        }}
        className="relative grid gap-12 grid-cols-1 md:grid-cols-2 p-8"
      >
        {/* <div className="grid gap-12 grid-cols-1 md:grid-cols-2"> */}
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
        {/* </div> */}

        {/* <div className="flex flex-wrap w-full gap-6 mt-4"> */}
        {miniProjects.map((project) => (
          <MiniProjectCard key={project.name} project={project} />
        ))}
        {/* </div> */}

        <motion.div
          variants={{
            open: {
              top: "100%",
            },
            closed: {
              top: "70%",
            },
          }}
          className="absolute bottom-0  left-0 right-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950"
        />
      </motion.div>
      <OutlineButton
        onClick={() => setViewAllOpen((pv) => !pv)}
        className={`mx-auto ${viewAllOpen ? " mt-12 " : " -mt-16 "} =`}
      >
        {viewAllOpen ? "View less" : "View more"}
      </OutlineButton>
    </section>
  );
};

const projects = [
  {
    title: "Foozy",
    imgSrc: "/works/1.png",
    code: "https://bit.ly/4aKGT4Y",
    projectLink:
      "https://www.canva.com/design/DAGEGToE2vc/iLsf3Tb1r4fyw6Peup7jZw/view?utm_content=DAGEGToE2vc&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    tech: ["Food Pre Ordering Platform", "MERN Stack"],
    description:
      "Hey there Ever had one of those ideas that felt too big to be real? That's exactly how Foozy started - as a wild dream in my college dorm room. Now, it's a real deal, using tech magic to make food ordering a breeze. Want to hear how we did it? Let's dive in!",
    modalContent: (
      <>
        <p>
          Ah, the tale of Foozy begins in the hallowed halls of college, where
          dreams of grandeur mix with the reality of deadlines. Amidst the
          chaos, a spark ignited - the idea to create a platform that would
          streamline the food ordering process, making it not just convenient
          but a breeze for everyone involved. And thus, Foozy was born, a
          shining beacon of innovation in the culinary world.
        </p>{" "}
        <p>
          So, what's the secret sauce behind Foozy? Well, it's a mix of some
          pretty cool tech ingredients. We're talking NextJS for making websites
          super fast, TailwindCSS for making everything look awesome without
          breaking the bank, and ExpressJS for handling all the backend stuff
          smoothly. MongoDB is our trusty sidekick for storing all the juicy
          details about orders, and Redux keeps everything running like
          clockwork.
        </p>{" "}
        <p>
          But wait, there's more We've got Google OAuth for easy sign-ins,
          Firebase OTP for those "oops, forgot my password" moments, and push
          notifications to keep everyone in the loop. It's like we've taken all
          the headaches out of ordering food and left the fun part – eating
          delicious meals.
        </p>{" "}
        <p>
          Why should you care? Because Foozy isn't just about making life easier
          for folks who love food. It's about supporting local businesses and
          making sure everyone gets their grub on in the easiest, most
          hassle-free way possible. Plus, it's a great story to tell at parties.
          Who doesn't love a good startup success story?
        </p>{" "}
        <p>
          In short, Foozy is more than just a food ordering platform. It's a
          testament to what happens when you combine a dash of creativity, a
          sprinkle of tech wizardry, and a whole lot of determination. So, the
          next time you're feeling ambitious, remember Foozy. Maybe your next
          big idea is just around the corner.
        </p>
      </>
    ),
  },
  {
    title: "Motive Plugin",
    imgSrc: "/works/7.png",
    code: "",
    projectLink:
      "https://marketplace.gomotive.com/app/tolltally-gps-based-instant-toll-billing",
    tech: [
      "Toll Data Dashboard",
      "AWS",
      "ExpressJS",
      "MongoDB",
      "TypeScript",
      "NextJS",
    ],
    description:
      "Ever dreamt of simplifying toll calculations for fleets? That's exactly what I set out to achieve with MapUp's Toll Calculator. From concept to deployment, it was a rollercoaster ride filled with tech stacks, late-night debugging, and the occasional victory dance.",
    modalContent: (
      <>
        <p>
          Dive into the world of MapUp's Toll Calculator, a project that
          transformed a complex task into a breeze for fleet operators. Starting
          with a blank canvas and a vision, I navigated through the challenges
          of integrating various technologies to create a seamless experience.
        </p>
        <p>
          At the heart of this project was a powerful trio: AWS for cloud
          infrastructure, ExpressJS for backend logic, and MongoDB for data
          storage. These technologies formed the backbone of our application,
          ensuring scalability and reliability.
        </p>
        <p>
          The frontend was crafted with NextJS, providing a fast and responsive
          interface that matched the high standards of modern web applications.
          TypeScript played a crucial role in maintaining code quality and
          preventing potential bugs.
        </p>
        <p>
          One of the standout features was the integration of an
          industry-standard plugin into the Motive marketplace, enhancing the
          functionality and usability of our toll calculator.
        </p>
        <p>
          The journey to support up to 100,000 users was a testament to the
          power of cloud computing and efficient backend architecture. AWS
          proved to be the perfect partner, offering scalability and performance
          that met our growing demands.
        </p>
        <p>
          Through this project, I learned the importance of perseverance,
          collaboration, and the endless possibilities of technology. MapUp's
          Toll Calculator is not just a tool; it's a reflection of innovative
          thinking and dedication to improving everyday processes.
        </p>
      </>
    ),
  },
  {
    title: "Arena",
    imgSrc: "/works/5.png",
    code: "",
    projectLink:
      "https://www.figma.com/design/1bUXpdtWCQg1LO5kWQ4mA1/Arena?t=ARcw1ZAq1GGxp1s6-0",
    tech: ["Cricket Betting App UI/UX", "Figma"],
    description:
      "This freelance project was developed using Figma to create a minimum viable product mobile design for a cricket betting application. The client's requirements emphasized a clean user interface (UI) with high interactivity.",
    modalContent: (
      <>
        <p>
          Arena, a freelance project, was designed with a focus on enhancing the
          cricket betting experience through a clean and interactive user
          interface. Utilizing Figma, the project team set out to create a
          minimum viable product (MVP) that would address the client's need for
          a modern, engaging betting platform.
        </p>{" "}
        <p>
          The design process centered around creating a seamless user journey,
          starting with a straightforward registration process that accommodates
          various sign-up methods. The interface was kept simple yet intuitive,
          guiding users through the app's features with ease. Key elements
          included live scores, match previews, and personalized betting
          options, all presented in a visually appealing manner.
        </p>{" "}
        <p>
          One of the standout features of Arena was its comprehensive cricket
          event coverage, ensuring users had access to detailed information and
          real-time updates. The app also incorporated customizable alerts for
          users' favorite teams or players, enhancing the betting experience by
          keeping users informed and engaged.
        </p>{" "}
        <p>
          In summary, Arena represents a collaborative effort to innovate within
          the cricket betting domain, showcasing how a freelance project can
          leverage modern design tools like Figma to create impactful solutions.
          While it remains a concept, Arena's design principles and features
          serve as valuable insights into enhancing user experiences in
          competitive sports betting platforms.
        </p>
      </>
    ),
  },
  {
    title: "Check It Out Media",
    imgSrc: "/works/8.png",
    code: "https://github.com/yourusername/checkitoutmedialandingpage",
    projectLink: "https://whimsical-marzipan-26c215.netlify.app/",
    tech: ["Landing Page Development", "NextJS", "Framer Motion"],
    description:
      "Embarked on a creative journey to elevate Check It Out Media's online presence with a sleek, engaging landing page. Leveraging NextJS for rapid development and Framer Motion for dynamic animations, I crafted a digital showcase that encapsulates their unique brand essence.",
    modalContent: (
      <>
        <p>
          Step into the world of Check It Out Media, a company that breathes
          life into words through their creative projects. My mission was to
          transform their digital footprint with a landing page that not only
          showcases their work but also embodies their vibrant spirit.
        </p>
        <p>
          Utilizing NextJS, I built a responsive and performant foundation for
          the site, ensuring a seamless experience across devices. This choice
          allowed for quick iterations and deployments, fitting perfectly with
          the agile nature of the project.
        </p>
        <p>
          To bring the design to life, Framer Motion became my animation
          powerhouse. With its intuitive API, I was able to implement smooth
          transitions and interactions that captivate visitors, aligning with
          Check It Out Media's playful and innovative ethos.
        </p>
        <p>
          The result is a landing page that stands out in the crowded digital
          space, reflecting Check It Out Media's commitment to excellence and
          creativity. It's not just a webpage; it's a gateway to exploring the
          magic of words brought to life.
        </p>
        <p>
          This project was a testament to the power of technology in
          storytelling. By combining NextJS's efficiency with Framer Motion's
          dynamism, I was able to create a digital experience that resonates
          with Check It Out Media's audience, encouraging engagement and
          fostering connections.
        </p>
      </>
    ),
  },
  {
    title: "WhatTo",
    imgSrc: "/works/4.png",
    code: "https://www.github.com",
    projectLink: "https://mohith28.pythonanywhere.com/",
    tech: ["Youtube Video Sharing Website", "Django"],
    description:
      "From Zero to One: Back in my second year of college, I decided to dive into the world of web development with a bang. My project, built with Django, was a simple platform for sharing YouTube video recommendations. It wasn't perfect, but it was a huge step for me, teaching me a ton and giving me the confidence to tackle bigger challenges. Let's take a trip down memory lane to see how this project shaped my journey.",
    modalContent: (
      <>
        <p>
          During my second year of college, I embarked on my first full-stack
          project, a small but mighty endeavor to build a platform that let
          users share their favorite YouTube videos. Using Django, a Python
          framework, I learned the ropes of web development, from setting up the
          backend to making sure everything looked good on the frontend. It was
          a bit rough around the edges, and I definitely had a lot to learn, but
          it was a massive leap for me.
        </p>{" "}
        <p>
          I started by figuring out how to use Django to create a basic website.
          It was a steep learning curve, but I tackled it head-on, diving deep
          into tutorials and forums to understand how to make my project work.
          Along the way, I learned about databases, user authentication, and how
          to make my website look nice and function smoothly.
        </p>{" "}
        <p>
          Even though the project wasn't polished or particularly
          groundbreaking, it was a huge confidence booster for me. It showed me
          that I could learn new technologies and apply them to create something
          tangible. It also taught me the importance of persistence and the
          willingness to ask for help when I needed it.
        </p>{" "}
        <p>
          Looking back, I see that my first full-stack application was a crucial
          stepping stone in my journey as a developer. It wasn't about creating
          a perfect product; it was about the process of learning,
          experimenting, and overcoming challenges. It taught me that every
          failure is an opportunity to learn and grow, and that with dedication
          and curiosity, I could achieve anything I set my mind to.
        </p>
      </>
    ),
  },
  {
    title: "United 270",
    imgSrc: "/works/6.png",
    code: "https://www.github.com",
    projectLink: "https://sensational-paprenjak-71c246.netlify.app/",
    tech: ["Company Landing Page", "NextJS"],
    description:
      "Let's talk about a project that was a real headache from start to finish. Dealing with a client who was impossible to please, I pushed through to completion, only to end up with a website that was far from what I'd hoped for. It was a tough pill to swallow, but this experience taught me a lot about people management and when to trust my gut. Here's the story of how I learned to say no and stand my ground.",
    modalContent: (
      <>
        <p>
          This project was a nightmare. From the get-go, the client was
          demanding and unreasonable, constantly changing their mind and
          expecting miracles. Despite the stress and the constant tug-of-war, I
          managed to deliver a website that met their specifications. But the
          result? A poorly designed, slow-loading mess that reflected the
          client's lack of vision rather than my abilities.
        </p>{" "}
        <p>
          Now, you might wonder why I'm keeping this project in my portfolio.
          The honest truth is, it's a reminder of a hard lesson learned. It
          taught me that not all clients are worth the struggle, and sometimes,
          it's better to walk away. More importantly, it showed me the
          importance of trusting my own judgment and standing firm when faced
          with unreasonable demands.
        </p>{" "}
        <p>
          Looking back, I realize that this project was a critical turning
          point. It forced me to confront the realities of working with
          difficult clients and made me stronger in the process. It taught me
          the value of setting boundaries and prioritizing projects that align
          with my values and capabilities. While it's not a project I'm proud to
          showcase, it's a story that I believe adds depth to my portfolio by
          illustrating my resilience and growth as a professional.
        </p>{" "}
        <p>
          In essence, this project was a wake-up call. It taught me that not
          every challenge is worth the fight, and sometimes, the best decision
          is to say no. It's a lesson I've carried forward in my career,
          influencing how I choose my projects and interact with clients. Even
          though it was a tough chapter, it's a part of my journey that I won't
          forget, as it shaped me into a more discerning and assertive
          professional.
        </p>
      </>
    ),
  },
];

export const miniProjects = [
  {
    img: "",
    name: "Foozy UI/UX",
    description: "",
    live_link: "https://bit.ly/3JSF9eS",
    github_link: "",
    skills: ["Figma", "User_Interface", "User_Experience"],
    live_icon: "/assets/icons/figmaIcon.png",
  },
  {
    img: "",
    name: "ST.Augustine hospital landing page",
    description: "",
    live_link: "https://bit.ly/3IPaCgX",
    github_link:
      "https://github.com/Mohith-Kumar28/saint_augustine_hospital_website",
    skills: ["NextJS", "TailwindCSS"],
    live_icon: "",
  },

  {
    img: "",
    name: "Old Portfolio UI/UX",
    description: "",
    live_link: "https://bit.ly/3OF24Nz",
    github_link: "",
    skills: ["Figma", "User Interface", "User Experience"],
    live_icon: "",
  },
  {
    img: "",
    name: "Globe Quest",
    description: "",
    live_link: "https://bit.ly/43U9DEz",
    github_link: "https://github.com/Mohith-Kumar28/mapup_assignment",
    skills: ["NextJS", "TailwindCSS", "Google Maps", "Redux"],
    live_icon: "",
  },
  {
    img: "",
    name: "Oakley",
    description: "",
    live_link: "https://bit.ly/3XK4ld7",
    github_link: "https://github.com/Mohith-Kumar28/Realestate-project",
    skills: ["NextJS", "TailwindCSS"],
    live_icon: "",
  },
  {
    img: "",
    name: "SpaceXplorer",
    description: "",
    live_link: "https://bit.ly/3Ohdvuv",
    github_link: "https://github.com/Mohith-Kumar28/spacex_visualization",
    skills: ["NextJS", "Redux"],
    live_icon: "",
  },
  {
    img: "",
    name: "TouchSky",
    description: "",
    live_link: "https://bit.ly/43eZIZS",
    github_link: "https://github.com/Mohith-Kumar28/jobs_website",
    skills: ["NextJS", "TailwindCSS"],
    live_icon: "",
  },
  {
    img: "",
    name: "Boujee",
    description: "",
    live_link: "https://bit.ly/3ri9zAT",
    github_link: "https://github.com/Mohith-Kumar28/data_website",
    skills: ["NextJS", "TailwindCSS"],
    live_icon: "",
  },
  {
    img: "",
    name: "Mystic Beauty",
    description: "",
    live_link: "https://bit.ly/3QgYI4H",
    github_link: "https://github.com/Mohith-Kumar28/cosmetics_website",
    skills: ["NextJS", "TailwindCSS"],
    live_icon: "",
  },
  {
    img: "",
    name: "Menu Design",
    description: "",
    live_link: "https://bit.ly/43iOLXh",
    github_link: "",
    skills: ["Canva"],
    live_icon: "",
  },
  {
    img: "",
    name: "UI/UX contribution",
    description: "",
    live_link: "https://bit.ly/46GZlKA",
    github_link: "",
    skills: ["Figma"],
    live_icon: "",
  },
  {
    img: "",
    name: "Trained AI Gpt API",
    description: "",
    live_link: "",
    github_link: "https://bit.ly/43Rh2V0",
    skills: ["Python", "Fast API", "Lamma-2", "OpenAI"],
    live_icon: "",
  },
  {
    img: "",
    name: "Old Portfolio Website",
    description: "",
    live_link: "https://www.mohith.in/",
    github_link: "https://github.com/Mohith-Kumar28/my_portfolio",
    skills: ["NextJS", "TailwindCSS", "Lamma-2", "LangChain", "OpenAI API"],
    live_icon: "",
  },
];
