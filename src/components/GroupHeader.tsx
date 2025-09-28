type GroupHeaderProps = {
  title: string;
  subtitle?: string;
  subtitleColor?: "primary" | "secondary";
  icon?: React.ReactNode;
  counter?: string;
  rightText?: string;
  rightIcon?: React.ReactNode;
  onRightClick?: () => void;
  className?: string;
};

export default function GroupHeader({
  title,
  subtitle,
  subtitleColor = "secondary",
  icon,
  counter,
  rightText,
  rightIcon,
  onRightClick,
  className = "",
}: GroupHeaderProps) {
  return (
    <div className={`group-header ${className}`}>
      {/* Main header row */}
      <div className="flex items-center justify-between">
        {/* Left side: icon + title + counter */}
        <div className="flex items-center gap-2">
          {icon && <div className="flex-shrink-0">{icon}</div>}

          <h2 className="text-style-groupHeader text-[hsl(var(--color-text-primary))] flex items-center gap-2">
            {title}
            {counter && (
              <span className="text-style-groupHeader text-[hsl(var(--color-text-secondary))]">
                {counter}
              </span>
            )}
          </h2>
        </div>

        {/* Right side: text + icon */}
        {(rightText || rightIcon) && (
          <div
            className={`flex items-center gap-1 ${onRightClick ? "cursor-pointer" : ""}`}
            onClick={onRightClick}
          >
            {rightText && (
              <span className="text-style-body text-[hsl(var(--color-text-accent))]">
                {rightText}
              </span>
            )}
            {rightIcon && <div className="flex-shrink-0">{rightIcon}</div>}
          </div>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-style-description mt-1 ${
            subtitleColor === "primary"
              ? "text-[hsl(var(--color-text-primary))]"
              : "text-[hsl(var(--color-text-secondary))]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
