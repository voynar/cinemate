/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                "other": {'min': '340px', 'max': '1300px'},
                // 'sm': {'max': '767px'},
                // 'md': {'min': '768px', 'max': '1023px'},
                // 'lg': {'min': '1024px', 'max': '1279px'},
                // 'xl': {'min': '1280px', 'max': '1535px'},
                // '2xl': {'min': '1536px'},
            },
            colors: {
                darkbg: "#1e293b",
                blue: {
                    850: "#7dd3fc"
                }
            }
        },
    },
    plugins: [],
}