export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
// PostCSS is like a pipeline for your CSS.
// You write modern or extended CSS, and PostCSS plugins process and transform that CSS before it reaches the browser.

// 🔌 Plugins Used
// 1. tailwindcss: {}
// This loads Tailwind CSS as a PostCSS plugin.
// It reads your tailwind.config.js file and generates utility classes based on the HTML/JSX files you used.
// Without this, Tailwind won’t work — this is what generates all your Tailwind classes.

// 2. autoprefixer: {}
// Automatically adds vendor prefixes to your CSS (like -webkit-, -moz-, etc.) to ensure compatibility with older browsers.