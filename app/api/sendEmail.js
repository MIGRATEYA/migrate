"use server"

import nodemailer from "nodemailer"

/**
 * Env esperadas (configura en .env.local):
 * - SMTP_HOST
 * - SMTP_PORT (465 para secure, 587 para STARTTLS)
 * - SMTP_USER
 * - SMTP_PASS
 * - SMTP_SECURE ("true" | "false") opcional; por defecto true si port 465
 * - SMTP_FROM (opcional; fallback a SMTP_USER)
 */
function createTransporter() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
  } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Faltan variables SMTP: define SMTP_HOST, SMTP_PORT, SMTP_USER y SMTP_PASS")
  }

  const portNum = Number(SMTP_PORT)
  const secure =
    typeof SMTP_SECURE === "string"
      ? SMTP_SECURE.toLowerCase() === "true"
      : portNum === 465

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: portNum,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })
}

/**
 * Envía un correo usando la configuración SMTP de env.
 * @param {{ to: string | string[]; subject: string; text?: string; html?: string; from?: string; replyTo?: string }} params
 */
export async function sendEmail({ to, subject, text, html, from, replyTo }) {
  const transporter = createTransporter()
  const fromAddress = from || process.env.SMTP_FROM || process.env.SMTP_USER

  const info = await transporter.sendMail({
    from: fromAddress,
    to,
    subject,
    text,
    html,
    replyTo,
  })

  return {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  }
}

export default sendEmail


