import React from "react";
import { motion } from "framer-motion";
import img from "@/public/images/prof_head_shot.jpg";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={img.src}
        alt=""
      />

      <div className="px-o md:px-10">
        <h4 className="text-4xl font-light">Position Held Title </h4>
        <p className="font-bold text-2xl mt-1">Company</p>
        <div>
          <img className="h-10 w-10 rounded-full" src={img.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={img.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={img.src} alt="" />

          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p>Started work... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
