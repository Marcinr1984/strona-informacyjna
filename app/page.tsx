import Link from "next/link";
import SliderSection from "../components/SliderSection";

const sections = [
  {
    icon: "heart",
    title: "O nas",
    description:
      "Poznaj misję Dla Bliskich i dowiedz się, dlaczego tworzymy cyfrowe miejsca pamięci.",
    href: "/o-nas",
  },
  {
    icon: "compass",
    title: "Jak to działa",
    description:
      "Prosty proces w 4 krokach: od stworzenia wspomnień po gotowy kod QR.",
    href: "/jak-to-dziala",
  },
  {
    icon: "layers",
    title: "Materiały graweru",
    description:
      "Sprawdź dostępne formy realizacji: kamień, stal, ceramika, aluminium i szkło.",
    href: "/materialy",
  },
  {
    icon: "users",
    title: "Współpraca B2B",
    description:
      "Oferta dla zakładów kamieniarskich, firm pogrzebowych i partnerów lokalnych.",
    href: "/wspolpraca",
  },
  {
    icon: "clock",
    title: "Kapsuła czasu",
    description:
      "Nowoczesny sposób zabezpieczenia historii życia i przekazania ich kolejnym pokoleniom.",
    href: "/kapsula-czasu",
  },
  {
    icon: "tag",
    title: "Cennik",
    description: "Przejrzyste pakiety i zakresy usług dla klientów indywidualnych i rodzin.",
    href: "/cennik",
  },
];

function SectionIcon({ type }: { type: string }) {
  if (type === "heart") {
    return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 21s-6.7-4.35-9.33-8.23C.65 9.8 2.04 5.5 6 5.5c2.07 0 3.24 1.18 4 2.2.76-1.02 1.93-2.2 4-2.2 3.96 0 5.35 4.3 3.33 7.27C18.7 16.65 12 21 12 21Z"/></svg>;
  }
  if (type === "compass") {
    return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8"/><path d="m14.5 9.5-2 5-5 2 2-5 5-2Z"/></svg>;
  }
  if (type === "layers") {
    return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></svg>;
  }
  if (type === "users") {
    return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="3"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a3 3 0 0 1 0 5.74"/></svg>;
  }
  if (type === "clock") {
    return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>;
  }
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7"/><path d="M9 12h6"/><path d="M12 3v9"/></svg>;
}

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
              <div className="icon-chip"><SectionIcon type={section.icon} /></div>
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
