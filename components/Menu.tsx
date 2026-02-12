'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()

useEffect(() => {
  const theme = localStorage.theme

  if (theme === 'light') {
    document.documentElement.classList.remove('dark')
    setIsDarkMode(false)
  } else if (theme === 'dark') {
    document.documentElement.classList.add('dark')
    setIsDarkMode(true)
  } else {
    // Jeśli nie ma ustawień — sprawdź preferencje systemowe
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDarkMode(false)
    }
  }
}, [])

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--surface-border)] bg-[var(--menu-background)]/95 text-[var(--foreground)] backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo-dlabliskich.svg" className="h-8 w-auto" alt="Logo Dla Bliskich" width={140} height={32} priority />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-[var(--foreground)] sm:text-2xl">DlaBliskich</span>
        </Link>
        <div className="flex items-center gap-1 md:order-2 md:gap-2 rtl:space-x-reverse">
          <button
            onClick={() => {
              const htmlEl = document.documentElement
              if (htmlEl.classList.contains('dark')) {
                htmlEl.classList.remove('dark')
                localStorage.theme = 'light'
                setIsDarkMode(false)
              } else {
                htmlEl.classList.add('dark')
                localStorage.theme = 'dark'
                setIsDarkMode(true)
              }
            }}
            role="button"
            aria-label="Change theme"
            className="theme-toggle rounded-lg p-2 text-sky-600 transition-colors hover:bg-gray-100 dark:text-sky-400 dark:hover:bg-gray-800"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
          </button>
          <a
            href="https://qr.dlabliskich.pl/auth/login"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-gray-100 hover:text-sky-600 md:inline-flex dark:hover:bg-gray-800"
          >
            Zaloguj się
          </a>
          <a
            href="https://qr.dlabliskich.pl/auth/register"
            className="hidden rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700 md:inline-flex"
          >
            Załóż konto
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Otwórz menu główne</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full items-center justify-between md:order-1 md:flex md:w-auto`} id="navbar-cta">
          <ul className="mt-3 flex flex-col gap-1 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-3 font-medium shadow-sm md:mt-0 md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
            {[
              { href: '/', label: 'Start' },
              { href: '/o-nas', label: 'O nas' },
              { href: '/jak-to-dziala', label: 'Jak to działa' },
              { href: '/materialy', label: 'Materiały' },
              { href: '/cennik', label: 'Cennik' },
              { href: '/wspolpraca', label: 'Współpraca' },
              { href: '/kapsula-czasu', label: 'Kapsuła czasu' },
              { href: '/kontakt', label: 'Kontakt' },
            ].map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors md:px-0 ${
                      isActive
                        ? 'text-sky-600 md:text-sky-600 dark:text-sky-400'
                        : 'text-[var(--foreground)] hover:text-sky-600 dark:hover:text-sky-400'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
