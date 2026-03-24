'use client'

import Illustration from '@/public/images/hero-illustration.svg'
import { useLanguage } from '@/lib/i18n/context'

export default function StepsFlow() {
  const { t } = useLanguage()
  const s = t.stepsFlow

  const steps = [
    { num: 1, tag: s.step1Tag, title: s.step1Title, desc: s.step1Desc },
    { num: 2, tag: s.step2Tag, title: s.step2Title, desc: s.step2Desc },
    { num: 3, tag: s.step3Tag, title: s.step3Title, desc: s.step3Desc },
    { num: 4, tag: s.step4Tag, title: s.step4Title, desc: s.step4Desc },
    { num: 5, tag: s.step5Tag, title: s.step5Title, desc: s.step5Desc },
    { num: 6, tag: s.step6Tag, title: s.step6Title, desc: s.step6Desc },
  ]

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
            <h2 className="h2 font-cabinet-grotesk text-white">{s.heading}</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
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
