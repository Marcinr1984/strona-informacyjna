import Link from "next/link";

export default function WspolpracaPage() {
  return (
    <main className="page-shell max-w-5xl">
      <section className="panel p-8">
        <div className="flex items-center gap-3">
          <div className="icon-chip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M8.25 6a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM2.25 20.105a7.5 7.5 0 0 1 15 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 9.75 22.5 18.683 18.683 0 0 1 2.687 20.8a.75.75 0 0 1-.437-.695ZM16.5 8.25a.75.75 0 0 1 .75-.75h1.5V6a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0V9h-1.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="section-title text-4xl">Zaproszenie do współpracy</h1>
        </div>
        <p className="mt-5 text-gray-700">
          Dla Bliskich zaprasza firmy i organizacje do oferowania nowoczesnych form
          upamiętnienia: eleganckich kodów QR, które pozwalają zachować wspomnienia,
          zdjęcia i historie życia bliskich w subtelnej, trwałej i godnej formie.
        </p>
        <p className="mt-3 text-gray-700">
          To idealne rozwiązanie dla firm, które chcą poszerzyć ofertę o produkty łączące
          tradycję z nowoczesnością i dać klientom wyjątkowe formy pamięci.
        </p>
      </section>

      <section className="panel mt-8 p-8">
        <h2 className="section-title text-2xl">Zarejestruj swoją firmę</h2>
        <p className="mt-3 text-gray-700">
          Jeśli chcesz dołączyć do grona partnerów Dla Bliskich, wypełnij krótki formularz
          rejestracyjny.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://qr.dlabliskich.pl/auth/register"
            className="btn-primary px-5 py-3 text-sm"
          >
            Przejdź do rejestracji
          </a>
          <Link
            href="/kontakt"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-slate-50"
          >
            Kontakt
          </Link>
        </div>
      </section>

      <section className="panel mt-8 p-8">
        <h2 className="section-title text-2xl">Potrzebujesz więcej informacji?</h2>
        <p className="mt-3 text-gray-700">
          Odpowiemy na pytania dotyczące współpracy, materiałów, kosztów i możliwości
          personalizacji.
        </p>
        <p className="mt-4 text-gray-700">
          E-mail: kontakt@dlabliskich.pl
          <br />
          Tel.: +48 123 456 789
        </p>
      </section>
    </main>
  );
}
