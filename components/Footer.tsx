import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-background)] text-[var(--foreground)] transition-colors duration-300 rounded-lg shadow-none">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src="/logo-dlabliskich.svg" className="h-8 w-auto" alt="Logo Dla Bliskich" width={140} height={32} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[var(--foreground)] transition-colors duration-300">DlaBliskich</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[var(--foreground)] sm:mb-0 transition-colors duration-300">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">Strona główna</Link>
            </li>
            <li>
              <Link href="/o-nas" className="hover:underline me-4 md:me-6">O nas</Link>
            </li>
            <li>
              <Link href="/jak-to-dziala" className="hover:underline me-4 md:me-6">Jak to działa</Link>
            </li>
            <li>
              <Link href="/materialy" className="hover:underline me-4 md:me-6">Materiały</Link>
            </li>
            <li>
              <Link href="/cennik" className="hover:underline me-4 md:me-6">Cennik</Link>
            </li>
            <li>
              <Link href="/wspolpraca" className="hover:underline me-4 md:me-6">Współpraca</Link>
            </li>
            <li>
              <Link href="/kapsula-czasu" className="hover:underline me-4 md:me-6">Kapsuła czasu</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline me-4 md:me-6">FAQ</Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:underline">Kontakt</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 transition-colors duration-300" />
        <span className="block text-sm text-[var(--foreground)] sm:text-center transition-colors duration-300">
          © 2025 <Link href="/" className="hover:underline">DlaBliskich™</Link>. Wszelkie prawa zastrzeżone.
        </span>
      </div>
    </footer>
  )
}
