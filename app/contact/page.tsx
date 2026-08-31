import ContactForm from "../ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-porcelain text-ink">
      <header className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <a href="/" className="flex items-center">
          <Image src="/images/KS%20new%20logo.png" alt="Kindred Systems" width={300} height={120} className="h-12 w-auto object-contain" />
        </a>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sage">Ready to stop losing leads?</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">Let Us Build The System Behind Your Next Stage Of Growth</h1>
            <p className="mt-6 text-ink/75">Open the short contact form to share a few details and we'll follow up.</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
