/*
 * @Author: jiangqm
 * @Date: 2023-08-29 14:50:47
 * @Description:
 */
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

import typescript from "@rollup/plugin-typescript";
function resolve(str: string) {
  return path.resolve(__dirname, str);
}
export default defineConfig({
  css: {
    modules: {
      generateScopedName: (name) => {
        return `yt-${name}`;
      },
    },
  },
  plugins: [
    react(),
    typescript({
      target: "es5",
      rootDir: resolve("components"),
      declaration: true,
      declarationDir: resolve("dist/types"),
      exclude: resolve("node_modules/**"),
      allowSyntheticDefaultImports: true,
    }),
  ],
  build: {
    lib: {
      entry: "components",
      name: "yt-design",
      fileName: "yt-design",
      formats: ["es", "cjs"],
    },

    rollupOptions: {
      // Externalize dependencies if needed
      external: ["react", "react-dom"],
      // input: {
      //   main: './packages/components/index', // 你的主入口文件
      //   Button: "./packages/components/Button",
      //   Input: "./packages/components/Input",
      // },
      // input:'./packages/components/index.ts',
      // output:[
      // {
      //   //打包格式
      //   format: "es",
      //   //打包后文件名
      //   entryFileNames: "[name].mjs",
      //   //让打包目录和我们目录对应
      //   preserveModules: true,
      //   exports: "named",
      //   //配置打包根目录
      //   dir: "./dist/es",
      // },
      // {
      //   //打包格式
      //   format: "cjs",
      //   //打包后文件名
      //   entryFileNames: "[name].js",
      //   //让打包目录和我们目录对应
      //   preserveModules: true,
      //   exports: "named",
      //   //配置打包根目录
      //   dir: "./dist/lib",
      // },

      // ],
      output: {
        // inlineDynamicImports: false,
        // Provide global variable names for your library
        // preserveModules: true,

        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist",
    // 针对每个组件的配置
  },
});
