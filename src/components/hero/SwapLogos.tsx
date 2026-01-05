"use client";
import React from "react";
import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiAmazon,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";

export const SwapLogos = () => {
  return <Logos />;
};

const Logos = () => {
  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-4 h-full">
        <Spinner
          top={<SiNextdotjs className="text-white" />}
          bottom={<SiReact className="text-[#58C4DC]" />}
        />
        <Spinner
          top={<SiTypescript className="text-[#3178C6]" />}
          bottom={<SiNestjs className="text-[#E0234E]" />}
        />
        <Spinner
          top={<SiPrisma className="text-white" />}
          bottom={<SiPostgresql className="text-[#336791]" />}
        />
        <Spinner
          top={<SiDocker className="text-[#2496ED]" />}
          bottom={<SiFigma className="text-[#F24E1E]" />}
        />
      </div>
    </section>
  );
};

const TRANSITION = {
  ease: "easeInOut",
  duration: 7,
  repeat: Infinity,
  times: [0, 0.35, 0.4, 0.85, 0.9, 1],
};

const Spinner = ({
  top,
  bottom,
}: {
  top: React.ReactNode;
  bottom: React.ReactNode;
}) => {
  return (
    <div className="relative h-full min-h-[80px] sm:min-h-[120px] w-full overflow-hidden bg-zinc-800 text-2xl sm:text-4xl">
      {/* TOP SPINNER */}
      <motion.div
        style={{
          y: "-40%",
          x: "-50%",
        }}
        animate={{
          rotate: ["0deg", "0deg", "180deg", "180deg", "360deg", "360deg"],
        }}
        transition={TRANSITION}
        className="absolute left-1/2 z-10 h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] overflow-hidden rounded-full bg-zinc-800 ring-2 ring-zinc-700/40"
      >
        <div
          style={{
            bottom: 0,
            transform: "translateY(50%) translateX(-50%)",
          }}
          className="absolute left-1/2"
        >
          {top}
        </div>
        <div
          style={{
            top: 0,
            transform: "translateY(-50%) translateX(-50%) rotate(180deg)",
          }}
          className="absolute left-1/2"
        >
          {bottom}
        </div>
      </motion.div>

      {/* BOTTOM SPINNER */}
      <motion.div
        style={{
          y: "60%",
          x: "-50%",
        }}
        animate={{
          rotate: ["0deg", "0deg", "180deg", "180deg", "360deg", "360deg"],
        }}
        transition={TRANSITION}
        className="absolute left-1/2 z-10 h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] overflow-hidden rounded-full bg-zinc-800 ring-2 ring-zinc-700/40"
      >
        <div
          style={{
            bottom: 0,
            transform: "translateY(50%) translateX(-50%) rotate(180deg)",
          }}
          className="absolute left-1/2"
        >
          {bottom}
        </div>
        <div
          style={{
            top: 0,
            transform: "translateY(-50%) translateX(-50%)",
          }}
          className="absolute left-1/2"
        >
          {top}
        </div>
      </motion.div>
    </div>
  );
};
