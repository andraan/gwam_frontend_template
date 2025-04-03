import { defineConfig } from "vite";
// import eslint from 'vite-plugin-eslint';
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Change the paths to match your project structure
const EXCLUDE_PATHS = ["/content/jhi-investments/us/en/portfolio-insight.html"];
const ALLOWED_PATHS = ["/api", "/libs", "/cps", "/etc.clientlibs", "/content"];

const root = resolve(__dirname, "src");
function createProxy() {
  const proxy = {
    "/content": {
      target: "http://localhost:4503",
      changeOrigin: true,
      secure: false,
    },
    "/etc.clientlibs": {
      target: "http://localhost:4503",
      changeOrigin: true,
      secure: false,
    },
  };

  ALLOWED_PATHS.forEach((path) => {
    if (!proxy[path]) {
      proxy[path] = {
        target: "http://localhost:4503",
        changeOrigin: true,
        secure: false,
        bypass: (req) => {
          const pathname = req.url;
          if (
            EXCLUDE_PATHS.some((excludePath) =>
              pathname.startsWith(excludePath)
            )
          )
            return req.url;
        },
      };
    }
  });

  return proxy;
}

export default defineConfig(({ command, mode }) => ({
  base:
    command === "build"
      ? "/etc.clientlibs/gwam-aem-frontend-template/clientlibs/"
      : "/",
  publicDir: command === "build" ? false : "public",
  test: {
    include: ["**/*.test.jsx", "**/*.test.js"],
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./src/setupTests.jsx"],
    coverage: {
      reporter: ["text", "html"],
    },
  },
  build: {
    reportCompressedSize: false,
    manifest: false,
    minify: mode === "development" ? false : "esbuild",
    outDir: "dist",
    sourcemap: command === "serve" ? "inline" : false,
    assetsDir: "clientlib-gwam-aem-frontend-template/resources/static",
    rollupOptions: {
      output: {
        assetFileNames: (chunk) => {
          const fileName = chunk.name;
          return fileName?.endsWith(".css")
            ? "clientlib-gwam-aem-frontend-template/resources/css/[name][extname]"
            : "clientlib-gwam-aem-frontend-template/resources/static/[name].[hash][extname]";
        },
        chunkFileNames:
          "clientlib-gwam-aem-frontend-template/resources/chunks/[name].[hash].js",
        entryFileNames:
          "clientlib-gwam-aem-frontend-template/resources/js/[name].js",
      },
    },
  },
  plugins: [react()],
  server: {
    proxy: createProxy(),
    port: 3000,
    open: true,
  },
}));
