import Link from "next/link";

export default function WspolpracaPage() {
  return (
    <main className="page-shell max-w-5xl">
      <section className="panel p-8">
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
