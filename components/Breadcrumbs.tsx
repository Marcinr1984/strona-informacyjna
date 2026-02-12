'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LABELS: Record<string, string> = {
  'o-nas': 'O nas',
  'jak-to-dziala': 'Jak to dziala',
  materialy: 'Materialy',
  cennik: 'Cennik',
  wspolpraca: 'Wspolpraca',
  'kapsula-czasu': 'Kapsula czasu',
  kontakt: 'Kontakt',
  faq: 'FAQ',
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  if (pathname === '/') {
    return null
  }
  const parts = pathname.split('/').filter(Boolean)

  return (
    <div className="border-b border-slate-200 bg-[#dfe8f1]">
      <div className="mx-auto w-full max-w-7xl px-4 py-3 text-sm text-slate-600 sm:px-6 lg:px-8">
        <Link href="/" className="hover:text-slate-800">
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
                <span className="font-medium text-slate-800">{label}</span>
              ) : (
                <Link href={href} className="hover:text-slate-800">
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
