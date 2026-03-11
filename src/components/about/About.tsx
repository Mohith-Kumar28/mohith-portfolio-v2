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
              &apos;m a full-stack developer from Bengaluru, India, obsessed with
              building slick, user-centric web applications. I love taking
              complex problems and turning them into simple, elegant digital
              experiences using code.
            </p>
          </Reveal>

          <Reveal>
            <p>
              My journey started with building simple sites and quickly evolved
              into developing production-ready SaaS tools, engaging freelance
              projects, and launching full-scale platforms like my food-tech startup,
              Foozy. Today, I continue to take on exciting projects and constantly
              experiment with new ideas.
            </p>
          </Reveal>

          <Reveal>
            <p>
              When I&apos;m not writing code, you&apos;ll probably find me
              watching sci-fi movies, exploring new tech on YouTube, or
              brainstorming my next big project. I&apos;m always eager to
              collaborate, let&apos;s build something awesome together!
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
