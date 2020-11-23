import alias from '@rollup/plugin-alias'
import copy from 'rollup-plugin-copy'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

const { DEV, PROD } = process.env

export default {
  input: 'node_modules/ammo.js/builds/ammo.wasm.js',
  output: [{
    file: 'public/ammo.js',
    format: 'es'
  }, {
    file: 'build/ammo.js',
    format: 'es'
  }, {
    file: 'dist/ammo.js',
    format: 'es'
  }],
  plugins: [
    alias({
      entries: {
        fs: require.resolve('./scripts/noop'),
        path: require.resolve('./scripts/noop')
      }
    }),
    copy({
      targets: [
        {
          src: 'node_modules/ammo.js/builds/ammo.wasm.wasm',
          dest: 'public'
        }, {
          src: 'node_modules/ammo.js/builds/ammo.wasm.wasm',
          dest: 'dist'
        }
      ]
    }),
    PROD && terser({
      compress: {
        drop_console: true,
        ecma: '2020',
        keep_infinity: true,
        passes: 2
      },
      format: {
        comments: false
      }
    }),
    PROD && filesize()
  ]
}