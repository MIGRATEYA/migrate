'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Illustration from '@/public/images/features-01.svg'
export default function ContactForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState('')
  const router = useRouter()

  // Cargar reCAPTCHA v3
  useEffect(() => {
    const siteKey = (process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string) || (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string)
    if (!siteKey) return
    const w = window as any
    if (w.grecaptcha && w.grecaptcha.execute) return
    const id = 'google-recaptcha-v3'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`
      s.async = true
      s.defer = true
      document.body.appendChild(s)
    }
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      alert('Debes aceptar el consentimiento para poder enviar el formulario.')
      return
    }

    const siteKey = (process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string) || (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string)
    if (!siteKey) {
      setStatus('error')
      setErrorMsg('Falta configurar reCAPTCHA (NEXT_PUBLIC_RECAPTCHA_SITE_KEY).')
      return
    }

    let token = ''
    try {
      const w = window as any
      if (!w.grecaptcha || !w.grecaptcha.execute) throw new Error('reCAPTCHA no está listo')
      token = await new Promise<string>((resolve, reject) => {
        w.grecaptcha.ready(() => {
          w.grecaptcha.execute(siteKey, { action: 'contact_submit' })
            .then((t: string) => resolve(t))
            .catch(reject)
        })
      })
      setRecaptchaToken(token)
    } catch (err: any) {
      setStatus('error')
      setErrorMsg('No se pudo obtener el token de reCAPTCHA')
      return
    }

    const fullName = `${firstName} ${lastName}`.trim()
    const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@migrateya.com'
    const subject = `Consulta - ${fullName || 'Sin nombre'}`
    const text = [
      `Nombre: ${fullName}`,
      `Email: ${email}`,
      `Teléfono: ${phone || '-'}`,
      `País: ${country}`,
    ].join('\n')
    const confirmSubject = 'Hemos recibido tu solicitud'
    const confirmText = [
      `Hola ${fullName || 'hola'},`,
      '',
      'Gracias por contactarnos. En breve un miembro de nuestro equipo se pondrá en contacto contigo.',
      '',
      'Equipo MIGRATE YA',
    ].join('\n')

    try {
      setStatus('loading')
      setErrorMsg('')
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to,
          subject,
          text,
          recaptchaToken: token,
          action: 'contact_submit',
          replyTo: email,
          confirmTo: email,
          confirmSubject,
          confirmText,
        }),
      })
      const data = await (async () => { try { return await res.json() } catch { return {} as any } })()
      if (!res.ok || !(data as any)?.ok) {
        throw new Error((data as any)?.error || 'No se pudo enviar el correo')
      }
      setStatus('success')
      setTimeout(() => router.push('/'), 1500)
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err?.message || 'Ha ocurrido un error')
    }
  }

  return (
    <section className="relative">
      {/* Fondo al estilo Features01 */}
      <div className="absolute inset-0 bg-blue-600 -z-10" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image className="max-w-none" src={Illustration} alt="Illsutration" />
      </div>
      

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h2 className="h2 font-cabinet-grotesk text-white">Cuéntanos tu caso</h2>
          </div>

          {/* Formulario */}
          <form onSubmit={onSubmit} className="max-w-3xl mx-auto space-y-4">
            {status === 'success' && (
              <div className="rounded-md bg-emerald-500/20 text-emerald-50 border border-emerald-400 px-4 py-3">
                ¡Enviado correctamente! Te contactaremos en breve...
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-md bg-red-500/20 text-red-50 border border-red-400 px-4 py-3">
                {errorMsg}
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="firstName">Nombre</label>
                <input id="firstName" className="form-input w-full" type="text" placeholder="Nombre..." required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div>
                <label className="sr-only" htmlFor="lastName">Apellido</label>
                <input id="lastName" className="form-input w-full" type="text" placeholder="Apellido..." required value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="email">Correo</label>
              <input id="email" className="form-input w-full" type="email" placeholder="Correo electrónico.." required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">Teléfono</label>
              <input id="phone" className="form-input w-full" type="tel" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <label className="sr-only" htmlFor="country">País</label>
              <select id="country" className="form-select w/full text-gray-700" required value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="" disabled>- País -</option>
                <option>España</option>
                <option>Argentina</option>
                <option>Colombia</option>
                <option>México</option>
                <option>Perú</option>
                <option>Chile</option>
                <option>Venezuela</option>
                <option>República Dominicana</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="flex items-start space-x-2">
              <input id="consent" type="checkbox" className="form-checkbox mt-1" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <label htmlFor="consent" className="text-sm text-white text-opacity-80">Consentimiento para que nos comuniquemos con usted y tratamiento de datos personales</label>
            </div>
            {/* En v3 no hay widget visible */}
            <div className="flex items-center justify-end">
              <button type="submit" disabled={status==='loading'} className="inline-flex items-center px-6 py-3 rounded-lg text-gray-900 bg-yellow-400 hover:bg-yellow-600 font-medium shadow-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                {status==='loading' ? 'Enviando...' : 'Enviar'}
                <span className="tracking-normal text-blue-600 ml-2">
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="8">
                    <path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571 .343.858 .55.096 .064.192 .135.288 .209l.196 .154.192 .178c.09 .08.175 .168.254 .262.189 .21.33 .466.414 .747.076 .275.073 .568-.008 .84-.09 .27-.236 .513-.427 .708-.096 .1-.198 .191-.306 .274l-.152 .117-.116 .074c-.369 .252-.75 .482-1.14 .69-.577 .315-1.153 .585-1.701 .932-.408 .262-.803 .549-1.182 .86-.083 .064-.16 .136-.247 .193a .918 .918 0 0 1-.113 .072.644 .644 0 0 1-.118 .016.708 .708 0 0 1-.191 .01.559 .559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.39-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342 .546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159 .018-.32 .034-.48 .04-.511 .036-1.026 .044-1.546 .048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558 .01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303 .013l-.828 .055-.406 .021H .335l-.18 .008c-.145 0-.208-.15-.102-.356.16 -.268.422 -.46.723 -.531.57 -.117 1.144 -.205 1.72 -.264.287 -.026.576 -.048.865 -.053.29 -.004.578 .01.865 .042.69 .065 1.408 -.015 2.113 -.015.776 .003 1.549 .02 2.324 .04l1.428 .039 1.087 .039c .359 .012.716 .02 1.075 .013.442 -.008.879 -.065 1.318 -.112a3.672 3.672 0 0 0-.186 -.166 9.045 9.045 0 0 0-1.06 -.762 9.82 9.82 0 0 0-1.034 -.537 5.9 5.9 0 0 1-1.284 -.854c-.12 -.115-.053 -.199.12 -.26a1.55 1.55 0 0 1 .738 -.083Z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}


