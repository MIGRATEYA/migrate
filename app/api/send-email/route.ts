import { NextResponse } from 'next/server'
import sendEmail from '@/app/api/sendEmail'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { to, subject, text, html, from, replyTo } = body || {}

    if (!to || !subject || (!text && !html)) {
      return NextResponse.json(
        { ok: false, error: 'Faltan campos: "to", "subject" y "text" o "html"' },
        { status: 400 },
      )
    }

    const result = await sendEmail({ to, subject, text, html, from, replyTo })
    return NextResponse.json({ ok: true, result })
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error?.message ?? 'Error enviando correo' },
      { status: 500 },
    )
  }
}


