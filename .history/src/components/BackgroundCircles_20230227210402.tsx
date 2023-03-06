import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
