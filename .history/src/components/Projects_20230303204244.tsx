import React from "react";
import { motion } from "framer-motion";
import project_1 from "@/public/images/amazon.png";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flew-row max-w-full justify mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      {/* -------------------------------- */}
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img src={project_1.src} alt="" />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A/50">
                Project 1 of 3:
              </span>{" "}
              Bitcoin Reinforcement Learning Trading Bot
            </h4>
            <p>ACM Special Interest Group in AI</p>
            <p>TensorFlow | Keras | Pandas | NumPy | Seaborn</p>
          </div>
          <div className="h-80 overflow-y-scroll">
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>
                Established a profitable trading bot to optimize profits through
                strategic buying and selling, resulting in 74% ROI.
              </li>
              <li>
                Utilized deep reinforcement learning techniques, specifically a
                Deep Recurrent Q-Network with LSTM, to analyze historical
                bitcoin prices data with CUDA support.
              </li>
            </ul>
          </div>
        </div>
        {/* -------------------------------- */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img src={project_1.src} alt="" />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A/50">
                Project 2 of 3:
              </span>{" "}
              Blood Cell ANN Classifier
            </h4>
            <p>Personal Project</p>
            <p>
              TensorFlow | Scikit-Learn | Keras | Pandas | NumPy | Matplotlib
            </p>
          </div>
          <div className="h-80 overflow-y-scroll">
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>
                Implemented data preprocessing techniques to prepare the image
                dataset for model training and evaluation.
              </li>
              <li>
                Assembled an artificial neural network model to accurately
                classify different types of blood cells in images with a success
                rate of 98% on testing data.
              </li>
            </ul>
          </div>
        </div>
        {/* -------------------------------- */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img src={project_1.src} alt="" />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A/50">
                Project 3 of 3:
              </span>{" "}
              This Website
            </h4>
            <span>Personal Project</span> Typescript | React | Javascript | HTML
            | TailwindCSS | Next.js | Framer Motions | Node.js | AWS
          </div>
          <div className="h-80 overflow-y-scroll">
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>
                Engineered a natural language processing tool for automated
                extraction of purchase order numbers from emails.
              </li>
              <li>
                Integrated RPA into a larger system for automating shipping
                inquiries by retrieving shipping details from SAP improving
                customer inquiry response times tenfold to streamline the supply
                chain process.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* -------------------------------- */}

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
    </div>
  );
}
