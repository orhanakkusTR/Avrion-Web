import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, regnr, service, message } = body;

    // Email is optional for the quick callback form; other forms still send it.
    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Obligatoriska fält saknas." }, { status: 400 });
    }

    // Forward to Web3Forms if configured (key -> delivers to the registered inbox)
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Ny förfrågan — ${service} (${name})`,
          from_name: "Avrion Service webbplats",
          // Form fields — shown as-is in the notification email
          Namn: name,
          Telefon: phone,
          ...(email ? { "E-post": email } : {}),
          ...(regnr ? { Regnr: regnr } : {}),
          Tjänst: service,
          ...(message ? { Meddelande: message } : {}),
          // Lets you hit "Reply" on the notification when the sender left an email
          ...(email ? { replyto: email } : {}),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        console.error("Web3Forms error", data);
        return NextResponse.json({ error: "E-post misslyckades." }, { status: 500 });
      }
    } else {
      // No form backend configured — log to console in dev
      console.log("[inquiry]", { name, phone, email, regnr, service, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry route]", err);
    return NextResponse.json({ error: "Serverfel." }, { status: 500 });
  }
}
