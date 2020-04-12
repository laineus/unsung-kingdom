module.exports = {
  root: true,
  extends: ['standard'],
  plugins: [],
  rules: {
    'object-property-newline': 0,
    'no-extend-native': 0,
    'lines-between-class-members': 0
  },
  globals: {
    location: true,
    alert: true,
    localStorage: true,
    WebGLRenderingContext: true,
    Phaser: true
  },
  ignorePatterns: ['src/shader/']
}