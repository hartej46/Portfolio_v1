import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { handleContactSubmission } from './api/contact.js'

function contactApiPlugin() {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }))
          return
        }

        let body = ''
        req.on('data', chunk => {
          body += chunk
        })

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}')
            const result = await handleContactSubmission(data)
            res.statusCode = result.status
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(result.data))
          } catch (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false, error: err.message || 'Server error' }))
          }
        })
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    contactApiPlugin()
  ],
})
