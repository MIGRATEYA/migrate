import Features01 from '@/components/features-01'
import StudyWork from '@/components/study-work'
import Image from 'next/image'
import Services from '@/components/services'
import HeroIllustration from '@/public/images/hero-illustration.svg'
import { VideoTextDemo } from '@/components/video-text-demo'
import { ScrollBasedVelocityDemo } from '@/components/scroll-based-velocity-demo'
import Features02 from '@/components/features-02'
import StepsFlow from "@/components/steps-flow"
import Link from 'next/link'

export const metadata = {
  title: 'Estudios - MIGRATE',
  description: 'Opciones de estudios para obtener o mantener tu estancia legal en España',
}

export default function EstudiosPage() {
  return (
    <>
      

      {/* Bloque de destacados al estilo de la home */}
      <Features02 />
      <StepsFlow />
      <ScrollBasedVelocityDemo />
      
      <Features01 />
      <StudyWork />
      <VideoTextDemo />
      <Services />
      

      {/* Sección estilo Hero: Red de empresas */}
      <section className="relative overflow-hidden">
        {/* Fondo azul al estilo Hero */}
        <div className="absolute inset-0 bg-blue-600 pointer-events-none -z-10" aria-hidden="true" />
        {/* Ilustración al estilo Hero */}
        <div className="absolute left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <object type="image/svg+xml" data={HeroIllustration.src} width="1440" height="1214" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-20 pb-16 md:pt-24 md:pb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 font-cabinet-grotesk text-white mb-3">Trabajamos con una gran red de empresas</h2>
              <p className="text-lg md:text-xl text-white text-opacity-80">
                Conectamos talento con una red sólida de empresas en España <br></br>desde construcción y sanitario hasta
                hostelería y servicios<br></br> que hoy necesitan perfiles como el tuyo.<br></br> Si vienes por estudios, te acercamos
                prácticas y ofertas reales, coordinamos entrevistas y te guiamos para convertir ese primer empleo en una
                ruta de residencia estable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16 text-center">
            <h3 className="h3 font-cabinet-grotesk mb-3">¿Listo para dar el paso?</h3>
            <p className="text-gray-500 mb-6">
              Te ayudamos a elegir el programa adecuado, preparar tu solicitud y conectar con empresas.
            </p>
            <Link
              className="btn inline-flex items-center text-white bg-gray-900 hover:bg-gray-800 group"
              href="https://wa.me/34605574136"
            >
              Hablar con un asesor
              <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="8">
                  <path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}


