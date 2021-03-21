import {createApp} from 'vue'
import router      from './router/main'

window.$ = window.jquery = window.jQuery = require('jquery');
window._ = window.lodash = require('lodash');

import "bootstrap";

/*import ("../public/assets/libs/jquery/dist/jquery.min.js");
import ("../public/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js");
import ("../public/assets/libs/@shopify/draggable/lib/es5/draggable.bundle.legacy.js");
import ("../public/assets/libs/autosize/dist/autosize.min.js");
import ("../public/assets/libs/chart.js/dist/Chart.min.js");
//import ("../public/assets/libs/dropzone/dist/min/dropzone.min.js");
import ("../public/assets/libs/flatpickr/dist/flatpickr.min.js");
import ("../public/assets/libs/highlightjs/highlight.pack.min.js");
import ("../public/assets/libs/jquery-mask-plugin/dist/jquery.mask.min.js");
import ("../public/assets/libs/list.js/dist/list.min.js");
import ("../public/assets/libs/quill/dist/quill.min.js");
import ("../public/assets/libs/select2/dist/js/select2.full.min.js");
import ("../public/assets/libs/chart.js/Chart.extension.js");*/

import App   from './App.vue'
import store from './store'

const Vue = createApp(App).use(store).use(router).mount('#app')
