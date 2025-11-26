'use client'

import Image from 'next/image'
import { useState } from 'react'
import FeatImage from '@/public/images/features-01.svg'

export default function Features02() {

  const [category, setCategory] = useState<string>('1')

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-cabinet-grotesk">Todo lo que necesitas para estudiar, trabajar y vivir legalmente en España</h2>
          </div>

          <div>
            {/* Category buttons */}
            <div className="pb-12 md:pb-20">
              <div className="flex flex-wrap justify-center -m-1.5">
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '1' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('1')}
                >
                  Asesoría honesta y directa
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '2' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('2')}
                >
                  Planes según tu perfil
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '3' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('3')}
                >
                  Acompañamiento antes y después del viaje
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '4' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('4')}
                >
                  Soporte legal en casos complejos
                </button>
              </div>
            </div>

            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="fade-up">
                {/* Content #1 */}
                <div className={`${category !== '1' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">La agencia migratoria que te acompaña en cada etapa, no solo en el papeleo.</h3>
                  <p className="text-lg text-gray-500 mb-8">
                  Migrar a España ya no va solo de “llenar formularios”. Requiere entender bien la ley, los tiempos, los riesgos y las oportunidades reales para tu perfil. Por eso en <strong>MIGRATE </strong> unimos asesoría legal, planificación migratoria y acompañamiento práctico, para que tomes decisiones con calma y con información clara, sin promesas vacías.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Respuestas claras desde la primera llamada</div>
                        <div className="text-gray-500">
                        Revisamos tu caso con lupa y te decimos, sin rodeos, qué opciones tienes y cuáles no. Así evitas perder tiempo, dinero y energía en rutas que no aplican para ti ni para tu familia.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Trámites organizados y sin tanto estrés</div>
                        <div className="text-gray-500">
                        Te damos checklists, modelos de documentos y pasos concretos para armar tu expediente. Sabes qué entregar, cuándo hacerlo y cómo responder si el consulado o extranjería te piden algo más.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Pensado para tu futuro en España, no solo para el visado</div>
                        <div className="text-gray-500">
                        No nos quedamos en el “que te den el visado y ya”. Te ayudamos a planear el siguiente paso: renovaciones, cambio de tipo de permiso, estudios que te abran puertas laborales y una ruta real a largo plazo en España.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #2 */}
                <div className={`${category !== '2' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Un plan migratorio hecho para tu vida, no un paquete genérico.</h3>
                  <p className="text-lg text-gray-500 mb-8">
                  No es lo mismo migrar siendo estudiante que viniendo con hijos, cambiando de carrera o buscando trabajo remoto. Por eso en <strong>MIGRATE </strong>no te metemos en un <strong>“pack estándar”</strong>: analizamos tu edad, formación, experiencia, situación económica y familiar, y a partir de ahí armamos un plan migratorio realista, con opciones concretas y sus pros y contras, para que elijas el camino que mejor se ajusta a tu vida.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Análisis completo de tu perfil</div>
                        <div className="text-gray-500">
                        Revisamos tu caso punto por punto: país de origen, estudios, experiencia laboral, idioma, ahorros y objetivos (estudiar, trabajar, venir en familia, quedarte a largo plazo). Con eso definimos qué rutas tienen sentido para ti y cuáles es mejor descartar desde el inicio.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Un plan con pasos claros y tiempos estimados</div>
                        <div className="text-gray-500">
                        No solo te decimos “qué permiso te conviene”, sino qué hacer primero, qué hacer después y cuánto puede tardar cada fase. Así sabes qué documentos preparar, cuándo iniciar el trámite y qué escenarios puedes esperar, en lugar de ir a ciegas o viviendo de suposiciones.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #3 */}
                <div className={`${category !== '3' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Te acompañamos desde tu primer “hola” hasta que ya estés instalado en España.</h3>
                  <p className="text-lg text-gray-500 mb-8">
                  Migrar no es solo “que te aprueben el visado” y ya. Antes del viaje aparecen dudas, miedos y trámites; después del viaje llegan los papeles, la adaptación y las decisiones a futuro.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Antes del viaje: llegas preparado, no improvisando</div>
                        <div className="text-gray-500">
                        Organizamos contigo el calendario de trámites, listas de documentos, citas, requisitos del consulado y todo lo que necesitas antes de subir al avión. Sabes qué hacer cada semana, qué falta por completar y qué riesgos evitar para no poner en juego tu visado.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Después del viaje: primeros pasos guiados en España</div>
                        <div className="text-gray-500">
                          Te orientamos en tus primeros pasos: empadronamiento, TIE/NIE, cuenta bancaria, seguro, transporte, teléfono, estudios o trabajo. Además, te asesoramos en lo que viene después: renovaciones, cambios de tipo de permiso y nuevas oportunidades para quedarte a largo plazo.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #4 */}
                <div className={`${category !== '4' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Cuando tu caso se complica, ahí es donde más nos necesitas</h3>
                  <p className="text-lg text-gray-500 mb-8">
                  No todos los procesos migratorios son “de manual”. A veces hay antecedentes de denegaciones, expedientes incompletos, contratos dudosos o situaciones personales delicadas. En <strong>MIGRATE</strong> contamos con soporte legal especializado en extranjería para revisar tu caso a fondo, reducir riesgos y preparar una estrategia sólida, especialmente cuando no puedes permitirte errores.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Revisión jurídica completa de tu expediente</div>
                        <div className="text-gray-500">
                        Analizamos resoluciones, motivos de denegación, requerimientos y cada documento que presentes. Te decimos qué está fuerte, qué está débil y qué debes reforzar para aumentar tus posibilidades de éxito en el siguiente movimiento.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Recursos y respuestas bien planteadas</div>
                        <div className="text-gray-500">
                        Te ayudamos a preparar recursos, alegaciones y respuestas a requerimientos de forma clara y técnica, defendiendo tus derechos dentro de la ley. No se trata solo de “mandar más papeles”, sino de argumentar correctamente y presentar la documentación adecuada en el momento justo.
                        </div>
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <Image className="mx-auto md:max-w-none" src={FeatImage} width="540" height="405" alt="Features" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}