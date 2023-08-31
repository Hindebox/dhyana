import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

dotenv.config({ path: ".env" });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.API_URL": JSON.stringify(process.env.API_URL),
    "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
  },
});
