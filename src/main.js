import { createApp} from "vue";
import App from "./App.vue";
import FontAwesomeIcon from "@/utilities/fontawesome-icons.ts";
import router from "./router";
import $ from 'jquery'
import VueMeta from 'vue-meta';

createApp(App).use(router,$,VueMeta).component("FontAwesomeIcon",FontAwesomeIcon).mount("#app");
