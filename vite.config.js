import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Base path cho GitHub Pages
  // - Khi deploy GitHub Pages (chưa có custom domain): đặt base = "/<tên-repo>/"
  // - Khi có custom domain: đổi base = "/"
  // - Khi chạy dev (npm run dev): base tự động là "/"
  const base = command === "build" ? "/thay-duc-toan/" : "/";

  return {
    base,
    plugins: [react(), tailwindcss()],
  };
});
