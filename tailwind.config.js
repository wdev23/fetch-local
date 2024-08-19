/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js}",],
  theme: {
    extend: {
      colors: {
        cl_gray: "#443737",
        cl_dark: "#272121",
        cl_orangeStrong: "#FF0000",
        cl_OrangeSoft: "#FF4D00",
      },
    },
    container: {
      center: true
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"]
    },
  },
  plugins: [],
}

