/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const daisyui = {
  themes: [
    {
      mytheme: {
        primary: "#eba91b",
        secondary: "#ffffff",
        accent: "#e3e3e3",
        neutral: "#191D24",
        "base-100": "#2A303C",
        info: "#eba91b",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  ],
};
export const plugins = [
  require("daisyui"),
];
