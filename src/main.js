import { createApp} from "vue";
import App from "./App.vue";
import FontAwesomeIcon from "@/utilities/fontawesome-icons.ts";
import router from "./router";
import Notifications from '@kyvg/vue3-notification'


createApp(App).use(router,Notifications).component("FontAwesomeIcon",FontAwesomeIcon).mount("#app");
