'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/jak-to-dziala', label: 'Jak to działa' },
  { href: '/cennik', label: 'Cennik' },
  { href: '/wspolpraca', label: 'Współpraca' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Menu() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const solidMenuClasses = 'border-[#1b2940] bg-[#0b1426]'

  useEffect(() => {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }, [])

  useEffect(() => {
    if (!isHome) {
      setScrolled(false)
      return
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 120)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`relative w-full overflow-hidden border-b text-white ${
          isHome && !scrolled
            ? 'border-white/20 bg-slate-950/20 backdrop-blur-2xl'
            : solidMenuClasses
        }`}
      >
        {isHome && !scrolled && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-white/[0.08]" />
        )}
        <div className="relative flex w-full items-center justify-between gap-4 px-5 py-5 lg:px-8 xl:px-12">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-dlabliskich.svg"
              alt="DlaBliskich"
              width={140}
              height={32}
              className="h-8 w-auto [filter:brightness(0)_invert(1)]"
              priority
            />
            <span className="text-2xl font-semibold">DlaBliskich</span>
          </Link>

          <nav className="ml-auto hidden items-center gap-7 px-4 text-[15px] font-medium lg:flex">
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
            <span className="mx-2 h-8 w-px bg-white/55" />
            <a
              href="https://qr.dlabliskich.pl/auth/login"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/12"
            >
              Zaloguj się
            </a>
            <a
              href="https://qr.dlabliskich.pl/auth/register"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Załóż konto
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
          <div
            id="mobile-menu"
            className={`border-t px-4 py-3 lg:hidden ${
              isHome && !scrolled
                ? 'border-white/20 bg-slate-950/38 backdrop-blur-xl'
                : solidMenuClasses
            }`}
          >
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
                Zaloguj się
              </a>
              <a href="https://qr.dlabliskich.pl/auth/register" className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-2 font-semibold text-white">
                Załóż konto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
