import type { MetadataRoute } from 'next'

// Usa NEXT_PUBLIC_SITE_URL si está definido (producción); si no, fallback a localhost
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Rutas públicas principales (excluimos rutas de autenticación y API)
  const routes = [
    '/',
    '/estudios',
    '/sobre-nosotros',
    '/terminos',
    '/aviso-legal',
    '/politica-privacidad',
    '/politica-cookies',
  ]

  return routes.map((path, index) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7 - index * 0.05, // home más alta, resto decreciente leve
  }))
}



