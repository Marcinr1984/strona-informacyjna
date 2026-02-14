function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="mt-4 flex min-h-44 items-center justify-center rounded-xl border border-dashed border-gray-400/70 bg-gray-100/60 p-6 text-center text-sm text-gray-600 dark:border-gray-600 dark:bg-gray-800/40 dark:text-gray-300">
      {label}
    </div>
  );
}

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

export default function MaterialyPage() {
  return (
    <main className="page-shell">
      <section className="panel p-8">
        <div className="flex items-center gap-3">
          <div className="icon-chip">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12 3 9 5-9 5-9-5 9-5Z" />
              <path d="m3 12 9 5 9-5" />
              <path d="m3 16 9 5 9-5" />
            </svg>
          </div>
          <h1 className="section-title text-4xl">
            Materiały graweru kodu QR
          </h1>
        </div>
        <p className="mt-4 text-gray-700">
          Wybierz materiał dopasowany do stylu nagrobka i oczekiwanego efektu wizualnego.
          Każda opcja łączy trwałość z estetyką i czytelnością kodu.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {materials.map((material) => (
          <article
            key={material.title}
            className="panel p-6"
          >
            <h2 className="section-title text-xl">
              <span className="mr-2">{material.icon}</span>
              {material.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-sky-600">
              {material.subtitle}
            </p>
            <p className="mt-3 text-sm text-gray-700">{material.description}</p>
            <p className="mt-3 text-sm text-gray-600">{material.support}</p>
          </article>
        ))}
      </section>

      <section className="panel mt-8 p-8">
        <h3 className="section-title text-2xl">
          Galerie realizacji
        </h3>
        <p className="mt-3 text-gray-700">
          Przy każdej ofercie umieścimy poglądowe fotografie gotowego produktu.
        </p>
        <PhotoPlaceholder label="Miejsce na fotografie realizacji dla każdego materiału" />
      </section>
    </main>
  );
}
