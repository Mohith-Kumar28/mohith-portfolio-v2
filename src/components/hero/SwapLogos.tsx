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
  return (
    <div className="py-4">
      <Logos />
    </div>
  );
};

const Logos = () => {
  return (
    <section>
      <div className="mx-auto grid max-w-2xl grid-cols-4 divide-x divide-zinc-700 border border-zinc-700 rounded-lg overflow-hidden">
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
    <div className="relative h-14 w-full overflow-hidden bg-zinc-800 text-2xl">
      {/* TOP SPINNER */}
      <motion.div
        style={{
          y: "-50%",
          x: "-50%",
        }}
        animate={{
          rotate: ["0deg", "0deg", "180deg", "180deg", "360deg", "360deg"],
        }}
        transition={TRANSITION}
        className="absolute left-1/2 z-10 h-14 w-full overflow-hidden bg-zinc-800"
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
          y: "50%",
          x: "-50%",
        }}
        animate={{
          rotate: ["0deg", "0deg", "180deg", "180deg", "360deg", "360deg"],
        }}
        transition={TRANSITION}
        className="absolute left-1/2 z-10 h-14 w-full overflow-hidden bg-zinc-800"
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
