import Image from 'next/image'
import Service01 from '@/public/images/service-01.jpg'
import Service02 from '@/public/images/service-02.jpg'
import Service03 from '@/public/images/service-03.jpg'
import Service04 from '@/public/images/service-04.jpg'
import Service05 from '@/public/images/service-05.jpg'
import Service06 from '@/public/images/service-06.jpg'
import Service07 from '@/public/images/service-07.jpg'
import Service08 from '@/public/images/service-08.jpg'
import Service09 from '@/public/images/service-09.jpg'
import Service10 from '@/public/images/service-10.jpg'
import Service11 from '@/public/images/service-11.jpg'
import Service12 from '@/public/images/service-12.jpg'
import Service13 from '@/public/images/service-13.jpg'
import Service14 from '@/public/images/service-14.jpg'
import Service15 from '@/public/images/service-15.jpg'
import ConstruccionImg from '@/public/images/construccion.webp'
import SanitarioImg from '@/public/images/sanitario.webp'
import HoteleriaImg from '@/public/images/hosteleria.webp'

function SlideUpWords({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <div className="flex flex-wrap justify-center gap-x-1 leading-snug px-2 text-center">
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="text-white text-sm sm:text-lg md:text-2xl font-cabinet-grotesk font-bold drop-shadow transition-all duration-300 ease-out md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0"
          style={{ transitionDelay: `${index * 40}ms` }}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 font-cabinet-grotesk text-gray-100">Ejemplos de estudios que pueden ayudarte a conseguir o mantener tu estancia legal en España.</h2>
            </div>

            {/* Grid estilo cards con overlay y texto centrado */}
            <div className="max-w-6xl mx-auto grid gap-3 sm:gap-4 grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
              {[
                { t: 'Estudios de Construcción', s: ConstruccionImg, a: 'Construcción' },
                { t: 'Estudios de Sanitario', s: SanitarioImg, a: 'Sanitario' },
                { t: 'Estudios de Hotelería', s: HoteleriaImg, a: 'Hotelería' },
                { t: 'Diseño de sistemas', s: Service01, a: 'Item 01' },
                { t: 'Administración y Finanzas', s: Service02, a: 'Item 02' },
                { t: 'Ilustración', s: Service03, a: 'Item 03' },
                { t: 'Publicidad', s: Service04, a: 'Item 04' },
                { t: 'Wireframes', s: Service05, a: 'Item 05' },
                { t: 'Grado en Marketing y Comercio Digital', s: Service06, a: 'Item 06' },
                { t: 'Grado en ADE', s: Service07, a: 'Item 07' },
                { t: 'Grado en Turismo y Hostelería', s: Service08, a: 'Item 08' },
                { t: 'Edición de video', s: Service09, a: 'Item 09' },
                { t: 'FP en Desarrollo web', s: Service10, a: 'Item 10' },
                { t: 'Señalización', s: Service11, a: 'Item 11' },
                { t: 'Máster en Marketing Digital', s: Service12, a: 'Item 12' },
                { t: 'Auxiliares de Enfermería', s: Service13, a: 'Item 13' },
                { t: 'Máster en Data & Business Analytics', s: Service14, a: 'Item 14' },
                { t: 'Máster en Recursos Humanos', s: Service15, a: 'Item 15' },
              ].map((it, idx) => (
                <a key={idx} href="https://wa.me/34605574136" className="relative group block rounded-lg overflow-hidden">
                  <div className="aspect-[4/3] w-full relative">
                    <Image
                      src={it.s}
                      alt={it.a}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 md:bg-black/35 group-hover:bg-black/45 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <SlideUpWords text={it.t} />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom gradient removed (no button) */}
          </div>
        </div>
      </div>
    </section>
  )
}