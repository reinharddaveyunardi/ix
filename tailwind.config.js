import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{tsx,css,js}"];
export const theme = {
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    mono: [
      "Monaco",
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace",
    ],
  },
  container: {
    center: true,
    screens: {
      sm: "50rem",
    },
  },
  extend: {
    animation: {
      scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
    },
    colors: {
      slate: {
        850: "hsl(222deg 47% 16%)",
      },
      primary: "#5fc3e7",
    },
  },
};
export const plugins = [addVariablesForColors];
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
