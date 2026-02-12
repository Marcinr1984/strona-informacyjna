import SliderSection from "../components/SliderSection";

const memoryFeatures = [
  "Biografia i ważne momenty z życia",
  "Galeria zdjęć i materiałów wideo",
  "Miejsce na wspomnienia i wpisy od bliskich",
  "Dostęp przez zeskanowanie kodu QR smartfonem",
  "Możliwość aktualizacji treści w dowolnym momencie",
];

const benefits = [
  "Trwała pamiątka dla przyszłych pokoleń",
  "Łatwy dostęp dla rodziny, także mieszkającej daleko",
  "Elegancka forma upamiętnienia",
  "Prosta obsługa i wsparcie na każdym etapie",
];

const materials = [
  {
    icon: "⬛",
    title: "Kamień naturalny (granit, marmur)",
    subtitle: "Klasyka i elegancja",
    description:
      "Kod QR może być wygrawerowany bezpośrednio w kamieniu lub na osobnej tabliczce kamiennej. To trwałe i dyskretne rozwiązanie, czytelne z bliska dokładnie wtedy, gdy ktoś chce zatrzymać się na chwilę pamięci. Polecane dla osób ceniących tradycję, prostotę i minimalizm.",
    support:
      "Usługa grawerowania dostępna jest u lokalnych firm specjalizujących się w pracy z kamieniem. W razie potrzeby pomagamy znaleźć odpowiedni zakład.",
  },
  {
    icon: "⚙",
    title: "Stal nierdzewna / stal szlachetna",
    subtitle: "Nowoczesna elegancja i wyjątkowa trwałość",
    description:
      "Grawerowany kod QR na stali nierdzewnej jest odporny na wilgoć i zmienne warunki atmosferyczne. Subtelny połysk oraz precyzyjny grawer nadają nowoczesny charakter bez utraty powagi miejsca pamięci.",
    support:
      "Na stali możliwe jest też wykonanie podobizny osoby zmarłej lub symbolu na podstawie fotografii dobrej jakości.",
  },
  {
    icon: "❤",
    title: "Ceramika / porcelana",
    subtitle: "Delikatność i subtelność",
    description:
      "Ceramiczne tabliczki z wypalanym kodem QR są estetyczne i harmonijnie komponują się z jasnymi nagrobkami oraz klasycznymi miejscami pamięci.",
    support:
      "Usługę realizujemy w ramach naszej oferty lub we własnym zakresie po stronie klienta.",
  },
  {
    icon: "●",
    title: "Aluminium anodowane",
    subtitle: "Lekkość i subtelna nowoczesność",
    description:
      "Anodowane aluminium zapewnia matową, stonowaną powierzchnię (najczęściej czerń lub grafit). Kod QR jest wyraźny, a całość bardzo dyskretna wizualnie.",
    support:
      "Rozwiązanie szczególnie polecane do minimalistycznych i nowoczesnych form upamiętnienia.",
  },
  {
    icon: "▱",
    title: "Szkło dymione lub przezroczyste",
    subtitle: "Subtelność i nowoczesna elegancja",
    description:
      "Szkło daje lekką i delikatną formę upamiętnienia. Kod QR pozostaje czytelny, a całość nowoczesna i elegancka. Wariant dymiony dodaje głębi, a przezroczysty podkreśla czystość formy.",
    support:
      "Usługę realizujemy w naszej ofercie lub we własnym zakresie po stronie klienta.",
  },
];

const steps = [
  {
    title: "1. Tworzysz wspomnienia",
    text: "Logujesz się do konfiguratora online i tworzysz wspomnienia: dodajesz zdjęcia, historie, cytaty oraz linki do filmów przygotowanych przez siebie (filmy nie są przesyłane do nas).",
  },
  {
    title: "2. Wybierasz pakiet i formę kodu QR",
    text: "Wybierasz pakiet trwałości kodu QR (od niego zależy cena podstawowa) oraz opcje dodatkowe: produkt fizyczny z kodem i transport.",
  },
  {
    title: "3. Generujesz kod i wskazujesz opiekuna strony",
    text: "Po płatności kod QR zostaje wygenerowany. Możesz wskazać opiekuna strony, który pomoże w utrzymaniu i aktualizacji wspomnień po uzyskaniu Twojej zgody.",
  },
  {
    title: "4. Odbiór i dostęp do wspomnień",
    text: "Produkt fizyczny dostarczamy pod wskazany adres (koszt transportu doliczany). Kod cyfrowy otrzymujesz od razu. Po zeskanowaniu kodu bliscy odwiedzają stronę pamięci.",
  },
];

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="mt-4 flex min-h-44 items-center justify-center rounded-xl border border-dashed border-gray-400/70 bg-gray-100/60 p-6 text-center text-sm text-gray-600 dark:border-gray-600 dark:bg-gray-800/40 dark:text-gray-300">
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SliderSection />
      <main className="mx-auto w-full max-w-6xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">1. Kim jesteśmy</h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Pamięć o bliskich to coś więcej niż imię wyryte w kamieniu. To historie,
              uśmiechy, głosy i chwile, które chcemy zachować na zawsze. Właśnie z tej
              potrzeby powstała nasza firma.
            </p>
            <p>
              Tworzymy kody QR na nagrobki, które pozwalają ocalić wspomnienia i przekazać
              je kolejnym pokoleniom. Po zeskanowaniu kodu telefonem można poznać historię
              życia osoby zmarłej: zobaczyć zdjęcia, przeczytać wspomnienia, obejrzeć filmy
              i poczuć, kim była naprawdę.
            </p>
            <p>
              Każdy projekt traktujemy z ogromnym szacunkiem i wrażliwością. Dbamy o każdy
              detal: od trwałości materiałów po prostotę i bezpieczeństwo dostępu do strony
              pamięci.
            </p>
            <p>
              Wierzymy, że pamięć nie kończy się wraz z odejściem. Dzięki nowoczesnej
              technologii może trwać dalej: cicho, godnie i zawsze wtedy, gdy ktoś zechce
              zatrzymać się na chwilę wspomnienia.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              2. Co zawiera strona pamięci?
            </h2>
            <ul className="mt-5 space-y-2 text-gray-700 dark:text-gray-300">
              {memoryFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-xl font-semibold text-[var(--foreground)]">
              Dlaczego warto?
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Kod QR na nagrobku to więcej niż technologia: to opowieść o życiu, do której
              można wracać zawsze, gdy pojawi się potrzeba pamięci i bliskości.
            </p>
            <PhotoPlaceholder label="Miejsce na fotografię kodu QR na nagrobku" />
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              Fotografia poglądowa
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              W tej sekcji docelowo umieścimy zdjęcie osoby skanującej kod QR lub trzymającej
              produkt z kodem. Na tym etapie zostawiamy miejsce pod materiały wizualne.
            </p>
            <PhotoPlaceholder label="Miejsce na fotografię osoby z kodem QR" />
          </article>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">
            3. Na czym można wygrawerować kod QR Dla Bliskich
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {materials.map((material) => (
              <article
                key={material.title}
                className="rounded-xl border border-gray-200 p-5 dark:border-gray-700"
              >
                <p className="text-lg font-semibold text-[var(--foreground)]">
                  <span className="mr-2">{material.icon}</span>
                  {material.title}
                </p>
                <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400">
                  {material.subtitle}
                </p>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                  {material.description}
                </p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  {material.support}
                </p>
              </article>
            ))}
          </div>
          <PhotoPlaceholder label="Miejsce na fotografie poglądowe gotowych realizacji dla każdego materiału" />
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">4. Zaproszenie do współpracy</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Dla Bliskich zaprasza firmy i organizacje do oferowania nowoczesnych form
            upamiętnienia: eleganckich kodów QR, które pozwalają zachować wspomnienia,
            zdjęcia i historie życia bliskich w subtelnej, trwałej i godnej formie.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            To idealne rozwiązanie dla firm, które chcą poszerzyć ofertę o produkty łączące
            tradycję z nowoczesnością.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://qr.dlabliskich.pl/auth/register"
              className="inline-flex rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
            >
              Przejdź do rejestracji
            </a>
            <a
              href="/kontakt"
              className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
            >
              Skontaktuj się z nami
            </a>
          </div>
          <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
            E-mail: kontakt@dlabliskich.pl | Tel.: +48 123 456 789
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">5. Jak to działa – w 4 krokach</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-xl border border-gray-200 p-5 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{step.text}</p>
              </article>
            ))}
          </div>
          <a
            href="https://qr.dlabliskich.pl/auth/login"
            className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            Przejdź do konfiguratora
          </a>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">6. Kapsuła czasu</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Kapsuła czasu to miejsce, w którym wspomnienia mogą przetrwać przez pokolenia.
              Tworzysz zdjęcia, historie, cytaty i linki do filmów dostępne dla bliskich za
              życia lub po śmierci: w eleganckiej, cyfrowej formie kodu QR.
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Dla bezpieczeństwa warto wskazać opiekuna kapsuły. Kod QR można też zapisać w
              spadku, aby pamięć o Twoich historiach została dla kolejnych pokoleń.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              7. Dodatkowa usługa – wizytówka z kodem QR
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Dla osób, które wolą tradycyjną formę, oferujemy eleganckie wizytówki z kodem QR
              i logo Dla Bliskich. To dyskretny sposób na przekazanie dostępu do wspomnień.
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Minimalna ilość zamówienia: 100 sztuk. Opcja będzie dostępna jako dodatkowy
              wybór w kreatorze podczas płatności.
            </p>
            <PhotoPlaceholder label="Miejsce na poglądowy projekt/fotografię wizytówki z kodem QR" />
          </article>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">8. Bezpieczeństwo Twoich wspomnień</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Wszystkie informacje tworzone w konfiguratorze przechowujemy w bezpieczny i
            poufny sposób. Zdjęcia, historie, cytaty i linki do filmów są chronione
            nowoczesnymi systemami zabezpieczeń.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Dostęp mają wyłącznie osoby upoważnione: Ty oraz wskazany opiekun strony. To
            zapewnia ciągłość i bezpieczeństwo pamięci na długie lata.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Twoje wspomnienia są dla nas najcenniejsze, dlatego prywatność i bezpieczeństwo
            traktujemy priorytetowo.
          </p>
        </section>
      </main>
    </>
  );
}
