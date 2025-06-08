export default function KontaktPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[var(--foreground)] transition-colors duration-300">
        Kontakt
      </h1>

      <form
        className="mt-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] shadow-md p-8 space-y-6 transition-colors duration-300"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] transition-colors duration-300">
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
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
              className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
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
            className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 transition-colors"
          >
            Wyślij
          </button>
        </div>
      </form>
    </main>
  )
}
