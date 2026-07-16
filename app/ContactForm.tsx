export default function ContactForm() {
  return (
    <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-soft sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
        Start the conversation
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-navy sm:text-3xl">
        A calm first step towards better growth
      </h3>
      <p className="mt-4 text-base leading-7 text-charcoal/70">
        We help you remove the noise from daily operations so your team can
        focus on serving customers with confidence.
      </p>

      <div className="mt-8 rounded-[1.25rem] border border-navy/10 bg-cream p-3 shadow-line">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
          Quick contact
        </p>
        <iframe
          src="https://tally.so/r/KYZZ17"
          title="Kindred Systems enquiry form"
          className="mt-3 h-[760px] w-full rounded-xl border border-navy/10 bg-white"
          loading="lazy"
          allow="clipboard-write"
        />
      </div>

      <ul className="mt-8 space-y-3 text-sm text-charcoal/75">
        <li>• Faster responses for leads and appointments.</li>
        <li>• Clear enquiry capture without extra admin.</li>
        <li>• A simple path to discuss your next growth system.</li>
      </ul>
    </div>
  );
}
