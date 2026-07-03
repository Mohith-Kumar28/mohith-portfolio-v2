import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";

import { OutlineButton } from "../buttons/OutlineButton";
import Link from "next/link";
import Image from "next/image";
import { LinkPreview } from "../util/link-preview";
import { SwapLogos } from "./SwapLogos";

export const BentoHero = () => {
  return (
    <div id="about" className="min-h-screen bg-zinc-900  py-6 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid  grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    {/* <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    /> */}
    <div className="bg-gray-500 border-2 size-16 mb-4 relative inline-block border-gray-400 rounded-full overflow-hidden">
      <Image
        alt="Reach logo"
        src={"/profile-pic.png"}
        layout="fill"
        className="object-cover"
      />
    </div>
    <h1 className="mb6 text-4xl font-medium leading-tight">
      Hi, I'm Mohith<span className="text-rose-500">.</span>{" "}
      <span className="text-zinc-400">
        I'm really good at figuring things out.
      </span>
    </h1>
    <OutlineButton
      onClick={() => {
        document.getElementById("projects")?.scrollIntoView();
      }}
      className="pointer-events-auto before:bg-rose-700 hover:text-white hover:border-rose-700 mt-4 bg-rose-500 text-zinc-100 border-rose-500 md:mt-6"
    >
      View Projects
    </OutlineButton>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3 "
    >
      <Link
        href="https://www.linkedin.com/in/mohith-kumar-chaluvadi/"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaLinkedin />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-700 md:col-span-3"
    >
      <Link
        href="https://github.com/Mohith-Kumar28"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <Link
        href="mailto:mohithkumar808@gmail.com"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiGmail />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] md:col-span-3"
    >
      <Link
        href="https://www.instagram.com/ch.mohith_kumar/"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram />
      </Link>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p className="text-zinc-400">
      I don't just stick to web development anymore. From{" "}
      <span className="text-white"> AI and backend systems</span> to {" "}
      <span className="text-white"> mobile apps</span>, I love taking on new challenges. If it's tech, I can build it.
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center justify-center gap-3 md:col-span-3 relative overflow-hidden">
    {/* Background glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent" />
    
    <LinkPreview url="https://maps.app.goo.gl/QgqiJEFLb3M2LS9r5">
      <div className="flex flex-col items-center gap-3 relative z-10">
        {/* Animated pin with ring */}
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-rose-500/20 blur-md"
          />
          <div className="relative bg-zinc-700/50 rounded-full p-3 ring-2 ring-rose-500/30">
            <FiMapPin className="text-2xl text-rose-400" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-zinc-100">Bengaluru</p>
          <p className="text-sm text-zinc-500">India 🇮🇳</p>
        </div>
      </div>
    </LinkPreview>
  </Block>
);
const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9 p-0 overflow-hidden">
    <SwapLogos />
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};
