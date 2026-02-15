'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LABELS: Record<string, string> = {
  'o-nas': 'O nas',
  'jak-to-dziala': 'Jak to działa',
  materialy: 'Materiały',
  cennik: 'Cennik',
  wspolpraca: 'Współpraca',
  kontakt: 'Kontakt',
  faq: 'FAQ',
  regulamin: 'Regulamin',
  'polityka-prywatnosci': 'Polityka prywatności',
  'pliki-cookie': 'Pliki cookie',
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  if (pathname === '/') {
    return null
  }
  const parts = pathname.split('/').filter(Boolean)

  return (
    <div className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
        <Link href="/" className="hover:text-slate-700">
          Start
        </Link>
        {parts.map((part, index) => {
          const href = `/${parts.slice(0, index + 1).join('/')}`
          const label = LABELS[part] ?? part
          const isLast = index === parts.length - 1

          return (
            <span key={href}>
              {' / '}
              {isLast ? (
                <span className="font-medium text-slate-600">{label}</span>
              ) : (
                <Link href={href} className="hover:text-slate-700">
                  {label}
                </Link>
              )}
            </span>
          )
        })}
      </div>
    </div>
  )
}
