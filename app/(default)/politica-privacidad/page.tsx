export const metadata = {
  title: 'Política de Privacidad - MIGRATE',
  description: 'Política de protección de datos personales de MIGRATE',
}

export default function PrivacidadPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="h2 font-cabinet-grotesk mb-6">Política de Privacidad</h1>
      <p className="text-gray-600 mb-6"><strong>Última actualización:</strong> [fecha]</p>

      <h2 className="h4 font-cabinet-grotesk mb-3">1. Responsable del tratamiento</h2>
      <ul className="text-gray-600 space-y-2 mb-6">
        <li><strong>Responsable:</strong> [Razón social / Nombre]</li>
        <li><strong>NIF/CIF:</strong> [dato]</li>
        <li><strong>Domicilio:</strong> [dato]</li>
        <li><strong>Email de contacto privacidad:</strong> <a href="mailto:info@migrateya.com">info@migrateya.com</a></li>
      </ul>

      <h2 className="h4 font-cabinet-grotesk mb-3">2. Datos personales que recopilamos</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
        <li>Datos identificativos y de contacto</li>
        <li>Información necesaria para el servicio (situación migratoria, documentación aportada)</li>
        <li>Datos de facturación (si procede)</li>
        <li>Datos técnicos (IP, dispositivo, navegación) mediante cookies, según consentimiento</li>
      </ul>

      <h2 className="h4 font-cabinet-grotesk mb-3">3. Finalidades del tratamiento</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
        <li>Responder consultas y solicitudes</li>
        <li>Gestionar citas y comunicaciones</li>
        <li>Prestar servicios contratados y seguimiento</li>
        <li>Facturación y gestión administrativa</li>
        <li>Cumplimiento de obligaciones legales</li>
        <li>Información comercial (según consentimiento o base legítima)</li>
      </ul>

      <h2 className="h4 font-cabinet-grotesk mb-3">4. Base legal</h2>
      <p className="text-gray-600 mb-6">
        Ejecución de contrato/medidas precontractuales; consentimiento; cumplimiento de obligación legal; interés legítimo.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">5. Conservación</h2>
      <p className="text-gray-600 mb-6">
        Conservaremos los datos durante la relación contractual y los plazos necesarios por ley. En consultas no contratadas,
        por [X meses]; en comunicaciones comerciales, hasta baja del usuario.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">6. Destinatarios</h2>
      <p className="text-gray-600 mb-6">
        Proveedores tecnológicos, profesionales colaboradores necesarios y autoridades públicas cuando exista obligación legal.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">7. Transferencias internacionales</h2>
      <p className="text-gray-600 mb-6">
        Si se usan proveedores fuera de [país/EEE], se aplicarán garantías adecuadas cuando sea exigible.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">8. Derechos del usuario</h2>
      <p className="text-gray-600 mb-6">
        Acceso, rectificación, supresión, oposición, limitación, portabilidad y retirada del consentimiento. Para ejercerlos:
        escribir a <a href="mailto:info@migrateya.com">info@migrateya.com</a> indicando identidad y derecho.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">9. Reclamaciones</h2>
      <p className="text-gray-600 mb-6">
        El usuario puede reclamar ante [autoridad de control] (si España: AEPD) o la autoridad correspondiente.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">10. Otros</h2>
      <p className="text-gray-600">
        Seguridad, menores, cambios de la política y versión vigente publicada en la Web.
      </p>
    </section>
  )
}

