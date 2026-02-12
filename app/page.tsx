import Link from "next/link";
import SliderSection from "../components/SliderSection";

const sections = [
  {
    title: "O nas",
    description:
      "Poznaj misję Dla Bliskich i dowiedz się, dlaczego tworzymy cyfrowe miejsca pamięci.",
    href: "/o-nas",
  },
  {
    title: "Jak to działa",
    description:
      "Prosty proces w 4 krokach: od stworzenia wspomnień po gotowy kod QR.",
    href: "/jak-to-dziala",
  },
  {
    title: "Materiały graweru",
    description:
      "Sprawdź dostępne formy realizacji: kamień, stal, ceramika, aluminium i szkło.",
    href: "/materialy",
  },
  {
    title: "Współpraca B2B",
    description:
      "Oferta dla zakładów kamieniarskich, firm pogrzebowych i partnerów lokalnych.",
    href: "/wspolpraca",
  },
  {
    title: "Kapsuła czasu",
    description:
      "Nowoczesny sposób zabezpieczenia historii życia i przekazania ich kolejnym pokoleniom.",
    href: "/kapsula-czasu",
  },
  {
    title: "Cennik",
    description: "Przejrzyste pakiety i zakresy usług dla klientów indywidualnych i rodzin.",
    href: "/cennik",
  },
];

export default function Home() {
  return (
    <>
      <SliderSection />
      <main className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
          <h1 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Cyfrowe wspomnienia w godnej formie
          </h1>
          <p className="mt-4 max-w-3xl text-gray-700 dark:text-gray-300">
            Strona główna pokazuje najważniejsze informacje, a pełne opisy znajdziesz w
            dedykowanych zakładkach. Dzięki temu całość jest czytelna i bardziej profesjonalna.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/jak-to-dziala"
              className="inline-flex rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
            >
              Zobacz jak to działa
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.href}
              className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900/50"
            >
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{section.title}</h2>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{section.description}</p>
              <Link
                href={section.href}
                className="mt-5 inline-flex text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400"
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
