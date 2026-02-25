/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0B1120", // Midnight Blue (Deep)
                secondary: "#334155", // Graphite Gray
                accent: "#C5A059", // Matte Gold
                background: "#F8FAFC", // Slate 50
                "dark-bg": "#0B1120",
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
