import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Emoji = ({ className, children }: Props) => {
  const emojiStyle = {
    fontFamily: "Arial, sans-serif",
  };

  return (
    <span className={className} style={emojiStyle}>
      {children}
    </span>
  );
};