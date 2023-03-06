import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div>
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
