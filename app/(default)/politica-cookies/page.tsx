export const metadata = {
  title: 'Política de Cookies - MIGRATE',
  description: 'Política de uso de cookies en MIGRATE',
}

export default function CookiesPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="h2 font-cabinet-grotesk mb-6">Política de Cookies</h1>
      <p className="text-gray-600 mb-6"><strong>Última actualización:</strong> [fecha]</p>

      <h2 className="h4 font-cabinet-grotesk mb-3">1. ¿Qué son las cookies?</h2>
      <p className="text-gray-600 mb-6">
        Las cookies son archivos que se descargan en el dispositivo del usuario al acceder a ciertas páginas web para
        almacenar y recuperar información sobre la navegación.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">2. Tipos de cookies que utilizamos</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
        <li>Cookies técnicas (necesarias para el funcionamiento del sitio).</li>
        <li>Cookies de preferencias (idioma, configuración).</li>
        <li>Cookies analíticas (medición de uso y rendimiento).</li>
        <li>Cookies de marketing (publicidad personalizada), solo si el usuario consiente.</li>
      </ul>

      <h2 className="h4 font-cabinet-grotesk mb-3">3. Cookies de terceros</h2>
      <p className="text-gray-600 mb-6">
        Podemos usar servicios de terceros (ej.: Google Analytics, Meta Pixel, YouTube, Stripe, etc.) que instalan cookies
        bajo sus propias políticas.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">4. Gestión del consentimiento</h2>
      <p className="text-gray-600 mb-6">
        Al acceder por primera vez, se muestra un banner para: aceptar todas, rechazar o configurar. El usuario puede modificar su
        elección en cualquier momento desde [enlace “Configurar cookies”].
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">5. Cómo desactivar cookies desde el navegador</h2>
      <p className="text-gray-600 mb-6">
        El usuario puede permitir, bloquear o eliminar cookies en la configuración del navegador.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">6. Listado de cookies</h2>
      <p className="text-gray-600">
        Incluye aquí una tabla generada por tu CMP (Cookie Management Platform) con nombre, finalidad, duración y proveedor de cada cookie.
      </p>
    </section>
  )
}

