// vite.config.ts
import { defineConfig } from "file:///D:/demo/ytdesgn/ytDesign/node_modules/.pnpm/vite@4.4.9_@types+node@20.6.0_sass@1.67.0/node_modules/vite/dist/node/index.js";
import react from "file:///D:/demo/ytdesgn/ytDesign/node_modules/.pnpm/@vitejs+plugin-react-swc@3.3.2_vite@4.4.9/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import typescript from "file:///D:/demo/ytdesgn/ytDesign/node_modules/.pnpm/@rollup+plugin-typescript@11.1.3_tslib@2.6.2_typescript@5.2.2/node_modules/@rollup/plugin-typescript/dist/es/index.js";
var __vite_injected_original_dirname = "D:\\demo\\ytdesgn\\ytDesign";
function resolve(str) {
  return path.resolve(__vite_injected_original_dirname, str);
}
var vite_config_default = defineConfig({
  css: {
    modules: {
      generateScopedName: (name) => {
        return `yt-${name}`;
      }
    }
  },
  plugins: [
    react(),
    typescript({
      target: "es5",
      rootDir: resolve("components"),
      declaration: true,
      declarationDir: resolve("dist/types"),
      exclude: resolve("node_modules/**"),
      allowSyntheticDefaultImports: true
    })
  ],
  build: {
    lib: {
      entry: "components",
      name: "yt-design",
      fileName: "yt-design",
      formats: ["es", "cjs"]
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
          "react-dom": "ReactDOM"
        },
        entryFileNames: "[name].js"
      }
    },
    outDir: "dist"
    // 针对每个组件的配置
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZW1vXFxcXHl0ZGVzZ25cXFxceXREZXNpZ25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGRlbW9cXFxceXRkZXNnblxcXFx5dERlc2lnblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZGVtby95dGRlc2duL3l0RGVzaWduL3ZpdGUuY29uZmlnLnRzXCI7LypcbiAqIEBBdXRob3I6IGppYW5ncW1cbiAqIEBEYXRlOiAyMDIzLTA4LTI5IDE0OjUwOjQ3XG4gKiBARGVzY3JpcHRpb246XG4gKi9cbi8vIHZpdGUuY29uZmlnLmpzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmltcG9ydCB0eXBlc2NyaXB0IGZyb20gXCJAcm9sbHVwL3BsdWdpbi10eXBlc2NyaXB0XCI7XG5mdW5jdGlvbiByZXNvbHZlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBzdHIpO1xufVxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgY3NzOiB7XG4gICAgbW9kdWxlczoge1xuICAgICAgZ2VuZXJhdGVTY29wZWROYW1lOiAobmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gYHl0LSR7bmFtZX1gO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB0eXBlc2NyaXB0KHtcbiAgICAgIHRhcmdldDogXCJlczVcIixcbiAgICAgIHJvb3REaXI6IHJlc29sdmUoXCJjb21wb25lbnRzXCIpLFxuICAgICAgZGVjbGFyYXRpb246IHRydWUsXG4gICAgICBkZWNsYXJhdGlvbkRpcjogcmVzb2x2ZShcImRpc3QvdHlwZXNcIiksXG4gICAgICBleGNsdWRlOiByZXNvbHZlKFwibm9kZV9tb2R1bGVzLyoqXCIpLFxuICAgICAgYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0czogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBcImNvbXBvbmVudHNcIixcbiAgICAgIG5hbWU6IFwieXQtZGVzaWduXCIsXG4gICAgICBmaWxlTmFtZTogXCJ5dC1kZXNpZ25cIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwiY2pzXCJdLFxuICAgIH0sXG5cbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBFeHRlcm5hbGl6ZSBkZXBlbmRlbmNpZXMgaWYgbmVlZGVkXG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gICAgICAvLyBpbnB1dDoge1xuICAgICAgLy8gICBtYWluOiAnLi9wYWNrYWdlcy9jb21wb25lbnRzL2luZGV4JywgLy8gXHU0RjYwXHU3Njg0XHU0RTNCXHU1MTY1XHU1M0UzXHU2NTg3XHU0RUY2XG4gICAgICAvLyAgIEJ1dHRvbjogXCIuL3BhY2thZ2VzL2NvbXBvbmVudHMvQnV0dG9uXCIsXG4gICAgICAvLyAgIElucHV0OiBcIi4vcGFja2FnZXMvY29tcG9uZW50cy9JbnB1dFwiLFxuICAgICAgLy8gfSxcbiAgICAgIC8vIGlucHV0OicuL3BhY2thZ2VzL2NvbXBvbmVudHMvaW5kZXgudHMnLFxuICAgICAgLy8gb3V0cHV0OltcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgLy9cdTYyNTNcdTUzMDVcdTY4M0NcdTVGMEZcbiAgICAgIC8vICAgZm9ybWF0OiBcImVzXCIsXG4gICAgICAvLyAgIC8vXHU2MjUzXHU1MzA1XHU1NDBFXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgICAvLyAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5tanNcIixcbiAgICAgIC8vICAgLy9cdThCQTlcdTYyNTNcdTUzMDVcdTc2RUVcdTVGNTVcdTU0OENcdTYyMTFcdTRFRUNcdTc2RUVcdTVGNTVcdTVCRjlcdTVFOTRcbiAgICAgIC8vICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgLy8gICBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAvLyAgIC8vXHU5MTREXHU3RjZFXHU2MjUzXHU1MzA1XHU2ODM5XHU3NkVFXHU1RjU1XG4gICAgICAvLyAgIGRpcjogXCIuL2Rpc3QvZXNcIixcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIC8vXHU2MjUzXHU1MzA1XHU2ODNDXHU1RjBGXG4gICAgICAvLyAgIGZvcm1hdDogXCJjanNcIixcbiAgICAgIC8vICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgIC8vICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXG4gICAgICAvLyAgIC8vXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XG4gICAgICAvLyAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgIC8vICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgLy8gICAvL1x1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVxuICAgICAgLy8gICBkaXI6IFwiLi9kaXN0L2xpYlwiLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBpbmxpbmVEeW5hbWljSW1wb3J0czogZmFsc2UsXG4gICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlIG5hbWVzIGZvciB5b3VyIGxpYnJhcnlcbiAgICAgICAgLy8gcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuXG4gICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuICAgICAgICB9LFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgIC8vIFx1OTQ4OFx1NUJGOVx1NkJDRlx1NEUyQVx1N0VDNFx1NEVGNlx1NzY4NFx1OTE0RFx1N0Y2RVxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBTUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUVqQixPQUFPLGdCQUFnQjtBQVZ2QixJQUFNLG1DQUFtQztBQVd6QyxTQUFTLFFBQVEsS0FBYTtBQUM1QixTQUFPLEtBQUssUUFBUSxrQ0FBVyxHQUFHO0FBQ3BDO0FBQ0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1Asb0JBQW9CLENBQUMsU0FBUztBQUM1QixlQUFPLE1BQU0sSUFBSTtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFNBQVMsUUFBUSxZQUFZO0FBQUEsTUFDN0IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCLFFBQVEsWUFBWTtBQUFBLE1BQ3BDLFNBQVMsUUFBUSxpQkFBaUI7QUFBQSxNQUNsQyw4QkFBOEI7QUFBQSxJQUNoQyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFFQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWdDL0IsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS04sU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBO0FBQUEsRUFFVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
