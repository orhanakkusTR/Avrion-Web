import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Allmänna villkor",
  description:
    "Allmänna villkor för Avrion Service AB:s tjänster inom lackering, plåt och polering.",
};

export default function VillkorPage() {
  return (
    <>
      {/* Page hero */}
      <PageHero title="Allmänna villkor" subtitle="Senast uppdaterad: juli 2026" />

      {/* Content */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">

            {/* 1. Företagsinformation */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                1. Företagsinformation
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Dessa allmänna villkor gäller för tjänster tillhandahållna av:
              </p>
              <ul className="mt-3 space-y-1 text-slate-600 leading-relaxed">
                <li>
                  <strong>Företagsnamn:</strong> Avrion Service AB
                </li>
                <li>
                  <strong>Organisationsnummer:</strong> 556XXX-XXXX
                </li>
                <li>
                  <strong>Adress:</strong> Industrigatan 12, 431 53 Mölndal
                </li>
                <li>
                  <strong>E-post:</strong>{" "}
                  <a
                    href="mailto:info@avrionservice.se"
                    className="text-brand hover:underline"
                  >
                    info@avrionservice.se
                  </a>
                </li>
                <li>
                  <strong>Telefon:</strong>{" "}
                  <a
                    href="tel:+46738339966"
                    className="text-brand hover:underline"
                  >
                    073-833 99 66
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Genom att anlita Avrion Service AB godkänner du dessa villkor i sin helhet. Villkoren tillämpas från det datum du bokar eller beställer en tjänst hos oss.
              </p>
            </div>

            {/* 2. Tjänster */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                2. Tjänster
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Avrion Service AB erbjuder professionella karosseri- och lackeringstjänster för personbilar och lätta fordon. Våra tjänster omfattar lackering, plåtreparation, polering och skadebesiktning. Vi utför arbete på privatpersoners fordon såväl som på fordonsparker tillhörande företag och organisationer.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Samtliga arbeten utförs av certifierade och erfarna tekniker i enlighet med tillverkarens anvisningar och branschens gällande standarder. Vi förbehåller oss rätten att avböja uppdrag som vi bedömer ligga utanför vår kompetens eller kapacitet, eller där fordonsägarens önskemål inte kan uppfyllas med godtagbar kvalitet.
              </p>
            </div>

            {/* 3. Priser och betalning */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                3. Priser och betalning
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Alla priser anges exklusive mervärdesskatt (moms) om inte annat anges vid offert eller orderbekräftelse. En bindande offert lämnas alltid skriftligen innan arbete påbörjas. Muntliga prisuppgifter är vägledande och ersätts alltid av den skriftliga offerten.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Betalning sker vid avhämtning av fordonet om inte annat har avtalats skriftligen. Vi accepterar följande betalningsmetoder:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600 leading-relaxed">
                <li>Betalkort och kreditkort (Visa, Mastercard)</li>
                <li>Swish</li>
                <li>Faktura med 30 dagars netto (gäller enbart företagskunder efter kreditgodkännande)</li>
              </ul>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Vid försenad betalning tillkommer dröjsmålsränta enligt räntelagen (1975:635). Avrion Service AB förbehåller sig rätten att hålla kvar fordonet till dess att full betalning erhållits i enlighet med gällande rättslig retention.
              </p>
            </div>

            {/* 4. Bokning och avbokning */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                4. Bokning och avbokning
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Bokning kan göras via vår webbplats, per telefon eller e-post. En bokningsbekräftelse skickas till den e-postadress du uppgett. Bokningsbekräftelsen utgör ett bindande avtal.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Avbokning eller ombokningsbegäran ska göras senast 24 timmar före bokad tid. Vid sen avbokning — det vill säga avbokning som inkommer senare än 24 timmar före inbokad tid — eller vid uteblivet besök utan förhandsbesked, debiteras en uppstartskostnad om 500 kronor inklusive moms. Denna avgift täcker förberedelsekostnader för material och arbetstid som reserverats för ditt uppdrag.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Bestämmelserna om avbokning tillämpas i enlighet med Konsumentköplagen (2022:260). Om avbokning sker på grund av force majeure eller sjukdom förbehåller vi oss rätten att göra en individuell bedömning och kan efter eget omdöme efterge uppstartskostnaden.
              </p>
            </div>

            {/* 5. Ångerrätt */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                5. Ångerrätt
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Konsumenter som ingår avtal på distans (t.ex. via vår webbplats eller per telefon) har rätt att ångra köpet inom 14 dagar från det att avtalet ingicks, i enlighet med Distansavtalslagen (2005:59).
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Ångerrätten gäller dock inte i de fall tjänsten har påbörjats med konsumentens samtycke och uttryckliga begäran om att arbetet ska inledas före ångertidens utgång. Genom att godkänna att arbete påbörjas omedelbart efter bokning, t.ex. vid inlämning av fordonet, bekräftar du att du är medveten om att ångerrätten upphör när tjänsten väl har inletts.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                För att utöva din ångerrätt inom den tillåtna perioden, kontakta oss skriftligen via e-post till{" "}
                <a
                  href="mailto:info@avrionservice.se"
                  className="text-brand hover:underline"
                >
                  info@avrionservice.se
                </a>{" "}
                eller per post till vår adress ovan. Ange ditt namn, kontaktuppgifter samt vilken bokning eller order det gäller.
              </p>
            </div>

            {/* 6. Reklamation och garanti */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                6. Reklamation och garanti
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Avrion Service AB lämnar en garanti på 2 år för material- och arbetsfel på samtliga utförda arbeten. Garantin täcker fel som är hänförliga till vårt utförande eller de material vi använt, och förutsätter att fordonet har skötts på ett normalt och ändamålsenligt sätt.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Reklamation ska göras utan oskäligt dröjsmål efter att felet har upptäckts eller borde ha upptäckts. I enlighet med Konsumentköplagen (2022:260) anses en reklamation som görs inom två månader från det att felet märktes alltid som gjord i rätt tid.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Vi hanterar samtliga reklamationer skyndsamt och konstruktivt. Vid ett godkänt reklamationsärende erbjuder vi i första hand avhjälpande eller omleverans utan extra kostnad. Om detta inte är möjligt lämnas prisavdrag eller, i undantagsfall, hävning av avtalet.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Reklamationsärenden hanteras via:
              </p>
              <ul className="mt-2 space-y-1 text-slate-600 leading-relaxed">
                <li>
                  E-post:{" "}
                  <a
                    href="mailto:info@avrionservice.se"
                    className="text-brand hover:underline"
                  >
                    info@avrionservice.se
                  </a>
                </li>
                <li>
                  Telefon:{" "}
                  <a
                    href="tel:+46738339966"
                    className="text-brand hover:underline"
                  >
                    073-833 99 66
                  </a>
                </li>
              </ul>
            </div>

            {/* 7. Ansvarsbegränsning */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                7. Ansvarsbegränsning
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Avrion Service AB ansvarar inte för indirekta skador, följdskador eller utebliven vinst som uppstår till följd av fel, dröjsmål eller avbrott i våra tjänster, utom i de fall sådant ansvar inte kan begränsas enligt tvingande lagstiftning.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Vid force majeure — det vill säga omständigheter utanför vår rimliga kontroll, såsom strejk, lockout, naturkatastrof, pandemi, eldsvåda, myndighetsåtgärd eller störningar i leveranskedjan — frånfaller Avrion Service AB sina skyldigheter under den tid som hindret varar. Vi förbinder oss att utan dröjsmål meddela kunden om force majeure-situationen och dess förväntade varaktighet. Om hindret kvarstår i mer än 30 dagar äger båda parter rätt att häva avtalet utan skadeståndsskyldighet.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Kunden ansvarar för att lämna korrekt och fullständig information om fordonet och dess skador inför uppdraget. Avrion Service AB ansvarar inte för fel eller kostnader som uppstår på grund av felaktig eller ofullständig information lämnad av kunden.
              </p>
            </div>

            {/* 8. Tillämplig lag och tvistelösning */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                8. Tillämplig lag och tvistelösning
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Dessa allmänna villkor regleras av och tolkas i enlighet med svensk rätt.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Om en tvist uppstår mellan Avrion Service AB och en konsument ska parterna i första hand försöka lösa tvisten genom förhandling. Om parterna inte kan nå en överenskommelse kan konsumenten vända sig till Allmänna reklamationsnämnden (ARN) för kostnadsfri prövning:
              </p>
              <address className="mt-3 not-italic text-slate-600 leading-relaxed">
                Allmänna reklamationsnämnden (ARN)
                <br />
                Box 174
                <br />
                101 23 Stockholm
                <br />
                <a
                  href="https://www.arn.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  www.arn.se
                </a>
              </address>
              <p className="mt-3 text-slate-600 leading-relaxed">
                EU-kommissionens plattform för onlinelösning av tvister (ODR) finns tillgänglig på{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . I sista hand avgörs tvister av allmän domstol med Göteborg tingsrätt som första instans.
              </p>
            </div>

            {/* 9. Ändringar av villkor */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                9. Ändringar av villkor
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Avrion Service AB förbehåller sig rätten att när som helst ändra dessa allmänna villkor. Den senaste och gällande versionen av villkoren publiceras alltid på denna sida med angivet datum för senaste uppdatering.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Vid väsentliga ändringar som påverkar befintliga kunders rättigheter eller skyldigheter meddelas berörda kunder via e-post till den adress som uppgetts vid senaste bokningstillfälle. Ändringar träder i kraft 14 dagar efter att meddelandet skickats, om inte annat anges.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Fortsatt användning av våra tjänster efter det att ändringar trätt i kraft innebär att du accepterar de uppdaterade villkoren. Om du inte accepterar ändringarna har du rätt att avsluta din relation med oss i enlighet med de villkor som gällde vid din senaste bokning.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
