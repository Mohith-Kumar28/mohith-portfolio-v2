import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiBehance, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

import { OutlineButton } from "../buttons/OutlineButton";
import Link from "next/link";
import Image from "next/image";
import { LinkPreview } from "../util/link-preview";

export const BentoHero = () => {
  return (
    <div id="about" className="min-h-screen bg-zinc-900  py-12 text-zinc-50">
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
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Mohith<span className="text-rose-500">.</span>{" "}
      <span className="text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
    <OutlineButton
      onClick={() => {
        document.getElementById("projects")?.scrollIntoView();
      }}
      className="pointer-events-auto before:bg-rose-700 hover:text-white hover:border-rose-700 mt-4 bg-rose-500 text-zinc-100 border-rose-500 md:mt-6"
    >
      <LinkPreview url="http://www.mohith.in/#projects">
        View Projects
      </LinkPreview>
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
        <SiLinkedin />
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
      className="col-span-6 bg-green-500 md:col-span-3"
    >
      <Link
        href="https://bit.ly/3VjUrhM"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiBehance />
      </Link>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p className="text-zinc-400">
      Crafting digital masterpieces, one line at a time. With{" "}
      <span className="text-white"> 2+ years</span> of experience building web
      based solutions, and a passion for{" "}
      <span className="text-white"> UI/UX</span>, I bring a unique blend of
      technical strength and creative flair.
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <LinkPreview url="https://maps.app.goo.gl/HDNWb1HLF53Eji847">
      <div className="flex flex-col  align-middle gap-4">
        <FiMapPin className="text-3xl mx-auto" />
        <p className="text-center text-lg text-zinc-400">Gurugram, India</p>
      </div>
    </LinkPreview>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <div className="flex flex-wrap justify-between gap-6 align-middle flex-grow">
      <LinkPreview url="https://nextjs.org/">
        <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3">
          <Image
            alt="Nextjs logo"
            src={"/tech/Next.svg"}
            width={50}
            height={50}
          />
        </div>
      </LinkPreview>
      <LinkPreview url="https://react.dev/">
        <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3">
          <Image
            alt="Reach logo"
            src={"/tech/React.svg"}
            width={50}
            height={50}
          />
        </div>
      </LinkPreview>
      <LinkPreview url="https://expressjs.com/">
        <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3">
          <Image
            alt="Express logo"
            src={"/tech/Express.svg"}
            width={50}
            height={50}
          />
        </div>
      </LinkPreview>
      <LinkPreview url="https://www.mongodb.com/">
        <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3">
          <Image
            alt="MongoDB logo"
            src={"/tech/MongoDB.svg"}
            width={50}
            height={50}
          />
        </div>
      </LinkPreview>
      <LinkPreview url="https://www.figma.com/about/">
        <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3">
          <Image
            alt="Figma logo"
            src={"/tech/Figma.svg"}
            width={50}
            height={50}
          />
        </div>
      </LinkPreview>
    </div>
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
