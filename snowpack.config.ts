/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    src: '/'
  },
  plugins: [
    '@snowpack/plugin-typescript',
    ['snowpack-plugin-replace', {
      list: [
        { from: 'process.env', to: 'import.meta.env' },
        { from: 'import.meta.env.MODE', to: `'${process.env.NODE_ENV}'` }
      ]
    }]
  ],
  exclude: [
    'ammo.js',
    '**/node_modules/**/*',
    '**/__tests__/*',
    '**/*.@(spec|test).@(js|mjs)'
  ],
  installOptions: {
    installTypes: true
  },
}