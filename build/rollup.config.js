import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  plugins: [
    vue({ css: false }),
    resolve(),
    babel({
      babelrc: true,
      runtimeHelpers: true,
      externalHelpers: false,
      exclude: 'node_modules/**',
    }),
    postcss({ plugins: [] }),
    // uglify(),
  ],
  output: {
    file: 'dist/js/vue-gallery.min.js',
    format: 'umd',
    name: 'VueGallery',
    globals: {
      '@khoanguyen96/blueimp-gallery': 'blueimp',
    },
  },
};
