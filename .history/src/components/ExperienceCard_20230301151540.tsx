import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <Image
        className="w-32 h-32 rounded-full xl:"
        src={img}
        alt=""
        width={8000}
        height={8000}
      />
    </article>
  );
}
