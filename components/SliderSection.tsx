const SliderSection = () => {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12"
      style={{
        backgroundImage: "url('/slider-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.2)]">
          <div className="grid md:grid-cols-2">
            <div className="hero-gradient p-8 text-white sm:p-10">
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
                Twoje wspomnienia
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight">
                Witaj w DlaBliskich
              </h1>
              <p className="mt-4 max-w-lg text-sm text-cyan-50 sm:text-base">
                Tworzymy strony pamieci i kody QR, ktore pomagaja rodzinom przechowywac
                historie zycia, zdjecia i wspomnienia bliskich.
              </p>
              <div className="mt-6 grid max-w-md grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/25 bg-white/10 p-3">
                  <p className="text-xs uppercase tracking-wide text-cyan-50/90">Opiekunowie</p>
                  <p className="mt-1 text-2xl font-semibold">+200</p>
                </div>
                <div className="rounded-xl border border-white/25 bg-white/10 p-3">
                  <p className="text-xs uppercase tracking-wide text-cyan-50/90">Strony pamieci</p>
                  <p className="mt-1 text-2xl font-semibold">5 000+</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 sm:p-10">
              <h2 className="text-3xl font-semibold text-slate-800">
                Zacznij teraz
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Zaloguj sie do kreatora lub zaloz konto i stworz strone pamieci krok po kroku.
              </p>
              <div className="mt-7 space-y-3">
                <a
                  className="inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  href="https://qr.dlabliskich.pl/auth/register"
                >
                  Utworz konto
                </a>
                <a
                  className="inline-flex w-full justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                  href="https://qr.dlabliskich.pl/auth/login"
                >
                  Zaloguj sie
                </a>
                <a
                  className="inline-flex w-full justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                  href="/jak-to-dziala"
                >
                  Jak to dziala
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
