import React from "react";
import { motion } from "framer-motion";
import { img } from "@/public/images/";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <Image
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={img}
        alt=""
        width={8000}
        height={8000}
      />
    </article>
  );
}
