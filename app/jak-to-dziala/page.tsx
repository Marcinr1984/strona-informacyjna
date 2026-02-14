const steps = [
  {
    title: "1. Tworzysz wspomnienia",
    description:
      "Logujesz się do konfiguratora online i tworzysz przykładowe wspomnienia: dodajesz zdjęcia, historie, cytaty oraz linki do filmów przygotowanych przez siebie (filmy nie są przesyłane do nas).",
  },
  {
    title: "2. Wybierasz pakiet i formę kodu QR",
    description:
      "Wybierasz pakiet trwałości kodu QR, od którego zależy cena podstawowa. Dodatkowo możesz wybrać produkt fizyczny z naniesionym kodem oraz transport produktu.",
  },
  {
    title: "3. Generujesz kod i wskazujesz opiekuna strony",
    description:
      "Po płatności kod QR zostaje wygenerowany. Możesz wskazać opiekuna strony, który będzie wspierał utrzymanie i aktualizację wspomnień po uzyskaniu zgody zamawiającego.",
  },
  {
    title: "4. Odbiór i dostęp do wspomnień",
    description:
      "Kod cyfrowy otrzymujesz od razu, a produkt fizyczny dostarczamy pod wskazany adres (koszt transportu doliczany osobno). Po zeskanowaniu kodu bliscy mogą odwiedzać stronę pamięci.",
  },
];

const extras = [
  "Możliwość zarządzania stroną z dowolnego miejsca na świecie przez wskazanego opiekuna.",
  "Wsparcie przy wyborze materiału i formy produktu fizycznego.",
  "Rekomendacja odbioru osobistego przy produktach fizycznych.",
];

const materials = [
  {
    icon: "⬛",
    title: "Kamień naturalny (granit, marmur)",
    subtitle: "Klasyka i elegancja",
    description:
      "Kod QR może być wygrawerowany bezpośrednio w kamieniu lub na osobnej tabliczce kamiennej. Jest odporny na warunki atmosferyczne i harmonijnie wpisuje się w tradycyjny charakter nagrobków.",
    support:
      "Polecany dla osób ceniących tradycję, prostotę i minimalizm. Pomagamy znaleźć sprawdzony zakład kamieniarski.",
  },
  {
    icon: "⚙",
    title: "Stal nierdzewna / stal szlachetna",
    subtitle: "Nowoczesna elegancja i wyjątkowa trwałość",
    description:
      "Grawer na stali nierdzewnej jest odporny na wilgoć i upływ czasu. Daje elegancki, nowoczesny efekt wizualny przy zachowaniu powagi miejsca pamięci.",
    support:
      "Możliwe są także indywidualne formy, np. podobizna osoby zmarłej wykonana na podstawie fotografii.",
  },
  {
    icon: "❤",
    title: "Ceramika / porcelana",
    subtitle: "Delikatność i subtelność",
    description:
      "Ceramiczne tabliczki z wypalanym kodem QR są subtelne i estetyczne. Dobrze komponują się z jasnymi nagrobkami i klasycznym stylem miejsca pamięci.",
    support:
      "Usługę realizujemy w ramach naszej oferty lub we własnym zakresie po stronie klienta.",
  },
  {
    icon: "●",
    title: "Aluminium anodowane",
    subtitle: "Lekkość i subtelna nowoczesność",
    description:
      "Anodowane aluminium daje matową, stonowaną powierzchnię w kolorach czerni lub grafitu. Kod QR jest czytelny, a forma dyskretna i nowoczesna.",
    support:
      "Rozwiązanie szczególnie polecane do minimalistycznych i współczesnych projektów.",
  },
  {
    icon: "▱",
    title: "Szkło dymione lub przezroczyste",
    subtitle: "Subtelność i nowoczesna elegancja",
    description:
      "Szkło pozwala stworzyć lekką i delikatną formę upamiętnienia. Wariant dymiony dodaje głębi, a przezroczysty podkreśla czystość i minimalizm projektu.",
    support:
      "Realizacja możliwa w naszej ofercie lub we własnym zakresie po stronie klienta.",
  },
];

export default function JakToDzialaPage() {
  return (
    <main className="page-shell">
      <section className="panel p-8">
        <div className="flex items-center gap-3">
          <div className="icon-chip">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="8" />
              <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
            </svg>
          </div>
          <h1 className="section-title text-4xl">Jak to dziala</h1>
        </div>
        <p className="mt-4 text-gray-700">
          Cały proces zaprojektowaliśmy tak, aby był prosty, bezpieczny i wygodny dla rodzin.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <article
            key={step.title}
            className="panel p-6"
          >
            <div className="icon-chip mb-4 h-9 w-9 text-sm">✓</div>
            <h2 className="section-title text-xl">{step.title}</h2>
            <p className="mt-3 text-gray-700">{step.description}</p>
          </article>
        ))}
      </section>

      <section className="panel mt-8 p-8">
        <h3 className="section-title text-2xl">Dodatkowe informacje</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          {extras.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://qr.dlabliskich.pl/auth/login"
          className="btn-primary mt-6 px-5 py-3 text-sm"
        >
          Przejdź do konfiguratora
        </a>
      </section>

      <section id="materialy" className="panel mt-8 p-8 scroll-mt-32">
        <h3 className="section-title text-2xl">Materialy graweru kodu QR</h3>
        <p className="mt-3 text-gray-700">
          Wybierz materiał dopasowany do stylu nagrobka i oczekiwanego efektu wizualnego.
          Każda opcja łączy trwałość z estetyką i czytelnością kodu.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {materials.map((material) => (
          <article key={material.title} className="panel p-6">
            <h4 className="section-title text-xl">
              <span className="mr-2">{material.icon}</span>
              {material.title}
            </h4>
            <p className="mt-1 text-sm font-medium text-sky-600">{material.subtitle}</p>
            <p className="mt-3 text-sm text-gray-700">{material.description}</p>
            <p className="mt-3 text-sm text-gray-600">{material.support}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
