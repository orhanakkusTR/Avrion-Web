/**
 * Submits an inquiry from the browser.
 *
 * Web3Forms' free plan only accepts client-side submissions, so when a
 * public access key is configured we post directly to their API from the
 * browser (the key is designed to be public). Without a key we fall back
 * to the internal API route, which logs in dev.
 */

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export interface InquiryFields {
  name: string;
  phone: string;
  email?: string;
  regnr?: string;
  service: string;
  message?: string;
}

export async function submitInquiry(fields: InquiryFields): Promise<boolean> {
  const { name, phone, email, regnr, service, message } = fields;

  if (WEB3FORMS_KEY) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Ny förfrågan — ${service} (${name})`,
        from_name: "Avrion Service webbplats",
        // Field names appear as-is in the notification email
        Namn: name,
        Telefon: phone,
        ...(email ? { "E-post": email } : {}),
        ...(regnr ? { Regnr: regnr } : {}),
        Tjänst: service,
        ...(message ? { Meddelande: message } : {}),
        ...(email ? { replyto: email } : {}),
      }),
    });
    const data = await res.json();
    return res.ok && data.success === true;
  }

  // Fallback: internal route (logs to console when no backend is configured)
  const res = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
  return res.ok;
}
