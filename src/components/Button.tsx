import ButtonBody from "./ButtonBody";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tetriary";
  size?: "lg";
};

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest} // ← сюда придёт onClick, disabled, type и т.д.
      className={`btn btn-${size} btn-${variant} ${className}`}
    >
      <ButtonBody>{children}</ButtonBody>
    </button>
  );
}
