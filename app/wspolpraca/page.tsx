import Link from "next/link";

export default function WspolpracaPage() {
  return (
    <main className="page-shell max-w-5xl">
      <section className="panel p-8">
        <div className="icon-chip">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="3" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a3 3 0 0 1 0 5.74" />
          </svg>
        </div>
        <span className="eyebrow mt-4">Współpraca B2B</span>
        <h1 className="section-title mt-4 text-4xl">Zaproszenie do współpracy</h1>
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
