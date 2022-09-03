import vue from "@vitejs/plugin-vue";
const path = require("path"); //路径处理
import { defineConfig, loadEnv } from "vite";
//*************************element自动引入配置
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
//*************************打包分析
import visualizer from "rollup-plugin-visualizer";
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      //*************************element-plus自动引入配置
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      visualizer({
        // 打包后自动打开分析报告
        open: false,
      }),
    ],
    //*************************路径别名配置
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
    //*************************全局颜色文件引入
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve("src/assets/css/global.less")}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    //*********************************跨域配置
    // server: {
    //   open: true,
    //   proxy: {
    //     "/api": {
    //       target: loadEnv(mode, process.cwd()).VITE_PATH, //代理地址
    //       changeOrigin: true, //接口跨域
    //       //ws: true, // proxy websockets
    //       rewrite: (path) => path.replace(/^\/api/, ""),
    //     },
    //   },
    // },
    //***********************************打包配置
    base: "./",
    publicPath: "./",
    history: {
      type: "hash",
    },
    
    // publicDir: "./",
    build: {
      // 清除console和debugger
      // minify: "terser",
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: true,
      //   },
      // },
      rollupOptions: {
        output: {
          //对静态文件进行文件分类
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "[ext]/[name]-[hash].[ext]",
        },
        manualChunks(id) {
          //静态资源分拆打包
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
  };
});
