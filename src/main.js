import { createApp} from "vue";
import App from "./App.vue";
import FontAwesomeIcon from "@/utilities/fontawesome-icons.ts";
import router from "./router";
import $ from 'jquery'

createApp(App).use(router,$).component("FontAwesomeIcon",FontAwesomeIcon).mount("#app");
