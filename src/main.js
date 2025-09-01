import { createApp } from "vue";
import PrimeVue from "primevue/config";
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import "./style.css";
import router from "./router/index";
import App from "./App.vue";

const app = createApp(App);

const MyPreset = definePreset(Aura, {
  components: {
    inputtext: {
      focusRingColor: "{primary.500}",
      colorScheme: {
        light: {
          focusRingColor: {
            color: "{primary.500}",
          },
        },
      },
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: ".dark",
    },
  },
});
app.use(router);
app.mount("#app");
