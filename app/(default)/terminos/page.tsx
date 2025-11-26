export const metadata = {
  title: 'Términos del servicio - MIGRATE',
  description: 'Términos y condiciones del servicio de MIGRATE',
}

export default function TerminosPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="h2 font-cabinet-grotesk mb-6">Términos del servicio</h1>
      <p className="text-gray-600 mb-6"><strong>Última actualización:</strong> [fecha]</p>

      <h2 className="h4 font-cabinet-grotesk mb-3">1. Identificación del prestador</h2>
      <p className="text-gray-600 mb-6">
        El presente documento regula el acceso y uso del sitio web [dominio] (en adelante, “la Web”) y la contratación de
        servicios ofrecidos por MIGRATE, titularidad de [Razón social / Nombre y Apellidos], con [CIF/NIF], domicilio en
        [dirección completa], correo [email] (en adelante, “MIGRATE”).
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">2. Aceptación</h2>
      <p className="text-gray-600 mb-6">
        Al navegar por la Web, solicitar una asesoría, completar formularios o contratar un servicio, el usuario declara
        haber leído y aceptado estos Términos.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">3. Servicios</h2>
      <p className="text-gray-600 mb-4">
        MIGRATE ofrece, entre otros, los siguientes servicios (según disponibilidad):
      </p>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
        <li>asesoría migratoria y orientación;</li>
        <li>preparación y revisión documental;</li>
        <li>gestión de solicitudes y trámites administrativos;</li>
        <li>acompañamiento y seguimiento del proceso;</li>
        <li>servicios adicionales (según pack/plan contratado).</li>
      </ul>
      <p className="text-gray-600 mb-6">
        <strong>Naturaleza del servicio:</strong> salvo que se indique expresamente, los servicios de MIGRATE son de asesoría
        y gestión administrativa y no constituyen garantía de aprobación por parte de autoridades públicas.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">4. Requisitos del usuario</h2>
      <p className="text-gray-600 mb-4">
        El usuario se compromete a:
      </p>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
        <li>aportar información veraz y documentación auténtica;</li>
        <li>revisar y confirmar datos antes de presentaciones;</li>
        <li>respetar plazos y requerimientos;</li>
        <li>no utilizar la Web con fines ilícitos.</li>
      </ul>
      <p className="text-gray-600 mb-6">
        MIGRATE no será responsable por retrasos o denegaciones causadas por información incompleta, falsa o entregada fuera de plazo.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">5. Proceso de contratación</h2>
      <p className="text-gray-600 mb-6">
        La contratación se realiza mediante [formulario web / WhatsApp / email / pasarela de pago]. MIGRATE confirmará por escrito:
        alcance del servicio, precio, plazos estimados, documentación necesaria y condiciones particulares (si aplica).
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">6. Precios, pagos e impuestos</h2>
      <p className="text-gray-600 mb-6">
        Los precios se muestran en [moneda] e incluyen/excluyen impuestos según se indique. Métodos de pago: [tarjeta / transferencia /
        Stripe / PayPal / otros]. La prestación podrá iniciarse tras confirmación de pago, salvo acuerdo distinto.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">7. Derecho de desistimiento (si aplica)</h2>
      <p className="text-gray-600 mb-6">
        Si el usuario es consumidor y la contratación es a distancia, podría existir derecho de desistimiento conforme a la normativa
        aplicable. Excepción habitual: si el servicio ya comenzó con consentimiento del cliente (p. ej., revisión documental, elaboración
        de escritos, preparación de expediente), el desistimiento puede no aplicar o puede generar costes proporcionales.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">8. Cancelaciones y reprogramaciones</h2>
      <p className="text-gray-600 mb-6">
        Reprogramaciones y cancelaciones: especificar condiciones, plazos y política de devoluciones o créditos.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">9. Comunicación</h2>
      <p className="text-gray-600 mb-6">
        Las comunicaciones podrán realizarse por email, WhatsApp u otros medios aportados por el usuario. El usuario debe mantener
        sus datos de contacto actualizados.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">10. Propiedad intelectual</h2>
      <p className="text-gray-600 mb-6">
        Todos los contenidos de la Web son titularidad de MIGRATE o de terceros licenciantes. Prohibida su reproducción sin autorización.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">11. Enlaces a terceros</h2>
      <p className="text-gray-600 mb-6">
        La Web puede contener enlaces a sitios de terceros. MIGRATE no controla ni asume responsabilidad por esos contenidos o políticas.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">12. Limitación de responsabilidad</h2>
      <p className="text-gray-600 mb-6">
        MIGRATE no garantiza resultados finales de trámites dependientes de terceros. La responsabilidad de MIGRATE, en caso de
        incumplimiento acreditado, quedará limitada como máximo al importe abonado por el servicio específico afectado, salvo norma
        imperativa en contrario.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">13. Modificaciones</h2>
      <p className="text-gray-600 mb-6">
        MIGRATE puede actualizar estos Términos. La versión vigente será la publicada en la Web.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">14. Ley aplicable y jurisdicción</h2>
      <p className="text-gray-600">
        Estos Términos se rigen por [ley del país]. Para cualquier disputa, las partes se someten a [tribunales de la ciudad/país],
        salvo norma imperativa distinta.
      </p>
    </section>
  )
}

