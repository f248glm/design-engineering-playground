import React from "react";
import OpenButton from "./OpenButton";

type CellSize = "S" | "M";

type CellProps = {
  size?: CellSize;
  appName: string;
  appDescription: string;
  appIcon?: React.ReactNode | string;
  onOpenClick?: () => void;
  className?: string;
};

export default function Cell({
  size = "M",
  appName,
  appDescription,
  appIcon,
  onOpenClick,
  className = "",
}: CellProps) {
  const iconClass = size === "S" ? "cell-icon-s" : "cell-icon-m";
  const cellSizeClass = size === "S" ? "cell-s" : "cell-m";

  return (
    <div className={`cell ${cellSizeClass} ${className}`}>
      {/* App Icon Container */}
      <div className={`cell-icon ${iconClass}`}>
        {typeof appIcon === "string" ? (
          <img
            src={appIcon}
            alt={appName}
            className="w-full h-full object-cover"
          />
        ) : (
          appIcon || (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">
                {appName.charAt(0).toUpperCase()}
              </span>
            </div>
          )
        )}
      </div>

      {/* App Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-style-appname text-[hsl(var(--color-text-primary))] truncate">
          {appName}
        </h3>
        <p className="text-style-description text-[hsl(var(--color-text-secondary))] truncate mt-[2px]">
          {appDescription}
        </p>
      </div>

      {/* Open Button */}
      <div className="flex-shrink-0">
        <OpenButton onClick={onOpenClick} />
      </div>
    </div>
  );
}
