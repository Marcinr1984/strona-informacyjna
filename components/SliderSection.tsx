const SliderSection = () => {
  return (
    <section
      className="relative -mt-[76px] overflow-hidden pb-36 pt-[112px] sm:-mt-[84px] sm:pb-44 sm:pt-[132px]"
      style={{
        backgroundImage: "url('/slider-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/35 to-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] backdrop-blur-md">
            Twoje wspomnienia
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl">
            Witaj w DlaBliskich
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cyan-50/95">
            Tworzymy strony pamieci i kody QR, ktore pomagaja rodzinom przechowywac historie
            zycia, zdjecia i wspomnienia bliskich.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="btn-primary px-6 py-3 text-sm"
              href="https://qr.dlabliskich.pl/auth/register"
            >
              Utworz konto
            </a>
            <a
              className="btn-glass px-6 py-3 text-sm"
              href="https://qr.dlabliskich.pl/auth/login"
            >
              Zaloguj sie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
