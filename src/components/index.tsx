import React from "react";
import { SideBar } from "./nav/SideBar";
import { Header } from "./nav/Header";
import Hero from "./hero/Hero";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import ContactForm from "./contact/ContactForm";
import { BentoHero } from "./hero/BentoHero";

export const HomPage = () => {
  return (
    <div className="grid grid-cols-[54px_1fr]">
      <SideBar />
      <main>
        <Header />
        <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24">
          <BentoHero />
          {/* <Hero /> */}
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
};
