module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'react-app', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'error',
    'jsx-a11y/href-no-hash': [0],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': 'off',
    'react/no-did-update-set-state': 'off',
    'react/destructuring-assignment': 'off'
  }
}
