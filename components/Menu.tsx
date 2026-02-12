'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/jak-to-dziala', label: 'Jak to dziala' },
  { href: '/materialy', label: 'Materialy' },
  { href: '/cennik', label: 'Cennik' },
  { href: '/wspolpraca', label: 'Wspolpraca' },
  { href: '/kapsula-czasu', label: 'Kapsula czasu' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Menu() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Wymuszamy jasny layout strony informacyjnej, jak w kreatorze.
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-[#0b1426] text-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo-dlabliskich.svg" alt="DlaBliskich" width={140} height={32} className="h-8 w-auto" priority />
              <span className="text-2xl font-semibold">DlaBliskich</span>
            </Link>
          </div>

          <div className="flex items-center justify-end gap-2">
            <a
              href="https://qr.dlabliskich.pl/auth/login"
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 md:inline-flex"
            >
              Zaloguj sie
            </a>
            <a
              href="https://qr.dlabliskich.pl/auth/register"
              className="hidden rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
            >
              Zaloz konto
            </a>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#131d33] text-white md:hidden"
              aria-label="Otworz menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto hidden w-full max-w-7xl items-center justify-between px-4 sm:flex sm:px-6 lg:px-8">
          <nav className="flex h-14 items-center gap-7 text-sm">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 transition-colors ${
                    active ? 'font-semibold text-cyan-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-[11px] h-[3px] rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-rose-400" />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-3 sm:hidden">
            <nav className="grid gap-2 text-sm">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 ${
                      active ? 'bg-cyan-50 font-semibold text-cyan-700' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a href="https://qr.dlabliskich.pl/auth/login" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">
                Zaloguj sie
              </a>
              <a href="https://qr.dlabliskich.pl/auth/register" className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-2 font-semibold text-white">
                Zaloz konto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
