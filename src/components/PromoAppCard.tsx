import React from "react";
import GroupHeader from "./GroupHeader";
import Cell from "./Cell";

type PromoAppCardProps = {
  title: string;
  subtitle: string;
  appName: string;
  appDescription: string;
  appIcon?: React.ReactNode | string;
  backgroundColor?: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
  onOpenClick?: () => void;
  className?: string;
};

export default function PromoAppCard({
  title,
  subtitle,
  appName,
  appDescription,
  appIcon,
  backgroundColor = "hsl(211.3 100% 50% / 0.1)", // default light blue
  buttonVariant = "tertiary",
  onOpenClick,
  className = "",
}: PromoAppCardProps) {
  return (
    <div
      className={`card border-separator cursor-pointer transform-gpu transition-transform active:scale-95 duration-[400ms] ease-out ${className}`}
      onClick={onOpenClick}
    >
      {/* Colored background container with 6px inset */}
      <div
        className="rounded-[22px] m-[6px] pb-[4px]"
        style={{ backgroundColor }}
      >
        {/* Group Header with title and subtitle */}
        <GroupHeader
          title={title}
          subtitle={subtitle}
          subtitleColor="primary"
          className="w-full"
        />

        {/* Small Cell */}
        <Cell
          size="S"
          appName={appName}
          appDescription={appDescription}
          appIcon={appIcon}
          buttonVariant={buttonVariant}
          onOpenClick={onOpenClick}
          className="w-full"
        />
      </div>
    </div>
  );
}
