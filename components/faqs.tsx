'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/context'

export default function Faqs() {
  const { t } = useLanguage()
  const f = t.faqs

  const items = [
    { q: f.q1, a: f.a1 },
    { q: f.q2, a: f.a2 },
    { q: f.q3, a: f.a3 },
    { q: f.q4, a: f.a4 },
    { q: f.q5, a: f.a5 },
  ]

  const [open, setOpen] = useState<Record<number, boolean>>({})
  const toggle = (idx: number) => setOpen((s) => ({ ...s, [idx]: !s[idx] }))

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-10">
            <h2 className="h2 font-cabinet-grotesk">{f.heading}</h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden">
            {items.map((item, idx) => {
              const isOpen = !!open[idx]
              return (
                <div key={idx} className="bg-white">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => toggle(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-cabinet-grotesk font-bold text-gray-900">
                      {item.q}
                    </span>
                    <svg
                      className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div id={`faq-panel-${idx}`} className="px-5 pb-5">
                      <p className="text-gray-600">{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
