import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};
export default function Header({}: Props) {
  return (
    <header>
      <div>
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
    </header>
  );
}
