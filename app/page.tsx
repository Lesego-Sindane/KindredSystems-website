"use client";

import Image from "next/image";
import { useState } from "react";
import ContactForm from "./ContactForm";

const whatsappNumber = "27693368407";
const whatsappMessage = encodeURIComponent(
  "Hi Kindred Systems, I'd like to learn more about your solutions."
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const emailAddress = "hello@kindredsystems.co.za";
const instagramUrl = "https://www.instagram.com/kindredsystems_za/";
const facebookUrl = "https://www.facebook.com/profile.php?id=61590265517734";
const linkedinUrl = "https://www.linkedin.com/company/kindredsystems-za/about/?viewAsMember=true";

const navItems = [
  ["Outcomes", "#outcomes"],
  ["Solutions", "#solutions"],
  ["Process", "#process"],
  ["Contact", "#contact"]
];

const problems = [
  "Your customer experience feels inconsistent",
  "Important details depend on memory and manual notes",
  "Appointments and requests move too slowly",
  "Follow-ups slip through the cracks",
  "Your team spends more time managing work than doing it",
  "Growth makes the business feel busier, not better"
];

const outcomes = [
  {
    title: "Appear More Professional",
    body: "Create a polished first impression through every customer touchpoint."
  },
  {
    title: "Operate With Consistency",
    body: "Give your team a reliable system they can trust day after day."
  },
  {
    title: "Make Booking Feel Seamless",
    body: "Turn enquiries into appointments with a more refined process."
  },
  {
    title: "Stay Organized",
    body: "Keep your workflows, customers, and operations aligned in one place."
  },
  {
    title: "Improve Follow-Up",
    body: "Make sure every opportunity gets the attention it deserves."
  },
  {
    title: "Scale With Confidence",
    body: "Handle more demand without adding operational friction."
  }
];

const pricingPlans = [
  {
    name: "Launch",
    price: "Starting from R1,200",
    note: "Build your professional foundation",
    headline: "Perfect for businesses taking the first step toward a more professional operation.",
    description:
      "A strong starting point for businesses that want to look sharper, operate more clearly, and create a better first impression.",
    details: [
      "Professional digital presence",
      "Business registration included (you only pay the CIPC fee)",
      "Essential business systems",
      "Simple customer automation",
      "Setup and onboarding"
    ],
    cta: "Start Your Journey"
  },
  {
    name: "Grow",
    price: "Starting from R2,000",
    note: "Turn professionalism into momentum",
    headline: "Designed for growing businesses ready to save time and deliver a more consistent customer experience.",
    description:
      "A more complete setup for businesses that are growing and need stronger systems behind the scenes.",
    details: [
      "Advanced customer automation",
      "Booking systems",
      "Professional customer communication",
      "Lead management",
      "Business process optimisation"
    ],
    cta: "Book a Discovery Call"
  },
  {
    name: "Scale",
    price: "Custom Investment",
    note: "Operate with confidence",
    headline: "For established businesses ready to streamline operations, support their team, and build systems for long-term growth.",
    description:
      "Every Scale engagement is tailored to your business, with the right mix of systems, automation, AI, and customer operations.",
    details: [
      "Tailored systems strategy",
      "Automation and AI recommendations",
      "Customer operations support",
      "Team workflow optimisation",
      "Long-term growth systems"
    ],
    cta: "Let's Talk"
  }
];

const addOns = [
  {
    title: "Facebook DM Automation",
    body: "Auto-respond to page messages and capture leads",
    price: "R500 once-off"
  },
  {
    title: "Instagram DM Automation",
    body: "Reply to DMs and story replies automatically",
    price: "R500 once-off"
  },
  {
    title: "Meta Unified Inbox",
    body: "Both channels, one bot logic",
    price: "R800 once-off (save R200)"
  },
  {
    title: "Google Review Requester",
    body: "Auto-send a review request after every booking",
    price: "R200 once-off"
  },
  {
    title: "Promo Broadcasts",
    body: "Send bulk WhatsApp messages to your lead list",
    price: "R80/broadcast"
  },
  {
    title: "Landing Page",
    body: "A one-page website to link your leads to for more info.",
    price: "R1000"
  }
];

const steps = [
  "Customer reaches out",
  "Important information is captured",
  "Enquiries are organized",
  "You receive qualified opportunities",
  "You convert more customers"
];

const demos = [
  "Medspa enquiry intake",
  "Home services booking desk",
  "Professional services lead room"
];

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

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2.02C6.72 2.02 2.45 6.27 2.45 11.57c0 1.97.56 3.84 1.54 5.43L2 22l5.16-1.35a9.56 9.56 0 0 0 4.88 1.3c5.32 0 9.59-4.25 9.59-9.55 0-2.55-.99-4.96-2.79-6.76A9.56 9.56 0 0 0 12.04 2.02Zm0 16.8a7.87 7.87 0 0 1-4.01-1.1l-.29-.17-3.06.8.82-2.98-.19-.3a7.86 7.86 0 0 1-1.22-4.2c0-4.35 3.54-7.89 7.9-7.89 2.11 0 4.09.82 5.57 2.31a7.84 7.84 0 0 1 2.31 5.58c0 4.35-3.54 7.89-7.9 7.89Zm4.46-5.95c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.17-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.18-1.41-1.32-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.41-.14 0-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01 0 1.18.86 2.33 1 2.49.14.16 1.7 2.6 4.16 3.56.58.25 1.03.4 1.38.52.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function WhatsAppLogoIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M7.2 18.1 4 19l.9-3.1a8 8 0 1 1 2.3 2.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.7c.2-.4.4-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.7 2.1 3 2.7l.5-.6c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.6v.5c0 .4-.2.7-.6.8-.7.3-1.5.3-2.5 0a8.4 8.4 0 0 1-5.6-5.5c-.3-.9-.3-1.6-.1-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 4h2.2v3.3h-1.3c-.7 0-1 .3-1 1v1.4H16l-.2 2.6h-1.9V20h-2.5v-7.7H9.6v-2.6h1.8V7.7c0-1.8 1.1-2.7 3-2.7Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 7.2a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6ZM5.7 8.6h2.5V18H5.7V8.6Zm4.1 0h2.4v1.2h.1c.3-.7 1.1-1.4 2.3-1.4 2.5 0 2.9 1.7 2.9 3.8V18h-2.5v-7.4c0-1.9-.1-4.3-2.6-4.3-2.1 0-2.5 1.6-2.5 3.2V18H9.8V8.6Z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-moss">
      {children}
    </p>
  );
}

function ChatIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 19 15.5H9l-4 3v-3H5A1.5 1.5 0 0 1 3.5 13V7A1.5 1.5 0 0 1 5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 9.5h8M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function XIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen ? (
        <div className="w-72 rounded-[1.25rem] border border-ink/10 bg-white p-4 shadow-soft">
          <p className="text-sm font-semibold text-navy">Need help choosing the right system?</p>
          <p className="mt-2 text-sm leading-6 text-charcoal/70">
            Start a quick chat with Kindred Systems.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={whatsappHref}
              className="inline-flex items-center justify-center rounded-full bg-[#1f8f5f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#16754d]"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-cream px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-[#f2e9d8]"
            >
              Email us
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label="Toggle chat options"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#0f3932]"
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <ChatIcon className="h-6 w-6" />}
      </button>
    </div>
  );
}

function Button({
  children,
  href,
  variant = "primary"
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 ${
        variant === "primary"
          ? "bg-forest text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#0f3932]"
          : "border border-ink/10 bg-white text-ink shadow-line hover:-translate-y-0.5 hover:border-forest/30"
      }`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-porcelain text-ink">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-porcelain/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center" aria-label="Kindred Systems home">
            <Image
              src="/images/KS%20new%20logo.png"
              alt="Kindred Systems"
              width={869}
              height={348}
              priority
              className="h-16 w-auto object-contain sm:h-20"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-forest">
                {label}
              </a>
            ))}
          </nav>
          <Button href="#contact">
            Contact Us
          </Button>
        </div>
      </header>

      <section className="relative pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28">
          <div>
            <SectionLabel>Premium growth systems</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Your business deserves to look as professional as the work you do.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68 sm:text-xl">
              We help service businesses build polished systems that create confidence,
              strengthen the way they operate, and give owners more time to focus on what they do best.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#solutions">
                Solutions For You
              </Button>
              <Button href="#process" variant="secondary">
                See How It Works
                <ArrowIcon />
              </Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-y border-ink/10 py-6">
              {["Faster response", "Cleaner bookings", "More qualified leads"].map((item) => (
                <p key={item} className="text-sm font-semibold leading-5 text-ink/75">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-soft">
              <Image
                src="/images/Dentistry%20image.png"
                alt="A service business environment that feels personal, professional, and welcoming"
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="outcomes">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionLabel>The hidden leak</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Great businesses eventually outgrow manual systems.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative rounded-[1.75rem] border border-ink/10 bg-sage/5 p-8 shadow-soft">
              <div className="pointer-events-none absolute left-10 top-10 h-[calc(100%-4rem)] w-px bg-forest/15" />
              <div className="space-y-6">
                {[
                  { label: "More enquiries", description: "Every new lead should be a clear opportunity, not a hidden task." },
                  { label: "More customers", description: "Growth is a good problem when the system behind it is built to scale." },
                  { label: "More bookings", description: "The right process turns interest into confirmed appointments." },
                  { label: "More admin", description: "Manual handoffs and notes create noise, not momentum." },
                  { label: "More pressure", description: "Without better systems, your team spends energy on workarounds." }
                ].map((step, index) => (
                  <div key={step.label} className="relative flex gap-5 rounded-[1.5rem] border border-white/70 bg-white p-6 shadow-soft">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white text-sm font-semibold shadow-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-sage">
                        Step {index + 1}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-ink">{step.label}</p>
                      <p className="mt-2 text-sm leading-6 text-ink/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <article className="rounded-[1.75rem] border border-forest/10 bg-white p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.22em] text-sage">Your next step</p>
                <h3 className="mt-4 text-3xl font-semibold text-ink">Without better systems, growth starts working against you.</h3>
                <p className="mt-4 text-ink/75">The problem isn’t growth—it’s having more demand than your current operations can handle.</p>
              </article>
              <article className="rounded-[1.75rem] border border-ink/10 bg-porcelain p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.22em] text-sage">Where Kindred helps</p>
                <h3 className="mt-4 text-3xl font-semibold text-ink">A calmer system for every customer interaction.</h3>
                <p className="mt-4 text-ink/75">Kindred helps service businesses present a more polished brand, operate with clarity, and keep teams focused on their work.</p>
              </article>
              <article className="rounded-[1.75rem] border border-ink/10 bg-white p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.22em] text-sage">The outcome</p>
                <h3 className="mt-4 text-3xl font-semibold text-ink">More customers, less chaos.</h3>
                <p className="mt-4 text-ink/75">Your business can grow without the extra pressure of manual operations and missed opportunities.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Built around business outcomes</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
                Systems That Protect Revenue, Time, And Customer Trust
              </h2>
            </div>
            <Button href={whatsappHref} variant="secondary">
              Talk To Kindred
              <ArrowIcon />
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="rounded-lg border border-ink/10 bg-white p-7 shadow-line transition duration-200 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-8 h-1.5 w-12 rounded-full bg-brass" />
                <h3 className="text-xl font-semibold">{outcome.title}</h3>
                <p className="mt-4 leading-7 text-ink/65">{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white" id="solutions">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              Solutions for growing businesses
            </p>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Kindred Systems Pricing
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Built for where your business is right now - with room to grow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-[1.75rem] border p-7 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 ${
                  index === 1
                    ? "border-brass/40 bg-white/[0.12] shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
                    : "border-white/12 bg-white/[0.06] hover:bg-white/[0.09]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                    {plan.note}
                  </p>
                  {index === 1 ? (
                    <span className="rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
                      Most popular
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 text-3xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-3 text-lg font-semibold text-white">{plan.price}</p>
                <div className="mt-6 h-px w-full bg-white/10" />
                <h4 className="mt-6 text-xl font-semibold text-white">{plan.headline}</h4>
                <p className="mt-4 text-white/75">{plan.description}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Includes:
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                  {plan.details.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brass" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Button href="#contact" variant="secondary">
                    {plan.cta}
                    <ArrowIcon />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Add-Ons removed per design guidance */}

          <p className="mt-6 text-sm italic text-white/70">
            Retainer fees cover platform costs, maintenance, and ongoing optimisation.
            No hidden fees. No surprises.
          </p>
        </div>
      </section>

      {/* Process section removed per request */}

      <section className="bg-linen py-24" id="contact">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Ready to stop losing leads?</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Let Us Build The System Behind Your Next Stage Of Growth
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-ink/70">
              <a href={whatsappHref} aria-label="WhatsApp" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-forest shadow-line transition hover:-translate-y-0.5 hover:border-forest/30">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href={`mailto:${emailAddress}`} aria-label="Email" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-forest shadow-line transition hover:-translate-y-0.5 hover:border-forest/30">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-forest shadow-line transition hover:-translate-y-0.5 hover:border-forest/30">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-forest shadow-line transition hover:-translate-y-0.5 hover:border-forest/30">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-forest shadow-line transition hover:-translate-y-0.5 hover:border-forest/30">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8">
              <Button href={`mailto:${emailAddress}`} variant="secondary">
                Email Us
              </Button>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-ink py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto_auto]">
          <div>
            <Image
              src="/images/KS%20new%20logo.png"
              alt="Kindred Systems"
              width={869}
              height={348}
              className="h-20 w-auto object-contain sm:h-24"
            />
            <p className="mt-3 max-w-md leading-7 text-white/62">
              Helping businesses capture more opportunities and create better
              customer experiences.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-white/68">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/68">
            <a href={whatsappHref} aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20">
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a href={`mailto:${emailAddress}`} aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20">
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20">
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-white/45 sm:px-8">
          Copyright 2026 Kindred Systems. All rights reserved.
        </div>
      </footer>

      <FloatingChat />
    </main>
  );
}
