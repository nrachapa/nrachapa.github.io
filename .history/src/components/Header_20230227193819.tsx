import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};
export default function Header({}: Props) {
  return (
    <header>
      <div className="flex flew-row items-center">
        {/*social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/nrachapa"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.github.com/nrachapa"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase">Get In Touch</p>
      </div>
    </header>
  );
}
