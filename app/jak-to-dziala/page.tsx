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
    icon: "square",
    title: "Kamień naturalny (granit, marmur)",
    subtitle: "Klasyka i elegancja",
    description:
      "Kod QR może być wygrawerowany bezpośrednio w kamieniu lub na osobnej tabliczce kamiennej. Jest odporny na warunki atmosferyczne i harmonijnie wpisuje się w tradycyjny charakter nagrobków.",
    support:
      "Polecany dla osób ceniących tradycję, prostotę i minimalizm. Pomagamy znaleźć sprawdzony zakład kamieniarski.",
  },
  {
    icon: "gear",
    title: "Stal nierdzewna / stal szlachetna",
    subtitle: "Nowoczesna elegancja i wyjątkowa trwałość",
    description:
      "Grawer na stali nierdzewnej jest odporny na wilgoć i upływ czasu. Daje elegancki, nowoczesny efekt wizualny przy zachowaniu powagi miejsca pamięci.",
    support:
      "Możliwe są także indywidualne formy, np. podobizna osoby zmarłej wykonana na podstawie fotografii.",
  },
  {
    icon: "heart",
    title: "Ceramika / porcelana",
    subtitle: "Delikatność i subtelność",
    description:
      "Ceramiczne tabliczki z wypalanym kodem QR są subtelne i estetyczne. Dobrze komponują się z jasnymi nagrobkami i klasycznym stylem miejsca pamięci.",
    support:
      "Usługę realizujemy w ramach naszej oferty lub we własnym zakresie po stronie klienta.",
  },
  {
    icon: "dot",
    title: "Aluminium anodowane",
    subtitle: "Lekkość i subtelna nowoczesność",
    description:
      "Anodowane aluminium daje matową, stonowaną powierzchnię w kolorach czerni lub grafitu. Kod QR jest czytelny, a forma dyskretna i nowoczesna.",
    support:
      "Rozwiązanie szczególnie polecane do minimalistycznych i współczesnych projektów.",
  },
  {
    icon: "glass",
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path fillRule="evenodd" d="M3.75 3a.75.75 0 0 0-.75.75v14.5a2.75 2.75 0 0 0 2.75 2.75h12.5A2.75 2.75 0 0 0 21 18.25V8.56a2.75 2.75 0 0 0-.805-1.945l-2.81-2.81A2.75 2.75 0 0 0 15.44 3H3.75Zm11.5 2.44V7.5a.75.75 0 0 0 .75.75h2.06l-2.81-2.81ZM7.5 11.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm0 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7.5 15Z" clipRule="evenodd" />
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6Zm3.86.75a.75.75 0 0 0-.53 1.28l4.5 4.5a.75.75 0 0 0 1.06 0l1.72-1.72 3.22 3.22a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-2.47 2.47-3.22-3.22a.75.75 0 0 0-1.06 0l-1.72 1.72-3.97-3.97a.747.747 0 0 0-.53-.22Z" clipRule="evenodd" />
      </svg>
    );
  }
  if (step === 3) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path fillRule="evenodd" d="M7.5 2.25A2.25 2.25 0 0 0 5.25 4.5v15A2.25 2.25 0 0 0 7.5 21.75h9A2.25 2.25 0 0 0 18.75 19.5v-15A2.25 2.25 0 0 0 16.5 2.25h-9Zm4.5 16.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Zm-2.25-12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        <path d="M20.25 7.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5H21v1.5a.75.75 0 0 1-1.5 0v-1.5H18a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 .75-.75Z" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
      <path fillRule="evenodd" d="M4.5 3.75A2.25 2.25 0 0 0 2.25 6v12A2.25 2.25 0 0 0 4.5 20.25h15A2.25 2.25 0 0 0 21.75 18V6A2.25 2.25 0 0 0 19.5 3.75h-15Zm2.25 4.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm0 3.75a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H7.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
      <path d="M18 10.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 18 10.5Z" />
    </svg>
  );
}

function MaterialIcon({ type }: { type: string }) {
  if (type === "square") {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3 3h18v18H3V3Z" /></svg>;
  }
  if (type === "gear") {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M11.983 1.25c.473 0 .91.297 1.066.753l.443 1.297a1.25 1.25 0 0 0 1.646.749l1.261-.517a1.125 1.125 0 0 1 1.411.481l1.28 2.217c.236.41.173.926-.158 1.27l-.96 1a1.25 1.25 0 0 0 0 1.732l.96 1c.331.344.394.86.158 1.27l-1.28 2.217a1.125 1.125 0 0 1-1.41.48l-1.262-.516a1.25 1.25 0 0 0-1.646.75l-.443 1.296a1.125 1.125 0 0 1-1.066.753h-2.56a1.125 1.125 0 0 1-1.066-.753l-.443-1.297a1.25 1.25 0 0 0-1.646-.749l-1.261.517a1.125 1.125 0 0 1-1.411-.48L1.94 14.77a1.125 1.125 0 0 1 .158-1.27l.96-1a1.25 1.25 0 0 0 0-1.732l-.96-1a1.125 1.125 0 0 1-.158-1.27l1.28-2.217a1.125 1.125 0 0 1 1.41-.48l1.262.516a1.25 1.25 0 0 0 1.646-.75l.443-1.296a1.125 1.125 0 0 1 1.066-.753h2.56Zm.017 7a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" clipRule="evenodd"/></svg>;
  }
  if (type === "heart") {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.175 2.25 8.25 2.25 5.322 4.522 3 7.41 3c1.962 0 3.64 1.106 4.59 2.726C12.95 4.106 14.627 3 16.59 3 19.478 3 21.75 5.322 21.75 8.25c0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.155 15.155 0 0 1-.383.219l-.022.012-.007.003a.75.75 0 0 1-.71 0Z"/></svg>;
  }
  if (type === "dot") {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><circle cx="12" cy="12" r="9"/></svg>;
  }
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M5.25 2.25A3 3 0 0 0 2.25 5.25v13.5a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3H5.25Zm2.56 4.03a.75.75 0 0 1 .9-.55l7.5 1.5a.75.75 0 0 1 .6.73v8.08a2.66 2.66 0 1 1-1.5-2.4V10.1l-6-1.2v7.14a2.66 2.66 0 1 1-1.5-2.4V7.18a.75.75 0 0 1 .55-.9Z" clipRule="evenodd"/></svg>;
}

export default function JakToDzialaPage() {
  return (
    <main className="page-shell">
      <section className="panel p-8 sm:p-10">
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
              <span className="mr-2 inline-flex text-cyan-600"><MaterialIcon type={material.icon} /></span>
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
