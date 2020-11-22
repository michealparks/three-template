import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

const { DEV, PROD } = process.env

const prodPlugins = PROD ? [
  terser({
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
  filesize()
] : []

export default [
  {
    // preserveEntrySignatures: false,
    input: 'src/index.ts',
    output: {
      file: 'public/js/index.js',
      format: 'es'
    },
    plugins: [
      replace({
        'import.meta.env.MODE': '"production"'
      }),
      typescript({
        incremental: false
      }),
      nodeResolve(),
      ...prodPlugins
    ]
  }
]
