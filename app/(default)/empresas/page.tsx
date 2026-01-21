import Illustration from '@/public/images/hero-illustration.svg'

export const metadata = {
  title: 'Empresas - MIGRATE',
  description: 'Servicios para empresas que necesitan incorporar talento en España',
}

export default function EmpresasPage() {
  return (
    <section>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10" aria-hidden="true" />
        <div
          className="absolute left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10 opacity-70"
          aria-hidden="true"
        >
          <object type="image/svg+xml" data={Illustration.src} width="1440" height="1214" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-3xl">
              <h1 className="h2 font-cabinet-grotesk text-white mb-4">
                Talento internacional verificado para empresas en España
              </h1>
              <p className="text-lg text-white text-opacity-80">
                En MIGRATE YA ayudamos a empresas en España a cubrir necesidades reales de talento con un proceso ágil,
                transparente y legalmente seguro.
              </p>
              <div className="mt-6 rounded-xl border border-white/15 bg-white/10 p-5 text-white text-opacity-85 backdrop-blur">
                <p className="mb-3 text-xs uppercase tracking-widest text-white text-opacity-70">
                  Qué incluye nuestro soporte a empresas
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                  <li>Perfiles verificados en construcción, hostelería y sanidad.</li>
                  <li>Acceso a talento en Argentina, Perú y Colombia con preselección previa.</li>
                  <li>
                    Gestión de visados de estudios, homologaciones y proceso migratorio completo, con opción de trabajo
                    hasta 30 horas semanales.
                  </li>
                  <li>Transformación del visado de estudios al visado de trabajo y garantía de reposición 90 días.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative p-6 rounded-lg bg-white border border-slate-200 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 7a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M3 10h18" />
                </svg>
              </div>
              <h2 className="font-cabinet-grotesk font-bold text-lg text-gray-900 mb-2">Cobertura de Vacantes Críticas</h2>
              <p className="text-gray-600">
                En MIGRATE YA estamos especializados en encontrar perfiles profesionales para diversos sectores como
                construcción, hostelería y sanidad.
              </p>
            </div>

              <div className="relative p-6 rounded-lg bg-white border border-slate-200 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h2 className="font-cabinet-grotesk font-bold text-lg text-gray-900 mb-2">
                Perfiles Verificados y Preseleccionados
              </h2>
              <p className="text-gray-600">
                Nuestra presencia en Argentina, Perú y Colombia nos permite acceder a una gran cantidad de talento y
                seleccionar y verificar los perfiles para incorporarlos a nuestra base de datos.
              </p>
            </div>

              <div className="relative p-6 rounded-lg bg-white border border-slate-200 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 3h7l4 4v14H7z" />
                  <path d="M14 3v4h4" />
                  <path d="M9 13h6" />
                  <path d="M9 17h6" />
                </svg>
              </div>
              <h2 className="font-cabinet-grotesk font-bold text-lg text-gray-900 mb-2">Gestión Legal Integral</h2>
              <p className="text-gray-600 mb-3">
                En MIGRATE YA gestionamos los visados de estudios, tramitamos las homologaciones de estudios y ayudamos
                al profesional en todo su proceso migratorio: desde su país de origen hasta su llegada a España.
              </p>
              <p className="text-gray-600 mb-3">
                Los visados que gestionamos permiten al candidato trabajar en España mientras realiza su formación
                certificada con un límite de 30 horas semanales.
              </p>
              <p className="text-gray-600">
                Gestionamos así mismo la transformación del visado de estudios al visado de trabajo, para que el
                profesional se pueda incorporar a la empresa de manera sencilla y rápida.
              </p>
            </div>

              <div className="relative p-6 rounded-lg bg-white border border-slate-200 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="font-cabinet-grotesk font-bold text-lg text-gray-900 mb-2">Acompañamiento y Retención</h2>
              <p className="text-gray-600">
                Seguimiento post-incorporación y garantía de reposición de candidato durante los primeros 90 días.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
