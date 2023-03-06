import React from "react";
import { motion } from "framer-motion";
import SkillBubble from "./SkillBubble";
import tensor_logo from "@/public/images/skills/TensorFlow.jpeg";
import python_logo from "@/public/images/skills/python.png";
import pandas_logo from "@/public/images/skills/pandas.png";
import java_logo from "@/public/images/skills/java.png";
import tailwind_logo
import aws_logo
import c_logo
import cplus_logo
import databricks_logo
import docker_logo
import git_logo
import grafana_logo
import html_logo
import javascript_logo
import keras_logo
import matplotlib_logo
import mongodb_logo
import neo4j_logo
import nextjs_logo
import numpy_logo
import pytorch_logo
import r_logo
import react_logo
import seaborn_logo from from "@/public/images/skills"
import sklearn_logo from "@/public/images/skills/sklearn.png"
import sql_logo from "@/public/images/skills/sql.png"

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
        <SkillBubble src={tensor_logo.src} skillName="TensorFlow" prof={70} />
        <SkillBubble src={python_logo.src} skillName="Python" prof={95} />
        <SkillBubble src={pandas_logo.src} skillName="Pandas" prof={90} />
        <SkillBubble src={java_logo.src} skillName="Java" prof={70} />
        <SkillBubble src={tailwind_logo.src} skillName="Tailwind CSS" prof={50} />
        <SkillBubble src={aws_logo.src} skillName="AWS" prof={60} />
        <SkillBubble src={c_logo.src} skillName="C" prof={85} />
        <SkillBubble src={cplus_logo.src} skillName="C++" prof={80} />
        <SkillBubble
          src={databricks_logo.src}
          skillName="Databricks"
          prof={30}
        />
        <SkillBubble src={docker_logo.src} skillName="Docker" prof={85} />
        <SkillBubble src={git_logo.src} skillName="Git" prof={100} />
        <SkillBubble src={grafana_logo.src} skillName="Grafana" prof={90} />
        <SkillBubble src={html_logo.src} skillName="HTML" prof={90} />
        <SkillBubble
          src={javascript_logo.src}
          skillName="Javascript"
          prof={75}
        />
        <SkillBubble src={keras_logo.src} skillName="Keras" prof={70} />
        <SkillBubble
          src={matplotlib_logo.src}
          skillName="Matplotlib"
          prof={85}
        />
        <SkillBubble src={mongodb_logo.src} skillName="Mongodb" prof={75} />
        <SkillBubble src={neo4j_logo.src} skillName="Neo4j" prof={65} />
        <SkillBubble src={nextjs_logo.src} skillName="Next.js" prof={35} />
        <SkillBubble src={numpy_logo.src} skillName="NumPy" prof={100} />
        <SkillBubble src={pytorch_logo.src} skillName="PyTorch" prof={80} />
        <SkillBubble src={r_logo.src} skillName="R" prof={95} />
        <SkillBubble src={react_logo.src} skillName="React" prof={80} />
        <SkillBubble src={seaborn_logo.src} skillName="Seaborn" prof={95} />
        <SkillBubble
          src={sklearn_logo.src}
          skillName="Scikit-Learn"
          prof={80}
        />
        <SkillBubble src={sql_logo.src} skillName="SQL" prof={80} />
      </div>
    </motion.div>
  );
}
