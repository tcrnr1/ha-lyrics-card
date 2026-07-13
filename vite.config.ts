import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "ha-lyrics-card.js"
    },
    outDir: "dist",
    emptyOutDir: true
  }
});
