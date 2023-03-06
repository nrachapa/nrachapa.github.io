import React from "react";
import { motion } from "framer-motion";
import amazon_logo from "@/public/images/amazon.png";
import merck_logo from "@/public/images/Merck.png";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Professional Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20">
        {/* -------------------------------- */}
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#272727] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={amazon_logo.src}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">
              Software Development Engineer Intern
            </h4>
            <p className="font-bold text-2xl mt-1">Amazon</p>
            <div className="uppercase py-5 text-gray-300">
              <span className="underline uppercase text-gray-300">Skills</span>
              <p>
                Python | AWS S3 | AWS SageMaker | AWS ECR | Matplotlib | Seaborn
                | Grafana | Docker
              </p>
            </div>
            <p className="uppercase py-5 text-gray-300">
              Started May 2022 - Ended Aug 2022 in Redmond, WA for Project
              Kuiper
            </p>
            <div className="h-80 overflow-y-scroll">
              <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>
                  Designed statistical models improving validation efficiency by
                  70% through analyzing time-series telemetry data for hardware
                  and software validation across satellite subsystems and test
                  procedures.
                </li>
                <li>
                  Integrated containerized model into the test automation
                  framework for efficient testing of satellite subsystems.
                </li>
                <li>
                  Developed dashboards to simulate orbital modem pass
                  performance, identifying key areas for improvement.
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* -------------------------------- */}

        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#272727] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={merck_logo.src}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">
              Undergraduate Data Science Researcher
            </h4>
            <p className="font-bold text-2xl mt-1">Amazon</p>
            <div className="uppercase py-5 text-gray-300">
              <span className="underline uppercase text-gray-300">Skills</span>
              <p>
                Python | AWS S3 | AWS SageMaker | AWS ECR | Matplotlib | Seaborn
                | Grafana | Docker
              </p>
            </div>
            <p className="uppercase py-5 text-gray-300">
              Started May 2022 - Ended Aug 2022 in Redmond, WA
            </p>
            <div className="h-80 overflow-y-scroll">
              <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>
                  Designed statistical models improving validation efficiency by
                  70% through analyzing time-series telemetry data for hardware
                  and software validation across satellite subsystems and test
                  procedures.
                </li>
                <li>
                  Integrated containerized model into the test automation
                  framework for efficient testing of satellite subsystems.
                </li>
                <li>
                  Developed dashboards to simulate orbital modem pass
                  performance, identifying key areas for improvement.
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* -------------------------------- */}

        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#272727] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={amazon_logo.src}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">
              Software Development Engineer Intern
            </h4>
            <p className="font-bold text-2xl mt-1">Amazon</p>
            <div className="uppercase py-5 text-gray-300">
              <span className="underline uppercase text-gray-300">Skills</span>
              <p>
                Python | AWS S3 | AWS SageMaker | AWS ECR | Matplotlib | Seaborn
                | Grafana | Docker
              </p>
            </div>
            <p className="uppercase py-5 text-gray-300">
              Started May 2022 - Ended Aug 2022 in Redmond, WA
            </p>
            <div className="h-80 overflow-y-scroll">
              <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>
                  Designed statistical models improving validation efficiency by
                  70% through analyzing time-series telemetry data for hardware
                  and software validation across satellite subsystems and test
                  procedures.
                </li>
                <li>
                  Integrated containerized model into the test automation
                  framework for efficient testing of satellite subsystems.
                </li>
                <li>
                  Developed dashboards to simulate orbital modem pass
                  performance, identifying key areas for improvement.
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* -------------------------------- */}
      </div>
    </motion.div>
  );
}
