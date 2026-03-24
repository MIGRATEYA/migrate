'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/context'

export default function StudyWork() {
  const { t } = useLanguage()
  const s = t.studyWork

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h2 className="h2 font-cabinet-grotesk">{s.heading}</h2>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <Link href="https://wa.me/34605574136" aria-label={s.studyAriaLabel} className="block">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-900/30 ring-1 ring-white/10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-blue-900/50 before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-tr before:from-white/10 before:to-transparent before:opacity-50">
                <h3 className="font-cabinet-grotesk font-bold text-lg mb-3">{s.studyTitle}</h3>
                <p className="text-blue-100">{s.studyDesc}</p>
              </div>
            </Link>
            <Link href="https://wa.me/34605574136" aria-label={s.workAriaLabel} className="block">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-900/30 ring-1 ring-white/10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-blue-900/50 before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-tr before:from-white/10 before:to-transparent before:opacity-50">
                <h3 className="font-cabinet-grotesk font-bold text-lg mb-3">{s.workTitle}</h3>
                <p className="text-blue-100">{s.workDesc}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
