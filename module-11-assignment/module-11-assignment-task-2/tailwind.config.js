/** @type {import('tailwindcss').Config} */
const FormKitVariants = require('@formkit/themes/tailwindcss')


export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        './tailwind-theme.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui"), FormKitVariants],
}