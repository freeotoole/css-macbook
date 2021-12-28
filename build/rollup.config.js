import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble';
// Transpile/polyfill with reasonable browser support
export default {
  input: 'src/index.js',
  output: {
    name: 'CssMacbook',
    exports: 'named',
  },
  plugins: [
    commonjs(),
    vue({
      css: true, // TODO: - Find out best option for this
      compileTemplate: true, // Explicitly convert template to render function
    }),
    buble(), // Transpile to ES5
  ],
};
