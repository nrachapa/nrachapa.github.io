import React from "react";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="flex relatice flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:sace-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-5000 text-2xl">
        Skills
      </h3>
    </motion.div>
  );
}
