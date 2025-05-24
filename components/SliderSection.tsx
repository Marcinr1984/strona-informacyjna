const SliderSection = () => {
  return (
    <section className="bg-gray-200 dark:bg-[var(--primary-dark)] text-[var(--foreground)] grid place-content-center py-20 transition-colors duration-200">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center transition-colors duration-200">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Witaj na stronie <span className="text-indigo-600">Dla Bliskich</span>
          </h1>

          <p className="mt-4 text-base text-pretty text-[var(--foreground)] sm:text-lg/relaxed">
            Tworzymy cyfrowe miejsca pamięci, które pozwalają dzielić się wspomnieniami, zdjęciami i historią Twoich bliskich.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
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
        </div>
      </div>
    </section>
  );
};

export default SliderSection;