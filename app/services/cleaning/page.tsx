import Link from "next/link";
import { professionals } from "@/lib/professionals";

export default function CleaningPage() {
  

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-sm font-semibold text-blue-600">
            SKILLPAY
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Cleaning Services
          </h1>

          <p className="mt-4 text-gray-600">
            Find trusted cleaning professionals for your home or office.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 md:flex-row">
          <input
            type="text"
            placeholder="Search cleaning services..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <select className="rounded-lg border border-gray-300 px-4 py-3">
            <option>All locations</option>
            <option>Addis Ababa</option>
            <option>Bole</option>
            <option>Yeka</option>
            <option>Kirkos</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-3">
            <option>Any price</option>
            <option>Under 500 ETB</option>
            <option>500 - 1,000 ETB</option>
            <option>1,000+ ETB</option>
          </select>
        </div>
      </section>

      {/* Professionals */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Cleaning Professionals
          </h2>

          <p className="mt-1 text-gray-600">
            Choose a professional that fits your needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {professionals.map((professional) => (
            <div
              key={professional.id}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                  {professional.icon}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {professional.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {professional.location}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm text-gray-600">
                  {professional.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    From {professional.price} ETB
                  </span>

                  <span className="text-sm">
                    ⭐ {professional.rating}
                  </span>
                </div>
              </div>
              <Link
               href={`/services/cleaning/${professional.slug}/book`}
               className="mt-6 block w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
              Book This Service
              </Link>

              <Link
               href={`/services/cleaning/${professional.slug}`}
               className="mt-5 block w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
               >
               View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}