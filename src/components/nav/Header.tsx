import Link from "next/link";
import React from "react";
import { SiBehance, SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/80 backdrop-blur-lg">
      <MyLinks />
      <OutlineButton onClick={() => window.open("https://bit.ly/45cq8Oy")}>
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-rose-300 transition-colors"
      href="https://bit.ly/3Yj6jBy"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-rose-300 transition-colors"
      href="https://bit.ly/3Ylzsw7"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <Link
      className="text-zinc-300 hover:text-rose-300 transition-colors"
      href="mailto:mohithkumar808@gmail.com"
      target="_blank"
      rel="nofollow"
    >
      <SiGmail />
    </Link>
    <Link
      className="text-zinc-300 hover:text-rose-300 transition-colors"
      href="https://bit.ly/3VjUrhM"
      target="_blank"
      rel="nofollow"
    >
      <SiBehance />
    </Link>
  </div>
);
