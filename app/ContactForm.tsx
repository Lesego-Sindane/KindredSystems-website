const typeformHref = "https://form.typeform.com/to/jGuda96s";

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
  return (
    <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
      <iframe
        src={typeformHref}
        title="Kindred Systems enquiry form"
        className="h-[640px] w-full border-0"
        allow="camera; microphone; autoplay; encrypted-media;"
      />
      <div className="border-t border-ink/10 bg-porcelain p-5">
        <a
          href={typeformHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-forest px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f3932] sm:w-auto"
        >
          Open Enquiry Form
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}
