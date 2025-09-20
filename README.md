# 🎨 Design Engineering Playground

A modern React design system playground built with TypeScript, Tailwind CSS, and custom components. This project demonstrates professional UI component architecture with a tokenized design system.

## ✨ Features

- 🎯 **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4
- 🎨 **Design System**: Tokenized colors, typography, and spacing from Figma
- 🧩 **Custom Components**: Button, Alert, TabBar with proper TypeScript interfaces
- 📱 **Mobile-First**: Responsive design with Apple-style aesthetics
- ⚡ **Fast Development**: Vite HMR, modern tooling, and hot reload
- 🎭 **Smooth Animations**: CSS transitions and slide animations
- ♿ **Accessible**: ARIA attributes, semantic HTML, and keyboard navigation

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/design-engineering-playground.git
cd design-engineering-playground

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the playground in action.

## 🛠 Tech Stack

- **Frontend**: React 19.1.1 + TypeScript 5.8
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12 with custom design tokens
- **Icons**: SVG with vite-plugin-svgr
- **Routing**: React Router DOM 7.8.2
- **Linting**: ESLint with modern configuration

## 🎨 Design System

### Color Palette
- **Neutral Scale**: 000 → 900 (from dark to light)
- **Accent**: Blue (#007AFF) with variants
- **Semantic Colors**: Success, Warning, Error
- **System Colors**: Text, backgrounds, separators

### Typography
- **Large**: 17px/22px, weight 600
- **Medium**: 15px/18px, weight 500  
- **Body**: 17px/22px, weight 400

### Components

#### Button
- **Variants**: Primary, Secondary, Tertiary
- **Sizes**: Large (default)
- **Features**: Active state scaling, forwarded props

#### Alert
- **Modal overlay** with backdrop blur
- **Slide animations** (slide-in/slide-out)
- **Render props** for flexible actions
- **Auto-close** functionality

#### TabBar
- **Animated selector** with smooth transitions
- **Controlled/Uncontrolled** modes
- **Fixed positioning** at bottom (mobile-first)
- **Custom elevation** shadow

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Alert.tsx       # Modal alert with animations
│   ├── Button.tsx      # Primary button component
│   ├── ButtonBody.tsx  # Button content wrapper
│   └── TabBar.tsx      # Animated tab navigation
├── config/             # Configuration files
│   └── alerts.ts       # Alert content configuration
├── assets/             # Static assets
│   └── icons/          # SVG icons
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and design tokens
```

## 🎯 Key Features

### Design Tokens
All colors, typography, and spacing use CSS custom properties for consistency:

```css
--pal-accent-600: 211.3 100% 50%; /* #007AFF */
--color-text-primary: var(--pal-neutral-000);
--shadow-elevation-8pt: 0 0 1px 0 rgba(0, 0, 28, 0.12), 0 2px 28px 0 rgba(0, 0, 28, 0.06);
```

### Type Safety
Components use proper TypeScript interfaces with strict typing:

```typescript
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "lg";
};
```

### Responsive Design
Mobile-first approach with system fonts and native feel:

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue", Arial, system-ui;
```

## 📱 Demo

The playground includes:
- **Three tabs** demonstrating different alert types
- **Interactive buttons** with scale animations  
- **Modal alerts** with philosophical placeholder content
- **Smooth transitions** between states

## 🚀 Deployment

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy with zero configuration needed

### Build for Production
```bash
npm run build
npm run preview
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by Apple's Human Interface Guidelines
- Color palette and typography tokens from Figma design system
- Built with modern React patterns and best practices

---

**Built with ❤️ for learning and experimenting with design systems**