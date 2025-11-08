import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

const WORK_TECHS = [
  "NextJS",
  "TypeScript",
  "Express",
  "MongoDB",
  "Tailwind",
  "ShadCN",
  "Zustand",
  "Prisma",
  "Postgres",
  "NestJS",
  "ReactJS",
  "Redux",
  "GitHub",
];

const FUN_TOOLS = ["Figma", "Base44", "Canva","Shopify",  "Webflow", "Python", "Wordpress", "FastAPI"];

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
            {WORK_TECHS.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
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
            {FUN_TOOLS.map((tool) => (
              <Chip key={tool}>{tool}</Chip>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
