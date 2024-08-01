import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";
import { sendGTMEvent } from "@next/third-parties/google";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl">
              Hi, I'm Mohith<span className="text-rose-500">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
              I'm a{" "}
              <span className="font-semibold text-rose-500">
                {`${"{"} Full Stack Developer ${"}"}`}
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 bg-zinc-950/10 rounded-xl py-3 pr-2 backdrop-blur-lg md:text-base">
              {/* / Building beautiful Web Experiences <br />/ Front-End Developer
              at MapUp <br />/ Curious at exploring */}
              Crafting digital masterpieces, one line at a time. With 2+ years
              of experience building innovative software solutions, and a
              passion for UI/UX, I bring a unique blend of technical prowess and
              creative flair. Explore my work and let's create something
              extraordinary together.
            </p>
          </Reveal>
          <Reveal>
            <OutlineButton
              onClick={() => {
                sendGTMEvent({
                  event: "ContactProjectsFromHero",
                  value: "Clicked projects from hero ",
                });
                document.getElementById("projects")?.scrollIntoView();
              }}
              className="pointer-events-auto before:bg-rose-700 hover:text-white hover:border-rose-700 mt-4 bg-rose-500 text-zinc-100 border-rose-500 md:mt-6"
            >
              View Projects
            </OutlineButton>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};

export default Hero;
