import Link from "next/link";
import { professionals } from "@/lib/professionals";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProfessionalPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const professional = professionals.find(
    (professional) => professional.slug === slug
  );

  if (!professional) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-3xl font-bold text-gray-900">
            Professional not found
          </h1>

          <p className="mt-3 text-gray-600">
            The professional you are looking for does not exist.
          </p>

          <Link
            href="/services/cleaning"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
          >
            Back to Cleaning Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Link
            href="/services/cleaning"
            className="text-sm font-medium text-blue-600"
          >
            ← Back to Cleaning Services
          </Link>
        </div>
      </section>

      {/* Profile */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">
              {professional.icon}
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {professional.name}
              </h1>

              <p className="mt-2 text-gray-600">
                📍 {professional.location}
              </p>

              <div className="mt-3 flex gap-4 text-sm">
                <span>⭐ {professional.rating}</span>
                <span>{professional.completedJobs} jobs</span>
                <span>{professional.experience} years experience</span>
              </div>
            </div>

          </div>

          <div className="mt-8 border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900">
              About this professional
            </h2>

            <p className="mt-3 text-gray-600">
              {professional.description}
            </p>
          </div>

          {/* Service */}
          <div className="mt-8 rounded-xl bg-gray-50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-gray-900">
                  Home Cleaning Service
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Professional cleaning service
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">
                  Starting from
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  {professional.price} ETB
                </p>
              </div>
            </div>

            <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
              Book This Service
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}