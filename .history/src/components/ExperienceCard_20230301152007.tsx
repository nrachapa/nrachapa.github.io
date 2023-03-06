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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={img.src}
        alt=""
      />
    </article>
  );
}
