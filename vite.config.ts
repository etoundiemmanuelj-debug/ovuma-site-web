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

// Génère dist/sitemap.xml au build, articles du CMS inclus
function sitemapPlugin() {
  const base = 'https://ovuma.org'
  const pages: [string, string, string][] = [
    ['/', 'weekly', '1.0'],
    ['/a-propos', 'monthly', '0.8'],
    ['/blog', 'weekly', '0.9'],
    ['/faq', 'monthly', '0.7'],
    ['/contact', 'monthly', '0.6'],
    ['/cgu', 'yearly', '0.3'],
    ['/politique-de-confidentialite', 'yearly', '0.3'],
    ['/mentions-legales', 'yearly', '0.3'],
    ['/supprimer-compte', 'yearly', '0.3'],
  ]
  return {
    name: 'ovuma-sitemap',
    apply: 'build' as const,
    closeBundle() {
      const dir = path.resolve(__dirname, 'src/content/blog')
      const posts = fs.existsSync(dir)
        ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')))
        : []
      const urls = [
        ...pages.map(([p, c, pr]) => ({ loc: base + p, c, pr })),
        ...posts.map((post) => ({ loc: `${base}/blog/${post.id}`, c: 'monthly', pr: '0.7' })),
      ]
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
        .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.c}</changefreq>\n    <priority>${u.pr}</priority>\n  </url>`)
        .join('\n')}\n</urlset>\n`
      const out = path.resolve(__dirname, 'dist')
      if (fs.existsSync(out)) fs.writeFileSync(path.join(out, 'sitemap.xml'), xml)
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    adminStaticPlugin(),
    sitemapPlugin(),
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
