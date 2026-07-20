import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, regnr, service, message } = body;

    // Email is optional for the quick callback form; other forms still send it.
    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Obligatoriska fält saknas." }, { status: 400 });
    }

    // If RESEND_API_KEY is configured, send email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (apiKey && toEmail) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Avrion Service <noreply@avrionservice.se>",
          to: [toEmail],
          subject: `Ny förfrågan — ${service} (${name})`,
          text: [
            `Namn: ${name}`,
            `Telefon: ${phone}`,
            email ? `E-post: ${email}` : null,
            regnr ? `Regnr: ${regnr}` : null,
            `Tjänst: ${service}`,
            message ? `\nMeddelande:\n${message}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (!res.ok) {
        console.error("Resend API error", await res.text());
        return NextResponse.json({ error: "E-post misslyckades." }, { status: 500 });
      }
    } else {
      // No email configured — log to console in dev
      console.log("[inquiry]", { name, phone, email, regnr, service, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry route]", err);
    return NextResponse.json({ error: "Serverfel." }, { status: 500 });
  }
}
