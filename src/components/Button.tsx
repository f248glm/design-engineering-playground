import ButtonBody from "./ButtonBody";
import React from "react";
import { haptics } from "../utils/haptic";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tetriary";
  size?: "lg";
};

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  ...rest
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Trigger haptic feedback
    haptics.buttonPress();

    // Call original onClick if provided
    onClick?.(e);
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={`btn btn-${size} btn-${variant} ${className}`}
    >
      <ButtonBody>{children}</ButtonBody>
    </button>
  );
}
