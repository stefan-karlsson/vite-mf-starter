import { defineConfig } from "vite";
import federationPlugin from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 4200,
  },
  plugins: [federationPlugin({
    name: "host",
    remotes: {},
    exposes: {}
  })],
});
