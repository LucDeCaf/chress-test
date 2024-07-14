import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "src/**/*.js",
        "src/**/*.ts",
        "src/**/*.jsx",
        "src/**/*.tsx",
        "index.html",
    ],
    theme: {
        extend: {
            colors: {
                "tile-light": "rgb(var(--color-tile-light) / <alpha-value>)",
                "tile-dark": "rgb(var(--color-tile-dark) / <alpha-value>)",

                "text-light": "rgb(var(--color-text-light) / <alpha-value>)",
                "text-dark": "rgb(var(--color-text-dark) / <alpha-value>)",

                win: "rgb(var(--color-win) / <alpha-value>)",
                loss: "rgb(var(--color-loss) / <alpha-value>)",
                draw: "rgb(var(--color-draw) / <alpha-value>)",

                "bg-light": "rgb(var(--color-bg-light) / <alpha-value>)",
                "bg-dark": "rgb(var(--color-bg-dark) / <alpha-value>)",
            },

            fontFamily: {
                mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [],
};
