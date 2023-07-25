/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'md': '1391px',
            // => @media (min-width: 768px) { ... }
        }

    },
    plugins: [],
}

