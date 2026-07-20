import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Läs om hur Avrion Service AB hanterar dina personuppgifter i enlighet med GDPR.",
};

export default function IntegritetspolicyPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy-900 border-t-2 border-white/20 pt-24 pb-16">
        <Container>
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4">
            Integritetspolicy
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Senast uppdaterad: juni 2025
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">

            {/* 1. Personuppgiftsansvarig */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                1. Personuppgiftsansvarig
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Avrion Service AB (organisationsnummer anges vid begäran) är personuppgiftsansvarig
                för behandlingen av dina personuppgifter. Vi ansvarar för att behandlingen sker i
                enlighet med Europaparlamentets och rådets förordning (EU) 2016/679 om skydd för
                fysiska personer med avseende på behandling av personuppgifter (GDPR) samt övrig
                tillämplig dataskyddslagstiftning.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                <strong className="text-slate-800">Kontaktuppgifter:</strong>
              </p>
              <address className="text-slate-600 leading-relaxed not-italic mt-1">
                Avrion Service AB
                <br />
                Industrigatan 12
                <br />
                431 53 Mölndal
                <br />
                E-post:{" "}
                <a
                  href="mailto:info@avrionservice.se"
                  className="text-brand underline hover:no-underline"
                >
                  info@avrionservice.se
                </a>
                <br />
                Telefon:{" "}
                <a
                  href="tel:+46311234567"
                  className="text-brand underline hover:no-underline"
                >
                  031-123 45 67
                </a>
              </address>
            </div>

            {/* 2. Vilka uppgifter vi samlar in */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                2. Vilka uppgifter vi samlar in
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Vi samlar in de personuppgifter du frivilligt lämnar till oss i samband med bokning,
                offertförfrågan eller annan kontakt. Det kan röra sig om följande kategorier av
                uppgifter:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-1 pl-2">
                <li>
                  <strong className="text-slate-700">Namn</strong> — förnamn och efternamn
                </li>
                <li>
                  <strong className="text-slate-700">E-postadress</strong> — för bekräftelser och
                  kommunikation kring ditt ärende
                </li>
                <li>
                  <strong className="text-slate-700">Telefonnummer</strong> — för direktkontakt
                  under ärendets gång
                </li>
                <li>
                  <strong className="text-slate-700">Registreringsnummer</strong> — för identifiering
                  av fordonet som ska behandlas
                </li>
                <li>
                  <strong className="text-slate-700">Skade- och ärendebeskrivning</strong> — text
                  och eventuella bilder som du skickar in för att beskriva skadan eller önskad
                  åtgärd
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                Vi samlar inte in känsliga personuppgifter (t.ex. hälsoinformation, etniskt ursprung
                eller politisk åskådning) och uppmanar dig att inte inkludera sådan information i
                dina meddelanden till oss.
              </p>
            </div>

            {/* 3. Ändamål och rättslig grund */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                3. Ändamål och rättslig grund
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Vi behandlar dina personuppgifter för följande ändamål och med nedanstående rättsliga
                grunder enligt GDPR:
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-slate-700 font-semibold">
                    Hantering av bokningar och kundärenden
                  </p>
                  <p className="text-slate-600 leading-relaxed mt-1">
                    Vi behandlar dina uppgifter för att kunna ta emot, administrera och utföra
                    bokningar, offertförfrågningar och serviceärenden. Den rättsliga grunden är
                    fullgörande av avtal som du är part i, eller för att vidta åtgärder på begäran
                    av dig innan ett avtal ingås (GDPR art. 6.1 b).
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">
                    Kommunikation och kundservice
                  </p>
                  <p className="text-slate-600 leading-relaxed mt-1">
                    Vi använder dina kontaktuppgifter för att skicka bokningsbekräftelser,
                    statusuppdateringar och svar på dina frågor. Den rättsliga grunden är
                    fullgörande av avtal (GDPR art. 6.1 b).
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">
                    Direktmarknadsföring och uppföljning
                  </p>
                  <p className="text-slate-600 leading-relaxed mt-1">
                    Vi kan komma att kontakta dig med information om tjänster som liknar dem du
                    tidigare anlitat oss för. Den rättsliga grunden är ett berättigat intresse
                    (GDPR art. 6.1 f). Vårt berättigade intresse är att hålla kontakten med
                    befintliga kunder och informera dem om relevanta erbjudanden och service. Du har
                    alltid rätt att invända mot denna typ av behandling (se avsnitt 6).
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Lagringstid */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                4. Lagringstid
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Vi lagrar dina personuppgifter endast så länge det är nödvändigt för de ändamål de
                samlades in för, eller så länge vi är skyldiga att göra det enligt lag. Vi tillämpar
                följande lagringstider:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2 pl-2">
                <li>
                  <strong className="text-slate-700">Boknings- och kunddata</strong> — uppgifter
                  kopplade till utförda serviceärenden sparas i <strong>2 år</strong> från
                  avslutat ärende, för att kunna hantera garantier, reklamationer och eventuella
                  tvister.
                </li>
                <li>
                  <strong className="text-slate-700">Offertdata</strong> — uppgifter i offerter
                  som inte lett till ett kunduppdrag sparas i <strong>6 månader</strong> efter
                  slutfört ärende eller, om ärende ej påbörjats, från offertens utfärdandedatum.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                Efter att lagringstiden löpt ut raderas uppgifterna på ett säkert sätt, såvida vi
                inte är skyldiga att behålla dem längre med stöd av annan lagstiftning, exempelvis
                bokföringslagen.
              </p>
            </div>

            {/* 5. Mottagare av uppgifter */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                5. Mottagare av uppgifter
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Vi lämnar i normalfallet inte ut dina personuppgifter till tredje part utanför
                Avrion Service AB. I samband med vår verksamhet anlitar vi dock följande
                personuppgiftsbiträde:
              </p>
              <div className="mt-4 border-l-4 border-brand/30 pl-4">
                <p className="text-slate-700 font-semibold">Resend (e-postleverantör)</p>
                <p className="text-slate-600 leading-relaxed mt-1">
                  Vi använder Resend för att sända transaktionella e-postmeddelanden, såsom
                  bokningsbekräftelser och svar på förfrågningar. Resend behandlar din
                  e-postadress och det innehåll som ingår i meddelandet. Överföring av data
                  till Resend sker i enlighet med EU:s standardavtalsklausuler (SCC), varför
                  behandlingen uppfyller GDPR:s krav på skyddsnivå även om behandlingen skulle
                  ske utanför EU/EES.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed mt-4">
                Dina uppgifter säljs inte och lämnas inte ut till några ytterligare tredjeparter
                i marknadsföringssyfte eller av andra skäl, om vi inte är skyldiga att göra det
                enligt lag eller myndighetsbeslut.
              </p>
            </div>

            {/* 6. Dina rättigheter */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                6. Dina rättigheter
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Som registrerad har du ett antal rättigheter enligt GDPR som du alltid kan utöva
                gentemot oss. Vi svarar på din begäran utan onödigt dröjsmål och senast inom en
                månad. I komplexa fall kan svarstiden förlängas med ytterligare två månader, vilket
                vi i sådana fall meddelar dig om.
              </p>
              <ul className="list-disc list-outside text-slate-600 leading-relaxed mt-4 space-y-3 pl-6">
                <li>
                  <strong className="text-slate-700">Rätt till tillgång (art. 15)</strong> — Du
                  har rätt att begära ett registerutdrag och få information om vilka
                  personuppgifter vi behandlar om dig, ändamålen med behandlingen samt övrig
                  information som anges i GDPR.
                </li>
                <li>
                  <strong className="text-slate-700">Rätt till rättelse (art. 16)</strong> — Du
                  har rätt att begära att felaktiga eller ofullständiga uppgifter om dig
                  korrigeras utan onödigt dröjsmål.
                </li>
                <li>
                  <strong className="text-slate-700">
                    Rätt till radering — ”rätten att bli glömd” (art. 17)
                  </strong>{" "}
                  — Du har rätt att begära att vi raderar dina personuppgifter under vissa
                  omständigheter, t.ex. om uppgifterna inte längre är nödvändiga för de ändamål
                  de samlades in för, eller om du återkallar ditt samtycke. Rätten gäller inte
                  om behandlingen är nödvändig för att uppfylla en rättslig förpliktelse.
                </li>
                <li>
                  <strong className="text-slate-700">
                    Rätt till begränsning av behandling (art. 18)
                  </strong>{" "}
                  — Du har rätt att begära att behandlingen av dina uppgifter begränsas, t.ex.
                  under den tid det tar för oss att kontrollera om uppgifterna är korrekta eller
                  om du bestrider att vår behandling är laglig.
                </li>
                <li>
                  <strong className="text-slate-700">
                    Rätt till dataportabilitet (art. 20)
                  </strong>{" "}
                  — Du har rätt att begära att de uppgifter du lämnat till oss överförs till dig
                  eller en annan personuppgiftsansvarig i ett strukturerat, allmänt använt och
                  maskinläsbart format, förutsatt att behandlingen grundar sig på samtycke eller
                  avtal och utförs automatiserat.
                </li>
                <li>
                  <strong className="text-slate-700">
                    Rätt att invända mot behandling (art. 21)
                  </strong>{" "}
                  — Du har rätt att när som helst invända mot behandling som grundar sig på
                  berättigat intresse, inklusive direktmarknadsföring. Om du invänder mot
                  direktmarknadsföring upphör vi omedelbart med sådan behandling.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Kontakta oss på{" "}
                <a
                  href="mailto:info@avrionservice.se"
                  className="text-brand underline hover:no-underline"
                >
                  info@avrionservice.se
                </a>{" "}
                för att utöva någon av ovanstående rättigheter. Vi kan behöva verifiera din
                identitet innan vi behandlar din begäran.
              </p>
            </div>

            {/* 7. Rätt att klaga */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                7. Rätt att klaga hos tillsynsmyndigheten
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Om du anser att vår behandling av dina personuppgifter är olaglig eller strider
                mot GDPR har du rätt att lämna in ett klagomål till den svenska
                tillsynsmyndigheten:
              </p>
              <address className="text-slate-600 leading-relaxed not-italic mt-3">
                <strong className="text-slate-700">
                  Integritetsskyddsmyndigheten (IMY)
                </strong>
                <br />
                Webbplats:{" "}
                <a
                  href="https://www.imy.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline hover:no-underline"
                >
                  www.imy.se
                </a>
                <br />
                Telefon:{" "}
                <a
                  href="tel:+4686576100"
                  className="text-brand underline hover:no-underline"
                >
                  08-657 61 00
                </a>
              </address>
              <p className="text-slate-600 leading-relaxed mt-3">
                Vi uppmanar dig dock att i första hand vända dig till oss om du har frågor eller
                synpunkter kring hur vi hanterar dina uppgifter, så att vi kan åtgärda eventuella
                brister.
              </p>
            </div>

            {/* 8. Kontakt för dataskyddsfrågor */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                8. Kontakt för dataskyddsfrågor
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Har du frågor om denna integritetspolicy, hur vi hanterar dina personuppgifter
                eller vill utöva dina rättigheter enligt GDPR är du välkommen att kontakta oss:
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                E-post:{" "}
                <a
                  href="mailto:info@avrionservice.se"
                  className="text-brand underline hover:no-underline"
                >
                  info@avrionservice.se
                </a>
              </p>
              <p className="text-slate-600 leading-relaxed mt-1">
                Vi behandlar alla dataskyddsrelaterade förfrågningar konfidentiellt och strävar
                efter att besvara dem skyndsamt, senast inom 30 dagar.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Vi förbehåller oss rätten att uppdatera denna integritetspolicy vid behov, t.ex.
                till följd av lagändringar eller förändringar i vår verksamhet. Den aktuella
                versionen publiceras alltid på denna sida med angivet datum för senaste uppdatering.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
