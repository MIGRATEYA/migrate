import { NextResponse } from 'next/server'
import sendEmail from '@/app/api/sendEmail'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { to, subject, text, html, from, replyTo } = body || {}

    if (!to || !subject || (!text && !html)) {
      return NextResponse.json({
        ok: false,
        error: 'Faltan campos: "to", "subject" y "text" o "html"',
      }, { status: 400 })
    }

    // Validación rápida de variables de entorno críticas del SMTP
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json({
        ok: false,
        error: 'Configuración SMTP incompleta. Define SMTP_HOST, SMTP_PORT, SMTP_USER y SMTP_PASS en .env.local',
      }, { status: 500 })
    }

    const result = await sendEmail({ to, subject, text, html, from, replyTo })
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



