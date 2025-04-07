import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      cssFileName: "style",
      entry: resolve(__dirname, "lib/beercss/index.js"),
      name: "EOxUI",
      // the proper extensions will be added
      fileName: "eox-ui",
    },
  },
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === "css") {
        return `./${filename}`;
      } else {
        return { relative: true };
      }
    },
  },
});
