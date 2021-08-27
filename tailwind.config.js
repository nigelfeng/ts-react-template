module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{ts,tsx,js,jsx}"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {},
        custom: {}
      },
      spacing: {}
    }
  },
  variants: {
    extend: {}
  },
  mode: "jit",
  plugins: [],
  important: "body"
};
