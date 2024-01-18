import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import jsonServer from "vite-plugin-simple-json-server";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsonServer({ delay: 1500 })],
});


