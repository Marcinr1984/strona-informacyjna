export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <svg className="mr-2 h-8" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG paths here */}
            <path d="M25.2696 13.126C25.1955 13.6364 ..."></path>
            <defs>
              <linearGradient id="paint0_linear_11430_22515" x1="20.8102" y1="23.9532" x2="23.9577" y2="12.9901" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1724C9" />
                <stop offset="1" stopColor="#1C64F2" />
              </linearGradient>
              {/* Other gradients omitted for brevity */}
            </defs>
          </svg>
          DlaBliskich
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">Tworzymy cyfrowe miejsca pamięci, które pozwalają dzielić się wspomnieniami, zdjęciami i historią Twoich bliskich.</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li><a href="/" className="mr-4 hover:underline md:mr-6">Strona główna</a></li>
          <li><a href="/jak-to-dziala" className="mr-4 hover:underline md:mr-6">Jak to działa</a></li>
          <li><a href="/cennik" className="mr-4 hover:underline md:mr-6">Cennik</a></li>
          <li><a href="/faq" className="mr-4 hover:underline md:mr-6">FAQ</a></li>
          <li><a href="/kontakt" className="mr-4 hover:underline md:mr-6">Kontakt</a></li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 DlaBliskich.pl. Wszelkie prawa zastrzeżone.</span>
      </div>
    </footer>
  )
}