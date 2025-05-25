const SliderSection = () => {
  return (
    <section
      className="relative text-white py-20 transition-colors duration-200"
      style={{
        backgroundImage: "url('/slider-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      />
      <div className="relative z-10 mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center transition-colors duration-200 relative">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl drop-shadow-md leading-tight max-w-xl mx-auto">
              Witaj na stronie
              <br />
              <span style={{ color: "var(--color-sky-500)" }}>Dla Bliskich</span>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-100 sm:text-lg/relaxed drop-shadow">
              Tworzymy cyfrowe miejsca pamięci, które pozwalają dzielić się wspomnieniami, zdjęciami i historią Twoich bliskich.
            </p>

            <div className="mt-6 flex justify-center gap-4 sm:mt-8">
              <a
                className="inline-block rounded px-5 py-3 font-medium text-white shadow-sm transition-colors hover:opacity-90"
                style={{ backgroundColor: "var(--color-sky-500)", border: "1px solid var(--color-sky-500)" }}
                href="#"
              >
                Zacznij teraz
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                href="#"
              >
                Dowiedz się więcej
              </a>
            </div>
          </div> {/* koniec .text-center */}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;