import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-rose-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>NextJS</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Express</Chip>
            <Chip>MongoDB</Chip>
            <Chip>Tailwind</Chip>
            <Chip>ReactJS</Chip>
            <Chip>Redux</Chip>
            <Chip>GitHub</Chip>
            <Chip>AWS</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-rose-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Figma</Chip>
            <Chip>Django</Chip>
            <Chip>Canva</Chip>
            <Chip>Webflow</Chip>
            <Chip>Python</Chip>
            <Chip>Wordpress</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
