// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    // 'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
}

// PREVIOUS POSTCSS
// module.exports = {
//   plugins: ["tailwindcss", "autoprefixer", "postcss-import", "postcss-nesting"],
// };

// just for testing

// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     require("tailwindcss"),
//     require("autoprefixer"),
//   ],
// };
