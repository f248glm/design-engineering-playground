import { useState, useEffect } from "react";
import IconClose from "../assets/icons/close.svg?react";
import { haptics } from "../utils/haptic";

type AlertProps = {
  title: string;
  onClose?: () => void;
  children?: React.ReactNode;
  actions?: (close: () => void) => React.ReactNode;
  showClose?: boolean;
  closeOnBackdrop?: boolean;
  type?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "error";
};

export default function Alert({
  title,
  onClose,
  children,
  actions,
  type = "primary",
}: AlertProps) {
  const [closing, setClosing] = useState(false);

  // при закрытии сначала запускаем анимацию, потом вызываем onClose
  const handleClose = () => {
    // Trigger haptic feedback for modal close
    haptics.modalClose();

    setClosing(true);
    setTimeout(() => {
      onClose?.();
      setClosing(false);
    }, 200); // длительность slide-out
  };

  // Trigger haptic feedback when modal opens
  useEffect(() => {
    // Different haptic feedback based on alert type
    switch (type) {
      case "success":
        haptics.success();
        break;
      case "warning":
        haptics.warning();
        break;
      case "error":
        haptics.error();
        break;
      default:
        haptics.modalOpen();
    }
  }, [type]);

  return (
    <div
      className="fixed inset-0 flex items-end justify-center px-4 z-[100]"
      role="dialog"
      aria-modal="true"
    >
      {/* затемняющий фон */}
      <div className="absolute inset-0 backdrop" onClick={handleClose} />

      {/* панель */}
      <div
        className={`relative alert-panel flex flex-col mb-safe ${
          closing ? "animate-slide-out" : "animate-slide-in"
        }`}
      >
        {/* Header */}
        <div className="alert-header">
          <h2 className="font-semibold text-[20px] leading-7 text-[hsl(var(--color-text-primary))]">
            {title}
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={handleClose}
            className="btn rounded-[1000px] w-[32px] h-[32px] bg-[hsl(var(--color-button-alpha))] text-[hsl(var(--color-text-primary))] flex items-center justify-center"
          >
            <IconClose className="w-[16px] h-[16px]" />
          </button>
        </div>

        {/* Body */}
        {children && (
          <div className="px-[20px] pt-[16px] pb-[8px] text-style-body space-y-3">
            {children}
          </div>
        )}

        {/* Actions: вызываем ПЕРЕДАННУЮ функцию и даём ей handleClose */}
        {actions && (
          <div className="px-[16px] py-[12px] flex justify-center">
            {actions(handleClose)}
          </div>
        )}
      </div>
    </div>
  );
}
