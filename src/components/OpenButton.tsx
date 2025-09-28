import React from "react";
import InlineContent from "./InlineContent";
import { haptics } from "../utils/haptic";

type OpenButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
};

export default function OpenButton({
  children = "Open",
  className = "",
  variant = "tertiary",
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
      className={`btn btn-sm btn-${variant} ${className}`}
    >
      <InlineContent>{children}</InlineContent>
    </button>
  );
}
