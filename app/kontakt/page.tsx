export default function KontaktPage() {
  return (
    <main className="page-shell max-w-6xl">
      <section className="panel bg-[#f4f6f9] p-6 sm:p-8 lg:p-10">
        <h1 className="section-title text-4xl">Kontakt</h1>
        <p className="mt-3 max-w-3xl text-gray-700">
          Napisz do nas, jeśli chcesz uruchomić stronę pamięci, zapytać o materiały graweru albo współpracę.
          Odpowiadamy możliwie szybko.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.25fr]">
          <aside className="space-y-4">
            <article className="rounded-2xl border border-[#d9e0ea] bg-white p-5">
              <h2 className="section-title text-xl">Dane kontaktowe</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p><span className="font-semibold">E-mail:</span> kontakt@dlabliskich.pl</p>
                <p><span className="font-semibold">Telefon:</span> +48 123 456 789</p>
                <p><span className="font-semibold">Godziny:</span> pon.-pt. 9:00 - 17:00</p>
              </div>
            </article>

            <article className="rounded-2xl border border-[#d9e0ea] bg-white p-5">
              <h2 className="section-title text-xl">W czym pomagamy</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>Dobór pakietu i konfiguracja strony pamięci</li>
                <li>Wybór materiału i formy kodu QR</li>
                <li>Wsparcie techniczne i opieka nad treściami</li>
              </ul>
            </article>
          </aside>

          <form className="space-y-7 rounded-[2rem] border border-[#d9e0ea] bg-[#f7f9fc] p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="name" className="block text-[1.05rem] font-semibold text-slate-700">
                  Imię i nazwisko <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Wprowadź imię i nazwisko"
                  className="block w-full rounded-[1.5rem] border border-[#ced7e3] bg-white px-5 py-3 text-slate-700 shadow-[0_6px_12px_-10px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-400"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="block text-[1.05rem] font-semibold text-slate-700">
                  E-mail <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Wprowadź e-mail"
                  className="block w-full rounded-[1.5rem] border border-[#ced7e3] bg-white px-5 py-3 text-slate-700 shadow-[0_6px_12px_-10px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="phone" className="block text-[1.05rem] font-semibold text-slate-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Wprowadź numer telefonu"
                  className="block w-full rounded-[1.5rem] border border-[#ced7e3] bg-white px-5 py-3 text-slate-700 shadow-[0_6px_12px_-10px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-400"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="topic" className="block text-[1.05rem] font-semibold text-slate-700">
                  Temat <span className="text-rose-500">*</span>
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="block w-full rounded-[1.5rem] border border-[#ced7e3] bg-white px-5 py-3 text-slate-700 shadow-[0_6px_12px_-10px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-400"
                  defaultValue=""
                >
                  <option value="" disabled>Wybierz temat</option>
                  <option value="strona-pamieci">Strona pamięci</option>
                  <option value="kod-qr">Kod QR i materiał</option>
                  <option value="wspolpraca">Współpraca</option>
                  <option value="inne">Inne</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="block text-[1.05rem] font-semibold text-slate-700">
                Wiadomość <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Opisz, w czym możemy pomóc"
                className="block w-full rounded-[1.5rem] border border-[#ced7e3] bg-white px-5 py-4 text-slate-700 shadow-[0_6px_12px_-10px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-400"
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-slate-500">Pola oznaczone * są wymagane.</p>
              <button
                type="submit"
                className="btn-primary px-7 py-3 text-sm"
              >
                Wyślij wiadomość
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
