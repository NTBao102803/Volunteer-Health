/** @type {import('tailwindcss').Config} */
export default {
  // Đảm bảo quét tất cả các file cần thiết
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pnt-navy': '#003366',   // Xanh đậm y khoa
        'pnt-green': '#008751',  // Xanh lá Đoàn - Hội
        'pnt-yellow': '#FFD700', // Vàng điểm nhấn
      }
    },
  },
  plugins: [],
}