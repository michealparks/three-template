import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

const { DEV, PROD } = process.env

export default [
  {
    input: 'build/index.js',
    output: {
      file: 'dist/index.js',
      format: 'es'
    },
    plugins: [
      replace({
        'import.meta.env.MODE': '"production"'
      }),
      PROD && terser({
        compress: {
          drop_console: true,
          ecma: '2017',
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
]
