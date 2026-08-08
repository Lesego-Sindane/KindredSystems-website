export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  intro: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  takeaways: string[];
  sources: {
    label: string;
    href: string;
  }[];
};

export const posts: BlogPost[] = [
  {
    slug: "ai-is-becoming-the-first-hire-for-small-business",
    title: "AI is becoming the first hire for small businesses",
    date: "8 August 2026",
    category: "AI tools",
    readTime: "5 min read",
    excerpt:
      "For many owners, AI is not replacing a team. It is becoming the extra pair of hands they needed before they could afford a team.",
    intro:
      "The most useful way to think about AI for a small business is not as a robot employee or a magic shortcut. Think of it as a first rough helper: the person who drafts the reply, organises the list, checks the tone, turns a messy idea into a plan, and helps the owner move faster.",
    sections: [
      {
        heading: "The real pressure is not technology. It is capacity.",
        body: [
          "A small business owner is usually doing five jobs at once. They are selling, replying to customers, making decisions, checking payments, dealing with suppliers, posting on social media, and trying to keep the actual service good. That is why AI is landing so quickly with small businesses. It gives owners a way to get a first version of work done before they have the budget to hire a marketer, admin assistant, analyst, or operations person.",
          "OpenAI's 2026 small-business analysis makes this point clearly: entrepreneurs need many different capabilities, but access to those capabilities is uneven. AI does not remove the risk of running a business, but it can lower the cost of getting a useful first attempt at many tasks."
        ]
      },
      {
        heading: "What this means in South Africa",
        body: [
          "In South Africa, this matters because many businesses are informal, young, lean, or operating with thin margins. A hair studio, mobile beauty therapist, mechanic, dentist, tutor, home-services team, or township food business may not need a complicated AI strategy. They need faster replies, clearer quotes, better follow-up, cleaner records, and content that does not sound rushed.",
          "That is where the practical opportunity sits. AI can help write a WhatsApp follow-up, turn voice notes into a task list, draft a quote, create a simple stock checklist, summarise customer feedback, or plan a week's worth of content. None of that is glamorous, but it is the kind of work that keeps customers from slipping away."
        ]
      },
      {
        heading: "The mistake to avoid",
        body: [
          "The mistake is trying to automate the whole business on day one. That usually creates confusion. A better first move is to pick one painful workflow and make it smoother. For example: every new enquiry gets captured, every customer receives the right follow-up, and every booking is confirmed without the owner remembering it manually.",
          "Good AI use should feel calm. It should make the business sound more consistent, not more robotic. The owner should still know what is going out, what customers are asking for, and where the money is coming from."
        ]
      }
    ],
    takeaways: [
      "Start with one workflow before chasing every new AI tool.",
      "Use AI to draft, organise, summarise, and follow up. Keep final judgement human.",
      "The best AI setup for a small business is usually boring, practical, and repeatable."
    ],
    sources: [
      {
        label: "OpenAI: AI is becoming a first hire for small businesses",
        href: "https://openai.com/index/ai-first-hire-small-business/"
      },
      {
        label: "OECD: Empowering SMEs in the age of AI",
        href: "https://www.oecd.org/en/publications/empowering-smes-in-the-age-of-ai_bf5a9816-en.html"
      },
      {
        label: "Federal Reserve Bank of San Francisco: AI adoption among small businesses",
        href: "https://www.frbsf.org/research-and-insights/publications/community-development-research-briefs/2026/07/ai-adoption-in-small-businesses-2024-sbcs/"
      }
    ]
  },
  {
    slug: "before-you-automate-clean-up-your-business-data",
    title: "Before you automate, clean up your business data",
    date: "8 August 2026",
    category: "South African business",
    readTime: "4 min read",
    excerpt:
      "AI works better when your business information is clean. For South African SMEs, data governance is becoming a growth issue, not just a compliance issue.",
    intro:
      "A lot of businesses want AI before they have the basics in order. They want a chatbot, automated follow-ups, customer insights, or a smarter booking system. Those things can work, but only if the business knows where its information lives and whether that information can be trusted.",
    sections: [
      {
        heading: "Messy data makes messy automation",
        body: [
          "If customer names are saved differently in five places, if bookings live in screenshots, if payments are tracked in a notebook, and if staff members keep their own separate lists, AI will not magically fix the business. It may simply make the mess faster.",
          "That is why data governance matters. It sounds corporate, but the idea is simple: know what information you collect, why you collect it, where it is stored, who can access it, and how it gets corrected when it is wrong."
        ]
      },
      {
        heading: "The South African angle",
        body: [
          "GSMA has warned that South African SMEs face real barriers around data access, quality, management, and governance as AI becomes more common. For a small business, this does not mean hiring a full compliance department. It means getting the basics right before connecting tools to customer information.",
          "This also connects to trust. Customers are becoming more aware of scams, privacy, and digital risk. If a business wants people to send personal details on WhatsApp, pay online, or book through a form, the experience needs to feel orderly and safe."
        ]
      },
      {
        heading: "What to fix first",
        body: [
          "Start with the customer journey. Decide where enquiries are captured, what details are required, how consent is handled, where notes are stored, and how follow-ups are recorded. Then make sure the team uses the same process every time.",
          "Once that foundation is in place, automation becomes much easier. A booking reminder can use the correct number. A lead list can be segmented properly. A chatbot can answer from approved information instead of guessing. Reports can show what is really happening, not just what someone remembered to write down."
        ]
      }
    ],
    takeaways: [
      "Do not connect AI to messy customer records and expect clean outcomes.",
      "Document what information the business collects and where it lives.",
      "Simple data discipline improves trust, compliance, and automation quality."
    ],
    sources: [
      {
        label: "GSMA: Why data governance matters for SMEs adopting and developing AI in South Africa",
        href: "https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/blog/why-data-governance-matters-for-smes-adopting-and-developing-ai-in-south-africa/"
      },
      {
        label: "OECD: Empowering SMEs in the age of AI",
        href: "https://www.oecd.org/en/publications/empowering-smes-in-the-age-of-ai_bf5a9816-en.html"
      }
    ]
  },
  {
    slug: "south-african-customers-now-expect-fast-digital-checkout",
    title: "South African customers now expect fast digital checkout",
    date: "8 August 2026",
    category: "Payments",
    readTime: "5 min read",
    excerpt:
      "Digital payments are becoming normal across South Africa. Small businesses do not need every payment trend, but they do need checkout to feel easy and safe.",
    intro:
      "South African customers are not waiting for businesses to become digital at their own pace. Many are already comparing prices online, paying with wallets, using bank-native payment options, and expecting checkout to feel quick, familiar, and secure.",
    sections: [
      {
        heading: "Convenience and trust are now part of the product",
        body: [
          "The Stitch 2026 consumer payments report shows how quickly payment behaviour is changing. Digitally active South Africans are using new payment methods, shopping across more channels, and blending online and in-person habits. Visa's 2026 South Africa study also points to a trust gap: consumers like AI-powered shopping help, but they still care deeply about safety at checkout.",
          "For a small business, this means the payment experience is not a small admin detail. It is part of whether the customer believes the business is professional."
        ]
      },
      {
        heading: "What this looks like for service businesses",
        body: [
          "A salon, dental practice, tutor, repair business, or home-services company may not think of itself as an e-commerce business. But the customer journey often works the same way. A person discovers the business online, sends a WhatsApp, asks for a price, compares options, books a slot, and expects a clear way to pay.",
          "If that process feels scattered, the customer hesitates. If the quote is clear, the payment link is familiar, the confirmation arrives quickly, and the reminder is polite, the business feels easier to trust."
        ]
      },
      {
        heading: "Do not chase every payment option",
        body: [
          "The goal is not to offer every payment method in the market. The goal is to remove friction for the customers you actually serve. If your customers prefer EFT, make the reference and proof-of-payment process clean. If they prefer card or wallet payments, make that option obvious. If deposits reduce no-shows, build them into the booking flow.",
          "The businesses that win are not always the ones with the fanciest tools. Often, they are the ones that make the next step obvious."
        ]
      }
    ],
    takeaways: [
      "Treat checkout as part of customer experience, not just finance admin.",
      "Make payment instructions clear, fast, and easy to verify.",
      "Pair convenience with trust signals: confirmations, receipts, and consistent communication."
    ],
    sources: [
      {
        label: "Stitch: How South Africans Shop in 2026",
        href: "https://consumer-report-2026.stitch.money/"
      },
      {
        label: "Visa: 2026 Stay Secure study in South Africa",
        href: "https://www.visa.co.za/about-visa/newsroom/press-releases/prl-09062026.html"
      },
      {
        label: "Mastercard: South Africa's SMEs put digital tools at the heart of growth plans",
        href: "https://www.mastercard.com/news/eemea/en/newsroom/press-releases/en/2026/june-2026/mastercard-sme-confidence-index-south-africa-s-smes-put-digital-tools-at-the-heart-of-their-growth-plans/"
      }
    ]
  }
];
