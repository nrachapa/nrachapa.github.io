import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <Image
        className="relative rounded-full h-[185px] w-[185px] mx-auto object-cover"
        src={img}
        alt=""
        width={8000}
        height={8000}
      />
    </article>
  );
}
