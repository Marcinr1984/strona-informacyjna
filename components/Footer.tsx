import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#1b2940] bg-[radial-gradient(circle_at_22%_18%,#184c74_0%,#0e2f4e_38%,#0a223a_70%,#081b2f_100%)] text-white transition-colors duration-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/logo-dlabliskich.svg"
              className="h-8 w-auto brightness-0 invert"
              alt="Logo Dla Bliskich"
              width={140}
              height={32}
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-white transition-colors duration-300">DlaBliskich</span>
          </Link>
          <ul className="flex flex-nowrap items-center gap-7 overflow-x-auto whitespace-nowrap text-sm font-medium text-white/90 transition-colors duration-300">
            <li>
              <Link href="/" className="hover:underline">Start</Link>
            </li>
            <li>
              <Link href="/o-nas" className="hover:underline">O nas</Link>
            </li>
            <li>
              <Link href="/jak-to-dziala" className="hover:underline">Jak to działa</Link>
            </li>
            <li>
              <Link href="/cennik" className="hover:underline">Cennik</Link>
            </li>
            <li>
              <Link href="/wspolpraca" className="hover:underline">Współpraca</Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:underline">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[radial-gradient(circle_at_22%_18%,#184c74_0%,#0e2f4e_38%,#0a223a_70%,#081b2f_100%)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 text-center text-sm text-white/85 sm:px-6 lg:px-8">
          Copyright © 2026 <Link href="/" className="hover:underline">DlaBliskich</Link>. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  )
}
