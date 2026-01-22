import { NextResponse } from 'next/server'
import sendEmail from '@/app/api/sendEmail'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const {
      to,
      subject,
      text,
      html,
      from,
      replyTo,
      recaptchaToken,
      confirmTo,
      confirmSubject,
      confirmText,
      confirmHtml,
    } = body || {}

    if (!to || !subject || (!text && !html)) {
      return NextResponse.json({
        ok: false,
        error: 'Faltan campos: "to", "subject" y "text" o "html"',
      }, { status: 400 })
    }

    // Verificar reCAPTCHA (v2/v3)
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    if (!recaptchaSecret) {
      return NextResponse.json({ ok: false, error: 'Falta RECAPTCHA_SECRET_KEY en .env.local' }, { status: 500 })
    }
    if (!recaptchaToken) {
      return NextResponse.json({ ok: false, error: 'Falta token de reCAPTCHA' }, { status: 400 })
    }
    const form = new URLSearchParams()
    form.set('secret', recaptchaSecret)
    form.set('response', String(recaptchaToken))
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form,
    })
    const verifyJson = await (async () => { try { return await verifyRes.json() } catch { return {} as any } })()
    if (!verifyJson?.success) {
      return NextResponse.json({ ok: false, error: 'reCAPTCHA inválido' }, { status: 400 })
    }

    // Validación de variables para Microsoft Graph
    const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MS_SENDER_UPN } = process.env
    const missing = ['MS_TENANT_ID','MS_CLIENT_ID','MS_CLIENT_SECRET','MS_SENDER_UPN'].filter(
      (k) => !(process.env as any)[k],
    )
    if (missing.length) {
      return NextResponse.json({
        ok: false,
        error: `Configuración Graph incompleta. Falta: ${missing.join(', ')} en .env.local`,
      }, { status: 500 })
    }

    const result = await sendEmail({ to, subject, text, html, from, replyTo })

    if (confirmTo && (confirmText || confirmHtml)) {
      try {
        await sendEmail({
          to: confirmTo,
          subject: confirmSubject || 'Gracias por contactarnos',
          text: confirmText,
          html: confirmHtml,
          from,
        })
      } catch (confirmError: any) {
        // eslint-disable-next-line no-console
        console.error('[send-email] Error confirmación:', confirmError)
      }
    }

    return NextResponse.json({ ok: true, result })
  } catch (error: any) {
    // Log detallado para el servidor
    // eslint-disable-next-line no-console
    console.error('[send-email] Error:', error)
    return NextResponse.json({
      ok: false,
      error: error?.message ?? 'Error enviando correo',
    }, { status: 500 })
  }
}



