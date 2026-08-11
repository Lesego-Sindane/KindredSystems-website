import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedPosts } from "../posts";

export const dynamic = "force-dynamic";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPosts().find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article not found | Kindred Systems"
    };
  }

  return {
    title: `${post.title} | Kindred Systems Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://kindredsystems.co.za/blog/${post.slug}`,
      siteName: "Kindred Systems",
      locale: "en_ZA",
      type: "article"
    }
  };
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPublishedPosts().find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-ink">
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex min-h-16 max-w-3xl items-center justify-between px-5">
          <Link href="/" className="text-base font-semibold text-ink" aria-label="Kindred Systems home">
            Kindred Systems
          </Link>
          <nav className="flex items-center gap-5 text-sm text-ink/65">
            <Link href="/blog" className="hover:text-forest">
              Blog
            </Link>
            <Link href="/#process" className="hover:text-forest">
              Process
            </Link>
            <Link href="/#contact" className="hover:text-forest">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
          <span className="rotate-180">
            <ArrowIcon />
          </span>
          Back to blog
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-ink/52">
          <span>{post.date}</span>
          <span aria-hidden="true">/</span>
          <span>{post.category}</span>
          <span aria-hidden="true">/</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-ink/70">{post.intro}</p>

        <div className="mt-10 space-y-10 border-t border-ink/10 pt-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold tracking-normal">{section.heading}</h2>
              <div className="mt-4 space-y-5">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 text-ink/72">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 border-y border-ink/10 py-8">
          <h2 className="text-xl font-semibold tracking-normal">What to take from this</h2>
          <ul className="mt-5 space-y-3 text-ink/72">
            {post.takeaways.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-base font-semibold tracking-normal">Sources</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink/65">
            {post.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer" className="underline decoration-ink/25 underline-offset-4 hover:text-forest">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
