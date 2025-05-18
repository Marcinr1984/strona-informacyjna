export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6">
        Witaj na stronie <span className="text-blue-600">dla bliskich</span>
      </h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Tworzymy cyfrowe miejsca pamięci, które pozwalają dzielić się wspomnieniami, zdjęciami i historią Twoich bliskich.
      </p>
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition"
      >
        Utwórz stronę pamięci
      </a>
    </main>
  );
}