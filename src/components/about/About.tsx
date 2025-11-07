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
              &apos;m your go-to guy for all things web development, hailing
              from the vibrant city of Bengaluru, India. With a knack for
              turning complex problems into elegant solutions, I&apos;ve
              navigated the digital seas from HTML/CSS to the depths of MERN
              stack, all in pursuit of crafting the perfect web experience.
            </p>
          </Reveal>

          <Reveal>
            <p>
              My journey has been a rollercoaster of learning and unlearning,
              from the thrill of my first WordPress site to the exhilaration of
              building a multi-vendor platform, Foozy. Today, I wear multiple
              hats - a Frontend Developer at Edstruments, a Freelancer tackling
              projects that spark my curiosity, and the architect behind Foozy,
              my playground for innovation.
            </p>
          </Reveal>

          <Reveal>
            <p>
              But beyond the code, I&apos;m a sci-fi enthusiast and a YouTube
              aficionado, believing in the magic of stories told through pixels
              and screens. My portfolio isn&apos;t just about the tech;
              it&apos;s a reflection of my adventures in the digital realm, a
              testament to my growth, and a beacon for those seeking a
              collaborator in their next big idea.
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
