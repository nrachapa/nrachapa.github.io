import { motion } from "framer-motion";
import React from "react";
import { img } from "@/public/images/";

type Props = {
  directionLeft?: boolean;
};

export default function SkillBubble({}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src=""
      />
    </div>
  );
}
