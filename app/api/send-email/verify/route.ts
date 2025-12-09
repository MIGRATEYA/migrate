import { NextResponse } from 'next/server'
import { verifySmtp } from '@/app/api/sendEmail'

export async function GET() {
  try {
    // Comprobar presencia de variables críticas (Microsoft Graph)
    const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MS_SENDER_UPN } = process.env
    const missing = ['MS_TENANT_ID','MS_CLIENT_ID','MS_CLIENT_SECRET','MS_SENDER_UPN'].filter((k) => !(process.env as any)[k])
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


