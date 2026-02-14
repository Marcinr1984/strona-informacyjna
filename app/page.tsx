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
    href: "/jak-to-dziala#materialy",
  },
  {
    icon: "users",
    title: "Współpraca B2B",
    description:
      "Oferta dla zakładów kamieniarskich, firm pogrzebowych i partnerów lokalnych.",
    href: "/wspolpraca",
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
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.175 2.25 8.25 2.25 5.322 4.522 3 7.41 3c1.962 0 3.64 1.106 4.59 2.726C12.95 4.106 14.627 3 16.59 3 19.478 3 21.75 5.322 21.75 8.25c0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.155 15.155 0 0 1-.383.219l-.022.012-.007.003a.75.75 0 0 1-.71 0Z"/></svg>;
  }
  if (type === "compass") {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M11.54 22.351a.75.75 0 0 0 .92 0l2.9-2.173A.75.75 0 0 0 15.75 19.6V15a.75.75 0 0 1 .75-.75h4.6a.75.75 0 0 0 .58-1.39l-2.172-2.9a.75.75 0 0 0-1.152 0L15 13.5a.75.75 0 0 1-.53.22H9.53a.75.75 0 0 1-.53-.22L5.46 9.96a.75.75 0 0 0-1.152 0L2.136 12.86a.75.75 0 0 0 .58 1.39h4.6A.75.75 0 0 1 8.066 15v4.6a.75.75 0 0 0 .39.578l2.9 2.173Z" clipRule="evenodd"/></svg>;
  }
  if (type === "layers") {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M11.644 1.952a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.296l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.296l9.75-5.25Z"/><path d="m3.37 11.72 8.274 4.455a.75.75 0 0 0 .712 0l8.274-4.455a.75.75 0 0 1 .71 1.322l-8.63 4.647a.75.75 0 0 1-.71 0l-8.63-4.647a.75.75 0 1 1 .71-1.322Z"/><path d="m3.37 15.97 8.274 4.455a.75.75 0 0 0 .712 0l8.274-4.455a.75.75 0 1 1 .71 1.322l-8.63 4.647a.75.75 0 0 1-.71 0l-8.63-4.647a.75.75 0 1 1 .71-1.322Z"/></svg>;
  }
  if (type === "users") {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M8.25 6a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM2.25 20.105a7.5 7.5 0 0 1 15 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 9.75 22.5 18.683 18.683 0 0 1 2.687 20.8a.75.75 0 0 1-.437-.695ZM16.5 8.25a.75.75 0 0 1 .75-.75h1.5V6a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0V9h-1.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/></svg>;
  }
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M6.429 2.25A2.25 2.25 0 0 0 4.18 4.5v15A2.25 2.25 0 0 0 6.43 21.75h11.142a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.43ZM12 6a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 12 6Z" clipRule="evenodd"/></svg>;
}

function StepIllustrationIcon({ step }: { step: 1 | 2 | 3 }) {
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
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
      <path fillRule="evenodd" d="M7.5 2.25A2.25 2.25 0 0 0 5.25 4.5v15A2.25 2.25 0 0 0 7.5 21.75h9A2.25 2.25 0 0 0 18.75 19.5v-15A2.25 2.25 0 0 0 16.5 2.25h-9Zm4.5 16.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Zm-2.25-12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
      <path d="M20.25 7.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5H21v1.5a.75.75 0 0 1-1.5 0v-1.5H18a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 .75-.75Z" />
    </svg>
  );
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

        <section className="relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 overflow-hidden border-y border-[#17395a] bg-[radial-gradient(circle_at_22%_18%,#184c74_0%,#0e2f4e_38%,#0a223a_70%,#081b2f_100%)] py-16 text-white sm:mt-20 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-14 sm:space-y-16">
              <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-center md:gap-12">
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
                <div className="space-y-5">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Tablice kodów QR Memorial</h2>
                  <p className="max-w-2xl text-lg leading-relaxed text-cyan-50/95">
                    Pomagamy uhonorować życie ukochanej osoby trwałymi tablicami QR, które łączą pomnik
                    z bogatym cyfrowym hołdem i szybkim dostępem do historii życia.
                  </p>
                  <Link href="/jak-to-dziala#materialy" className="btn-primary mt-2 px-6 py-3 text-sm">
                    Dowiedz się więcej
                  </Link>
                </div>
              </div>

              <div className="mx-auto h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

              <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-center md:gap-12">
                <div className="space-y-5">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Zbuduj stronę pamięci online z ekspertem</h2>
                  <p className="max-w-2xl text-lg leading-relaxed text-cyan-50/95">
                    Oferujemy wskazówki ekspertów i spersonalizowane wsparcie, które pomaga stworzyć trwałe
                    dziedzictwo cyfrowe dla kolejnych pokoleń.
                  </p>
                  <Link href="/wspolpraca" className="btn-primary mt-2 px-6 py-3 text-sm">
                    Dowiedz się więcej
                  </Link>
                </div>
                <div className="relative mx-auto h-[230px] w-[280px] overflow-hidden rounded-2xl">
                  <Image
                    src="/laptop.png"
                    alt="Tworzenie strony pamięci online"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                </div>
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
