export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start p-6 sm:p-10">
      <img
        src="/logo-just-art-color.svg"
        alt="Just Art - Logo"
        className="mt-6 sm:mt-8 mb-4 sm:mb-6 w-64 sm:w-80 md:w-[28rem] h-auto mx-auto"
      />
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mt-2 mb-6">Se Vende</h1>

      <div className="w-full max-w-2xl mb-10">
        <table className="w-full text-left border border-neutral-200 rounded-lg overflow-hidden text-sm sm:text-base">
          <tbody className="divide-y divide-neutral-200">
            <tr className="odd:bg-white even:bg-neutral-50">
              <th className="p-4 font-medium text-neutral-600 w-1/3">Costo</th>
              <td className="p-4 font-semibold text-neutral-900">MXN $350,000 pesos</td>
            </tr>
            <tr className="odd:bg-white even:bg-neutral-50">
              <th className="p-4 font-medium text-neutral-600">Autor</th>
              <td className="p-4 text-neutral-900">G. Muzquiz</td>
            </tr>
            <tr className="odd:bg-white even:bg-neutral-50">
              <th className="p-4 font-medium text-neutral-600">Técnica</th>
              <td className="p-4 text-neutral-900">Mixta</td>
            </tr>
            <tr className="odd:bg-white even:bg-neutral-50">
              <th className="p-4 font-medium text-neutral-600">Medidas Aprox</th>
              <td className="p-4 text-neutral-900">1.83 x 120</td>
            </tr>
            <tr className="odd:bg-white even:bg-neutral-50">
              <th className="p-4 font-medium text-neutral-600">Ubicación</th>
              <td className="p-4 text-neutral-900">Fuentes del Valle</td>
            </tr>
            <tr className="odd:bg-white even:bg-neutral-50">
              <th className="p-4 font-medium text-neutral-600">Envío sin costo</th>
              <td className="p-4 text-neutral-900">Solamente Dentro de San Pedro Garza García</td>
            </tr>
            <tr className="odd:bg-white even:bg-neutral-50">
              <th className="p-4 font-medium text-neutral-600">Informes</th>
              <td className="p-4 text-neutral-900">No llamadas.  Solo vía WhatsApp al <a href="https://wa.me/528118074433" target="_blank" rel="noopener noreferrer" className="text-green-600 underline hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded" aria-label="Abrir chat de WhatsApp con el 81 1807 4433">81 1807 4433</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 gap-6">
        <img src="/2a.jpg" alt="Foto 4" className="w-full h-auto rounded-md object-contain" />
        <img src="/1a.jpg" alt="Foto 2" className="w-full h-auto rounded-md object-contain" />
      </div>
    </div>
  );
}
