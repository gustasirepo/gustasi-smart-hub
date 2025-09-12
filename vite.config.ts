import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// @ts-ignore - vite-imagetools has no types
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: false, // Allow Vite to find an available port if 8080 is in use
  },
  preview: {
    host: true,
    port: 8080,
    strictPort: false,
  },
  plugins: [
    react(),
    // Enable image optimization in production
    mode === 'production' && imagetools({
      defaultDirectives: (url: URL) => {
        const params = new URLSearchParams(url.search);
        if (!params.has('format')) {
          params.set('format', 'webp');
        }
        if (!params.has('q')) {
          params.set('q', '80');
        }
        return new URLSearchParams(params);
      },
    }),
    // mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configure build settings
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate source maps for production builds
    sourcemap: true,
    // Minify the output
    minify: 'terser',
    // Configure rollup options
    rollupOptions: {
      output: {
        // Split vendor and app code
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Add other vendor libraries here
        },
        // Configure chunk file names
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
}));
