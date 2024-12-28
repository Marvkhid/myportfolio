import React from "react";
import Link from "next/link";

interface LinksProps {
  isVertical?: boolean;
  onClick?: () => void;
}

export const Links: React.FC<LinksProps> = ({ isVertical, onClick }) => {
  return (
    <ul className={`flex ${isVertical ? "flex-col space-y-4" : "space-x-6"} items-center`}>
      <li>
        <Link href="#about" onClick={onClick}>
          About
        </Link>
      </li>
      <li>
        <Link href="#skills" onClick={onClick}>
          Skills
        </Link>
      </li>
      <li>
        <Link href="#experience" onClick={onClick}>
          Experience
        </Link>
      </li>
      <li>
        <Link href="#work" onClick={onClick}>
          Work
        </Link>
      </li>
      <li>
        <Link href="#contact" onClick={onClick}>
          Contact
        </Link>
      </li>
    </ul>
  );
};
