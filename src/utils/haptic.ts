/**
 * Haptic Feedback Utility for iOS devices
 * Provides tactile feedback for user interactions
 */

// Type definitions for haptic feedback
export type HapticFeedbackType =
  | "light"
  | "medium"
  | "heavy"
  | "selection"
  | "success"
  | "warning"
  | "error";

// Check if haptic feedback is supported
export const isHapticSupported = (): boolean => {
  return "vibrate" in navigator || "hapticFeedback" in navigator;
};

// Check if we're on iOS
export const isIOS = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

// Check if we're on a mobile device
export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

/**
 * Trigger haptic feedback
 * @param type - Type of haptic feedback
 */
export const triggerHaptic = (type: HapticFeedbackType = "light"): void => {
  // Early return if not on mobile or iOS
  if (!isMobile() && !isIOS()) {
    return;
  }

  try {
    // For modern browsers that support the Vibration API
    if ("vibrate" in navigator) {
      let pattern: number | number[] = 0;

      switch (type) {
        case "light":
          pattern = 10; // Very light vibration
          break;
        case "medium":
          pattern = 20; // Medium vibration
          break;
        case "heavy":
          pattern = 30; // Heavy vibration
          break;
        case "selection":
          pattern = [5]; // Quick tap for selection
          break;
        case "success":
          pattern = [10, 50, 10]; // Success pattern
          break;
        case "warning":
          pattern = [15, 30, 15, 30, 15]; // Warning pattern
          break;
        case "error":
          pattern = [25, 100, 25, 100, 25]; // Error pattern
          break;
        default:
          pattern = 10;
      }

      navigator.vibrate(pattern);
    }

    // For iOS devices, we can use a fallback approach
    if (isIOS()) {
      // iOS Safari doesn't fully support vibration API
      // But we can trigger a subtle effect using audio context
      triggerIOSHaptic(type);
    }
  } catch (error) {
    // Silently fail if haptic feedback is not supported
    console.debug("Haptic feedback not supported:", error);
  }
};

/**
 * iOS-specific haptic feedback using Web Audio API trick
 */
const triggerIOSHaptic = (type: HapticFeedbackType): void => {
  try {
    // Create a silent audio context that can trigger haptic feedback on iOS
    const audioContext = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Set volume to 0 (silent but triggers haptic)
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);

    // Different frequencies for different feedback types
    let frequency = 1000;
    let duration = 0.01;

    switch (type) {
      case "light":
        frequency = 1000;
        duration = 0.005;
        break;
      case "medium":
        frequency = 800;
        duration = 0.01;
        break;
      case "heavy":
        frequency = 600;
        duration = 0.02;
        break;
      case "selection":
        frequency = 1200;
        duration = 0.003;
        break;
      case "success":
        frequency = 800;
        duration = 0.015;
        break;
      case "warning":
        frequency = 600;
        duration = 0.02;
        break;
      case "error":
        frequency = 400;
        duration = 0.03;
        break;
    }

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);

    // Clean up
    setTimeout(() => {
      try {
        audioContext.close();
      } catch {
        // Ignore cleanup errors
      }
    }, 100);
  } catch {
    // Fallback: try simple vibration
    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  }
};

/**
 * Convenience functions for common haptic patterns
 */
export const haptics = {
  light: () => triggerHaptic("light"),
  medium: () => triggerHaptic("medium"),
  heavy: () => triggerHaptic("heavy"),
  selection: () => triggerHaptic("selection"),
  success: () => triggerHaptic("success"),
  warning: () => triggerHaptic("warning"),
  error: () => triggerHaptic("error"),

  // Button interactions
  buttonPress: () => triggerHaptic("light"),
  buttonSuccess: () => triggerHaptic("success"),

  // Tab interactions
  tabSwitch: () => triggerHaptic("selection"),

  // Modal interactions
  modalOpen: () => triggerHaptic("light"),
  modalClose: () => triggerHaptic("light"),

  // Notification interactions
  notificationShow: () => triggerHaptic("medium"),
  notificationSuccess: () => triggerHaptic("success"),
  notificationError: () => triggerHaptic("error"),
};

/**
 * Hook-style function for React components
 */
export const useHaptic = () => {
  return {
    triggerHaptic,
    haptics,
    isSupported: isHapticSupported(),
    isIOS: isIOS(),
    isMobile: isMobile(),
  };
};

export default haptics;
