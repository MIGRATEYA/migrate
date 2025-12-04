import { NextResponse } from 'next/server'
import { verifySmtp } from '@/app/api/sendEmail'

export async function GET() {
  try {
    // Comprobar presencia de variables críticas (sin exponer valores)
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
    const missing = ['SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS'].filter(
      (k) => !(process.env as any)[k],
    )
    if (missing.length) {
      return NextResponse.json({
        ok: false,
        error: `Faltan variables de entorno: ${missing.join(', ')}`,
      }, { status: 500 })
    }

    const result = await verifySmtp()
    return NextResponse.json({ ok: true, result })
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error('[send-email/verify] Error:', error)
    return NextResponse.json({
      ok: false,
      error: error?.message ?? 'Fallo verificando SMTP',
    }, { status: 500 })
  }
}


