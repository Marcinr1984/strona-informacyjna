'use client'

import { usePathname } from 'next/navigation'

function PromoIllustration() {
  return (
    <div className="relative mx-auto h-64 w-full max-w-[320px] overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-100 via-sky-50 to-violet-100">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-300/60 blur-xl" />
      <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-violet-300/50 blur-xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl border border-cyan-200 bg-white/80 p-6 shadow-lg backdrop-blur">
          <svg viewBox="0 0 64 64" className="h-24 w-24 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="22" cy="18" r="7" />
            <path d="M10 42c1-8 6-13 12-13s11 5 12 13" />
            <rect x="35" y="14" width="20" height="14" rx="3" />
            <path d="M45 18v6M42 21h6" />
            <path d="M37 40h18" />
            <path d="M40 46h12" />
            <path d="M44 34v16" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function SubpagePromo() {
  const pathname = usePathname()
  if (pathname === '/') {
    return null
  }

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white py-12 shadow-[0_14px_35px_-26px_rgba(15,23,42,0.45)] sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="section-title text-4xl leading-tight sm:text-5xl">
              Stwórz darmowe konto i zacznij od razu
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-700">
              Rozpocznij tworzenie strony pamięci bez kosztów na start. Dodawaj wspomnienia,
              zdjęcia i historie życia, a w dowolnym momencie rozszerz konto o dodatkowe funkcje.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://qr.dlabliskich.pl/auth/register"
                className="btn-primary px-7 py-3 text-sm"
              >
                Stwórz swoje darmowe konto
              </a>
              <a
                href="https://qr.dlabliskich.pl/auth/login"
                className="inline-flex rounded-lg border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Mam już konto
              </a>
            </div>
          </div>
          <PromoIllustration />
        </div>
      </div>
    </section>
  )
}
