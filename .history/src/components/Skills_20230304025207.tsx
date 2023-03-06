import React from "react";
import { motion } from "framer-motion";
import SkillBubble from "./SkillBubble";
import tensor_logo from "@/public/images/skills/TensorFlow.jpeg";
import python_logo from "@/public/images/skills/python.png";
import pandas_logo from "@/public/images/skills/pandas.png";
import java_logo from "@/public/images/skills/java.png";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-7 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-20 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-8">
        <SkillBubble src={tensor_logo.src} skillName="TensorFlow" prof={100} />
        <SkillBubble src={python_logo.src} skillName="Python" prof={100} />
        <SkillBubble src={pandas_logo.src} skillName="Pandas" prof={100} />
        <SkillBubble src={java_logo.src} skillName="Java" prof={100} />
        <SkillBubble
          src={tensor_logo.src}
          skillName="Tailwind CSS"
          prof={100}
        />
        <SkillBubble src={aws_logo.src} skillName="AWS" prof={100} />
        <SkillBubble src={c_logo.src} skillName="C" prof={100} />
        <SkillBubble src={cplus_logo.src} skillName="C++" prof={100} />
        <SkillBubble
          src={databricks_logo.src}
          skillName="Databricks"
          prof={100}
        />
        <SkillBubble src={docker_logo.src} skillName="Docker" prof={100} />
        <SkillBubble src={flask_logo.src} skillName="Flask" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="Git" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="Grafana" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="HTML" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="Javascript" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="Keras" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="Matplotlib" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="Mongodb" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="Neo4j" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="Next.js" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="NumPy" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="PyTorch" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="R" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="React" prof={100} />
        <SkillBubble src={tensor_logo.src} skillName="Seaborn" prof={100} />
        <SkillBubble
          src={tensor_logo.src}
          skillName="Scikit-Learn"
          prof={100}
        />
        <SkillBubble src={tensor_logo.src} skillName="SQL" prof={100} />
      </div>
    </motion.div>
  );
}
