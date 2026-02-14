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

function StepIllustrationIcon({ step }: { step: number }) {
  if (step === 1) {
    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="42" width="46" height="5" rx="2.5" />
        <path d="M16 42V23a3 3 0 0 1 3-3h20" />
        <path d="M42 16h6v6" />
        <path d="m28 34 20-18" />
        <path d="M23 27h10M23 32h6" />
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="12" width="20" height="16" rx="2" />
        <rect x="36" y="12" width="20" height="16" rx="2" />
        <rect x="8" y="36" width="20" height="16" rx="2" />
        <rect x="36" y="36" width="20" height="16" rx="2" />
        <path d="m8 46 7-6 5 4 8-8" />
        <circle cx="46" cy="22" r="3" />
      </svg>
    );
  }
  if (step === 3) {
    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="20" y="8" width="24" height="48" rx="6" />
        <circle cx="32" cy="49" r="1.8" fill="currentColor" />
        <path d="M26 16h12M26 24h10M26 32h12" />
        <path d="M50 22h6a4 4 0 0 1 0 8h-6" />
        <path d="m53 20 3 2-3 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 50h36" />
      <path d="M20 50V18h24v32" />
      <path d="M26 24h12M26 30h12M26 36h8" />
      <path d="M48 20h8v8" />
      <path d="m46 30 10-10" />
    </svg>
  );
}

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
          <h1 className="section-title text-4xl">Jak to działa</h1>
        </div>
        <p className="mt-4 text-gray-700">
          Cały proces zaprojektowaliśmy tak, aby był prosty, bezpieczny i wygodny dla rodzin.
        </p>
      </section>

      <section className="panel mt-8 p-8 sm:p-10">
        <h2 className="section-title text-3xl sm:text-4xl">Proces krok po kroku</h2>
        <p className="mt-3 max-w-3xl text-gray-700">
          To rozwinięcie sekcji ze strony głównej: każdy etap jest opisany dokładniej, aby łatwo
          przejść od pomysłu do gotowej strony pamięci.
        </p>

        <div className="mx-auto mt-9 hidden max-w-5xl items-center justify-between px-10 md:flex">
          <span className="h-3 w-3 rounded-full border-2 border-cyan-500 bg-white" />
          <span className="h-px flex-1 bg-cyan-300" />
          <span className="h-3 w-3 rounded-full border-2 border-cyan-500 bg-white" />
          <span className="h-px flex-1 bg-cyan-300" />
          <span className="h-3 w-3 rounded-full border-2 border-cyan-500 bg-white" />
          <span className="h-px flex-1 bg-cyan-300" />
          <span className="h-3 w-3 rounded-full border-2 border-cyan-500 bg-white" />
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {steps.map((step) => (
          <article
            key={step.title}
            className="panel rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
              <StepIllustrationIcon step={Number(step.title.split(".")[0])} />
            </div>
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
        <h3 className="section-title text-2xl">Materiały graweru kodu QR</h3>
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
