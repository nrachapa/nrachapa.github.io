import React from "react";
import { Cursor, useTypewritter } from "react-simple-typewriter";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewritter({
    words: [
      "Hi, The Name's Naren Rachapalli",
      "Guy-who-loves-tea",
      "But Loves To Code More!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return <div></div>;
}
