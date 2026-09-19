export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  publishDate?: string;
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

const publishTimeZoneOffset = "+02:00";

export function getPublishedPosts(today = new Date()) {
  return posts
    .filter((post) => {
      if (!post.publishDate) {
        return true;
      }

      return new Date(`${post.publishDate}T00:00:00${publishTimeZoneOffset}`) <= today;
    })
    .sort((first, second) => {
      const firstDate = first.publishDate
        ? new Date(`${first.publishDate}T00:00:00${publishTimeZoneOffset}`).getTime()
        : new Date(first.date).getTime();
      const secondDate = second.publishDate
        ? new Date(`${second.publishDate}T00:00:00${publishTimeZoneOffset}`).getTime()
        : new Date(second.date).getTime();

      return secondDate - firstDate;
    });
}

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
  },
  {
    slug: "why-your-business-looks-less-professional-online-than-it-actually-is",
    title: "Why your business looks less professional online than it actually is",
    date: "10 August 2026",
    publishDate: "2026-08-10",
    category: "Digital credibility",
    readTime: "5 min read",
    excerpt:
      "Good businesses lose trust online when their digital presence looks rushed, inconsistent, or incomplete. Here is how to close that gap.",
    intro:
      "Many South African small businesses are better in real life than they look online. The work is solid, the owner cares, and customers are happy once they arrive. But before that happens, a new customer sees a blurry logo, old photos, missing hours, a WhatsApp number with no context, and a Facebook page that has not been updated in months. That gap quietly costs the business trust.",
    sections: [
      {
        heading: "Customers judge the system before they judge the service",
        body: [
          "A customer who has never met you has to make a fast decision from small signals. They look for a clear name, a working website, current contact details, visible reviews, simple pricing cues, and proof that real people have used the business before. If those pieces are missing, the customer does not know whether the business is busy, closed, careless, or unsafe.",
          "This does not mean every business needs a luxury brand. It means your online presence should match the quality of your actual work. A neat Google Business Profile, a focused one-page website, consistent images, and a professional WhatsApp Business profile can make a small operation feel established without pretending to be bigger than it is."
        ]
      },
      {
        heading: "The usual trust leaks are easy to miss",
        body: [
          "The biggest credibility problems are rarely dramatic. They are small mismatches: one phone number on Instagram and another on Google, a website that does not load well on mobile, a business profile with no service area, reviews that have not been answered, or a quote process that feels unclear.",
          "Search engines also read these signals. Clear service pages, local keywords, structured contact details, and useful answers help Google understand what you offer and where you offer it. That is why professional design and local SEO work together."
        ]
      },
      {
        heading: "Start by making the next step obvious",
        body: [
          "A credible online presence should answer four questions quickly: what do you do, where do you work, can I trust you, and how do I contact you? If the customer has to guess, they leave.",
          "Kindred Systems builds this kind of foundation for service businesses: clear pages, polished enquiry flows, and local trust signals that make the business look as reliable online as it is in person."
        ]
      }
    ],
    takeaways: [
      "Professional online presence is mostly consistency, clarity, and proof.",
      "Fix mismatched contact details, poor photos, missing hours, and unclear next steps first.",
      "A simple website plus Google Business Profile can make a strong business look credible quickly."
    ],
    sources: [
      {
        label: "Google Business Profile Help: edit your Business Profile",
        href: "https://support.google.com/business/answer/3039617"
      },
      {
        label: "Kindred Systems: customer experience systems",
        href: "https://kindredsystems.co.za/#solutions"
      },
      {
        label: "WhatsApp Business: create a digital storefront",
        href: "https://whatsappbusiness.com/resources/resource-library/how-to-create-an-ad-whatsapp-business-app/"
      }
    ]
  },
  {
    slug: "how-south-african-small-businesses-build-trust-online",
    title: "How South African small businesses build trust online",
    date: "17 August 2026",
    publishDate: "2026-08-17",
    category: "South African small business",
    readTime: "5 min read",
    excerpt:
      "Trust online comes from proof, consistency, speed, and local relevance. South African service businesses can build it without overcomplicating the stack.",
    intro:
      "Trust is the real currency of local business. In South Africa, customers are careful because scams are common, budgets are tight, and people often compare several providers before sending a message. A small business builds trust online when every visible signal says the same thing: this is real, active, reachable, and good at what it does.",
    sections: [
      {
        heading: "Show that the business is real",
        body: [
          "Start with the basics: a registered or clearly named business, a consistent address or service area, a real phone number, recent photos, customer reviews, and a clear explanation of what you do. These are trust signals before they are marketing assets.",
          "For registered companies, customers may also look for formal details. CIPC and BizPortal exist for company registration and related services, but even informal businesses can still build confidence through clear identity, transparent communication, and visible customer proof."
        ]
      },
      {
        heading: "Make the customer journey predictable",
        body: [
          "A customer should know what happens after they enquire. Do you reply on WhatsApp? Do they need to send photos? Is there a call-out fee? How do deposits work? When these steps are explained, the business feels organised.",
          "Predictability reduces anxiety. A simple website can carry the important details, while WhatsApp handles the conversation. Google Business Profile can support discovery through Search and Maps, especially for local service searches."
        ]
      },
      {
        heading: "Use local proof",
        body: [
          "Generic marketing copy is weaker than local evidence. Mention the suburbs, towns, or service areas you actually cover. Show work from real jobs. Use testimonials that sound like real customers. Answer questions South African customers ask, such as payment methods, deposits, parking, call-out fees, and response times.",
          "This is also good SEO. Local keywords help search engines connect your business to the searches customers are already making."
        ]
      }
    ],
    takeaways: [
      "Trust grows when business details, reviews, photos, and contact routes all match.",
      "Explain your enquiry, booking, payment, and follow-up process clearly.",
      "Local proof is stronger than generic claims."
    ],
    sources: [
      {
        label: "BizPortal: company registration and related services",
        href: "https://www.bizportal.gov.za/default.aspx"
      },
      {
        label: "Google Business Profile Help",
        href: "https://support.google.com/business/answer/3039617"
      },
      {
        label: "Kindred Systems: contact and enquiry flow",
        href: "https://kindredsystems.co.za/#contact"
      }
    ]
  },
  {
    slug: "the-difference-between-good-work-and-a-credible-business",
    title: "The difference between good work and a credible business",
    date: "24 August 2026",
    publishDate: "2026-08-24",
    category: "Digital credibility",
    readTime: "4 min read",
    excerpt:
      "Good work earns repeat customers. Credibility helps new customers believe you before they have experienced the work.",
    intro:
      "Good work and business credibility are related, but they are not the same thing. Good work is what happens after someone hires you. Credibility is what convinces them to take the first step. Many small businesses have the first and lose sales because they have not built the second.",
    sections: [
      {
        heading: "Quality is experienced later",
        body: [
          "A customer cannot feel your skill from a search result. They cannot know how carefully you cut hair, repair a gate, clean teeth, design a kitchen, or fit a solar system until they have already trusted you enough to enquire.",
          "That is why credibility has to carry the first part of the sale. Your website, Google listing, reviews, images, messaging, and reply process have to reduce doubt before the customer ever meets you."
        ]
      },
      {
        heading: "Credibility is a set of visible promises",
        body: [
          "A credible business communicates clearly, replies consistently, keeps details up to date, and makes its process easy to understand. It does not leave customers wondering whether the phone number works or whether the price will change later.",
          "This is especially important for service businesses, where customers often invite someone into their home, share personal information, or pay a deposit before the work is complete. Professional systems make trust easier."
        ]
      },
      {
        heading: "The goal is to make the outside match the inside",
        body: [
          "The best credibility work is honest. It does not invent a bigger company or hide the owner. It simply presents the business with care: good photos, useful pages, clear offers, real proof, and a reliable way to contact you.",
          "When the outside finally matches the quality of the work, customers stop hesitating for the wrong reasons."
        ]
      }
    ],
    takeaways: [
      "Good work helps after the customer buys; credibility helps them buy.",
      "Trust signals should reduce uncertainty before the first conversation.",
      "Small businesses can look credible without pretending to be corporate."
    ],
    sources: [
      {
        label: "Kindred Systems: outcomes for service businesses",
        href: "https://kindredsystems.co.za/#outcomes"
      },
      {
        label: "Google Business Profile Help: keep business information updated",
        href: "https://support.google.com/business/answer/3039617"
      }
    ]
  },
  {
    slug: "what-makes-customers-trust-a-business-in-the-first-10-seconds",
    title: "What makes customers trust a business in the first 10 seconds?",
    date: "31 August 2026",
    publishDate: "2026-08-31",
    category: "Customer experience",
    readTime: "5 min read",
    excerpt:
      "The first 10 seconds online are about orientation: customers want to know what you do, where you are, whether you are active, and what to do next.",
    intro:
      "Customers do not study your online presence at first. They scan it. In a few seconds, they decide whether the business feels real enough to keep considering. That decision is shaped by design, wording, photos, reviews, speed, and clarity.",
    sections: [
      {
        heading: "Clarity beats cleverness",
        body: [
          "The fastest trust signal is a clear sentence that says what the business does and who it helps. A customer should not have to decode a slogan before they know whether you are a dentist, builder, tutor, mechanic, beauty therapist, or consultant.",
          "Your homepage, Google Business Profile, and social bio should use the same plain language. That consistency helps customers and search engines understand the business."
        ]
      },
      {
        heading: "Proof needs to be visible early",
        body: [
          "Reviews, project photos, professional images, client logos, qualifications, service areas, and years of experience all help reduce doubt. The customer does not need every detail immediately, but they need a reason to believe the business is active and competent.",
          "For local service businesses, Google reviews and recent photos are often more persuasive than a polished paragraph. People want to see that other people nearby have already trusted you."
        ]
      },
      {
        heading: "The next action must be obvious",
        body: [
          "A customer who trusts you but cannot see what to do next may still leave. Put the contact route where people expect it. Use clear calls to action such as request a quote, book a consultation, call the practice, or message on WhatsApp.",
          "If WhatsApp is the main channel, make the first message easier with a click-to-chat link and a short pre-filled enquiry prompt."
        ]
      }
    ],
    takeaways: [
      "Customers first scan for clarity, proof, activity, and a next step.",
      "Use plain service keywords before clever brand language.",
      "Visible reviews and recent photos carry more weight than vague claims."
    ],
    sources: [
      {
        label: "Google Business Profile Help: photos and profile details",
        href: "https://support.google.com/business/answer/3039617"
      },
      {
        label: "WhatsApp Business Platform: click to chat",
        href: "https://faq.whatsapp.com/5913398998672934"
      },
      {
        label: "Kindred Systems: growth systems",
        href: "https://kindredsystems.co.za/#solutions"
      }
    ]
  },
  {
    slug: "do-i-need-a-website-if-i-use-whatsapp-for-my-business",
    title: "Do I need a website if I use WhatsApp for my business?",
    date: "7 September 2026",
    publishDate: "2026-09-07",
    category: "Websites",
    readTime: "5 min read",
    excerpt:
      "WhatsApp is excellent for conversation, but a website gives customers the context and confidence they need before they message.",
    intro:
      "WhatsApp is one of the most useful tools a small business can use. It is familiar, fast, and personal. But WhatsApp is not a full replacement for a website. It is best used as the conversation layer, while your website acts as the proof and information layer.",
    sections: [
      {
        heading: "WhatsApp starts conversations; websites answer doubts",
        body: [
          "A customer may want to message you, but first they need to know whether you are legitimate, what you offer, where you work, what your process looks like, and whether other customers trust you. A WhatsApp chat alone usually cannot answer all of that before the conversation begins.",
          "A simple website can explain services, show examples, list service areas, answer common questions, and link directly into WhatsApp once the customer feels ready."
        ]
      },
      {
        heading: "You control the website more than social media",
        body: [
          "Social platforms and messaging apps are useful, but they are rented attention. A website gives the business a stable home that can rank in Google, support campaigns, and stay consistent even when social feeds move on.",
          "For SEO, each service page can target real searches such as emergency plumber in Durban, dentist in Sandton, mobile nail tech in Cape Town, or website design for South African small businesses."
        ]
      },
      {
        heading: "The best setup uses both",
        body: [
          "The practical answer is not website or WhatsApp. It is website plus WhatsApp. The website builds trust and handles discovery. WhatsApp handles quick questions, quotes, bookings, and follow-ups.",
          "Together, they make the business feel accessible and professional."
        ]
      }
    ],
    takeaways: [
      "WhatsApp is a communication channel, not your full digital presence.",
      "A website helps customers trust you before they message.",
      "Use website pages for SEO and WhatsApp for fast conversion."
    ],
    sources: [
      {
        label: "WhatsApp Business: business profile, catalogs, greeting messages, and labels",
        href: "https://whatsappbusiness.com/resources/resource-library/how-to-create-an-ad-whatsapp-business-app/"
      },
      {
        label: "Google Search Central: SEO Starter Guide",
        href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
      },
      {
        label: "Kindred Systems: contact",
        href: "https://kindredsystems.co.za/#contact"
      }
    ]
  },
  {
    slug: "how-to-make-your-business-look-legitimate-in-south-africa",
    title: "How to make your business look legitimate in South Africa",
    date: "9 September 2026",
    publishDate: "2026-09-09",
    category: "South African small business",
    readTime: "5 min read",
    excerpt:
      "Legitimacy online comes from consistent identity, visible proof, clear contact details, and a customer journey that feels safe.",
    intro:
      "Looking legitimate does not mean looking expensive. It means giving customers enough confidence to believe the business is real, reachable, and responsible. In South Africa, where customers are alert to fraud and poor service, that confidence matters.",
    sections: [
      {
        heading: "Build a consistent public identity",
        body: [
          "Use the same business name, logo, phone number, email address, service area, and description across your website, Google Business Profile, WhatsApp Business profile, invoices, and social pages. Mismatched details create doubt even when the business is honest.",
          "If the business is registered, make sure formal details are correct with CIPC or BizPortal. If it is not registered yet, still present a clear trading name and contact route."
        ]
      },
      {
        heading: "Add trust signals customers can verify",
        body: [
          "Customers trust what they can check. Add real photos, review links, testimonials, before-and-after work where appropriate, team details, qualifications, payment instructions, and privacy-aware enquiry forms.",
          "If you collect personal information through forms or WhatsApp, handle it carefully. POPIA sets expectations for lawful processing of personal information in South Africa, and even small businesses benefit from being clear about why they collect customer details."
        ]
      },
      {
        heading: "Make every first interaction professional",
        body: [
          "A legitimate-looking business replies with context, confirms next steps, and avoids rushed one-word responses. Templates, quick replies, quote forms, and booking confirmations help the owner stay consistent even on busy days.",
          "The customer should feel that there is a business system behind the conversation, not just a phone number."
        ]
      }
    ],
    takeaways: [
      "Consistency across public profiles is one of the fastest legitimacy signals.",
      "Use verifiable proof: reviews, photos, clear details, and real contact routes.",
      "Treat privacy and customer information as part of professionalism."
    ],
    sources: [
      {
        label: "CIPC eServices",
        href: "https://eservices.cipc.co.za/"
      },
      {
        label: "BizPortal by CIPC",
        href: "https://www.bizportal.gov.za/default.aspx"
      },
      {
        label: "National Treasury: POPIA overview",
        href: "https://ocpo.treasury.gov.za/POPIA/default.aspx"
      }
    ]
  },
  {
    slug: "google-business-profile-for-south-african-service-businesses",
    title: "Google Business Profile for South African service businesses",
    date: "11 September 2026",
    publishDate: "2026-09-11",
    category: "Local SEO",
    readTime: "5 min read",
    excerpt:
      "A strong Google Business Profile helps local customers find, compare, and contact your service business directly from Search and Maps.",
    intro:
      "For many South African service businesses, Google Business Profile is the first storefront customers see. Before they visit your website or send a WhatsApp, they may see your rating, hours, photos, address or service area, and phone number in Google Search or Maps.",
    sections: [
      {
        heading: "Complete the basics first",
        body: [
          "Add or claim the profile, verify it, and keep the core information accurate: business name, category, phone number, website, hours, service area, and photos. Google says verified profiles can be edited through Search and Maps, and accurate information helps customers find and understand the business.",
          "Use a primary category that matches what customers search for. A dental practice, plumber, barber, salon, repair service, or tutoring company should not hide behind vague wording."
        ]
      },
      {
        heading: "Reviews are a local SEO asset",
        body: [
          "Ask happy customers for reviews in a simple, respectful way. Then reply to reviews professionally, including negative ones. The aim is not to look perfect; it is to show that the business is active, responsive, and accountable.",
          "Use photos regularly. Fresh photos of the team, location, work, vehicles, reception area, or completed projects show that the business is alive."
        ]
      },
      {
        heading: "Connect the profile to a proper website",
        body: [
          "Google Business Profile is powerful, but it works better with a website that explains services in more depth. Link the profile to service pages, booking forms, contact details, and useful FAQs.",
          "That combination helps both customers and search engines understand the business."
        ]
      }
    ],
    takeaways: [
      "Claim, verify, and keep your Google Business Profile current.",
      "Use the right business category, service area, hours, phone number, and website link.",
      "Reviews, replies, and recent photos help the profile feel active and trustworthy."
    ],
    sources: [
      {
        label: "Google Business Profile Help: edit your Business Profile",
        href: "https://support.google.com/business/answer/3039617"
      },
      {
        label: "Google Search Central: SEO Starter Guide",
        href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
      },
      {
        label: "Kindred Systems blog",
        href: "https://kindredsystems.co.za/blog"
      }
    ]
  },
  {
    slug: "why-customers-ignore-small-businesses-that-look-unprofessional",
    title: "Why customers ignore small businesses that look unprofessional",
    date: "14 September 2026",
    publishDate: "2026-09-14",
    category: "Customer experience",
    readTime: "4 min read",
    excerpt:
      "Customers often ignore unprofessional-looking businesses because uncertainty feels like risk, even when the actual work may be excellent.",
    intro:
      "When customers ignore a small business online, it is not always because the offer is bad. Often, the business has not given them enough confidence to continue. The customer sees uncertainty and moves to the next option.",
    sections: [
      {
        heading: "Unprofessional signals create friction",
        body: [
          "A broken link, blurry photo, missing price range, slow reply, empty Google profile, or messy WhatsApp greeting makes the customer do extra work. They have to ask basic questions, check whether the business is real, and decide whether the risk is worth it.",
          "Most customers will not tell you this. They simply leave."
        ]
      },
      {
        heading: "People choose the business that feels easiest to trust",
        body: [
          "When two businesses offer similar services, the one with clearer information often wins. That does not mean it is better at the work. It means it reduced doubt faster.",
          "For local SEO, clear pages and complete profiles also help search engines match the business to customer intent. Professional presentation is not decoration; it supports discovery and conversion."
        ]
      },
      {
        heading: "Fix the customer-facing basics",
        body: [
          "Update your profile photos, service list, contact buttons, hours, website copy, quote process, and WhatsApp templates. Make it obvious that the business is open, responsive, and capable.",
          "The aim is not to impress everyone. It is to stop losing good-fit customers before they understand what you can do."
        ]
      }
    ],
    takeaways: [
      "Customers ignore businesses when the first impression creates too much uncertainty.",
      "Small credibility fixes can improve both trust and conversion.",
      "Professional presentation helps good customers reach the enquiry stage."
    ],
    sources: [
      {
        label: "Google Search Central: SEO Starter Guide",
        href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
      },
      {
        label: "WhatsApp Business resources",
        href: "https://whatsappbusiness.com/resources/resource-library/how-to-create-an-ad-whatsapp-business-app/"
      },
      {
        label: "Kindred Systems: outcomes",
        href: "https://kindredsystems.co.za/#outcomes"
      }
    ]
  },
  {
    slug: "whatsapp-business-mistakes-that-make-you-lose-credibility",
    title: "WhatsApp Business mistakes that make you lose credibility",
    date: "16 September 2026",
    publishDate: "2026-09-16",
    category: "WhatsApp Business",
    readTime: "5 min read",
    excerpt:
      "WhatsApp can make a business feel responsive and personal, but poor setup and messy replies can damage trust quickly.",
    intro:
      "WhatsApp Business is powerful because customers already know how to use it. But that familiarity can make owners treat it too casually. The result is a business that replies from the right app but still feels disorganised.",
    sections: [
      {
        heading: "Using a blank or personal-looking profile",
        body: [
          "A business profile should include a clear name, description, hours, address or service area, website link, and useful images. A missing logo, no description, or casual personal photo can make the customer wonder whether they have reached the right place.",
          "WhatsApp Business includes profile, catalog, greeting, away message, quick reply, and label tools. These are simple credibility tools, not just convenience features."
        ]
      },
      {
        heading: "Replying without structure",
        body: [
          "Fast replies help, but clarity matters too. A rushed answer with no greeting, no pricing context, no next step, and no confirmation can feel unprofessional. Save templates for common questions so replies stay warm and consistent.",
          "Labels are useful for tracking new enquiries, quoted customers, deposits paid, bookings confirmed, and follow-ups. Without a simple system, leads slip through."
        ]
      },
      {
        heading: "Mixing trust and pressure badly",
        body: [
          "Customers do not like feeling pushed before they understand the offer. Use WhatsApp to guide them: answer the question, explain the process, share the right link, confirm the next action, and follow up politely.",
          "A good WhatsApp flow should feel human, but it should also feel like a business."
        ]
      }
    ],
    takeaways: [
      "Complete the WhatsApp Business profile before using it as a main sales channel.",
      "Use quick replies, greeting messages, away messages, labels, and catalogs where relevant.",
      "Keep replies structured, polite, and clear about the next step."
    ],
    sources: [
      {
        label: "WhatsApp Business: create a digital storefront",
        href: "https://whatsappbusiness.com/resources/resource-library/how-to-create-an-ad-whatsapp-business-app/"
      },
      {
        label: "WhatsApp click to chat FAQ",
        href: "https://faq.whatsapp.com/5913398998672934"
      },
      {
        label: "Kindred Systems: contact systems",
        href: "https://kindredsystems.co.za/#contact"
      }
    ]
  },
  {
    slug: "the-cheapest-way-to-make-your-business-look-established",
    title: "The cheapest way to make your business look established",
    date: "18 September 2026",
    publishDate: "2026-09-18",
    category: "Digital credibility",
    readTime: "5 min read",
    excerpt:
      "The most affordable way to look established is to fix the public basics: one-page website, Google profile, WhatsApp setup, reviews, and consistent details.",
    intro:
      "Looking established is not about spending the most money. It is about removing the signs that make customers nervous. A small business can look far more credible by fixing the public basics before buying ads, redesigning everything, or chasing complex software.",
    sections: [
      {
        heading: "Start with the trust foundation",
        body: [
          "Create a simple website that explains what you do, who you help, where you work, how to contact you, and what the next step looks like. Add real photos and a few proof points. Link it from Google Business Profile, social pages, invoices, and WhatsApp.",
          "Then complete your Google Business Profile and WhatsApp Business profile. These two channels are often where South African customers discover and contact service businesses first."
        ]
      },
      {
        heading: "Consistency is cheaper than advertising",
        body: [
          "Before paying for traffic, make sure every public profile tells the same story. The name, logo, phone number, service area, website, hours, and offer should match. This costs less than ads and improves every channel you already use.",
          "Ask recent happy customers for reviews and reply to them. Reviews are one of the strongest low-cost trust assets a local business can build."
        ]
      },
      {
        heading: "Build the smallest professional system",
        body: [
          "The cheapest established-looking system is usually a focused one-page website, a clean Google Business Profile, a complete WhatsApp Business setup, basic SEO, and a repeatable enquiry process.",
          "That is enough for many service businesses to stop looking temporary and start looking ready."
        ]
      }
    ],
    takeaways: [
      "Do not start with ads if your public trust signals are weak.",
      "A one-page website, Google profile, WhatsApp setup, and reviews can do a lot.",
      "Consistency makes a small business look established without pretending to be large."
    ],
    sources: [
      {
        label: "Google Business Profile Help",
        href: "https://support.google.com/business/answer/3039617"
      },
      {
        label: "WhatsApp Business resources",
        href: "https://whatsappbusiness.com/resources/resource-library/how-to-create-an-ad-whatsapp-business-app/"
      },
      {
        label: "Kindred Systems: plan the system",
        href: "https://kindredsystems.co.za/#contact"
      }
    ]
  },
  {
    slug: "what-south-africas-ai-policy-reset-means-for-small-businesses",
    title: "What South Africa's AI policy reset means for small businesses",
    date: "21 September 2026",
    publishDate: "2026-09-21",
    category: "AI news",
    readTime: "5 min read",
    excerpt:
      "South Africa's AI policy work is still moving, but the practical lesson for business owners is simple: use AI carefully, document decisions, and keep people in control.",
    intro:
      "Artificial intelligence is becoming part of ordinary business life before many formal rules are settled. For South African small businesses, that can feel confusing. Government is working through the policy questions, global AI tools are moving quickly, and owners still have customers to answer today.",
    sections: [
      {
        heading: "The policy conversation is still developing",
        body: [
          "In March 2026, Cabinet approved publication of a draft South Africa AI policy for public comment. The stated aim was to balance the benefits and risks of AI, encourage responsible adoption, support local innovation, and improve access to AI skills. Cabinet later approved withdrawal of the draft so that the policy could be reworked, including concerns about standards for ethical AI use.",
          "That means business owners should avoid treating any single draft or headline as final. The neutral reading is that South Africa is still shaping its AI governance approach. The direction is clear enough to matter: AI is expected to support growth, skills, innovation, and responsible use, but the final policy detail still needs care."
        ]
      },
      {
        heading: "Small businesses do not need to wait",
        body: [
          "A small business does not need a national AI strategy before using AI to draft a customer reply, summarise notes, create a checklist, improve a quote, or plan content. OpenAI's small-business analysis shows that entrepreneurs often use AI for marketing, customer communication, planning, legal and compliance questions, and day-to-day problem solving.",
          "The safer approach is to start with low-risk internal tasks. Use AI to prepare a first draft, compare options, organise information, or explain a process. Keep human judgement on anything that affects pricing, legal commitments, customer data, staff decisions, or public claims."
        ]
      },
      {
        heading: "Treat AI like a business system",
        body: [
          "Microsoft's 2026 Work Trend Index makes a useful point for owners: the value of AI is not only about individual effort. Organisations get more benefit when their processes, management habits, and culture support better use. For a small business, that does not mean a corporate transformation programme. It means deciding where AI is allowed, what it should not touch, and who checks the output.",
          "Write down a few rules. For example: do not paste sensitive customer information into tools without permission, do not publish AI text without review, do not rely on AI for tax or legal decisions without checking a qualified source, and keep a record of the prompts and drafts used for important work."
        ]
      }
    ],
    takeaways: [
      "South Africa's AI policy direction matters, but the detail is still developing.",
      "Start with low-risk tasks such as drafts, summaries, checklists, and planning.",
      "Keep people responsible for final decisions, especially where customer data or compliance is involved."
    ],
    sources: [
      {
        label: "The Presidency: Cabinet statement on draft South Africa AI policy",
        href: "https://www.presidency.gov.za/node/9901"
      },
      {
        label: "SAnews: Cabinet approves withdrawal of AI policy",
        href: "https://www.sanews.gov.za/node/81987"
      },
      {
        label: "OpenAI: AI is becoming a first hire for small businesses",
        href: "https://openai.com/index/ai-first-hire-small-business/"
      },
      {
        label: "Microsoft: 2026 Work Trend Index",
        href: "https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization"
      }
    ]
  },
  {
    slug: "a-practical-ai-workflow-for-customer-replies",
    title: "A practical AI workflow for better customer replies",
    date: "23 September 2026",
    publishDate: "2026-09-23",
    category: "AI tools",
    readTime: "5 min read",
    excerpt:
      "AI can help a small business reply faster without sounding robotic, but only when the owner gives it structure and reviews the message before sending.",
    intro:
      "Many small businesses lose enquiries because replies are slow, unclear, or inconsistent. AI can help, but it should not take over the relationship. The goal is to make the first draft faster while keeping the final message human, accurate, and suited to the customer.",
    sections: [
      {
        heading: "Start with repeat questions",
        body: [
          "The best first AI workflow is not complicated. Collect the ten questions customers ask most often: pricing, availability, location, delivery, deposits, documents needed, booking steps, turnaround time, guarantees, and aftercare. Then write a simple approved answer for each one.",
          "AI can turn those approved answers into warmer replies for specific situations. For example, it can adapt a standard booking answer for a customer who needs a weekend appointment, or turn a rough voice note into a polite WhatsApp message."
        ]
      },
      {
        heading: "Use a three-step reply system",
        body: [
          "A useful customer reply usually has three parts: acknowledge the customer, answer clearly, and give the next step. AI is good at helping with that structure. Ask it to create a short reply that confirms what the customer asked, explains the answer in plain language, and ends with one clear action.",
          "Before sending, check the facts. AI should not invent prices, promise availability, create a discount, or give a policy answer that the business cannot honour. The owner or team member still owns the reply."
        ]
      },
      {
        heading: "Keep the business voice consistent",
        body: [
          "AI replies often sound too polished or too generic unless you guide them. Give it a few examples of your usual tone. If your business is warm and direct, say that. If you serve professional clients, tell it to be clear and calm. If you work mainly on WhatsApp, ask for a message that is short enough to read on a phone.",
          "Over time, save the best replies as templates. That builds a small communication library that the team can reuse. The business becomes faster without losing its personality."
        ]
      }
    ],
    takeaways: [
      "Use AI for first drafts, not final unchecked customer promises.",
      "Build answers around repeat questions before trying advanced automation.",
      "Keep replies short, accurate, and clear about the next step."
    ],
    sources: [
      {
        label: "OpenAI: ChatGPT for small business program",
        href: "https://openai.com/index/introducing-chatgpt-small-business-program/"
      },
      {
        label: "Microsoft: 2026 Work Trend Index",
        href: "https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization"
      },
      {
        label: "WhatsApp Business resources",
        href: "https://whatsappbusiness.com/resources/resource-library/how-to-create-an-ad-whatsapp-business-app/"
      }
    ]
  },
  {
    slug: "popia-basics-for-whatsapp-leads-and-website-forms",
    title: "POPIA basics for WhatsApp leads and website forms",
    date: "25 September 2026",
    publishDate: "2026-09-25",
    category: "Local compliance",
    readTime: "5 min read",
    excerpt:
      "If customers send personal details through WhatsApp or a website form, the business should know why it collects that information, where it stores it, and who can access it.",
    intro:
      "A lead form or WhatsApp chat can feel informal, but it may still contain personal information. Names, phone numbers, addresses, health details, photos, payment details, and booking notes all deserve careful handling. POPIA is not just a legal topic; it is part of customer trust.",
    sections: [
      {
        heading: "Collect only what you need",
        body: [
          "POPIA is built around conditions for lawful processing, including accountability, processing limitation, purpose, openness, information quality, and security safeguards. For a small business, the simple version is this: collect the information you actually need, explain why you need it, and avoid keeping it longer than necessary.",
          "If a customer is asking for a quote, you may need their name, contact number, location, and details about the job. You probably do not need extra personal information that has no purpose. The less unnecessary data you hold, the less risk you carry."
        ]
      },
      {
        heading: "Be careful with direct marketing",
        body: [
          "The Information Regulator has guidance on direct marketing under POPIA. Owners should be especially careful with SMS, email, push notifications, automated calls, and WhatsApp-style marketing messages. A customer enquiry is not an open-ended invitation to send promotions forever.",
          "Build consent into your process. If you want to send specials, reminders, or newsletters, make the permission clear and keep a record. Also make it easy for people to opt out."
        ]
      },
      {
        heading: "Protect the information after collection",
        body: [
          "Customer information should not live forever in screenshots, staff phones, personal notebooks, and unprotected spreadsheets. Decide where lead details are stored, who can access them, how passwords are handled, and what happens when a staff member leaves.",
          "The Information Regulator's security compromise guidance is a reminder that businesses must respond when personal information is lost, accessed without permission, or shared incorrectly. A small business may not have a large IT department, but it can still use basic safeguards: strong passwords, limited access, backups, locked devices, and clear staff rules."
        ]
      }
    ],
    takeaways: [
      "Only collect customer information that has a clear business purpose.",
      "Get clear consent before using customer details for ongoing marketing.",
      "Store lead and booking information in one controlled place instead of scattered screenshots."
    ],
    sources: [
      {
        label: "Information Regulator: POPIA guidance notes",
        href: "https://inforegulator.org.za/guidance-notes/"
      },
      {
        label: "Information Regulator: POPIA guidance and direct marketing information",
        href: "https://inforegulator.org.za/popia/"
      },
      {
        label: "Information Regulator: handling of security compromises",
        href: "https://inforegulator.org.za/2025/08/19/fact-sheet-handling-of-security-compromises/"
      },
      {
        label: "National Consumer Tribunal: POPIA conditions overview",
        href: "https://www.ncpt.gov.za/POPIA.aspx"
      }
    ]
  },
  {
    slug: "how-to-check-government-small-business-support-without-getting-distracted",
    title: "How to check government small business support without getting distracted",
    date: "28 September 2026",
    publishDate: "2026-09-28",
    category: "South African government",
    readTime: "5 min read",
    excerpt:
      "Government support pages can be useful, but owners should check eligibility, documents, deadlines, and official links before spending time on an application.",
    intro:
      "South African small-business owners often hear about grants, programmes, and support schemes through social posts or forwarded messages. Some opportunities are real. Some are outdated. Some are misunderstood. A calm checking process helps owners avoid wasting time or sharing documents in the wrong place.",
    sections: [
      {
        heading: "Start with official sources",
        body: [
          "The Department of Small Business Development lists programmes such as business viability support, youth start-up support, SheTradesZA, co-operative support, and manufacturing support. Individual calls may have their own eligibility rules, deadlines, and application requirements.",
          "Use the official department or agency page first, then compare any social post or forwarded message against it. If the source cannot link back to an official page, treat it carefully."
        ]
      },
      {
        heading: "Read the eligibility before the promise",
        body: [
          "Support programmes are usually designed for specific kinds of businesses. For example, the DSBD Asset Assist Programme page describes support for machinery, equipment, working capital, and raw materials, but it also lists eligibility criteria and exclusions.",
          "Before preparing a full application, check the basics: business type, turnover limits, ownership requirements, CIPC registration, tax compliance, sector focus, previous funding rules, required documents, and closing dates."
        ]
      },
      {
        heading: "Keep your business admin ready",
        body: [
          "Even if a programme is not right for you today, the preparation is useful. Keep your registration documents, tax status, bank confirmation, proof of address, quotes, financial records, and business description organised. Many opportunities move faster than a rushed owner can prepare.",
          "The neutral takeaway is not that every business should chase funding. It is that a well-organised business can evaluate opportunities faster and avoid panic when a real one appears."
        ]
      }
    ],
    takeaways: [
      "Check official government or agency pages before acting on forwarded funding messages.",
      "Read eligibility and exclusions before spending time on an application.",
      "Keep registration, tax, banking, and quote documents ready even when you are not applying."
    ],
    sources: [
      {
        label: "Department of Small Business Development: programmes",
        href: "https://www.dsbd.gov.za/programmes"
      },
      {
        label: "Department of Small Business Development: Asset Assist Programme",
        href: "https://www.dsbd.gov.za/asset-assist-progamme"
      },
      {
        label: "BizPortal by CIPC",
        href: "https://www.bizportal.gov.za/default.aspx"
      }
    ]
  },
  {
    slug: "how-to-ask-for-google-reviews-the-right-way",
    title: "How to ask for Google reviews the right way",
    date: "30 September 2026",
    publishDate: "2026-09-30",
    category: "Local SEO",
    readTime: "5 min read",
    excerpt:
      "Reviews help customers compare local businesses, but the request should be honest, neutral, and based on a real customer experience.",
    intro:
      "Google reviews can be one of the strongest trust signals for a local service business. They show up where customers already search, they help people compare options, and they make a business feel active. But asking for reviews needs care.",
    sections: [
      {
        heading: "Ask real customers after a real experience",
        body: [
          "Google's guidance says reviews should reflect genuine experiences. Businesses can ask customers to leave reviews, but incentives such as discounts or free goods in exchange for reviews are not allowed. The request should be neutral, not a trade.",
          "A simple rule works well: ask every eligible customer at the same natural point, such as after a completed booking, delivery, appointment, repair, or project. Do not only ask people you believe will leave five stars."
        ]
      },
      {
        heading: "Make the request easy, not pressured",
        body: [
          "The best review request is short and polite. Thank the customer, say that feedback helps other local customers, and share the review link or QR code. Avoid telling the customer what rating to leave or what words to use.",
          "For WhatsApp-based businesses, save one approved review request template. That keeps the tone consistent and reduces the chance of staff improvising a message that sounds pushy."
        ]
      },
      {
        heading: "Reply like a professional",
        body: [
          "Google recommends replying to reviews and keeping replies professional, polite, relevant, and concise. Replies are public, so they are part of the business's first impression. A calm reply to a difficult review can show future customers that the business takes feedback seriously.",
          "If you reuse reviews in marketing, be careful with attribution and consent. Google's Partner Marketing Hub notes that businesses should get consent from reviewers before using their reviews in marketing materials."
        ]
      }
    ],
    takeaways: [
      "Ask for reviews from real customers without incentives or pressure.",
      "Use one neutral process instead of only asking customers who seem happy.",
      "Reply professionally because future customers read the response as part of the business."
    ],
    sources: [
      {
        label: "Google Business Profile Help: tips to get more reviews",
        href: "https://support.google.com/business/answer/3474122"
      },
      {
        label: "Google Business Profile Help: prohibited and restricted content",
        href: "https://support.google.com/business/answer/7400114"
      },
      {
        label: "Google Partner Marketing Hub: customer reviews",
        href: "https://partnermarketinghub.withgoogle.com/brands/google/use-cases/customer-reviews/"
      }
    ]
  },
  {
    slug: "tax-records-are-becoming-more-digital",
    title: "Tax records are becoming more digital. Tidy them now.",
    date: "2 October 2026",
    publishDate: "2026-10-02",
    category: "Operations",
    readTime: "5 min read",
    excerpt:
      "SARS is investing in digital filing and data-driven compliance. Small businesses can prepare by keeping cleaner records before tax season becomes stressful.",
    intro:
      "Tax admin is not the most exciting part of running a business, but it is one of the clearest signs of whether the business is organised. As SARS continues to improve digital services, data matching, and self-service tools, small businesses benefit from keeping cleaner records all year.",
    sections: [
      {
        heading: "Digital services are becoming normal",
        body: [
          "SARS said the 2026 Filing Season included digital enhancements, expanded self-service capabilities, improved security features, and continued use of auto assessment and data integration. The message for owners is practical: tax systems are becoming more digital and more data-driven.",
          "That does not mean every small business needs complicated accounting software immediately. It does mean invoices, receipts, payroll information, bank records, proof of payments, and customer or supplier documents should be easy to find."
        ]
      },
      {
        heading: "Record keeping is a business habit",
        body: [
          "SARS record-keeping guidance says records must be kept in their original form, in an orderly fashion, in a safe place, and open for inspection, audit, or investigation. In many cases, records must be kept for five years or until an audit, investigation, objection, or appeal is concluded.",
          "A business that waits until filing season to organise everything is creating stress for itself. A weekly or monthly admin routine is usually easier than a once-a-year rescue mission."
        ]
      },
      {
        heading: "Build a simple monthly folder system",
        body: [
          "Create folders by month. Save sales invoices, supplier invoices, receipts, payroll documents, bank statements, proof of payments, contracts, and tax correspondence. Use clear file names. Back up the folder. Limit who can edit it.",
          "This also helps beyond tax. Clean records make it easier to apply for funding, understand profit, quote properly, spot unpaid invoices, and answer accountant questions quickly."
        ]
      }
    ],
    takeaways: [
      "Keep business records organised throughout the year, not only at filing time.",
      "Use monthly folders for invoices, receipts, payments, payroll, and tax correspondence.",
      "Cleaner records support tax compliance, funding applications, and better decisions."
    ],
    sources: [
      {
        label: "SARS: 2026 Filing Season digital enhancements",
        href: "https://www.sars.gov.za/media-release/sars-unveils-smarter-simpler-more-secure-filing-season-experience-for-taxpayers/"
      },
      {
        label: "SARS: record keeping",
        href: "https://www.sars.gov.za/client-segments/record-keeping/"
      },
      {
        label: "SARS: third-party data provider declarations",
        href: "https://www.sars.gov.za/media-release/sars-to-help-employers-and-third-party-data-providers-to-submit-accurate-declarations/"
      }
    ]
  }
];
