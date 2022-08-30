import { createApp } from "vue";
import App from "./App.vue";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import "@/assets/fonts/fonts.css"; //字体引入
import "element-plus/theme-chalk/base.css";
import "element-plus/theme-chalk/display.css";
console.log("Version:1.0.1.8");
const app = createApp(App);
// app.use(ElementPlus);
app.mount("#app");
