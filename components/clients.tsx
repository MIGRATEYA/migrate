'use client'
import Image from 'next/image'
import Mtes from '@/public/images/MTES.Gob.Web.svg'
import Mefpd from '@/public/images/MEFPD.Gob.svg'
import Missm from '@/public/images/MISSM.Gob.svg'
import Sepe from '@/public/images/SEPE-V-AZUL-CAS.png'

// Import Swiper
 

export default function Clients() {

  return (
    <section className="bg-gray-900">
      <div className="py-0">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-0">
          <h2 className="h4 font-cabinet-grotesk text-gray-100">Aliados en educación, formación y servicios</h2>
        </div>

        {/* Nuevo carrusel simple (sin Swiper), imágenes grandes y sin separación */}
        <div className="relative overflow-hidden">
          <div className="marquee select-none">
            <div className="flex items-center justify-center">
              <Image className="h-36 md:h-44 lg:h-52 w-auto object-contain" src={Mefpd} alt="Ministerio de Educación, Formación Profesional y Deportes" />
            </div>
            <div className="flex items-center justify-center">
              <Image className="h-36 md:h-44 lg:h-52 w-auto object-contain" src={Missm} alt="Ministerio de Inclusión, Seguridad Social y Migraciones" />
            </div>
            <div className="flex items-center justify-center">
              <Image className="h-36 md:h-44 lg:h-52 w-auto object-contain" src={Mtes} alt="Ministerio de Trabajo y Economía Social" />
            </div>
            <div className="flex items-center justify-center">
              <Image className="h-28 md:h-36 lg:h-40 w-auto object-contain" src={Sepe} alt="SEPE" />
            </div>
            {/* Duplicado para efecto loop continuo */}
            <div className="flex items-center justify-center">
              <Image className="h-36 md:h-44 lg:h-52 w-auto object-contain" src={Mefpd} alt="Ministerio de Educación, Formación Profesional y Deportes" />
            </div>
            <div className="flex items-center justify-center">
              <Image className="h-36 md:h-44 lg:h-52 w-auto object-contain" src={Missm} alt="Ministerio de Inclusión, Seguridad Social y Migraciones" />
            </div>
            <div className="flex items-center justify-center">
              <Image className="h-36 md:h-44 lg:h-52 w-auto object-contain" src={Mtes} alt="Ministerio de Trabajo y Economía Social" />
            </div>
            <div className="flex items-center justify-center">
              <Image className="h-28 md:h-36 lg:h-40 w-auto object-contain" src={Sepe} alt="SEPE" />
            </div>
          </div>
          <style jsx>{`
            .marquee {
              display: flex;
              align-items: center;
              gap: 0;
              width: max-content;
              animation: scroll 28s linear infinite;
            }
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}