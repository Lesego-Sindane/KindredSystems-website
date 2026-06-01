import Image from "next/image";
import ContactForm from "./ContactForm";

const whatsappNumber = "27693368407";
const whatsappMessage = encodeURIComponent(
  "Hi Kindred Systems, I'd like to learn more about your solutions."
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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

const services = [
  {
    title: "Customer Enquiry System",
    body: "Capture, organize, and manage customer enquiries with a more dependable intake experience."
  },
  {
    title: "Booking & Scheduling System",
    body: "Reduce admin work, protect response times, and fill your calendar more efficiently."
  },
  {
    title: "Growth Operations System",
    body: "Connect customer touchpoints into a cleaner experience that helps convert more leads."
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

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
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
              src="/images/kindred-logo.png"
              alt="Kindred Systems"
              width={360}
              height={120}
              priority
              className="h-11 w-auto object-contain"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-forest">
                {label}
              </a>
            ))}
          </nav>
          <Button href={whatsappHref}>
            <WhatsAppIcon />
            WhatsApp
          </Button>
        </div>
      </header>

      <section className="relative pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28">
          <div>
            <SectionLabel>Premium growth systems</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Stop Losing Customers Before You Even Speak To Them
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68 sm:text-xl">
              We help South African service businesses capture every enquiry,
              respond faster, simplify bookings, and turn more conversations into
              paying customers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappHref}>
                <WhatsAppIcon />
                Chat on WhatsApp
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
                src="/images/kindred-growth-system.png"
                alt="Organized customer enquiries, bookings, and growth signals"
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
              Every Missed Message Is A Missed Opportunity
            </h2>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <div
                key={problem}
                className="group flex min-h-28 items-start gap-4 rounded-lg border border-ink/10 bg-porcelain p-5 transition duration-200 hover:-translate-y-1 hover:border-forest/25 hover:bg-white hover:shadow-line"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest/10 text-sm font-semibold text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-medium leading-7 text-ink/75">{problem}</p>
              </div>
            ))}
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
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              Solutions for growing businesses
            </p>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Built For Companies That Need Dependable Growth Infrastructure
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-white/12 bg-white/[0.06] p-7 backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-5 min-h-28 leading-7 text-white/70">{service.body}</p>
                <Button href={whatsappHref} variant="secondary">
                  Request A Quote
                  <ArrowIcon />
                </Button>
              </article>
            ))}
          </div>
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Solutions in development</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Professional Demo Environments And Case Studies In Progress
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">
              We are currently building and documenting client solutions.
              Real-world case studies coming soon.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {demos.map((demo) => (
              <article key={demo} className="rounded-lg border border-ink/10 bg-white p-6 shadow-line">
                <div className="mb-8 h-36 rounded-md bg-[linear-gradient(135deg,#15483f,#4f6677_55%,#b38b4d)]" />
                <h3 className="text-lg font-semibold">{demo}</h3>
                <p className="mt-3 leading-7 text-ink/62">
                  A polished demonstration of enquiry capture, booking clarity,
                  and management visibility.
                </p>
              </article>
            ))}
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
              <p>Email: infokindredsystems@gmail.com</p>
              <p>Instagram: kindredsystems_za</p>
              <p>Facebook: kindredsystems_za</p>
              <p>LinkedIn: kindredsystems_za</p>
            </div>
            <div className="mt-8">
              <Button href={whatsappHref}>
                <WhatsAppIcon />
                Chat on WhatsApp
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
              src="/images/kindred-logo.png"
              alt="Kindred Systems"
              width={360}
              height={120}
              className="h-12 w-auto rounded-sm bg-white object-contain p-1.5"
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
            <a href="mailto:infokindredsystems@gmail.com" className="hover:text-white">
              infokindredsystems@gmail.com
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
        <WhatsAppIcon />
      </a>
    </main>
  );
}
