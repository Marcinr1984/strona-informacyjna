import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#1b2940] bg-[radial-gradient(circle_at_22%_18%,#184c74_0%,#0e2f4e_38%,#0a223a_70%,#081b2f_100%)] text-white transition-colors duration-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_.7fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo-dlabliskich.svg"
                className="h-10 w-auto brightness-0 invert"
                alt="Logo Dla Bliskich"
                width={140}
                height={32}
              />
              <span className="whitespace-nowrap text-2xl font-semibold text-white">DlaBliskich</span>
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Menu</h3>
            <ul className="mt-4 space-y-2 text-base text-white/90">
              <li><Link href="/o-nas" className="hover:text-white">O nas</Link></li>
              <li><Link href="/jak-to-dziala" className="hover:text-white">Jak to działa</Link></li>
              <li><Link href="/cennik" className="hover:text-white">Cennik</Link></li>
              <li><Link href="/wspolpraca" className="hover:text-white">Współpraca</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Informacje</h3>
            <ul className="mt-4 space-y-2 text-base text-white/90">
              <li><Link href="/regulamin" className="hover:text-white">Regulamin</Link></li>
              <li><Link href="/polityka-prywatnosci" className="hover:text-white">Polityka prywatności</Link></li>
              <li><Link href="/pliki-cookie" className="hover:text-white">Pliki cookie</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/kontakt" className="hover:text-white">Skontaktuj się z nami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Język</h3>
            <label htmlFor="footer-language" className="sr-only">Wybierz język</label>
            <div className="relative mt-4 max-w-[150px]">
              <select
                id="footer-language"
                name="language"
                defaultValue="pl"
                className="w-full appearance-none rounded-lg border border-white/30 bg-white/10 px-3 py-2 pr-9 text-base text-white outline-none transition-colors hover:bg-white/15 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40"
              >
                <option value="pl" className="text-slate-900">Polski (PL)</option>
                <option value="en" className="text-slate-900">English (EN)</option>
                <option value="de" className="text-slate-900">Deutsch (DE)</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/85">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.512a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Obserwuj nas</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" aria-label="Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13.5 8.25H15V5.625h-1.5C10.876 5.625 9 7.5 9 10.125V12H7.125v2.625H9v3.75h2.625v-3.75h1.875L14.25 12h-2.625v-1.875c0-1.035.84-1.875 1.875-1.875Z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M7.5 3.75A3.75 3.75 0 0 0 3.75 7.5v9A3.75 3.75 0 0 0 7.5 20.25h9a3.75 3.75 0 0 0 3.75-3.75v-9A3.75 3.75 0 0 0 16.5 3.75h-9ZM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm4.125-1.875a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M6 8.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM4.875 9.75h2.25v9h-2.25v-9ZM9 9.75h2.16v1.23h.03c.3-.57 1.04-1.23 2.145-1.23 2.295 0 2.715 1.515 2.715 3.48v5.52H13.8v-4.89c0-1.17-.015-2.67-1.62-2.67-1.62 0-1.87 1.26-1.87 2.58v4.98H9v-9Z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M21.582 7.196a2.525 2.525 0 0 0-1.777-1.785C18.23 5 12 5 12 5s-6.23 0-7.805.411A2.525 2.525 0 0 0 2.418 7.2C2 8.78 2 12 2 12s0 3.22.418 4.804a2.525 2.525 0 0 0 1.777 1.785C5.77 19 12 19 12 19s6.23 0 7.805-.411a2.525 2.525 0 0 0 1.777-1.785C22 15.22 22 12 22 12s0-3.22-.418-4.804ZM10 9.75v4.5L14 12l-4-2.25Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0b1426]">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 text-center text-sm text-white/85 sm:px-6 lg:px-8">
          Copyright © 2026 <Link href="/" className="hover:underline">DlaBliskich</Link>. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  )
}
