export const metadata = {
  title: 'Sobre nosotros - MIGRATE',
  description: 'Quiénes somos y cómo trabajamos en MIGRATE',
}

export default function SobreNosotrosPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="h2 font-cabinet-grotesk mb-6">¿Quiénes somos?</h1>
      <p className="text-gray-600 mb-4">
        En MIGRATE ayudamos a personas de Latinoamérica a migrar de forma informada, segura y ordenada,
        acompañándolas en todo el proceso: desde la elección de la vía adecuada (estudios, trabajo, regularización,
        familia, etc.) hasta la preparación documental y el seguimiento de cada etapa.
      </p>
      <p className="text-gray-600 mb-8">
        Somos un equipo multidisciplinar con experiencia en migración, movilidad internacional y procesos administrativos,
        y trabajamos con un enfoque práctico: claridad, planificación, y acompañamiento real.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">Nuestra misión</h2>
      <p className="text-gray-600 mb-8">
        Hacer que migrar sea más simple: menos frustración, menos errores y más resultados, con información clara y
        un plan de acción personalizado.
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">Cómo trabajamos (metodología)</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
        <li><strong>Diagnóstico:</strong> entendemos tu situación, país de origen, objetivos y plazos.</li>
        <li><strong>Estrategia:</strong> te proponemos la ruta más viable y el checklist de requisitos.</li>
        <li><strong>Gestión y acompañamiento:</strong> preparación de documentación, formularios, escritos, y seguimiento.</li>
        <li><strong>Soporte continuo:</strong> resolvemos dudas y te guiamos en los pasos críticos.</li>
      </ul>
      <p className="text-gray-600 mb-8">
        <strong>Importante:</strong> MIGRATE ofrece orientación y gestión administrativa. Cuando el caso requiera
        representación legal, se realizará a través de profesionales habilitados (o se derivará con tu autorización).
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">Qué nos diferencia</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
        <li><strong>Enfoque LATAM:</strong> entendemos tu contexto, documentación y tiempos reales.</li>
        <li><strong>Transparencia:</strong> procesos claros y costos explicados desde el inicio.</li>
        <li><strong>Acompañamiento humano:</strong> soporte cercano por WhatsApp y canales digitales.</li>
        <li><strong>Eficiencia:</strong> checklist, plantillas y control de recordatorios para reducir errores.</li>
      </ul>

      <h2 className="h4 font-cabinet-grotesk mb-3">Contacto</h2>
      <ul className="text-gray-600 space-y-2">
        <li><strong>WhatsApp:</strong> [+34 605 57 41 36]</li>
        <li><strong>Email:</strong> <a href="mailto:info@migrateya.com">info@migrateya.com</a></li>
      </ul>
    </section>
  )
}

