import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Kindred Systems",
  description:
    "Kindred Systems blog on AI, new technology, South African small business news, and the systems that help local businesses operate with more confidence.",
  openGraph: {
    title: "Kindred Systems Blog",
    description:
      "Practical writing on AI, technology, and South African small business operations.",
    url: "https://kindredsystems.co.za/blog",
    siteName: "Kindred Systems",
    images: [
      {
        url: "/images/kindred-growth-system.png",
        width: 1200,
        height: 900,
        alt: "Kindred Systems blog on business systems, AI, and local technology"
      }
    ],
    locale: "en_ZA",
    type: "website"
  }
};

const featuredTopics = [
  {
    category: "AI and automation",
    title: "New AI tools small businesses should actually pay attention to",
    excerpt:
      "A practical look at the AI products, workflows, and automations that can help local businesses respond faster, stay organised, and reduce admin.",
    meta: "Coming soon"
  },
  {
    category: "South African business",
    title: "What city-centre compliance pressure means for informal and small businesses",
    excerpt:
      "How registration, documentation, leases, and basic operating records can protect businesses when municipalities increase enforcement activity.",
    meta: "Local business watch"
  },
  {
    category: "Kindred Systems",
    title: "How better systems turn WhatsApp enquiries into real bookings",
    excerpt:
      "A behind-the-scenes view of lead capture, follow-up, appointment flows, and the customer experience choices we build for service businesses.",
    meta: "Systems guide"
  }
];

const categories = [
  "AI tools",
  "New technology",
  "South African small business",
  "Local compliance",
  "Customer experience",
  "Kindred Systems updates"
];

const storyDesk = [
  "Municipal enforcement and what business owners should prepare before trading in busy city centres.",
  "How salons, barbers, beauty businesses, repair shops, and service providers can become easier to trust online.",
  "The difference between useful AI automation and noisy software that creates more work.",
  "Local business lessons from the way South African customers discover, compare, and contact service providers."
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-moss">
      {children}
    </p>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-porcelain text-ink">
      <header className="border-b border-ink/10 bg-porcelain/92">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center" aria-label="Kindred Systems home">
            <Image
              src="/images/KS%20new%20logo.png"
              alt="Kindred Systems"
              width={869}
              height={348}
              priority
              className="h-20 w-auto object-contain sm:h-24"
            />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            <Link href="/#outcomes" className="transition hover:text-forest">
              Outcomes
            </Link>
            <Link href="/#solutions" className="transition hover:text-forest">
              Solutions
            </Link>
            <Link href="/blog" className="text-forest">
              Blog
            </Link>
            <Link href="/#contact" className="transition hover:text-forest">
              Contact
            </Link>
          </nav>
          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#0f3932]"
          >
            Contact Us
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div>
          <SectionLabel>Kindred Systems blog</SectionLabel>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl">
            Practical notes on AI, new technology, and local business growth.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68">
            We will write about tools that matter, small business news in South Africa,
            and the operational details that help businesses look more professional and
            work with more confidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {categories.slice(0, 4).map((category) => (
              <span
                key={category}
                className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink/70 shadow-line"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-soft">
          <Image
            src="/images/kindred-growth-system.png"
            alt="A Kindred Systems workspace showing business growth systems"
            width={1200}
            height={900}
            priority
            className="aspect-[4/3] h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Featured ideas</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
                What we will be covering
              </h2>
            </div>
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 text-sm font-semibold text-ink shadow-line transition hover:-translate-y-0.5 hover:border-forest/30"
            >
              Suggest a topic
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredTopics.map((topic) => (
              <article
                key={topic.title}
                className="flex h-full flex-col rounded-lg border border-ink/10 bg-porcelain p-7 shadow-line"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  {topic.category}
                </p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-ink">
                  {topic.title}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-ink/68">{topic.excerpt}</p>
                <p className="mt-8 text-sm font-semibold text-forest">{topic.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Story desk</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Local context, written for business owners.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/68">
              The goal is not tech hype. It is useful context for owners who need to
              make better decisions about compliance, customer trust, automation, and growth.
            </p>
          </div>
          <div className="grid gap-4">
            {storyDesk.map((item, index) => (
              <article
                key={item}
                className="flex gap-5 rounded-lg border border-ink/10 bg-white p-6 shadow-line"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="leading-7 text-ink/72">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-ink py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Image
              src="/images/KS%20new%20logo.png"
              alt="Kindred Systems"
              width={869}
              height={348}
              className="h-20 w-auto object-contain sm:h-24"
            />
            <p className="mt-3 max-w-md leading-7 text-white/62">
              Writing about the systems, tools, and local business context behind better customer experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/68">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/#solutions" className="hover:text-white">
              Solutions
            </Link>
            <Link href="/#contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-white/45 sm:px-8">
          Copyright 2026 Kindred Systems. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
