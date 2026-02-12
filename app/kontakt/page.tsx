export default function KontaktPage() {
  return (
    <main className="page-shell max-w-4xl">
      <section className="panel p-8">
        <div className="mx-auto icon-chip">✉️</div>
        <span className="eyebrow mt-4">Kontakt</span>
        <h1 className="section-title mt-4 text-center text-4xl transition-colors duration-300">
          Kontakt
        </h1>

      <form className="mt-10 mx-auto max-w-xl space-y-6 rounded-xl bg-[var(--primary-light)] p-8 transition-colors duration-300">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] transition-colors duration-300">
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] transition-colors duration-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] transition-colors duration-300">
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="btn-primary px-6 py-3"
          >
            Wyślij
          </button>
        </div>
      </form>
      </section>
    </main>
  )
}
