import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BRAND_NAME, CONTACT_INFO } from "@/lib/content";

export function ContactInfo() {
  return (
    <div className="bg-navy-950 rounded-2xl p-6 text-white/80">
      <h2 className="font-heading font-bold text-xl text-white mb-5">
        Kontaktinformation
      </h2>

      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <p className="font-semibold text-white text-sm">{BRAND_NAME}</p>
            <p className="text-sm">{CONTACT_INFO.address}</p>
          </div>
        </li>

        <li className="flex items-center gap-3">
          <Phone size={18} className="shrink-0 text-brand" aria-hidden="true" />
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s|–|-/g, "")}`}
            className="text-sm hover:text-white transition-colors"
          >
            {CONTACT_INFO.phone}
          </a>
        </li>

        <li className="flex items-center gap-3">
          <Mail size={18} className="shrink-0 text-brand" aria-hidden="true" />
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-sm hover:text-white transition-colors"
          >
            {CONTACT_INFO.email}
          </a>
        </li>

        <li className="flex items-start gap-3 pt-3 border-t border-white/10">
          <Clock size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
          <div className="text-sm">
            <p>{CONTACT_INFO.hours}</p>
            <p>{CONTACT_INFO.hoursSaturday}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
