import React from "react";
import { motion } from "framer-motion";
import img from "../public/images/prof_head_shot.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={img.src}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="uppercase text-4xl font-semibold">
          Here is{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            some background
          </span>{" "}
          about me!
        </h4>
        <p className="text-[17px]">
          I am an undergraduate student at Purdue University, studying computer
          science. I love programming languages especially Python, C/C++, and
          Java. Mainly, I excel with data science tools like TensorFlow,
          Scikit-Learn, Pandas, NumPy, and Seaborn very well. In my internships
          at Amazon, Merck, and eAlliance Corporation, I worked on statistical
          models, test automation frameworks, data visualization, and natural
          language processing. I enjoy creating personal projects, like trading
          bots and an artificial neural networks. Currently, I am looking for
          new opportunities to learn and grow as a software engineer and data
          scientist!
        </p>
      </div>
    </div>
  );
}
