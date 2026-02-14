import Link from "next/link";
import Image from "next/image";
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

function StepIllustrationIcon({ step }: { step: 1 | 2 | 3 }) {
  if (step === 1) {
    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="42" width="46" height="5" rx="2.5" />
        <path d="M16 42V23a3 3 0 0 1 3-3h20" />
        <path d="M42 16h6v6" />
        <path d="m28 34 20-18" />
        <path d="M23 27h10M23 32h6" />
      </svg>
    )
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
    )
  }
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="20" y="8" width="24" height="48" rx="6" />
      <circle cx="32" cy="49" r="1.8" fill="currentColor" />
      <path d="M26 16h12M26 24h10M26 32h12" />
      <path d="M50 22h6a4 4 0 0 1 0 8h-6" />
      <path d="m53 20 3 2-3 2" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <SliderSection />
      <main className="page-shell">
        <section className="panel mt-8 p-8 text-center sm:mt-10 sm:p-10">
          <h1 className="section-title text-3xl sm:text-4xl">
            Stwórz stronę pamięci w kilku prostych krokach
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-700">
            Prosty proces, który pozwala szybko utworzyć miejsce wspomnień, dodać treści i udostępnić je bliskim.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <StepIllustrationIcon step={1} />
              </div>
              <h2 className="section-title mt-4 text-2xl text-cyan-600">Utwórz stronę</h2>
              <p className="mt-2 text-base text-gray-700">Dodaj podstawowe informacje i rozpocznij tworzenie historii.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <StepIllustrationIcon step={2} />
              </div>
              <h2 className="section-title mt-4 text-2xl text-cyan-600">Dodaj wspomnienia</h2>
              <p className="mt-2 text-base text-gray-700">Wstaw zdjęcia, filmy i opisy ważnych momentów z życia.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <StepIllustrationIcon step={3} />
              </div>
              <h2 className="section-title mt-4 text-2xl text-cyan-600">Udostępnij bliskim</h2>
              <p className="mt-2 text-base text-gray-700">Połącz stronę z kodem QR i umożliw odwiedziny każdemu.</p>
            </article>
          </div>

          <div className="mx-auto mt-7 hidden max-w-4xl items-center justify-between px-10 md:flex">
            <span className="h-3 w-3 rounded-full border-2 border-cyan-500 bg-white" />
            <span className="h-px flex-1 bg-cyan-300" />
            <span className="h-3 w-3 rounded-full border-2 border-cyan-500 bg-white" />
            <span className="h-px flex-1 bg-cyan-300" />
            <span className="h-3 w-3 rounded-full border-2 border-cyan-500 bg-white" />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="https://qr.dlabliskich.pl/auth/register"
              className="btn-primary px-7 py-3 text-sm"
            >
              Zacznij teraz
            </Link>
            <Link
              href="/jak-to-dziala"
              className="inline-flex rounded-lg border border-cyan-500 bg-white px-7 py-3 text-sm font-semibold text-cyan-600 transition-colors hover:bg-cyan-50"
            >
              Zobacz wszystkie możliwości
            </Link>
          </div>
        </section>

        <section className="relative left-1/2 right-1/2 mt-14 w-screen -translate-x-1/2 overflow-hidden border-y border-[#153a59] bg-[radial-gradient(circle_at_20%_20%,#133f63_0%,#0b2238_45%,#07192c_100%)] py-12 text-white sm:mt-16 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
            <div className="relative mx-auto h-[230px] w-[280px] overflow-hidden rounded-2xl bg-white/10">
              <Image
                src="/slider-bg.png"
                alt="Kod QR memorial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-cyan-600">
                  ▶
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Tablice kodów QR Memorial</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cyan-50/95">
                Pomagamy uhonorować życie ukochanej osoby trwałymi tablicami QR, które łączą pomnik
                z bogatym cyfrowym hołdem i szybkim dostępem do historii życia.
              </p>
              <Link href="/materialy" className="btn-primary mt-6 px-6 py-3 text-sm">
                Dowiedz się więcej
              </Link>
            </div>
          </div>

            <div className="mx-auto my-10 h-px w-full max-w-xl bg-cyan-400/70" />

            <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Zbuduj stronę pamięci online z ekspertem</h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cyan-50/95">
                Oferujemy wskazówki ekspertów i spersonalizowane wsparcie, które pomaga stworzyć trwałe
                dziedzictwo cyfrowe dla kolejnych pokoleń.
                </p>
                <Link href="/wspolpraca" className="btn-primary mt-6 px-6 py-3 text-sm">
                  Dowiedz się więcej
                </Link>
              </div>
              <div className="relative mx-auto h-[230px] w-[280px] overflow-hidden rounded-2xl">
                <Image
                  src="/slider-bggg.png"
                  alt="Tworzenie strony pamięci online"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
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
