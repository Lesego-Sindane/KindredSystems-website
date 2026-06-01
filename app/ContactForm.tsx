"use client";

import { FormEvent } from "react";

const whatsappNumber = "27693368407";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "Hi Kindred Systems, I'd like to learn more about your solutions.",
      "",
      `Name: ${formData.get("name") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Business: ${formData.get("business") || ""}`,
      `Message: ${formData.get("message") || ""}`
    ].join("\n");

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink/75">
          Name
          <input
            className="h-12 rounded-md border border-ink/12 px-4 outline-none transition focus:border-forest"
            name="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink/75">
          Email
          <input
            className="h-12 rounded-md border border-ink/12 px-4 outline-none transition focus:border-forest"
            name="email"
            type="email"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink/75 sm:col-span-2">
          Business Name
          <input
            className="h-12 rounded-md border border-ink/12 px-4 outline-none transition focus:border-forest"
            name="business"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink/75 sm:col-span-2">
          Message
          <textarea
            className="min-h-36 rounded-md border border-ink/12 p-4 outline-none transition focus:border-forest"
            name="message"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-forest px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f3932] sm:w-auto"
      >
        Send on WhatsApp
        <ArrowIcon />
      </button>
    </form>
  );
}
