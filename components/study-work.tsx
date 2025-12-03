import Link from 'next/link'
export default function StudyWork() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h2 className="h2 font-cabinet-grotesk">Elige tu ruta y te acompañamos</h2>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <Link href="https://wa.me/34605574136" aria-label="WhatsApp estudios" className="block">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-900/30 ring-1 ring-white/10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-blue-900/50 before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-tr before:from-white/10 before:to-transparent before:opacity-50">
                <h3 className="font-cabinet-grotesk font-bold text-lg mb-3">Si vienes por estudios</h3>
                <p className="text-blue-100">
                  Te ayudamos a definir el programa adecuado, requisitos y calendario; preparamos la
                  documentación para tu visado de estudiante y te guiamos hasta tu llegada y matriculación.
                </p>
              </div>
            </Link>
            <Link href="https://wa.me/34605574136" aria-label="WhatsApp trabajo" className="block">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-900/30 ring-1 ring-white/10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-blue-900/50 before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-tr before:from-white/10 before:to-transparent before:opacity-50">
                <h3 className="font-cabinet-grotesk font-bold text-lg mb-3">Si vienes por trabajo</h3>
                <p className="text-blue-100">
                  Te conectamos con empresas: contamos con una red de compañías que buscan perfiles como el tuyo.
                  Te acercamos oportunidades reales para acelerar tu contratación.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


