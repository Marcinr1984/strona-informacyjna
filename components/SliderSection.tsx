const SliderSection = () => {
  return (
    <section
      className="relative overflow-hidden py-20 text-white transition-colors duration-200 sm:py-24"
      style={{
        backgroundImage: "url('/slider-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 35%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-sky-300/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-100">
            Cyfrowa pamięć pokoleń
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight drop-shadow-md sm:text-5xl lg:text-6xl">
            Upamiętnij bliskich
            <br />
            <span className="text-sky-300">godnie i nowocześnie</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-gray-100/95 sm:text-lg">
            Tworzymy kody QR i strony pamięci, które pomagają rodzinom zachować historie,
            zdjęcia i wspomnienia na lata.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
              href="https://qr.dlabliskich.pl/auth/register"
            >
              Zamów kod QR
            </a>
            <a
              className="inline-flex rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              href="/jak-to-dziala"
            >
              Zobacz jak to działa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
