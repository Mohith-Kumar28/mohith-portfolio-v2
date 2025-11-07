import { useAnimation, useInView, motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import Reveal from "../util/Reveal";
import Image from "next/image";
import { SimpleCarousel } from "../ui/SimpleCarousel";
import { sendGTMEvent } from "@next/third-parties/google";
import { Chip } from "../util/Chip";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  ytVidSrc: string;
  images?: string[];
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  ytVidSrc,
  images,
  title,
  code,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        onClick={() => {
          sendGTMEvent({ event: "ProjectModalOpened", value: { title } });
          setIsOpen(true);
        }}
        className="cursor-pointer  bg-zinc-800 transition-all   hover:outline  p-6 rounded-lg"
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="w-full aspect-video  bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"
        >
          {/* <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded"
          /> */}
          {images && images.length > 0 ? (
            <div className="absolute inset-0">
              <div className="w-full h-full">
                {/* Use full-width + full-height reveal to avoid collapsing height */}
                <Reveal width="w-full" fullHeight>
                  <SimpleCarousel images={images} auto intervalMs={3000} />
                </Reveal>
              </div>
            </div>
          ) : ytVidSrc && ytVidSrc != "" ? (
            <iframe
              // width="560"
              // height="315"
              className="w-full h-full transition-all rounded hover:scale-90 "
              src={ytVidSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              src={imgSrc}
              alt={`An image of the ${title} project.`}
              layout="fill"
              objectFit="contain"
              quality={100}
              className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded hover:scale-90"
              style={{
                transformOrigin: "center",
                transform: hovered ? "rotate(2deg)" : "none",
              }}
            />
          )}
        </div>
        <div className="mt-6">
          <Reveal width="w-full">
            {/* <Link href={projectLink} target="_blank" rel="nofollow"> */}
            <div className="flex items-center gap-2 w-full">
              <h4
                onClick={() => setIsOpen(true)}
                className="font-bold text-lg shrink-0 hover:underline decoration-dotted max-w-[calc(100%_-_150px)] cursor-pointer"
              >
                {title}
              </h4>
              <div className=" flex flex-grow h-[1px] bg-zinc-600 mx-3" />

              <div className="flex items-center gap-4 text-xl">
                {code && code !== "" && (
                  <Link
                    target="_blank"
                    rel="nofollow"
                    className="text-zinc-300 hover:text-rose-300 transition-colors flex items-center gap-1"
                    href={code}
                  >
                    <AiFillGithub />
                  </Link>
                )}
                {projectLink && projectLink !== "" && (
                  <Link
                    target="_blank"
                    rel="nofollow"
                    className="text-zinc-300 hover:text-rose-300 transition-colors flex items-center gap-1"
                    href={projectLink}
                  >
                    <span className="text-base mr-1"> Live project </span>{" "}
                    <AiOutlineExport />
                  </Link>
                )}
              </div>

              {/* {code && code != "" && (
                  <Link href={code} target="_blank" rel="nofollow">
                    <AiFillGithub className="text-xl text-zinc-300 hover:text-rose-300 transition-colors" />
                  </Link>
                )}
                <AiOutlineExport className=" text-xl text-zinc-300 hover:text-rose-300 transition-colors" /> */}
            </div>
            {/* </Link> */}
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 text-sm text-rose-300 my-2">
              {tech.join(" - ")}
              {/* {tech[0]} */}
            </div>
          </Reveal>
          <Reveal>
            <p className="text-zinc-300 leading-relaxed">
              {description}{" "}
              <span
                className="inline-block text-sm text-rose-300 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal>

          {/* <Reveal>
            <div className="flex flex-wrap gap-2 mt-4">
              {tech.map((techName) => (
                <Chip key={techName}>{techName}</Chip>
              ))}
            </div>
          </Reveal> */}
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        ytVidSrc={ytVidSrc}
        images={images}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
