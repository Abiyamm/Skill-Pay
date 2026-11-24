import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold text-blue-600">
            SKILLPAY ETHIOPIA
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Find a Service.
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Book trusted professionals for cleaning, repairs, tutoring,
            technology, beauty, automotive services and more.
          </p>

          {/* Search */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  What service do you need?
                </label>
                <input
                  type="text"
                  placeholder="Cleaner, plumber, tutor..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Where?
                </label>
                <input
                  type="text"
                  placeholder="Addis Ababa"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-end">
                <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 md:w-auto">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Explore Services
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50">
              Become a Professional
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Services
            </h2>
            <p className="mt-2 text-gray-600">
              Find professionals for everyday jobs.
            </p>
          </div>

          {/* Grid Container for Services */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md" href="/services/cleaning">
              <div className="text-3xl">🧹</div>
              <h3 className="mt-4 font-semibold">Cleaning</h3>
              <p className="mt-2 text-sm text-gray-500">
                Home and office cleaning
              </p>
            </Link>

            <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md">
              <div className="text-3xl">🔧</div>
              <h3 className="mt-4 font-semibold">Plumbing</h3>
              <p className="mt-2 text-sm text-gray-500">
                Plumbing and water services
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-4 font-semibold">Electrical</h3>
              <p className="mt-2 text-sm text-gray-500">
                Electrical installation and repair
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md">
              <div className="text-3xl">💻</div>
              <h3 className="mt-4 font-semibold">Technology</h3>
              <p className="mt-2 text-sm text-gray-500">
                Computer and IT services
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md">
              <div className="text-3xl">📚</div>
              <h3 className="mt-4 font-semibold">Tutoring</h3>
              <p className="mt-2 text-sm text-gray-500">
                Find tutors and teachers
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md">
              <div className="text-3xl">💄</div>
              <h3 className="mt-4 font-semibold">Beauty</h3>
              <p className="mt-2 text-sm text-gray-500">
                Beauty and personal care
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md">
              <div className="text-3xl">🚗</div>
              <h3 className="mt-4 font-semibold">Automotive</h3>
              <p className="mt-2 text-sm text-gray-500">
                Vehicle repair and services
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md">
              <div className="text-3xl">🎨</div>
              <h3 className="mt-4 font-semibold">Design & Media</h3>
              <p className="mt-2 text-sm text-gray-500">
                Creative and digital services
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}