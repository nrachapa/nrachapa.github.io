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
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            some background
          </span>{" "}
          about me!
        </h4>
        <p className="text-sm">
          I am a student of Purdue University with a double majoring in
          Bachelors of Science in Computer Science. I have a strong foundation
          in programming languages such as Python, C/C++, and R, as well as data
          science tools such as TensorFlow, Scikit-Learn, Keras, Pandas, NumPy,
          and Seaborn. In my internships at Amazon, Merck, and eAlliance
          Corporation, I have applied my skills to develop statistical models,
          integrate my models into automation frameworks, create dashboards for
          data visualization, automate the extraction of data from emails, and
          streamline supply chain processes. In my personal projects, I have
          developed a trading bot using deep reinforcement learning techniques
          and an artificial neural network to classify different types of blood
          cells. I am seeking opportunities to leverage my skills and continue
          learning and growing as a software engineer and data scientist.
        </p>
      </div>
    </div>
  );
}
