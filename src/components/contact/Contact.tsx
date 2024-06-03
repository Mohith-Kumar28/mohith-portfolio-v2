import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";
import ContactForm from "./ContactForm";
import { SectionHeader } from "../util/SectionHeader";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <SectionHeader title="Contact" dir="r" />
      <div className="  bg-rose-500  rounded-xl">
        {/* <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contact<span className="text-rose-500">.</span>
          </h4>
        </Reveal> */}
        {/* <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/mohith-kumar-chaluvadi/"
              target="_blank"
              className="text-rose-300 hover:underline"
            >
              Linkedin
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link href="mailto: mohithkumar808@gmail.com">
            <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-rose-300 transition-colors">
              <AiFillMail />
              <span> mohithkumar808@gmail.com</span>
            </div>
          </Link>
        </Reveal> */}
        <Reveal width="w-full">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
};
