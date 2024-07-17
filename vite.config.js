import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "components"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"),
      fileName: "index",
      formats: ["es", "cjs"],
    },
  },
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    jsxInject: `import React from 'react'`,
  },
  test: {
    clearMocks: true,
    globals: true,
    environment: "jsdom",
    setupFiles: [path.resolve(__dirname, "./test/setup.js")],
    globalSetup: path.resolve(__dirname, "./test/global.js"),
  },
});
