import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ],
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'OrionTheme',
      fileName: (format) => `orion-theme${format === 'es' ? '' : '.umd'}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        dir: 'assets',
        assetFileNames: '[name].[ext]'
      }
    },
    minify: true,
    emptyOutDir: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})