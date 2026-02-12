export default function KontaktPage() {
  return (
    <main className="page-shell max-w-4xl">
      <section className="panel bg-[#f4f6f9] p-6 sm:p-8">
        <h1 className="section-title text-4xl">Kontakt</h1>

        <form className="mt-6 space-y-7 rounded-[2rem] border border-[#d9e0ea] bg-[#f7f9fc] p-6 sm:p-8">
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
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Wprowadź email"
                className="block w-full rounded-[1.5rem] border border-[#ced7e3] bg-white px-5 py-3 text-slate-700 shadow-[0_6px_12px_-10px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="block text-[1.05rem] font-semibold text-slate-700">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Opisz, w czym możemy pomóc"
              className="block w-full rounded-[1.5rem] border border-[#ced7e3] bg-white px-5 py-4 text-slate-700 shadow-[0_6px_12px_-10px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-400"
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="btn-primary px-7 py-3 text-sm"
            >
              Wyślij
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
