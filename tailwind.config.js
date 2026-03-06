/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
