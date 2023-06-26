import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const resolvePath = (relativePath: string) =>
  path.resolve(__dirname, relativePath);

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      src: resolvePath("./src"),
    },
  },
});
