export const metadata = {
  title: 'Aviso legal - MIGRATE',
  description: 'Aviso legal del sitio web de MIGRATE',
}

export default function AvisoLegalPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="h2 font-cabinet-grotesk mb-6">Aviso legal</h1>
      <p className="text-gray-600 mb-6"><strong>Última actualización:</strong> [fecha]</p>

      <h2 className="h4 font-cabinet-grotesk mb-3">1. Titular del sitio web</h2>
      <ul className="text-gray-600 space-y-2 mb-6">
        <li><strong>Titular:</strong> [Razón social / Nombre]</li>
        <li><strong>NIF/CIF:</strong> [dato]</li>
        <li><strong>Domicilio:</strong> [dato]</li>
        <li><strong>Email:</strong> [dato]</li>
        <li><strong>Teléfono:</strong> [dato]</li>
        <li><strong>Registro mercantil / datos registrales (si aplica):</strong> [dato]</li>
      </ul>

      <h2 className="h4 font-cabinet-grotesk mb-3">2. Objeto</h2>
      <p className="text-gray-600 mb-6">
        La Web tiene por objeto informar sobre los servicios de MIGRATE y facilitar el contacto y/o contratación de los mismos.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">3. Condiciones de uso</h2>
      <p className="text-gray-600 mb-6">
        El usuario se compromete a usar la Web de forma lícita y conforme a la buena fe, evitando cualquier actividad que pueda
        dañar, sobrecargar o deteriorar el sitio o sus servicios.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">4. Propiedad intelectual e industrial</h2>
      <p className="text-gray-600 mb-6">
        Los contenidos de la Web están protegidos por derechos de propiedad intelectual e industrial. Queda prohibido su uso no
        autorizado.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">5. Responsabilidad</h2>
      <p className="text-gray-600 mb-6">
        MIGRATE no se responsabiliza por interrupciones del servicio por causas técnicas, uso indebido de la Web por parte del
        usuario o daños derivados de enlaces a terceros.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">6. Protección de datos</h2>
      <p className="text-gray-600 mb-6">
        El tratamiento de datos personales se rige por la Política de Privacidad.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">7. Cookies</h2>
      <p className="text-gray-600">
        El uso de cookies se regula en la Política de Cookies.
      </p>
    </section>
  )
}

