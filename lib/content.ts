export const BRAND_NAME = "Avrion Service AB";
export const BRAND_SHORT = "Avrion Service";

export const NAV_LINKS = [
  { label: "Hem", href: "/" },
  { label: "Tjänster", href: "/tjanster" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Referenser", href: "/referenser" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const CONTACT_INFO = {
  address: "Industrigatan 12, 431 53 Mölndal",
  phone: "031 – 23 45 67",
  phoneFooter: "031-123 45 67",
  email: "info@avrionservice.se",
  hours: "Måndag – Fredag 07:00 – 17:00",
  hoursSaturday: "Lördag – Söndag Stängt",
  mapLabel: "Avrion Service AB, Industrigatan 12, 431 53 Mölndal",
} as const;

// ── Home ──────────────────────────────────────────────────────────────────────

export const HOME_HERO = {
  h1: "Vi får din bil att glänsa igen.",
  subtitle:
    "Professionella tjänster inom lackering, plåt och polering. Kvalitet, noggrannhet och service du kan lita på.",
  ctaPrimary: "Boka tid",
  ctaSecondary: "Få offert",
} as const;

export const HOME_TRUST_BADGES = [
  { label: "Kvalitet i varje detalj", sub: "Vi kompromissar aldrig." },
  { label: "Snabba leveranser", sub: "Vi håller vad vi lovar." },
  { label: "Nöjda kunder", sub: "Vårt bästa bevis." },
] as const;

export const HOME_SERVICE_CARDS = [
  {
    title: "Lackering",
    text: "Vi erbjuder professionell lackering med högkvalitativa material och moderna lackboxar för ett perfekt resultat.",
    href: "/tjanster#lackering",
    cta: "Läs mer →",
  },
  {
    title: "Plåt",
    text: "Vi reparerar och riktar alla typer av karosskador. Noggrant hantverk och modern utrustning säkerställer ett säkert resultat.",
    href: "/tjanster#plat",
    cta: "Läs mer →",
  },
  {
    title: "Polering",
    text: "Vi polerar bort repor och ger din bil en djup lyster. Invändig och utvändig behandling för en finish i toppklass.",
    href: "/tjanster#polering",
    cta: "Läs mer →",
  },
] as const;

export const HOME_BEFORE_AFTER = {
  tagBefore: "FÖRE",
  tagAfter: "EFTER",
  h2: "Resultat du kan lita på",
  text: "Vi kombinerar erfarenhet, kvalitet och passion för bilar. Se skillnaden vi gör – varje dag.",
  stats: [
    { value: "10+", label: "Års erfarenhet" },
    { value: "2 000+", label: "Nöjda kunder" },
    { value: "98%", label: "Rekommenderar oss" },
  ],
} as const;

export const HOME_PROCESS = {
  h2: "Så här enkelt är det",
  steps: [
    {
      n: 1,
      title: "Boka tid",
      text: "Välj tid som passar dig enkelt online eller via telefon.",
    },
    {
      n: 2,
      title: "Vi tar hand om din bil",
      text: "Våra experter ser över och åtgärdar din bil med omsorg.",
    },
    {
      n: 3,
      title: "Kvalitetskontroll",
      text: "Vi kontrollerar noga så att allt håller högsta kvalitet.",
    },
    {
      n: 4,
      title: "Klart!",
      text: "Din bil är klar att glänsa igen. Enkel hämtning.",
    },
  ],
} as const;

export const HOME_TESTIMONIALS = {
  h2: "Vad våra kunder säger",
  reviews: [
    {
      text: "Otroligt nöjd med resultatet! Bilen blev som ny efter lackering. Professionellt bemötande och snabb service.",
      author: "Johan L.",
      source: "Google",
    },
    {
      text: "De lagade plåtskadan perfekt och färgen matchar exakt. Rekommenderas varmt!",
      author: "Sara K.",
      source: "Google",
    },
    {
      text: "Fantastisk polering, bilen glänser som aldrig förr. Trevligt team och toppenservice!",
      author: "Martin E.",
      source: "Google",
    },
  ],
  moreLink: "Se fler omdömen på Google",
} as const;

// ── Services /tjanster ────────────────────────────────────────────────────────

export const SERVICES_PAGE = {
  h1: "Våra tjänster",
  subtitle:
    "Professionell lackering, plåt och polering för ett resultat som ser bra ut – och håller över tid.",
} as const;

export const SERVICES = [
  {
    id: "lackering",
    title: "Lackering",
    text: "Vi erbjuder professionell lackering med högkvalitativa material och moderna lackboxar för ett perfekt resultat – oavsett skadans omfattning.",
    checklist: [
      "Demontering och montering",
      "Förarbete och slipning",
      "Grundmålning och topplack",
      "Kulöranpassning och lackfinish",
      "Kvalitetskontroll och slutbesiktning",
    ],
  },
  {
    id: "plat",
    title: "Plåt",
    text: "Vi reparerar och riktar alla typer av karosskador. Noggrant hantverk och modern utrustning säkerställer ett säkert och hållbart resultat.",
    checklist: [
      "Skadeanalys och bedömning",
      "Riktningsarbete och formning",
      "Byte av skadade plåtdelar",
      "Svetsning och fogskydd",
      "Kontrollmått och kvalitetskontroll",
    ],
  },
  {
    id: "polering",
    title: "Polering",
    text: "Vi polerar bort repor och ger din bil en djup lyster. Invändig och utvändig behandling för en finish i toppklass.",
    checklist: [
      "Handtvätt och förberedelse",
      "Maskinpolering i flera steg",
      "Lackrengöring och glossförsegling",
      "Fönsterputs och dörrgångar",
      "Invändig rengöring (tillägg enligt behov)",
    ],
  },
  {
    id: "skadebesiktning",
    title: "Skadebesiktning",
    text: "Vi besiktar skador och dokumenterar omfattningen inför försäkringsärenden eller reparation.",
    checklist: [
      "Visuell skadebesiktning",
      "Fotodokumentation",
      "Skaderapport",
      "Underlag för försäkringsbolag",
      "Rådgivning och nästa steg",
    ],
  },
] as const;

export const SERVICES_CTA = {
  h3: "Behöver du hjälp med din bil?",
  text: "Boka tid eller begär offert – vi återkommer snabbt med förslag och pris.",
  ctaPrimary: "Boka tid",
  ctaSecondary: "Få offert",
} as const;

// ── Om oss /om-oss ────────────────────────────────────────────────────────────

export const OM_OSS_PAGE = {
  h1: "Om oss",
  subtitle: "Vi är ett dedikerat team med passion för bilar och ett öga för detaljer.",
} as const;

export const OM_OSS_STORY = {
  h2: "Vår berättelse",
  paragraphs: [
    "Avrion Service AB grundades med en enkel vision: att erbjuda bilägare i Göteborgsregionen ett verkstadsalternativ som kombinerar hantverksskicklighet med modern teknik och äkta kundservice.",
    "Sedan starten har vi vuxit till ett av Mölndals mest anlitade karosseriverkstäder. Vi arbetar dagligen med lackering, plåt, polering och skadebesiktning – alltid med ett krav på att resultatet ska vara lika bra som om det vore vår egna bil.",
    "Vi är stolta över varje bil som lämnar vår verkstad. Det är inte bara ett jobb – det är ett hantverk vi tar på allvar.",
  ],
} as const;

export const OM_OSS_STATS = [
  { value: "10+",    label: "Års erfarenhet" },
  { value: "2 000+", label: "Nöjda kunder" },
  { value: "98%",    label: "Rekommenderar oss" },
  { value: "4",      label: "Specialiserade tjänster" },
] as const;

export const OM_OSS_VERKSTAD = {
  h2: "Vår verkstad",
  text: "Vår moderna verkstad i Mölndal är utrustad med de senaste verktygen och teknikerna inom karosseri och lackering. Vi investerar löpande i utrustning och utbildning för att kunna erbjuda resultat i absolut toppklass.",
  features: [
    "Modern lackbox med klimatkontroll",
    "Digital kulörmatchning för exakt färgåtergivning",
    "Datoriserat riktningsbord för precisionsarbete",
    "Miljögodkända lackprodukter och processer",
    "Auktoriserat för försäkringsärenden",
  ],
} as const;

export const OM_OSS_KVALITET = {
  h2: "Kvalitet & Miljö",
  text: "Kvalitet och hållbarhet går hand i hand för oss. Vi använder miljögodkända produkter och processer som minimerar vår miljöpåverkan utan att kompromissa med slutresultatet.",
  badges: [
    { title: "Miljöcertifierade produkter", text: "Vattenbaserade lacksystem och lösningsmedel med låg VOC-halt." },
    { title: "Auktoriserad verkstad", text: "Godkänd av ledande försäkringsbolag för skadereparationer." },
    { title: "Löpande utbildning", text: "Vårt team utbildas kontinuerligt i nya metoder och material." },
  ],
} as const;

// ── Contact /kontakt ──────────────────────────────────────────────────────────

export const CONTACT_PAGE = {
  h1: "Kontakta oss",
  subtitle: "Boka tid eller begär offert – vi hjälper dig gärna.",
  formTitle: "Skicka en förfrågan",
  formIntro: "Fyll i formuläret så återkommer vi så snart som möjligt.",
  fields: {
    name: { label: "Namn", placeholder: "Ditt namn", required: true },
    phone: { label: "Telefon", placeholder: "070 123 45 67", required: true },
    email: { label: "E-post", placeholder: "namn@exempel.se", required: true },
    regnr: { label: "Registreringsnummer", placeholder: "ABC 123", required: false },
    service: {
      label: "Tjänst",
      placeholder: "Välj tjänst",
      required: true,
      options: ["Lackering", "Plåt", "Polering", "Skadebesiktning"],
    },
    message: {
      label: "Meddelande",
      placeholder: "Skriv ditt meddelande här...",
      required: false,
    },
  },
  submitLabel: "Skicka förfrågan",
  privacyNote: "Vi behandlar dina uppgifter enligt vår integritetspolicy.",
  faqTitle: "Vanliga frågor",
  faq: [
    { q: "Hur bokar jag en tid?", a: null },
    { q: "Erbjuder ni lånebil?", a: null },
    { q: "Vad ingår i en lackering?", a: null },
  ],
} as const;

// ── Booking /boka ─────────────────────────────────────────────────────────────

export const BOOKING_PAGE = {
  h1: "Boka tid",
  subtitle:
    "Fyll i formuläret så återkommer vi snarast för att bekräfta din bokning.",
  submitLabel: "Skicka bokningsförfrågan",
  whyUs: [
    { title: "Erfarenhet", sub: "10+ års erfarenhet" },
    { title: "Kvalitet", sub: "I varje detalj" },
    { title: "Snabba leveranser", sub: "Vi håller vad vi lovar" },
    { title: "Nöjda kunder", sub: "Vårt bästa bevis" },
  ],
} as const;

// ── Footer ────────────────────────────────────────────────────────────────────

export const FOOTER = {
  tagline:
    "Professionella tjänster inom lackering, plåt och polering. Kvalitet, noggrannhet och service du kan lita på.",
  services: ["Lackering", "Plåt", "Polering", "Skadebesiktning"],
  company: ["Om oss", "Vår verkstad", "Kvalitet & Miljö", "Karriär"],
  legal: "© 2024 Avrion Service AB. Alla rättigheter förbehållna.",
  legalLinks: ["Integritetspolicy", "Villkor"],
} as const;
