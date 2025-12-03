'use client'

import { useState } from 'react'

export default function Faqs() {
  const items = [
    {
      q: 'FAQ 1 – ¿Con visa de estudiante puedo trabajar en España?',
      a: 'Sí, en muchos casos la visa de estudiante permite trabajar hasta 30 horas semanales, siempre que cumplas los requisitos y tengas la autorización correspondiente. En MIGRATE te explicamos cómo funciona según tu caso concreto y tu programa de estudios.',
    },
    {
      q: 'FAQ 2 – ¿Cuánto tarda todo el proceso?',
      a: 'Depende de tu país, del consulado y del tipo de trámite, pero en general conviene empezar al menos 4–6 meses antes de la fecha en la que quieres viajar o cambiar tu estatus. En la primera consulta te damos una estimación realista de tiempos.',
    },
    {
      q: 'FAQ 3 – ¿Puedo ir con mi familia?',
      a: 'En muchos supuestos sí. Existen figuras como reagrupación familiar o residencia como familiar de ciudadano de la UE, además de opciones para que tus hijos estudien en España. Analizamos quiénes te pueden acompañar y cuál es la vía legal adecuada.',
    },
    {
      q: 'FAQ 4 – ¿Qué pasa si me niegan el visado o el trámite?',
      a: 'Revisamos la resolución, analizamos las causas y te asesoramos sobre si merece la pena presentar un recurso o reformular la estrategia. En algunos casos es mejor insistir; en otros, cambiar de ruta. Nunca te dejaremos solo con una denegación sin explicación.',
    },
    {
      q: 'FAQ 5 – ¿Puedo empezar aunque todavía no tenga claro si quiero estudiar o trabajar?',
      a: 'Claro. Muchas personas empiezan con la idea de “solo estudiar” y terminan combinando estudio + trabajo o planificando una ruta de residencia a largo plazo. En MIGRATE te ayudamos a ordenar ideas y tomar decisiones con información realista.',
    },
  ]

  const [open, setOpen] = useState<Record<number, boolean>>({})
  const toggle = (idx: number) => setOpen((s) => ({ ...s, [idx]: !s[idx] }))

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-10">
            <h2 className="h2 font-cabinet-grotesk">Preguntas frecuentes sobre migrar a España</h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden">
            {items.map((item, idx) => {
              const isOpen = !!open[idx]
              return (
                <div key={idx} className="bg-white">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => toggle(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-cabinet-grotesk font-bold text-gray-900">
                      {item.q}
                    </span>
                    <svg
                      className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div id={`faq-panel-${idx}`} className="px-5 pb-5">
                      <p className="text-gray-600">{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}