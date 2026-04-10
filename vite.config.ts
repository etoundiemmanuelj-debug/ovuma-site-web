import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Plugin pour servir le panneau d'administration Decap CMS sans passer par React Router
function adminStaticPlugin() {
  return {
    name: 'admin-static-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/admin/' || req.url === '/admin') {
          const adminHtml = path.resolve(__dirname, 'public/admin/index.html')
          if (fs.existsSync(adminHtml)) {
            res.setHeader('Content-Type', 'text/html')
            res.end(fs.readFileSync(adminHtml, 'utf-8'))
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    adminStaticPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
