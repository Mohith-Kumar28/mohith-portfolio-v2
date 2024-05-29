import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SideBarLink } from "./SideBarLink";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="no-scrollbar bg-zinc-950 h-screen sticky top-0 left-0 z-20 flex flex-col items-center overflow-y-scroll"
    >
      <span className="shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center my-4">
        M<span className="text-rose-500">.</span>
      </span>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="about"
        href="#about"
      >
        About
      </SideBarLink>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="projects"
        href="#projects"
      >
        Projects
      </SideBarLink>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="experience"
        href="#experience"
      >
        Exp.
      </SideBarLink>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="contact"
        href="#contact"
      >
        Contact
      </SideBarLink>
    </motion.nav>
  );
};
