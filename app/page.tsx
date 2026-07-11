import Image from "next/image";
import ContactForm from "./ContactForm";

const whatsappNumber = "27693368407";
const whatsappMessage = encodeURIComponent(
  "Hi Kindred Systems, I'd like to learn more about your solutions."
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const emailAddress = "hello@kindredsystems.co.za";

const navItems = [
  ["Outcomes", "#outcomes"],
  ["Solutions", "#solutions"],
  ["Process", "#process"],
  ["Contact", "#contact"]
];

const problems = [
  "Customers message but never receive a response",
  "Enquiries get buried in busy inboxes",
  "Appointment requests are handled manually",
  "Follow-ups are inconsistent",
  "Admin tasks consume valuable time",
  "Potential customers slip through the cracks"
];

const outcomes = [
  {
    title: "Capture More Enquiries",
    body: "Never lose potential customers because a message was missed."
  },
  {
    title: "Respond Faster",
    body: "Give customers quick responses while your team stays focused."
  },
  {
    title: "Simplify Bookings",
    body: "Reduce back-and-forth conversations and make scheduling easy."
  },
  {
    title: "Stay Organized",
    body: "Keep customer enquiries in one structured operating system."
  },
  {
    title: "Improve Follow-Up",
    body: "Make sure interested prospects do not disappear before buying."
  },
  {
    title: "Scale Efficiently",
    body: "Handle more demand without increasing admin workload."
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "R800",
    note: "For professional early-stage businesses",
    headline: "WhatsApp Business App + Social Media Automation",
    description:
      "For informal and early-stage businesses ready to stop missing customers.",
    details: [
      "WhatsApp Business App setup and optimisation",
      "Quick replies and FAQ auto-responses",
      "Booking link connected to your bio and auto-replies",
      "Lead tracking via Google Sheets",
      "Handover and walkthrough"
    ]
  },
  {
    name: "Growth",
    price: "R1500 setup + R500/month",
    note: "For businesses ready for a real system",
    headline: "WhatsApp Cloud API + Booking Automation + Lead Capture",
    description:
      "For semi-formal businesses that are growing and need more than the basics.",
    details: [
      "Everything in Starter",
      "WhatsApp Cloud API setup and integration",
      "Automated lead capture and ranked lead list",
      "Booking calendar with real-time availability",
      "24-hour automated follow-up if a customer goes quiet",
      "Monthly maintenance and optimisation",
      "API costs covered in retainer"
    ]
  },
  {
    name: "Pro",
    price: "R3500 setup + R1000/month",
    note: "For businesses that mean business",
    headline: "Full API + CRM + Unified Inbox + Monthly Reporting",
    description:
      "For registered SMEs and franchises that need a complete customer operations system.",
    details: [
      "Everything in Growth",
      "Full CRM integration and sync",
      "Unified inbox across all active channels",
      "Monthly performance report",
      "Priority support and system updates",
      "All API and platform costs covered in retainer"
    ]
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
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M7.2 18.1 4 19l.9-3.1a8 8 0 1 1 2.3 2.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-moss">
      {children}
    </p>
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
              We help service businesses build professional systems that create confidence,
              simplify customer communication and give owners more time to focus on what they do best.
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
                <p className="mt-4 text-ink/75">Kindred helps service businesses capture customers clearly, manage enquiries smoothly, and keep teams focused.</p>
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
              Simple, Transparent Pricing
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Built for where your business is right now - with room to grow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className="flex h-full flex-col rounded-2xl border border-white/12 bg-white/[0.06] p-7 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                  {plan.note}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {plan.name === "Starter" ? (
                    <>
                      {plan.price}
                      <span className="ml-2 text-brass">• Once-Off setup</span>
                    </>
                  ) : (
                    plan.price
                  )}
                </p>
                <h4 className="mt-6 text-xl font-semibold text-white">{plan.headline}</h4>
                <p className="mt-4 text-white/75">{plan.description}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  What&apos;s included:
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
                    Get started
                    <ArrowIcon />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16 rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-soft">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Add-Ons
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                Extend your system as your business grows
              </h3>
              <p className="mt-4 text-white/75">
                Add the automations and channels you need to support more enquiries,
                reviews, and follow-up without adding more admin.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {addOns.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-white/75">{item.body}</p>
                  <p className="mt-4 text-sm font-semibold text-brass">{item.price}</p>
                </article>
              ))}
            </div>
          </section>

          <p className="mt-6 text-sm italic text-white/70">
            Retainer fees cover platform costs, maintenance, and ongoing optimisation.
            No hidden fees. No surprises.
          </p>
        </div>
      </section>

      <section className="bg-white py-24" id="process">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel>From first message to paying customer</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
                A Clearer Path From Enquiry To Revenue
              </h2>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="grid min-h-20 grid-cols-[4rem_1fr] items-center rounded-lg border border-ink/10 bg-porcelain p-4"
                >
                  <span className="text-sm font-semibold text-moss">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen py-24" id="contact">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Ready to stop losing leads?</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Let Us Build The System Behind Your Next Stage Of Growth
            </h2>
            <div className="mt-8 space-y-3 text-ink/70">
              <p>WhatsApp: 069 336 8407</p>
              <p>Email: {emailAddress}</p>
              <p>Instagram: kindredsystems_za</p>
              <p>Facebook: kindredsystems_za</p>
              <p>LinkedIn: kindredsystems_za</p>
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
          <div className="grid gap-3 text-sm text-white/68">
            <a href={whatsappHref} className="hover:text-white">069 336 8407</a>
            <a href={`mailto:${emailAddress}`} className="hover:text-white">
              {emailAddress}
            </a>
            <span>kindredsystems_za</span>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-white/45 sm:px-8">
          Copyright 2026 Kindred Systems. All rights reserved.
        </div>
      </footer>

      <a
        href={whatsappHref}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f5f] text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#16754d]"
        aria-label="Chat with Kindred Systems on WhatsApp"
      >
        <WhatsAppLogoIcon className="h-7 w-7" />
      </a>
    </main>
  );
}
