/**
 * Submits an inquiry to the internal API route, which sends a branded
 * Swedish notification email via SMTP (falls back to console logging in
 * dev when SMTP is not configured).
 */

export interface InquiryFields {
  name: string;
  phone: string;
  email?: string;
  regnr?: string;
  service: string;
  message?: string;
  /** Honeypot — hidden field, must stay empty for real users. */
  company?: string;
}

export async function submitInquiry(fields: InquiryFields): Promise<boolean> {
  const res = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
  return res.ok;
}
