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
    <nav className="sticky top-0 z-50 bg-[var(--menu-background)] text-[var(--foreground)] shadow-none transition-colors duration-300">
      <div className="w-full flex flex-wrap items-center justify-between p-4 px-12">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo-dlabliskich.svg" className="h-8 w-auto" alt="Logo Dla Bliskich" width={140} height={32} priority />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[var(--foreground)]">DlaBliskich</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
            className="theme-toggle dark:text-sky-500 text-sky-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
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
            className="text-[var(--foreground)] hover:text-cyan-400 text-sm font-medium px-4 py-2.5 transition-colors"
          >
            Zaloguj się
          </a>
          <a
            href="https://qr.dlabliskich.pl/auth/register"
            className="register-button bg-[#1e293b] hover:bg-[#334155] text-white font-medium rounded-full text-sm px-6 py-2.5 text-center transition-colors"
          >
            Załóż konto
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Otwórz menu główne</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[var(--foreground)] rounded-lg bg-[var(--menu-background)] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[var(--menu-background)] transition-colors duration-300">
            {[
              { href: '/', label: 'Start' },
              { href: '/jak-to-dziala', label: 'Jak to działa' },
              { href: '/cennik', label: 'Cennik' },
              { href: '/faq', label: 'FAQ' },
              { href: '/kontakt', label: 'Kontakt' },
            ].map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block py-2 px-3 md:p-0 rounded-sm ${
                      isActive
                        ? 'text-cyan-400 bg-transparent md:bg-transparent md:text-cyan-400 md:dark:text-cyan-400'
                        : 'text-[var(--foreground)] hover:text-cyan-400 transition-colors'
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
