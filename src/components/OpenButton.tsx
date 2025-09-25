import React from "react";
import InlineContent from "./InlineContent";
import { haptics } from "../utils/haptic";

type OpenButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function OpenButton({
  children = "Open",
  className = "",
  onClick,
  ...rest
}: OpenButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    haptics.buttonPress();
    onClick?.(e);
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={`btn btn-sm btn-tertiary ${className}`}
    >
      <InlineContent>{children}</InlineContent>
    </button>
  );
}
