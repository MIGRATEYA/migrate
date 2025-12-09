"use server"

/**
 Microsoft 365 (Graph) – Envío de correo sin SMTP
 Requisitos (Application permissions en Azure Entra: Mail.Send):
 - MS_TENANT_ID
 - MS_CLIENT_ID
 - MS_CLIENT_SECRET
 - MS_SENDER_UPN  (correo del buzón remitente, p.ej. info@tu-dominio.com)
 - SMTP_FROM (opcional: nombre amigable, ej. "MIGRATE <info@tu-dominio.com>")
 */

async function getGraphToken() {
  const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET } = process.env
  if (!MS_TENANT_ID || !MS_CLIENT_ID || !MS_CLIENT_SECRET) {
    throw new Error(
      "Faltan variables Graph: define MS_TENANT_ID, MS_CLIENT_ID y MS_CLIENT_SECRET",
    )
  }
  const url = `https://login.microsoftonline.com/${encodeURIComponent(
    MS_TENANT_ID,
  )}/oauth2/v2.0/token`
  const params = new URLSearchParams()
  params.set("grant_type", "client_credentials")
  params.set("client_id", MS_CLIENT_ID)
  params.set("client_secret", MS_CLIENT_SECRET)
  params.set("scope", "https://graph.microsoft.com/.default")

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data?.access_token) {
    throw new Error(`Error obteniendo token Graph: ${data?.error || res.statusText}`)
  }
  return data.access_token
}

export async function sendEmail({ to, subject, text, html, from, replyTo }) {
  const token = await getGraphToken()
  const { MS_SENDER_UPN, SMTP_FROM } = process.env
  if (!MS_SENDER_UPN) {
    throw new Error("Falta MS_SENDER_UPN (correo del remitente en Microsoft 365)")
  }
  const toList = Array.isArray(to) ? to : [to]
  const contentType = html ? "HTML" : "Text"
  const bodyContent = html || text || ""
  const fromName = from || SMTP_FROM || MS_SENDER_UPN

  const message = {
    message: {
      subject,
      body: { contentType, content: bodyContent },
      toRecipients: toList.map((addr) => ({ emailAddress: { address: addr } })),
      from: { emailAddress: { address: MS_SENDER_UPN, name: fromName } },
      replyTo: replyTo
        ? [{ emailAddress: { address: replyTo } }]
        : undefined,
    },
    saveToSentItems: true,
  }

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
      MS_SENDER_UPN,
    )}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    },
  )

  if (!res.ok) {
    const err = await res.text().catch(() => "")
    throw new Error(`Graph sendMail falló: ${res.status} ${res.statusText} ${err}`)
  }

  return { ok: true }
}

export async function verifySmtp() {
  // Mantener compatibilidad con la ruta /verify: comprobamos token y existencia del usuario remitente
  const token = await getGraphToken()
  const { MS_SENDER_UPN } = process.env
  if (!MS_SENDER_UPN) {
    throw new Error("Falta MS_SENDER_UPN para verificación")
  }
  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
      MS_SENDER_UPN,
    )}?$select=id,mail,userPrincipalName`,
    { headers: { Authorization: `Bearer ${token}` } },
  )
  if (!res.ok) {
    const t = await res.text().catch(() => "")
    throw new Error(`Graph verify falló: ${res.status} ${res.statusText} ${t}`)
  }
  const data = await res.json().catch(() => ({}))
  return { ok: true, user: data }
}

export default sendEmail


