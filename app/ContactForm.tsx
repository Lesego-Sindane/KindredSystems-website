export default function ContactForm() {
  return (
    <div className="rounded-xl border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
        Contact options
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
        Start with a quick conversation
      </h3>
      <p className="mt-4 text-base leading-7 text-ink/70">
        We remove the friction from enquiries and bookings so your team can
        focus on serving customers, not chasing messages.
      </p>

      <div className="mt-8 rounded-2xl border border-ink/10 bg-linen/70 p-3 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
          WhatsForm
        </p>
        <iframe
          src="https://whatsform.com/oxBk-Y"
          title="Talk To Kindred Systems WhatsForm"
          className="mt-3 h-[520px] w-full rounded-xl border border-ink/10 bg-white"
          loading="lazy"
          allow="clipboard-write"
        />
      </div>

      <ul className="mt-8 space-y-3 text-sm text-ink/75">
        <li>• Faster response times for leads and appointments.</li>
        <li>• Clear enquiry capture without manual follow-up.</li>
        <li>• A simple path to discuss your next growth system.</li>
      </ul>
    </div>
  );
}
