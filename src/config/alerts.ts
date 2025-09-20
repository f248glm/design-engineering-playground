// src/config/alerts.ts
export const ALERTS = {
  primary: {
    title: "Primary Alert",
    text: "The universe whispers: everything is temporary. Even this alert will outlive your plans.",
    variant: "primary",
  },
  secondary: {
    title: "Secondary Alert",
    text: "History repeats itself, first as tragedy, then as this notification. Blink, and you’ll miss the meaning.",
    variant: "secondary",
  },
  tetriary: {
    title: "Tetriary Alert",
    text: "Somewhere, a philosopher invents new doubts. Here, you only get this one.",
    variant: "tetriary",
  },
} as const;
