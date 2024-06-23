import Image from "next/image";
import React from "react";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

const MiniProjectCard = ({ project }) => {
  return (
    <div className="w-full  h-fit border border-pri-gray bg-sec-black">
      {/* <Image width={300} height={300} src={project.img}/> */}

      <div className="border-y flex flex-wrap px-3 py-1 border-pri-gray gap-x-3 text-pri-gray">
        {project.skills.map((p) => {
          return (
            <span key={p}>
              <span className="text-rose-300"> #</span>
              {p}
            </span>
          );
        })}
      </div>

      <div className="p-3">
        <h3 className="font-bold text-lg ">{project.name}</h3>
        <p className="text-pri-gray leading-5">{project.description}</p>
        <div className="flex justify-between mt-4">
          {/* {project.live_link && (
            <Link target="_blank" className=" " href={project.live_link}>
              <button className="border hover:outline border-pri-purple px-3 py-1 flex">
                LIVE
                <AiOutlineExport className="w-4 ml-2 mt-1" />
              </button>
            </Link>
          )}

          {project.github_link && (
            <Link
              target="_blank"
              className=" my-auto ml-auto"
              href={project.github_link}
            >
             
              <SiGithub className="rounded-full size-7 text-lg" />
            </Link>
          )} */}

          <div className="flex items-center gap-4 text-sm mt-3">
            {project.live_link && project.live_link != "" && (
              <Link
                target="_blank"
                rel="nofollow"
                className="text-zinc-300 hover:text-rose-300 transition-colors flex items-center gap-1"
                href={project.live_link}
              >
                <AiOutlineExport /> Live Project
              </Link>
            )}
            {project.github_link && project.github_link !== "" && (
              <Link
                target="_blank"
                rel="nofollow"
                className="text-zinc-300 hover:text-rose-300 transition-colors flex items-center gap-1"
                href={project.github_link}
              >
                <AiFillGithub /> Source Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
