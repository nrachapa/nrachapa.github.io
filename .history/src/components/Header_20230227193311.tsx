import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};
export default function Header({}: Props) {
  return (
    <header>
      <div>
        {/*social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/nrachapa" />
      </div>
    </header>
  );
}
