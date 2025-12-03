'use client'

import Illustration from '@/public/images/hero-illustration.svg'

type Step = {
  num: number
  tag: string
  title: string
  desc: string
}

const STEPS: Step[] = [
  {
    num: 1,
    tag: 'DOCUMENTOS',
    title: 'Primero, preparo mis documentos',
    desc:
      'Me aseguro de tener en orden todos los papeles necesarios antes de iniciar cualquier trámite.',
  },
  {
    num: 2,
    tag: 'MATRICULACIÓN',
    title: 'Luego, me matriculo',
    desc:
      'Elijo e ingreso en uno de los Cursos Oficiales Acreditados. Esto valida mi propósito de venir.',
  },
  {
    num: 3,
    tag: 'VIAJE',
    title: 'Con la matrícula, viajo a España',
    desc:
      'Hago el viaje para establecerme en el país y continuar con los siguientes pasos.',
  },
  {
    num: 4,
    tag: 'SOLICITUD',
    title: 'Presento mi solicitud',
    desc:
      'Formalizo la Solicitud de Estancia para estar legalmente en España mientras estudio.',
  },
  {
    num: 5,
    tag: 'ESTUDIOS',
    title: 'Comienzo mis estudios',
    desc:
      'Empiezo las clases en la fecha indicada, cumpliendo con el objetivo principal de mi estancia.',
  },
  {
    num: 6,
    tag: 'TRABAJO',
    title: 'Y lo mejor, ¡a trabajar!',
    desc:
      'Cuando resuelven favorablemente mi Solicitud de Estancia, ya tengo permiso para empezar a trabajar.',
  },
]

export default function StepsFlow() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo azul al estilo del hero */}
      <div className="absolute inset-0 bg-blue-600 pointer-events-none -z-10" aria-hidden="true" />
      {/* Ilustración al estilo del hero */}
      <div className="absolute left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <object type="image/svg+xml" data={Illustration.src} width="1440" height="1214" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="h2 font-cabinet-grotesk text-white">Guia en 6 pasos</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-9 h-9 bg-gray-900 text-white border-2 border-white rounded-full inline-flex items-center justify-center font-bold">
                  {step.num}
                </div>
                <div className="mt-3 text-blue-100 text-xs font-bold tracking-wide uppercase">
                  {step.tag}
                </div>
                <h3 className="font-cabinet-grotesk font-bold text-lg text-white mt-1">
                  {step.title}
                </h3>
                <p className="text-white text-opacity-80 mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


