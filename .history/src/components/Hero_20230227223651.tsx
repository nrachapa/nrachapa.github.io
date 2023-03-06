import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Naren Rachapalli",
      "Guy-who-loves-Tea.csv",
      "But Loves To Code More!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/prof_head_shot.jpg"
        alt=""
        width={10}
        height={10}
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
