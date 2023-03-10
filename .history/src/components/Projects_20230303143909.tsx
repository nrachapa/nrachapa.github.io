import React from "react";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flew-row max-w-full justify mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
    </div>
  );
}
