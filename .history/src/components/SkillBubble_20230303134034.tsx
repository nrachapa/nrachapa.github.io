import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

export default function SkillBubble({}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
      />
    </div>
  );
}
