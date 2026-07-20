import { CONTACT_INFO } from "@/lib/content";

export function MapEmbed() {
  const query = encodeURIComponent(CONTACT_INFO.mapLabel);

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 lg:h-72">
      <iframe
        title={`Karta — ${CONTACT_INFO.mapLabel}`}
        src={`https://maps.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
        aria-label={`Google Maps karta för ${CONTACT_INFO.mapLabel}`}
      />
    </div>
  );
}
