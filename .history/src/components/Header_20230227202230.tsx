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

      <div className="flex flex-row items-center text-gray-300 cur ">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </div>
    </header>
  );
}
