import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "./posts";

export const dynamic = "force-dynamic";

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

const categories = [
  "AI tools",
  "New technology",
  "South African small business",
  "Digital credibility",
  "Local SEO",
  "WhatsApp Business",
  "Local compliance",
  "Customer experience",
  "Kindred Systems updates"
];

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
  const posts = getPublishedPosts();

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-ink">
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-between px-5">
          <Link href="/" className="text-base font-semibold text-ink" aria-label="Kindred Systems home">
            Kindred Systems
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-ink/68 md:flex">
            <Link href="/#outcomes" className="transition hover:text-forest">
              Outcomes
            </Link>
            <Link href="/#solutions" className="transition hover:text-forest">
              Solutions
            </Link>
            <Link href="/blog" className="text-forest">
              Blog
            </Link>
            <Link href="/#process" className="transition hover:text-forest">
              Process
            </Link>
            <Link href="/#contact" className="transition hover:text-forest">
              Contact
            </Link>
          </nav>
          <Link
            href="/#contact"
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-ink/10 bg-white px-4 text-sm font-semibold text-ink transition hover:border-forest/40"
          >
            Contact
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">
            The Kindred Systems Blog
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl">
            Notes on AI, technology, and running a sharper South African business.
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            Useful, plain-English writing for owners who want to understand what is changing,
            what matters locally, and what to do next without getting buried in tech talk.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-md border border-ink/10 bg-white px-3 py-1.5 text-sm text-ink/65"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            <div className="divide-y divide-ink/10">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="py-8 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-ink/52">
                    <span>{post.date}</span>
                    <span aria-hidden="true">/</span>
                    <span>{post.category}</span>
                    <span aria-hidden="true">/</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-normal sm:text-3xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-forest">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-ink/70">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest"
                  >
                    Read article
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>

            <aside className="h-fit border-t border-ink/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <h2 className="text-base font-semibold">What we cover</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                AI tools, new technology, customer experience, compliance, payments,
                and practical systems for South African small businesses.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest"
              >
                Suggest a topic
                <ArrowIcon />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="max-w-3xl border border-ink/10 bg-white p-6">
          <h2 className="text-xl font-semibold tracking-normal">Weekly research idea</h2>
          <p className="mt-3 leading-7 text-ink/70">
            A weekly blog workflow can track credible tech, AI, payments, and South African
            business sources, draft a short article, and queue it for review before publishing.
            The important part is keeping a human approval step so the posts stay accurate,
            local, and written in the Kindred voice.
          </p>
          <div className="mt-5">
            <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
              Plan the automation
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Kindred Systems. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:text-forest">
              Home
            </Link>
            <Link href="/#solutions" className="hover:text-forest">
              Solutions
            </Link>
            <Link href="/#contact" className="hover:text-forest">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
