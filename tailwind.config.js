/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Подготовим «крючки» под токены через CSS-переменные (HSL)
        // Пример: bg-primary → возьмёт значение из :root --color-primary
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        muted: "hsl(var(--color-muted))",
        foreground: "hsl(var(--color-foreground))",
        background: "hsl(var(--color-background))",
        separator: "hsl(var(--color-separator))",
      },
      borderRadius: {
        // Токены радиусов
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      spacing: {
        // Токены отступов
        safe: "var(--spacing-bottom-safe)",
      },
      boxShadow: {
        // Токены теней
        soft: "var(--shadow-soft)",
        hard: "var(--shadow-hard)",
        "elevation-8pt": "var(--shadow-elevation-8pt)",
      },
    },
  },
  plugins: [],
};
