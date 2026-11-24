import Link from "next/link";
import { professionals } from "@/lib/professionals";
import BookingForm from "@/components/BookingForm";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BookingPage({
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
      <section className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <Link
            href={`/services/cleaning/${professional.slug}`}
            className="text-sm font-medium text-blue-600"
          >
            ← Back to {professional.name}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Book a Cleaning Service
            </h1>

            <p className="mt-2 text-gray-600">
              Tell us when and where you need the service.
            </p>

            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
              <BookingForm professional={professional} />
            </div>
          </div>

          <aside className="h-fit rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Professional
            </p>

            <h2 className="mt-1 text-xl font-bold text-gray-900">
              {professional.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              📍 {professional.location}
            </p>

            <div className="my-6 border-t" />

            <p className="text-sm text-gray-500">
              Service
            </p>

            <p className="mt-1 font-semibold">
              Home Cleaning
            </p>

            <div className="mt-6 flex justify-between">
              <span className="text-gray-600">
                Starting price
              </span>

              <span className="font-bold">
                {professional.price} ETB
              </span>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}