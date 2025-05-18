"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-700 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav className="mt-4 flex flex-col space-y-2 text-gray-700 font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Strona główna</Link>
          <Link href="/o-nas" onClick={() => setOpen(false)}>O nas</Link>
          <Link href="/oferta" onClick={() => setOpen(false)}>Oferta</Link>
          <Link href="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
        </nav>
      )}
    </div>
  );
}