import Link from "next/link";

const links = [
  ["TikTok", "https://www.tiktok.com/@crispycrumbs_za"],
  ["Facebook", "https://www.facebook.com/profile.php?id=61592838853091"],
  ["Instagram", "https://www.instagram.com/crispycrumbs_za/"],
  ["Website", "https://crispycrumbs.co.za"]
];

export default function CrispyCrumbsPage() {
  return (
    <main className="min-h-screen bg-porcelain px-5 py-10 text-ink sm:px-8 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/#clients" className="text-sm font-semibold text-forest transition hover:text-sage">
          Back to clients
        </Link>

        <section className="mt-16 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">Bakery</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-normal sm:text-7xl">Crispy Crumbs</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72">
            A warm, polished digital presence for a bakery that wants to make every first impression feel as good as the work behind it.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-ink/10 bg-white px-5 text-sm font-semibold text-ink shadow-line transition hover:-translate-y-0.5 hover:border-forest/30"
              >
                {label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}