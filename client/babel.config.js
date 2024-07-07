// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: 'last 2 versions, > 1%' }],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator' // Ensure this plugin is included
  ]
};
