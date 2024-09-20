/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  // 사용자 설정 및 지원하지 않는 기능 가져오기
  theme: {
    content: ["./src/assets/**/*.svg"],
    extend: {
      colors: {
        marine: "#001f60",
      },
    },
  },
  plugins: [],
};
