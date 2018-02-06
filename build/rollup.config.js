import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  plugins: [
    vue({ css: true }),
    resolve(),
    babel({
      babelrc: true,
      runtimeHelpers: true,
      externalHelpers: false,
      exclude: 'node_modules/**',
    }),
    uglify(),
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
