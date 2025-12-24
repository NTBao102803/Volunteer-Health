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
        'admin-bg': '#F8FAFC',
        'pnt-navy': '#003366',   // Xanh đậm y khoa
        'pnt-green': '#008751',  // Xanh lá Đoàn - Hội
        'pnt-yellow': '#FFD700', // Vàng điểm nhấn
      },
      boxShadow: {
        'soft': '0 20px 25px -5px rgba(0, 51, 102, 0.04), 0 10px 10px -5px rgba(0, 51, 102, 0.02)',
      }
    },
  },
  plugins: [],
}