import vercel from "vite-plugin-vercel";
import {telefunc} from "telefunc/vite";
import solid from "vike-solid/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({
    vps: {
      prerender: true,
    },
  }), telefunc(), vercel()],
  build: {
    // target is es2022 to support top level await
    // https://caniuse.com/?search=top%20level%20await
    target: "es2022",
  }
});