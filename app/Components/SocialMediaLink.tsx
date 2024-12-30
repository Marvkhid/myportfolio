import React from "react";

interface SocialMediaLinkProps {
  src: string;
  alt?: string; // Make 'alt' optional to avoid breaking changes
  hasBg?: boolean;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ src, alt, hasBg }) => {
  return (
    <div
      className={`${
        hasBg ? "p-2 rounded-full bg-neutral-800" : ""
      } inline-flex`}
    >
      <img
        src={src}
        alt={alt || "Social media icon"} // Provide a default value for 'alt'
        className="w-6 h-6"
      />
    </div>
  );
};

export default SocialMediaLink;
