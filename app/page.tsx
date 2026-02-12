import Link from "next/link";
import SliderSection from "../components/SliderSection";

const sections = [
  {
    icon: "💙",
    title: "O nas",
    description:
      "Poznaj misję Dla Bliskich i dowiedz się, dlaczego tworzymy cyfrowe miejsca pamięci.",
    href: "/o-nas",
  },
  {
    icon: "🧭",
    title: "Jak to działa",
    description:
      "Prosty proces w 4 krokach: od stworzenia wspomnień po gotowy kod QR.",
    href: "/jak-to-dziala",
  },
  {
    icon: "🧱",
    title: "Materiały graweru",
    description:
      "Sprawdź dostępne formy realizacji: kamień, stal, ceramika, aluminium i szkło.",
    href: "/materialy",
  },
  {
    icon: "🤝",
    title: "Współpraca B2B",
    description:
      "Oferta dla zakładów kamieniarskich, firm pogrzebowych i partnerów lokalnych.",
    href: "/wspolpraca",
  },
  {
    icon: "⏳",
    title: "Kapsuła czasu",
    description:
      "Nowoczesny sposób zabezpieczenia historii życia i przekazania ich kolejnym pokoleniom.",
    href: "/kapsula-czasu",
  },
  {
    icon: "💳",
    title: "Cennik",
    description: "Przejrzyste pakiety i zakresy usług dla klientów indywidualnych i rodzin.",
    href: "/cennik",
  },
];

export default function Home() {
  return (
    <>
      <SliderSection />
      <main className="page-shell">
        <section className="panel p-8 sm:p-10">
          <span className="eyebrow">Start</span>
          <h1 className="section-title mt-4 text-3xl sm:text-4xl">
            Cyfrowe wspomnienia w godnej formie
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700">
            Strona główna pokazuje najważniejsze informacje, a pełne opisy znajdziesz w
            dedykowanych zakładkach. Dzięki temu całość jest czytelna i bardziej profesjonalna.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/jak-to-dziala"
              className="btn-primary px-5 py-3 text-sm"
            >
              Zobacz jak to działa
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-slate-50"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.href}
              className="panel p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="icon-chip">{section.icon}</div>
              <h2 className="section-title mt-4 text-xl">{section.title}</h2>
              <p className="mt-3 text-sm text-gray-700">{section.description}</p>
              <Link
                href={section.href}
                className="brand-link mt-5 inline-flex text-sm"
              >
                Przejdź do sekcji →
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
