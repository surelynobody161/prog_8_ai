import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    root: "client",
    build: {
        outDir: "../docs",
        emptyOutDir: true
    },
    server: {
        proxy: {
            "/ask": "http://localhost:3000"
        }
    }
});
