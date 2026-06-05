import React, { useState } from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import { motion } from "framer-motion";
import { OutlineButton } from "../buttons/OutlineButton";
import MiniProjectCard from "./MiniProjectCard";

export const Projects = () => {
  const [viewAllOpen, setViewAllOpen] = useState(true);
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Featured Projects" dir="r" />
      
      <div className="px-8 pb-12 max-w-4xl mx-auto flex flex-col gap-12">
        <div className="relative rounded-[0.7rem] p-[3px] bg-gradient-to-br from-rose-500 via-purple-500 to-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.2)] hover:shadow-[0_0_40px_rgba(244,63,94,0.4)] transition-shadow duration-500">
          <div className="bg-zinc-800 rounded-lg h-full">
            <Project {...memorieProject} />
          </div>
        </div>

        <div className="relative rounded-[0.7rem] p-[3px] bg-gradient-to-br from-rose-500 via-purple-500 to-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.2)] hover:shadow-[0_0_40px_rgba(244,63,94,0.4)] transition-shadow duration-500">
          <div className="bg-zinc-800 rounded-lg h-full">
            <Project {...sarasProject} />
          </div>
        </div>
      </div>

      <SectionHeader title="Other Projects" dir="l" />

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
        className="relative grid gap-8 grid-cols-1 md:grid-cols-2 p-8"
      >
        {/* <div className="grid gap-12 grid-cols-1 md:grid-cols-2"> */}
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
        {/* </div> */}

        {/* <div className="flex flex-wrap w-full gap-6 mt-4"> */}
        {/* {miniProjects.map((project) => (
          <MiniProjectCard key={project.name} project={project} />
        ))} */}
        {/* </div> */}

        <motion.div
          variants={{
            open: {
              top: "100%",
            },
            closed: {
              top: "60%",
            },
          }}
          className="absolute bottom-0  left-0 right-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950"
        />
      </motion.div>
      <OutlineButton
        onClick={() => setViewAllOpen((pv) => !pv)}
        className={`mx-auto ${viewAllOpen ? " mt-12 " : " -mt-14 "} =`}
      >
        {viewAllOpen ? "View less" : "View more"}
      </OutlineButton>
    </section>
  );
};

const memorieProject = {
  title: "Memorie",
  imgSrc: "",
  ytVidSrc: "",
  images: [
    "/works/memorie/1.png",
    "/works/memorie/2.png",
    "/works/memorie/3.png",
    "/works/memorie/4.png",
    "/works/memorie/5.png",
    "/works/memorie/6.png",
    "/works/memorie/7.png",
    "/works/memorie/8.png",
  ],
  code: "",
  projectLink: "",
  tech: ["React Native", "AI", "Knowledge Management"],
  description:
    "An intelligent memory base mobile app that turns scattered inputs into an auto-organizing system that thinks with you. Built with React Native, it captures photos, voice memos, and web links via a seamless WhatsApp integration. Under the hood, it uses HDBSCAN to automatically cluster topics, allowing you to bypass manual folders entirely and converse directly with your saved knowledge.",
  modalContent: (
    <>
      <p>
        Memorie is a continuous memory pipeline designed to replace fragmented note-taking systems like Notion, Apple Notes, and browser bookmarks. Built as a React Native mobile application, it offers a seamless workflow from unstructured thoughts to actionable intelligence.
      </p>
      <p>
        Unlike static filing cabinets, Memorie allows you to capture anything (photos, voice memos, PDFs, web links) directly through the app or via WhatsApp integration. The engine automatically transcribes audio and intelligently scrapes clean text from platforms like YouTube, LinkedIn, and Amazon.
      </p>
      <p>
        The core innovation lies in its Automated Wiki Clustering. Utilizing HDBSCAN, Memorie groups related memories into dynamically evolving topic pages without the need for manual folders or rigid tags. 
      </p>
      <p>
        Retrieval is effortless: instead of keyword searching, you converse with an integrated chatbot that provides real-time answers with direct citations to your saved knowledge. Additionally, smart spaced-repetition alerts resurface insights right when you need to review them, cementing your learning.
      </p>
    </>
  ),
};

const sarasProject = {
  title: "SarasAI",
  imgSrc: "",
  ytVidSrc: "https://www.youtube.com/embed/Q_1CXHs9fjA?autoplay=1&mute=1&loop=1&playlist=Q_1CXHs9fjA",
  images: [],
  code: "",
  projectLink: "",
  tech: ["AI", "EdTech", "Career Guidance"],
  description:
    "A multimodal AI career discovery platform that guides students from high school confusion to clarity, using voice-first interactions and emotionally intelligent mentorship.",
  modalContent: (
    <>
      <p>
        SarasAI represents the future of educational guidance: a vertically integrated, AI-native career companion designed to help the next generation find their true calling.
      </p>
      <p>
        Unlike traditional fragmented counseling, Saras acts as an Agentic AI system that understands a student's history, anticipates needs, and proactively manages their entire career planning lifecycle. It breaks the journey down into distinct phases: from discovery and alignment in early high school to targeted handholding and final college enrollment decisions.
      </p>
      <p>
        A standout feature is its multimodal, voice-first interaction model. By allowing students to converse naturally, Saras lowers the barrier for those who struggle to articulate their aspirations over text. As it guides students, it builds a 'Digital DNA', providing a scientifically mapped and emotionally supported path forward.
      </p>
      <p>
        Designed for the entire ecosystem (students, parents, and schools), SarasAI democratizes access to premium, 1-on-1 equivalent guidance at an exponentially lower cost.
      </p>
    </>
  ),
};

const projects = [
  {
    title: "LinkUp",
    imgSrc: "",
    ytVidSrc: "",
    images: [
      "/works/linkup/1.png",
      "/works/linkup/2.png",
      "/works/linkup/3.png",
      "/works/linkup/4.png",
    ],
    code: "",
    projectLink: "https://linkup-user-application.lodestar-v1.workers.dev/",
    tech: ["AI Networking", "Live Events Platform"],
    description:
      "AI-powered networking platform for live events. Connects attendees through intent-based matching and provides a smart dashboard for organizers.",
    modalContent: (
      <>
        <p>
          LinkUp is an AI networking application designed to elevate the live event experience. It creates a seamless flow for attendees to join events, discover matches, and follow up, while providing organizers with a smart dashboard to manage the entire process.
        </p>
        <p>
          The platform uses intent-based matching to connect attendees with the most relevant people in the room. By ranking suggestions based on profiles and goals, it ensures that every conversation is meaningful and aligned with participants' objectives.
        </p>
        <p>
          Beyond simple matchmaking, LinkUp turns introductions into active chats, enabling a cleaner and more efficient post-event follow-up process. It replaces chaotic exchanges with organized connections that unlock direct messaging capabilities.
        </p>
        <p>
          With dedicated entry points for both attendees and organizers, LinkUp bridges the gap between organizing a successful event and fostering valuable professional relationships among participants.
        </p>
      </>
    ),
  },
  {
    title: "InvoiceLab",
    imgSrc: "",
    ytVidSrc: "",
    images: [
      "/works/invoicelab/1.png",
      "/works/invoicelab/2.png",
      "/works/invoicelab/3.png",
      "/works/invoicelab/4.png",
      "/works/invoicelab/5.png",
    ],
    code: "https://github.com/Mohith-Kumar28/invoice-lab",
    projectLink: "https://invoicelab.in/",
    tech: ["Document Tools", "NextJS", "TailwindCSS"],
    description:
      "Create professional invoices, payslips, and QR codes in minutes. Clean layouts, fast export, and a privacy-first workflow that stays on your device.",
    modalContent: (
      <>
        <p>
          InvoiceLab is a local-first platform designed to create professional invoices, payslips, and QR codes in minutes. It focuses on clean layouts, fast PDF exports, and privacy-friendly workflows without requiring user signup.
        </p>
        <p>
          It includes an Invoice Generator for creating customizable bills with line items, taxes, discounts, signatures, and payment instructions. The Payslip Generator enables quick generation of salary slips covering earnings and deductions. Additionally, the QR Code Generator provides a reliable tool for sharing links, Wi-Fi, emails, and more, complete with color and logo customizations.
        </p>
        <p>
          Unlike traditional web apps, InvoiceLab runs entirely on the browser, meaning your generated document data is never uploaded to a backend. It leverages NextJS and modern web technologies to ensure a fast, robust, and responsive experience across all devices.
        </p>
        <p>
          As an open-source project, it represents my commitment to building free, accessible, and high-quality utilities for everyday users and freelancers.
        </p>
      </>
    ),
  },
   {
    title: "Chef Rajblee",
    imgSrc: "/works/9.png", 
    ytVidSrc: "",
    code: "",
    projectLink: "https://rajbille.foozy.shop/",
    tech: ["Private Chef Service", "NextJS", "TailwindCSS"],
    description:
      "A premium private chef service platform for Bangalore. Users can explore diverse cuisines, custom menus, and seamlessly book expert chefs for house parties, corporate events, and family dinners.",
    modalContent: (
      <>
        <p>
          Chef Rajblee offers a premium private chef experience in Bangalore, bringing authentic and fresh culinary masterpieces directly to your home. Whether it's an intimate dinner, a lively house party, or a corporate event, the platform makes it effortless to book a top-tier chef.
        </p>
        <p>
          With over 10 years of experience and a 5.0 client rating across 150+ catered events, Chef Rajblee specializes in bespoke menus ranging from traditional Indian and Mughlai cuisines to international flavors like Continental, Pan-Asian, and Italian classics.
        </p>
        <p>
          The booking process is simple and transparent: clients pick a date and menu, provide the ingredients, and the chef takes care of the rest, from cooking and elegant presentation to complete post-party cleaning and sanitization.
        </p>
        <p>
          Built to provide a smooth digital experience, the platform showcases an extensive menu, client testimonials, and a smart booking system to seamlessly schedule and customize culinary experiences for up to 20 guests.
        </p>
      </>
    ),
  },

   {
    title: "Check It Out Media",
    imgSrc: "/works/8.png",
    ytVidSrc:
      "https://www.youtube.com/embed/EnS9qqKbcDI?si=i2JTrxcWgdXYTwQO&autoplay=1&mute=1&playlist=EnS9qqKbcDI&loop=1",
    code: "https://github.com/Mohith-Kumar28/check-it-out-media",
    projectLink: "https://checkitoutmedia.in/",
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
    title: "3DotAI",
    imgSrc: "/works/2.png",
    ytVidSrc:
      "https://www.youtube.com/embed/r6JTkJLEeWs?autoplay=1&mute=1&playlist=r6JTkJLEeWs&loop=1",
    code: "https://github.com/Mohith-Kumar28/tiktok-saas-frontend-main",
    projectLink: "",
    tech: ["TikTok DM Bots", "NextJS", "NestJS", "Better Auth", "ShadCN", "SupaBase"],
    description:
      "3DotAI automates TikTok DM outreach to creators so you can run targeted campaigns at scale. It handles discovery, personalized messaging, scheduling, and tracking replies to streamline creator outreach.",
    modalContent: (
      <>
        <p>
          3DotAI is built to run high volume, compliant creator outreach on
          TikTok using automated DM bots. It helps teams discover creators,
          craft personalized message templates, schedule multi step cadences,
          and track replies and outcomes, all from a single dashboard.
        </p>
        <p>
          The campaign builder lets you define audiences, segment creators,
          and set message steps with delays, variables, and fallbacks. Message
          templates support personalization tokens like creator name, niche,
          and past content, so outreach feels relevant rather than spammy.
        </p>
        <p>
          A rate‑limited sending service ensures safe delivery with
          anti‑spam controls, retries, and pause/resume for active campaigns.
          Built‑in analytics surface key metrics (sends, opens, replies,
          and conversions) so you can iterate quickly and double down on what
          works.
        </p>
        <p>
          Operational features include CSV import/export, deduplication,
          creator merging, and audit logs for compliance. The UI is designed
          for speed: bulk actions, keyboard shortcuts, and sensible defaults
          reduce the friction of running daily outreach.
        </p>
        <p>
          Whether you’re testing a new campaign or scaling established
          workflows, 3DotAI gives you the control and observability needed to
          run TikTok DM outreach at scale, with personalization and
          performance built in.
        </p>
      </>
    ),
  },
    {
    title: "Foozy",
    imgSrc: "/works/1.png",
    ytVidSrc:
      "https://www.youtube.com/embed/ut6o6VbJG6I?si=VtTZBa_sIjNgOH2J&autoplay=1&mute=1&playlist=ut6o6VbJG6I&loop=1",
    code: "",
    projectLink: "",
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
    title: "LIC Self Help Group",
    imgSrc: "/works/lic-shp/1.png",
    ytVidSrc: "",
    code: "https://github.com/Mohith-Kumar28/saas-lic-shg",
    projectLink: "",
    tech: ["Members Management", "Role-based Access", "NextJS"],
    description:
      "A role-based members management platform for LIC employees. People register as members and join sub-branches; branch, sub-branch, and member roles each have tailored views.",
    images: [
      "/works/lic-shp/0.jpg",
      "/works/lic-shp/1.png",
      "/works/lic-shp/2.jpg",
      "/works/lic-shp/3.png",
      "/works/lic-shp/4.jpg",
      "/works/lic-shp/5.png",
      "/works/lic-shp/6.jpg",
      "/works/lic-shp/7.png",
      "/works/lic-shp/8.jpg",
      "/works/lic-shp/8.png",
      "/works/lic-shp/9.jpg",
      "/works/lic-shp/10.jpg",
      "/works/lic-shp/11.jpg",
      "/works/lic-shp/12.jpg",
      "/works/lic-shp/13.png",
    ],
    modalContent: (
      <>
        <p>
          Designed for LIC teams, this app streamlines member onboarding and
          operational workflows across branches. Users can register, choose a
          branch or sub-branch, and access role-specific features that keep data
          organized and actions clear.
        </p>
        <p>
          Roles include Branch, Sub-Branch, and Member, each with tailored
          dashboards. Branch admins manage sub-branches and member rosters;
          sub-branch leads handle local approvals and communications; members
          update their profiles, view notices, and engage with their assigned
          unit.
        </p>
        <p>
          Built with NextJS, the frontend focuses on clarity and speed. Clean
          navigation simplifies tasks like registrations, list management,
          status tracking, and exporting records. The result is a practical tool
          that reduces manual coordination and improves team visibility.
        </p>
      </>
    ),
  },
  {
    title: "AI-Hello",
    imgSrc: "/works/ai-hello/1.jpg",
    ytVidSrc: "",
    code: "",
    projectLink: "",
    tech: ["Amazon Ads Automation Dashboard", "Angular"],
    description:
      "A front-end revamp for a Germany-based client: an Angular dashboard to visualize and manage Amazon ad automations based on provided Figma designs.",
    images: [
      "/works/ai-hello/0.jpg",
      "/works/ai-hello/1.jpg",
      "/works/ai-hello/2.jpg",
      "/works/ai-hello/3.jpg",
      "/works/ai-hello/4.jpg",
      "/works/ai-hello/5.jpg",
      "/works/ai-hello/6.jpg",
      "/works/ai-hello/7.jpg",
      "/works/ai-hello/8.jpg",
      "/works/ai-hello/9.jpg",
      "/works/ai-hello/10.jpg",
      "/works/ai-hello/11.jpg",
      "/works/ai-hello/12.jpg",
    ],
    modalContent: (
      <>
        <p>
          This freelance engagement focused on rebuilding the entire front-end
          of an Amazon ads automation dashboard in Angular. Working from
          detailed Figma designs, the goal was to deliver a clean, performant UI
          for campaign configuration, monitoring, and insights.
        </p>
        <p>
          Key screens included campaign setup flows, rule builders, performance
          charts, and data tables with filtering and bulk actions. The emphasis
          was on responsive layout, consistent styling, and high information
          density without overwhelming the user.
        </p>
        <p>
          Collaboration with the client centered on rapid iteration and design
          fidelity, ensuring the final UI matched their workflows and branding
          precisely. The revamp improved usability and paved the path for future
          automation features.
        </p>
      </>
    ),
  },
 
  // {
  //   title: "Arena",
  //   imgSrc: "/works/5.png",
  //   ytVidSrc:
  //     "https://www.youtube.com/embed/zrjecqNwh_g?si=PPJ1i_dCmzb9ORF8&autoplay=1&mute=1&playlist=zrjecqNwh_g&loop=1",
  //   code: "",
  //   projectLink:
  //     "https://www.figma.com/design/1bUXpdtWCQg1LO5kWQ4mA1/Arena?t=ARcw1ZAq1GGxp1s6-0",
  //   tech: ["Cricket Betting App UI/UX", "Figma"],
  //   description:
  //     "This freelance project was developed using Figma to create a minimum viable product mobile design for a cricket betting application. The client's requirements emphasized a clean user interface (UI) with high interactivity.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Arena, a freelance project, was designed with a focus on enhancing the
  //         cricket betting experience through a clean and interactive user
  //         interface. Utilizing Figma, the project team set out to create a
  //         minimum viable product (MVP) that would address the client's need for
  //         a modern, engaging betting platform.
  //       </p>{" "}
  //       <p>
  //         The design process centered around creating a seamless user journey,
  //         starting with a straightforward registration process that accommodates
  //         various sign-up methods. The interface was kept simple yet intuitive,
  //         guiding users through the app's features with ease. Key elements
  //         included live scores, match previews, and personalized betting
  //         options, all presented in a visually appealing manner.
  //       </p>{" "}
  //       <p>
  //         One of the standout features of Arena was its comprehensive cricket
  //         event coverage, ensuring users had access to detailed information and
  //         real-time updates. The app also incorporated customizable alerts for
  //         users' favorite teams or players, enhancing the betting experience by
  //         keeping users informed and engaged.
  //       </p>{" "}
  //       <p>
  //         In summary, Arena represents a collaborative effort to innovate within
  //         the cricket betting domain, showcasing how a freelance project can
  //         leverage modern design tools like Figma to create impactful solutions.
  //         While it remains a concept, Arena's design principles and features
  //         serve as valuable insights into enhancing user experiences in
  //         competitive sports betting platforms.
  //       </p>
  //     </>
  //   ),
  // },
 
  // {
  //   title: "Motive Plugin",
  //   imgSrc: "/works/7.png",
  //   ytVidSrc: "",
  //   code: "",
  //   projectLink:
  //     "https://marketplace.gomotive.com/app/tolltally-gps-based-instant-toll-billing",
  //   tech: [
  //     "Toll Data Dashboard",
  //     "AWS",
  //     "ExpressJS",
  //     "MongoDB",
  //     "TypeScript",
  //     "NextJS",
  //   ],
  //   description:
  //     "Ever dreamt of simplifying toll calculations for fleets? That's exactly what I set out to achieve with MapUp's Toll Calculator. From concept to deployment, it was a rollercoaster ride filled with tech stacks, late-night debugging, and the occasional victory dance.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Dive into the world of MapUp's Toll Calculator, a project that
  //         transformed a complex task into a breeze for fleet operators. Starting
  //         with a blank canvas and a vision, I navigated through the challenges
  //         of integrating various technologies to create a seamless experience.
  //       </p>
  //       <p>
  //         At the heart of this project was a powerful trio: AWS for cloud
  //         infrastructure, ExpressJS for backend logic, and MongoDB for data
  //         storage. These technologies formed the backbone of our application,
  //         ensuring scalability and reliability.
  //       </p>
  //       <p>
  //         The frontend was crafted with NextJS, providing a fast and responsive
  //         interface that matched the high standards of modern web applications.
  //         TypeScript played a crucial role in maintaining code quality and
  //         preventing potential bugs.
  //       </p>
  //       <p>
  //         One of the standout features was the integration of an
  //         industry-standard plugin into the Motive marketplace, enhancing the
  //         functionality and usability of our toll calculator.
  //       </p>
  //       <p>
  //         The journey to support up to 100,000 users was a testament to the
  //         power of cloud computing and efficient backend architecture. AWS
  //         proved to be the perfect partner, offering scalability and performance
  //         that met our growing demands.
  //       </p>
  //       <p>
  //         Through this project, I learned the importance of perseverance,
  //         collaboration, and the endless possibilities of technology. MapUp's
  //         Toll Calculator is not just a tool; it's a reflection of innovative
  //         thinking and dedication to improving everyday processes.
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: "WhatTo",
  //   imgSrc: "/works/4.png",
  //   ytVidSrc:
  //     "https://www.youtube.com/embed/vI3V1_1fRRg?si=Xs2Q_O32wzrr80PE&autoplay=1&mute=1&playlist=vI3V1_1fRRg&loop=1",
  //   code: "https://github.com/Mohith-Kumar28/whatto",
  //   projectLink: "https://mohith28.pythonanywhere.com/",
  //   tech: ["Youtube Video Sharing Website", "Django"],
  //   description:
  //     "From Zero to One: Back in my second year of college, I decided to dive into the world of web development with a bang. My project, built with Django, was a simple platform for sharing YouTube video recommendations. It wasn't perfect, but it was a huge step for me, teaching me a ton and giving me the confidence to tackle bigger challenges. Let's take a trip down memory lane to see how this project shaped my journey.",
  //   modalContent: (
  //     <>
  //       <p>
  //         During my second year of college, I embarked on my first full-stack
  //         project, a small but mighty endeavor to build a platform that let
  //         users share their favorite YouTube videos. Using Django, a Python
  //         framework, I learned the ropes of web development, from setting up the
  //         backend to making sure everything looked good on the frontend. It was
  //         a bit rough around the edges, and I definitely had a lot to learn, but
  //         it was a massive leap for me.
  //       </p>{" "}
  //       <p>
  //         I started by figuring out how to use Django to create a basic website.
  //         It was a steep learning curve, but I tackled it head-on, diving deep
  //         into tutorials and forums to understand how to make my project work.
  //         Along the way, I learned about databases, user authentication, and how
  //         to make my website look nice and function smoothly.
  //       </p>{" "}
  //       <p>
  //         Even though the project wasn't polished or particularly
  //         groundbreaking, it was a huge confidence booster for me. It showed me
  //         that I could learn new technologies and apply them to create something
  //         tangible. It also taught me the importance of persistence and the
  //         willingness to ask for help when I needed it.
  //       </p>{" "}
  //       <p>
  //         Looking back, I see that my first full-stack application was a crucial
  //         stepping stone in my journey as a developer. It wasn't about creating
  //         a perfect product; it was about the process of learning,
  //         experimenting, and overcoming challenges. It taught me that every
  //         failure is an opportunity to learn and grow, and that with dedication
  //         and curiosity, I could achieve anything I set my mind to.
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: "United 270",
  //   imgSrc: "/works/6.png",
  //   ytVidSrc:
  //     "https://www.youtube.com/embed/Semw6OT-48w?si=9QUE7V1b97DDHAnp&autoplay=1&mute=1&playlist=Semw6OT-48w&loop=1",
  //   code: "https://www.github.com",
  //   projectLink: "https://sensational-paprenjak-71c246.netlify.app/",
  //   tech: ["Company Landing Page", "NextJS"],
  //   description:
  //     "Let's talk about a project that was a real headache from start to finish. Dealing with a client who was impossible to please, I pushed through to completion, only to end up with a website that was far from what I'd hoped for. It was a tough pill to swallow, but this experience taught me a lot about people management and when to trust my gut. Here's the story of how I learned to say no and stand my ground.",
  //   modalContent: (
  //     <>
  //       <p>
  //         This project was a nightmare. From the get-go, the client was
  //         demanding and unreasonable, constantly changing their mind and
  //         expecting miracles. Despite the stress and the constant tug-of-war, I
  //         managed to deliver a website that met their specifications. But the
  //         result? A poorly designed, slow-loading mess that reflected the
  //         client's lack of vision rather than my abilities.
  //       </p>{" "}
  //       <p>
  //         Now, you might wonder why I'm keeping this project in my portfolio.
  //         The honest truth is, it's a reminder of a hard lesson learned. It
  //         taught me that not all clients are worth the struggle, and sometimes,
  //         it's better to walk away. More importantly, it showed me the
  //         importance of trusting my own judgment and standing firm when faced
  //         with unreasonable demands.
  //       </p>{" "}
  //       <p>
  //         Looking back, I realize that this project was a critical turning
  //         point. It forced me to confront the realities of working with
  //         difficult clients and made me stronger in the process. It taught me
  //         the value of setting boundaries and prioritizing projects that align
  //         with my values and capabilities. While it's not a project I'm proud to
  //         showcase, it's a story that I believe adds depth to my portfolio by
  //         illustrating my resilience and growth as a professional.
  //       </p>{" "}
  //       <p>
  //         In essence, this project was a wake-up call. It taught me that not
  //         every challenge is worth the fight, and sometimes, the best decision
  //         is to say no. It's a lesson I've carried forward in my career,
  //         influencing how I choose my projects and interact with clients. Even
  //         though it was a tough chapter, it's a part of my journey that I won't
  //         forget, as it shaped me into a more discerning and assertive
  //         professional.
  //       </p>
  //     </>
  //   ),
  // },
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
    name: "Mystic Beauty",
    description: "",
    live_link: "https://jovial-cassata-5ed7db.netlify.app/",
    github_link: "https://github.com/Mohith-Kumar28/cosmetics_website",
    skills: ["NextJS", "TailwindCSS"],
    live_icon: "",
  },
  {
    img: "",
    name: "Menu Design",
    description: "",
    live_link:
      "https://www.canva.com/design/DAGHSuPooJo/PTsslNYY5dFihgqNQVj_eQ/edit?utm_content=DAGHSuPooJo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    github_link: "",
    skills: ["Canva"],
    live_icon: "",
  },
  {
    img: "",
    name: "WhatTo",
    description: "",
    live_link: "https://mohith28.pythonanywhere.com/",
    github_link: "https://github.com/Mohith-Kumar28/whatto",
    skills: ["Youtube Video Sharing Website", "Django"],
    live_icon: "/assets/icons/figmaIcon.png",
  },
  {
    img: "",
    name: "ST.Augustine hospital landing page",
    description: "",
    live_link: "https://staugustinehospital.in/",
    github_link:
      "https://github.com/Mohith-Kumar28/saint_augustine_hospital_website",
    skills: ["NextJS", "TailwindCSS"],
    live_icon: "",
  },

  {
    img: "",
    name: "Hospital Dashboard Frontend",
    description: "",
    live_link: "https://deluxe-otter-66505b.netlify.app/",
    github_link: "https://github.com/Mohith-Kumar28/coalition-assessment",
    skills: ["NextJS", "TailwindCSS", "ChartJS"],
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
    name: "GlobeQuest",
    description: "",
    live_link: "https://effervescent-dusk-3d99e2.netlify.app/",
    github_link: "https://github.com/Mohith-Kumar28/mapup_assignment",
    skills: ["NextJS", "Google maps", "Redux"],
    live_icon: "",
  },
  {
    img: "",
    name: "United 270 Landing page",
    description: "",
    live_link: "https://sensational-paprenjak-71c246.netlify.app/",
    github_link: "https://sensational-paprenjak-71c246.netlify.app/",
    skills: ["Company Landing Page", "NextJS"],
    live_icon: "/assets/icons/figmaIcon.png",
  },
  {
    img: "",
    name: "Fernhilt",
    description: "",
    live_link: "https://endearing-paprenjak-587836.netlify.app/",
    github_link: "https://github.com/Mohith-Kumar28/aichatbot-website-landing",
    skills: ["NextJS", "TailwindCSS"],
    live_icon: "",
  },

  {
    img: "",
    name: "SpaceXplorer",
    description: "",
    live_link: "https://curious-raindrop-a4b0be.netlify.app/",
    github_link: "https://github.com/Mohith-Kumar28/spacex_visualization",
    skills: ["NextJS", "Redux"],
    live_icon: "",
  },
  {
    img: "",
    name: "TouchSky",
    description: "",
    live_link: "https://jade-daffodil-acbb84.netlify.app/",
    github_link: "https://github.com/Mohith-Kumar28/jobs_website",
    skills: ["NextJS", "TailwindCSS"],
    live_icon: "",
  },

  {
    img: "",
    name: "Sellular UI/UX contribution",
    description: "",
    live_link:
      "https://www.figma.com/design/RinXSO5od6RLCAG0RUWLrE/my_sellular_work?node-id=0-1",
    github_link: "",
    skills: ["Figma"],
    live_icon: "",
  },
  {
    img: "",
    name: "Trained AI Gpt API",
    description: "",
    live_link: "",
    github_link: "https://github.com/Mohith-Kumar28/fast_api_gpt",
    skills: ["Python", "Fast API", "Lamma-2", "OpenAI"],
    live_icon: "",
  },
  {
    img: "",
    name: "Old Portfolio Website",
    description: "",
    live_link: "https://my-portfolio-two-gamma-53.vercel.app/",
    github_link: "https://github.com/Mohith-Kumar28/my_portfolio",
    skills: ["NextJS", "TailwindCSS", "Lamma-2", "LangChain", "OpenAI API"],
    live_icon: "",
  },
];
