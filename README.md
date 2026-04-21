
# Next.js Interactive Keyboard Component

![Project Status](https://img.shields.io/badge/status-alpha-orange.svg)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js Version](https://img.shields.io/badge/Next.js-16.2.0-black.svg)
![React Version](https://img.shields.io/badge/React-19.2.4-blue.svg)

## 🌟 Overview

This repository is a collection of modern, interactive UI components built with Next.js, React, and Tailwind CSS. It serves as a library for high-quality, reusable interface elements, currently featuring:

*   **Next.js Interactive Keyboard**: A standalone virtual keyboard component with realistic animations and auditory feedback.
*   **Bento Grid Dashboard**: A sophisticated, responsive grid layout designed for AI agent management, featuring LLM model selectors, workflow builders, and tool integration previews.
*   **Repeating Gradient Hero**: A visually striking landing page section featuring complex geometric patterns, repeating linear gradients, and advanced CSS masking.
## 🚀 Features

### 💻 Interactive Macbook
*   **3D Animation**: Features a realistic 3D opening animation using CSS perspective and transforms.
*   **Dynamic Hover**: Transitions from a tilted "closed" state to a flat "open" state on hover, revealing the screen content.

### ⌨️ Interactive Keyboard
*   **Realistic Layout**: Mimics a standard QWERTY keyboard with function keys and modifiers.
*   **Interactive Feedback**: Keys visually depress on click with integrated auditory click sounds.

### 🍱 Bento Grid
*   **LLM Model Selector**: Dynamic interface to track agent activity and connection status for models like Claude 4, ChatGPT, and Llama 3.2.
*   **Workflow Builder**: Interactive text-to-workflow sandbox with a chat-based UI and message history.
*   **Native Integration**: Visual tracking of triggers, tools, and outcomes within a unified grid system.

### 🌈 Repeating Gradient Hero
*   **Geometric Patterns**: Utilizes custom line components to create a structured, technical aesthetic using repeating linear gradients for X and Y axes.
*   **Advanced Masking**: Implements radial and linear masks to blend background imagery and patterns seamlessly into the layout.
*   **Custom Container**: Includes a reusable layout wrapper for consistent spacing and alignment across high-impact hero sections.

### 🛠️ Core Capabilities
*   **Modern Styling**: Built with Tailwind CSS 4 for clean, responsive, and high-performance visuals.
*   **TypeScript Core**: Written entirely in TypeScript for robust type safety and developer experience.
*   **Iconography**: Utilizes Lucide-react for crisp, scalable vector icons across all components.
## 🛠️ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (v16.2.4)
*   **UI Library**: [React](https://react.dev/) (v19.2.4)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
*   **Utilities**: [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) & [clsx](https://www.npmjs.com/package/clsx)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) (v5)
*   **Icons**: [Lucide-react](https://lucide.dev/) (v1.6.0)
*   **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)
## Architecture

This project follows the standard Next.js App Router architecture.

```
keyboard/
├── app/
│   ├── component/
│   │   └── keyboard.tsx  <-- The main Keyboard component
│   ├── globals.css       <-- Global styles, including Tailwind directives
│   ├── layout.tsx        <-- Root layout for the Next.js application
│   └── page.tsx          <-- Entry point, renders the Keyboard component
├── public/
│   └── click.mp3         <-- Audio file for key press feedback
├── next.config.ts        <-- Next.js configuration
├── package.json          <-- Project dependencies and scripts
├── tsconfig.json         <-- TypeScript configuration
└── ...
```

*   **`app/page.tsx`**: Serves as the main page, responsible for rendering the `Keyboard` component centrally.
*   **`app/component/keyboard.tsx`**: This is the core component. It defines the keyboard layout, handles the click logic, and integrates the visual and auditory feedback. It uses the `'use client'` directive as it involves client-side interactivity (event listeners, audio playback).
*   **`public/click.mp3`**: A simple audio file played when a key is "pressed" to simulate tactile feedback.

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine. This repository contains multiple component projects located in their respective subdirectories.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: v18.x or higher (LTS recommended)
*   **Package Manager**: npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository**:
    bash
    git clone https://github.com/kaihere14/Component_Library.git
    cd Component_Library
    

2.  **Navigate to a component directory**:
    bash
    # To run the Macbook project
    cd Laptop

    # To run the Bento Grid project
    cd bento-grid

    # To run the Keyboard project
    cd keyboard

    # To run the Repeating Gradient Hero project
    cd repeating-gradient-hero
    

3.  **Install dependencies**:
    bash
    npm install
    

4.  **Run the development server**:
    bash
    npm run dev
    

### Configuration

These projects use standard Next.js and Tailwind CSS configurations. No special environment variables are required to run the development servers.
## Usage

To see the interactive components in action:

1.  **Start the development server** in the desired directory (`Laptop`, `keyboard`, or `bento-grid`):
    bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    

2.  **Open your browser**:
    Navigate to `http://localhost:3000` to see the component displayed on the page.

3.  **Interact with the component**:
    *   **Macbook**: Hover over the laptop to see it open and reveal the screen content.
    *   **Keyboard**: Click on any key to observe the visual depression and hear the click sound.

### Integrating the Components

#### 💻 Macbook Component
1.  **Copy the component**: Copy the `Macbook.tsx` file from `Laptop/app/components/Macbook.tsx` into your project's components directory.
2.  **Import and render**:
    tsx
    import Macbook from '@/components/Macbook';

    export default function MyPage() {
      return (
        <div className="flex justify-center items-center h-screen">
          <Macbook />
        </div>
      );
    }
    

#### ⌨️ Keyboard Component
1.  **Install dependencies**: Ensure `lucide-react` is installed.
    bash
    npm install lucide-react
    
2.  **Copy the component**: Copy the `keyboard.tsx` file from `keyboard/app/component/keyboard.tsx` into your project.
3.  **Import and render**:
    tsx
    'use client';
    import Keyboard from '@/components/keyboard';

    export default function MyPage() {
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <Keyboard />
        </div>
      );
    }
    
    *Note: Ensure you also copy the `public/click.mp3` file to your target project's `public` directory if you want the sound feedback.*
## Development

### Setting up Development Environment

The development environment is set up by following the installation steps above. The `npm run dev` command hot-reloads changes as you modify the source files.

### Running Tests

Currently, there are no dedicated test scripts configured for this component.

### Code Style Guidelines

This project uses ESLint for code linting as configured in `eslint.config.mjs`. Please ensure your code adheres to the existing style.

To run the linter:
```bash
npm run lint
```

## Deployment

To deploy this Next.js application to production:

1.  **Build the project**:
    ```bash
    npm run build
    ```
    This command will create an optimized production build in the `.next` directory.

2.  **Start the production server**:
    ```bash
    npm run start
    ```
    This will serve the production build.

For cloud deployments (e.g., Vercel, Netlify, AWS Amplify), you can typically connect your Git repository, and the platform will automatically detect and deploy the Next.js application using the `npm run build` and `npm run start` commands.

## API Documentation

The `Keyboard` component is primarily a presentational UI component and currently does not expose a public API (props or events) for external interaction beyond rendering itself. All interactivity (key presses, sound) is handled internally within the component.

Future enhancements could include props for customization (e.g., `onKeyPress` callback, `theme`, `layout`).

## Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please follow these steps:

1.  **Fork the repository**.
2.  **Create a new branch**: `git checkout -b feature/your-feature-name` or `bugfix/your-bug-name`.
3.  **Make your changes**.
4.  **Commit your changes**: `git commit -m 'feat: Add new feature'` or `fix: Resolve bug`.
5.  **Push to your branch**: `git push origin feature/your-feature-name`.
6.  **Open a Pull Request** against the `main` branch of this repository.

Please ensure your code adheres to the existing style and passes linting checks.

## Troubleshooting

*   **"This is NOT the Next.js you know" warning**: If you are using AI agents for code generation, please refer to `keyboard/AGENTS.md` for important notes regarding breaking changes in this Next.js version compared to older training data.
*   **`npm run dev` fails**: Check your Node.js version (`node -v`). Ensure it meets the minimum requirement (v18+). Re-run `npm install` if dependencies might be corrupted.
*   **Keyboard not appearing**: Ensure the `Keyboard` component is correctly imported and rendered in `app/page.tsx` (or your chosen page). Check browser console for React or Next.js errors.
*   **No click sound**: Verify that `public/click.mp3` exists and is accessible. Check browser console for audio loading errors. Ensure your browser's sound is not muted.

## Roadmap

*   **Actual Key Press Detection**: Implement functionality to detect and output actual key presses (e.g., to an input field).
*   **Customizable Themes**: Allow users to switch between different visual themes for the keyboard.
*   **Layout Customization**: Provide props to easily configure different keyboard layouts (e.g., QWERTZ, AZERTY).
*   **Accessibility Enhancements**: Improve keyboard navigation and screen reader support.
*   **Animation Refinements**: More sophisticated key press animations.

## License & Credits

This project is licensed under the MIT License. See the [LICENSE](link-to-license-file-if-exists) file for details.

**Credits:**
*   **Author**: kaihere14
*   **Icons**: [Lucide-react](https://lucide.dev/)
*   **Fonts**: [Geist](https://vercel.com/font) by Vercel