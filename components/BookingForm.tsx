"use client";

import { useState } from "react";
import type { Professional } from "@/lib/professionals";
import { supabase } from "@/lib/supabase";

type BookingFormProps = {
  professional: Professional;
};

export default function BookingForm({
  professional,
}: BookingFormProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage("");

    const { error } = await supabase
      .from("bookings")
      .insert({
        professional_id: professional.id,
        service_id: 1,
        service_date: date,
        service_time: time,
        location: location,
        price: professional.price,
        status: "pending_payment",
      });

    if (error) {
      console.error(error);
      setMessage("Booking failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    setMessage("Booking created successfully!");
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-2 block font-medium">
          Service Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
          className="w-full rounded-lg border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Preferred Time
        </label>

        <input
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
          className="w-full rounded-lg border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Service Location
        </label>

        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Example: Bole, Addis Ababa"
          required
          className="w-full rounded-lg border px-4 py-3"
        />
      </div>

      <div className="rounded-lg bg-gray-100 p-4">
        <p className="text-sm text-gray-600">
          Starting Price
        </p>

        <p className="text-2xl font-bold">
          {professional.price} Br
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-black px-6 py-3 font-semibold text-white disabled:opacity-50"
      >
        {isSubmitting
          ? "Creating Booking..."
          : "Continue to Payment"}
      </button>

      {message && (
        <p className="text-center font-medium">
          {message}
        </p>
      )}
    </form>
  );
}