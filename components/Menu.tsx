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
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="w-full border-b border-white/18 bg-slate-950/30 text-white backdrop-blur-xl">
        <div className="flex w-full items-center justify-between gap-4 px-5 py-3 lg:px-8 xl:px-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-dlabliskich.svg" alt="DlaBliskich" width={140} height={32} className="h-8 w-auto" priority />
            <span className="text-2xl font-semibold">DlaBliskich</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 px-6 text-sm lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${active ? 'text-cyan-300' : 'text-white/85 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <span className="mx-2 h-7 w-px bg-white/45" />
            <a
              href="https://qr.dlabliskich.pl/auth/login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/12"
            >
              Zaloguj sie
            </a>
            <a
              href="https://qr.dlabliskich.pl/auth/register"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Zaloz konto
            </a>
          </div>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-black/20 text-white lg:hidden"
              aria-label="Otworz menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="border-t border-white/20 bg-slate-950/38 px-4 py-3 backdrop-blur-xl lg:hidden">
            <nav className="grid gap-2 text-sm">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 ${active ? 'bg-white/15 text-cyan-300' : 'text-white/90 hover:bg-white/10'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a href="https://qr.dlabliskich.pl/auth/login" className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">
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
