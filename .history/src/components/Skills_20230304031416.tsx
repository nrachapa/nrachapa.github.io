import React from "react";
import { motion } from "framer-motion";
import SkillBubble from "./SkillBubble";
import tensor_logo from "@/public/images/skills/TensorFlow.jpeg";
import python_logo from "@/public/images/skills/python.png";
import pandas_logo from "@/public/images/skills/pandas.png";
import java_logo from "@/public/images/skills/java.png";
import aws_logo from "@/public/images/skills/aws.png";
import c_logo from "@/public/images/skills/c.png";
import docker_logo from "@/public/images/skills/docker.png";
import git_logo from "@/public/images/skills/git.png";
import grafana_logo from "@/public/images/skills/grafana.png";
import javascript_logo from "@/public/images/skills/javascript.png";
import keras_logo from "@/public/images/skills/keras.png";
import matplotlib_logo from "@/public/images/skills/matplotlib.png";
import mongodb_logo from "@/public/images/skills/mongodb.png";
import numpy_logo from "@/public/images/skills/numpy.png";
import pytorch_logo from "@/public/images/skills/pytorch.png";
import r_logo from "@/public/images/skills/r.png";
import react_logo from "@/public/images/skills/react.png";
import seaborn_logo from "@/public/images/skills/seaborn.png";
import sklearn_logo from "@/public/images/skills/sklearn.png";
import sql_logo from "@/public/images/skills/sql.png";

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
        <SkillBubble src={tensor_logo.src} skillName="TensorFlow" prof={75} />
        <SkillBubble src={python_logo.src} skillName="Python" prof={100} />
        <SkillBubble src={pandas_logo.src} skillName="Pandas" prof={90} />
        <SkillBubble src={java_logo.src} skillName="Java" prof={70} />
        <SkillBubble src={aws_logo.src} skillName="AWS" prof={60} />
        <SkillBubble src={c_logo.src} skillName="C" prof={85} />
        <SkillBubble src={docker_logo.src} skillName="Docker" prof={85} />
        <SkillBubble src={git_logo.src} skillName="Git" prof={100} />
        <SkillBubble src={grafana_logo.src} skillName="Grafana" prof={90} />
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
