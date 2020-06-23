module.exports = {
  root: true,
  extends: ['standard'],
  plugins: [],
  rules: {
    'object-property-newline': 0,
    'no-extend-native': 0,
    'lines-between-class-members': 0,
    'no-return-assign': 0
  },
  globals: {
    location: true,
    alert: true,
    localStorage: true,
    FileReader: true,
    Blob: true,
    WebGLRenderingContext: true,
    Phaser: true,
    greenworks: true,
    t: true,
    ENV: true
  },
  ignorePatterns: ['src/shader/']
}