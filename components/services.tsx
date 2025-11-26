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

export default function Services() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 font-cabinet-grotesk text-gray-100">Ejemplos de estudios que pueden ayudarte a conseguir o mantener tu estancia legal en España.</h2>
            </div>

            {/* Grid */}
            <div className="max-w-2xl mx-auto grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:max-w-none items-start">
              {/* Item #1 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service01}
                      width="202"
                      height="128"
                      alt="Item 01"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Diseño de sistemas
                  </a>
                </div>
              </div>
              {/* Item #2 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service02}
                      width="202"
                      height="128"
                      alt="Item 02"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Administración y Finanzas
                  </a>
                </div>
              </div>
              {/* Item #3 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service03}
                      width="202"
                      height="128"
                      alt="Item 03"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Ilustración
                  </a>
                </div>
              </div>
              {/* Item #4 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service04}
                      width="202"
                      height="128"
                      alt="Item 04"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Publicidad
                  </a>
                </div>
              </div>
              {/* Item #5 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service05}
                      width="202"
                      height="128"
                      alt="Item 05"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Wireframes
                  </a>
                </div>
              </div>
              {/* Item #6 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service06}
                      width="202"
                      height="128"
                      alt="Item 06"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Grado en Marketing y Comercio Digital
                  </a>
                </div>
              </div>
              {/* Item #7 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service07}
                      width="202"
                      height="128"
                      alt="Item 07"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Grado en Administración y Dirección de Empresas (ADE)
                  </a>
                </div>
              </div>
              {/* Item #8 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service08}
                      width="202"
                      height="128"
                      alt="Item 08"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Grado en Turismo y Hostelería
                  </a>
                </div>
              </div>
              {/* Item #9 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service09}
                      width="202"
                      height="128"
                      alt="Item 09"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Edición de video
                  </a>
                </div>
              </div>
              {/* Item #10 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service10}
                      width="202"
                      height="128"
                      alt="Item 10"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    FP en Desarrollo web
                  </a>
                </div>
              </div>
              {/* Item #11 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service11}
                      width="202"
                      height="128"
                      alt="Item 11"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Señalización
                  </a>
                </div>
              </div>
              {/* Item #12 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service12}
                      width="202"
                      height="128"
                      alt="Item 12"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Máster en Marketing Digital
                  </a>
                </div>
              </div>
              {/* Item #13 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service13}
                      width="202"
                      height="128"
                      alt="Item 13"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    FP en Cuidados Auxiliares de Enfermería
                  </a>
                </div>
              </div>
              {/* Item #14 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service14}
                      width="202"
                      height="128"
                      alt="Item 14"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Máster en Data & Business Analytics
                  </a>
                </div>
              </div>
              {/* Item #15 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-101/64 object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service15}
                      width="202"
                      height="128"
                      alt="Item 15"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Máster en Recursos Humanos
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom gradient removed (no button) */}
          </div>
        </div>
      </div>
    </section>
  )
}