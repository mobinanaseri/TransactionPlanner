import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/sidebars.js";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ApexCharts from "apexcharts";

const app = createApp(App);

const options = {
    position: "top-center",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
};

app.use(createPinia());
app.use(router);
app.use(Toast, options);

app.mount("#app");