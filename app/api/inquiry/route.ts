import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const BRAND = "#f10916";
const DARK = "#0d1314";

/** Escapes user-provided values for safe HTML interpolation. */
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #e8e8e8;font-weight:600;color:#334155;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #e8e8e8;color:#0f172a;">${esc(value)}</td>
    </tr>`;
}

interface Inquiry {
  name: string;
  phone: string;
  email?: string;
  regnr?: string;
  service: string;
  message?: string;
}

function buildHtml(q: Inquiry): string {
  const rows = [
    row("Namn", q.name),
    row("Telefon", q.phone),
    q.email ? row("E-post", q.email) : "",
    q.regnr ? row("Regnr", q.regnr) : "",
    row("Tjänst", q.service),
    q.message ? row("Meddelande", q.message) : "",
  ].join("");

  const telHref = `tel:${q.phone.replace(/[\s–-]/g, "")}`;
  const replyBtn = q.email
    ? `<a href="mailto:${esc(q.email)}" style="display:inline-block;background:#ffffff;color:${DARK};border:1px solid #cbd5e1;text-decoration:none;font-weight:600;padding:10px 22px;border-radius:8px;margin-left:8px;">Svara via e-post</a>`
    : "";

  return `<!doctype html>
<html lang="sv">
  <body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;">
      <tr><td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
          <!-- Header — light so the original logo colors are visible.
               (CSS filters are stripped by most email clients, so the
               logo must work on a light background.) -->
          <tr>
            <td style="background:#fafafa;border-bottom:1px solid #eeeeee;padding:22px 24px;">
              <img src="https://avrionservice.se/avrion-logo.png" alt="Avrion Service" width="170" style="display:block;" />
            </td>
          </tr>
          <tr><td style="background:${BRAND};height:5px;font-size:0;line-height:0;">&nbsp;</td></tr>

          <!-- Title -->
          <tr>
            <td style="padding:24px 24px 8px;">
              <h1 style="margin:0;font-size:19px;color:#0f172a;">Ny förfrågan från webbplatsen</h1>
              <p style="margin:6px 0 0;font-size:13px;color:#64748b;">Skickad via formuläret på avrionservice.se</p>
            </td>
          </tr>

          <!-- Fields -->
          <tr>
            <td style="padding:16px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;font-size:14px;">
                ${rows}
              </table>
            </td>
          </tr>

          <!-- Actions -->
          <tr>
            <td style="padding:8px 24px 28px;">
              <a href="${telHref}" style="display:inline-block;background:${BRAND};color:#ffffff;text-decoration:none;font-weight:600;padding:10px 22px;border-radius:8px;">Ring upp</a>
              ${replyBtn}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:14px 24px;font-size:11px;color:#94a3b8;">
              Avrion Service AB · Industrigatan 12, 431 53 Mölndal · avrionservice.se
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

function buildText(q: Inquiry): string {
  return [
    "Ny förfrågan från webbplatsen",
    "",
    `Namn: ${q.name}`,
    `Telefon: ${q.phone}`,
    q.email ? `E-post: ${q.email}` : null,
    q.regnr ? `Regnr: ${q.regnr}` : null,
    `Tjänst: ${q.service}`,
    q.message ? `\nMeddelande:\n${q.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, regnr, service, message, company } = body;

    // Honeypot: real users never fill the hidden "company" field.
    // Pretend success so bots don't learn they were caught.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    // Email is optional for the quick callback form; other forms still send it.
    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Obligatoriska fält saknas." }, { status: 400 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL ?? user;

    if (user && pass && to) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user, pass },
      });

      const inquiry: Inquiry = { name, phone, email, regnr, service, message };

      await transporter.sendMail({
        from: `"Avrion Service webbplats" <${user}>`,
        to,
        subject: `Ny förfrågan — ${service} (${name})`,
        text: buildText(inquiry),
        html: buildHtml(inquiry),
        ...(email ? { replyTo: email } : {}),
      });
    } else {
      // No SMTP configured — log to console in dev
      console.log("[inquiry]", { name, phone, email, regnr, service, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry route]", err);
    return NextResponse.json({ error: "Serverfel." }, { status: 500 });
  }
}
