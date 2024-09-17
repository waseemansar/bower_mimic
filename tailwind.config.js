/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Recursive: ["Recursive", "sans-serif"],
            },
            colors: {
                "bower-yellow": "#ffcc2f",
                "bower-red": "#ef5734",
                "bower-blue": "#00acee",
                "bower-green": "#2baf2b",
                "bower-brown": "#543729",
                "bower-gray": "#cecece",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
