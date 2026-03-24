'use client'

import { useLanguage } from '@/lib/i18n/context'

export default function SobreNosotrosContent() {
  const { t } = useLanguage()
  const s = t.sobreNosotros

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="h2 font-cabinet-grotesk mb-6">{s.title}</h1>
      <p className="text-gray-600 mb-4">{s.p1}</p>
      <p className="text-gray-600 mb-8">{s.p2}</p>

      <h2 className="h4 font-cabinet-grotesk mb-3">{s.missionTitle}</h2>
      <p className="text-gray-600 mb-8">{s.missionDesc}</p>

      <h2 className="h4 font-cabinet-grotesk mb-3">{s.methodTitle}</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
        <li><strong>{s.method1Label}</strong> {s.method1}</li>
        <li><strong>{s.method2Label}</strong> {s.method2}</li>
        <li><strong>{s.method3Label}</strong> {s.method3}</li>
        <li><strong>{s.method4Label}</strong> {s.method4}</li>
      </ul>
      <p className="text-gray-600 mb-8">
        <strong>
          {s.important.split(':')[0]}:
        </strong>
        {s.important.split(':').slice(1).join(':')}
      </p>

      <h2 className="h4 font-cabinet-grotesk mb-3">{s.diffTitle}</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
        <li><strong>{s.diff1Label}</strong> {s.diff1}</li>
        <li><strong>{s.diff2Label}</strong> {s.diff2}</li>
        <li><strong>{s.diff3Label}</strong> {s.diff3}</li>
        <li><strong>{s.diff4Label}</strong> {s.diff4}</li>
      </ul>

      <h2 className="h4 font-cabinet-grotesk mb-3">{s.contactTitle}</h2>
      <ul className="text-gray-600 space-y-2">
        <li><strong>WhatsApp:</strong> [+34 605 57 41 36]</li>
        <li><strong>Email:</strong> <a href="mailto:info@migrateya.com">info@migrateya.com</a></li>
      </ul>
    </section>
  )
}
