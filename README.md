# Next.js Interactive Keyboard Component

![Project Status](https://img.shields.io/badge/status-alpha-orange.svg)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js Version](https://img.shields.io/badge/Next.js-16.2.0-black.svg)
![React Version](https://img.shields.io/badge/React-19.2.4-blue.svg)

## Overview

This project provides a visually appealing and interactive virtual keyboard component built with Next.js, React, and Tailwind CSS. It's designed to be a standalone, reusable UI element that mimics a modern keyboard layout, complete with key press animations and sound feedback.

The primary goal is to showcase a robust, responsive, and customizable keyboard interface, suitable for web applications requiring on-screen input, educational tools, or unique interactive experiences.

## Features

*   **Realistic Keyboard Layout**: Mimics a standard QWERTY keyboard with function keys, modifiers, and arrow keys.
*   **Interactive Key Presses**: Keys visually depress on click, providing immediate feedback.
*   **Auditory Feedback**: Plays a subtle click sound on each key press for an enhanced user experience.
*   **Modern Styling**: Styled with Tailwind CSS 4 for a clean, responsive, and easily customizable appearance.
*   **Icon Support**: Integrates Lucide-react for crisp, scalable icons on function keys.
*   **Next.js App Router**: Utilizes the latest Next.js features for efficient development and rendering.
*   **TypeScript**: Written entirely in TypeScript for type safety and improved developer experience.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (v16.2.0)
*   **UI Library**: [React](https://react.dev/) (v19.2.4)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) (v5)
*   **Icons**: [Lucide-react](https://lucide.dev/) (v0.577.0)
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

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: v18.x or higher (LTS recommended)
*   **npm** (comes with Node.js) or **Yarn** or **pnpm**

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/kaihere14/Component_Library.git
    cd Component_Library/keyboard
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

### Configuration

This project uses standard Next.js and Tailwind CSS configurations. No special environment variables are required to run the development server.

## Usage

To see the interactive keyboard component in action:

1.  **Start the development server**:
    ```bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```

2.  **Open your browser**:
    Navigate to `http://localhost:3000`. You should see the interactive keyboard displayed on the page.

3.  **Interact with the keyboard**:
    Click on any key to observe the visual depression and hear the click sound.

### Integrating the Component

To use the `Keyboard` component in another Next.js application:

1.  **Install dependencies**: Ensure `lucide-react` is installed in your target project.
    ```bash
    npm install lucide-react
    ```
2.  **Copy the component**: Copy the `keyboard.tsx` file from `app/component/keyboard.tsx` into your project's components directory.
3.  **Import and render**:
    ```tsx
    // In your page or component file (e.g., app/page.tsx)
    'use client'; // If this component uses client-side features like event listeners

    import Keyboard from '@/components/keyboard'; // Adjust path as needed

    export default function MyPage() {
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <Keyboard />
        </div>
      );
    }
    ```
    Ensure you also copy the `public/click.mp3` file to your target project's `public` directory if you want the sound feedback.

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