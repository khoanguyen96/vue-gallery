import VueGallery from './component/gallery.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-gallery', VueGallery);
}

export default VueGallery;
