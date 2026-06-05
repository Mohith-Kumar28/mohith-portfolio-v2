import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";
import DotGrid from "../hero/DotGrid";

export const About = () => {
  return (
    <section className="section-wrapper relative">
      <SectionHeader title="My Journey" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4 bg-gray-900/10 z-10 backdrop-blur-lg">
          <Reveal>
            <p>
              <span className="bg-rose-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                I
              </span>
              started my journey tinkering with simple websites, but my curiosity didn't stop there. Over time, I've evolved from a full-stack web developer into someone who loves hacking together solutions across the entire tech spectrum, from polished frontends to AI integrations and mobile applications. 
            </p>
          </Reveal>

          <Reveal>
            <p>
              Recently, I've been building out tools that push my boundaries. For instance, I created <strong>Memorie</strong>, an intelligent mobile app that uses AI and auto-clustering to act as a second brain. Alongside that, I've launched platforms like <em>SarasAI</em> and <em>LinkUp</em>, blending modern UX with smart, intent-based systems. I'm obsessed with figuring things out and turning complex ideas into functional, real-world tools.
            </p>
          </Reveal>

          <Reveal>
            <p>
              When I'm not deep into code, you'll probably catch me watching sci-fi movies, digging down a YouTube rabbit hole on some obscure new tech, or brainstorming my next wild project. If there's an interesting problem to solve, I'm always down to jump in.
            </p>
          </Reveal>
        </div>

        <Stats />
      </div>
      <div className="hidden md:block">
        <DotGrid />
      </div>
    </section>
  );
};
