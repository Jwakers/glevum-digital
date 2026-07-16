import { ContactForm } from "@/components/contact-form";
import { serviceCategories } from "@/content/service-framework";
import {
  ArrowRight,
  BadgePoundSterling,
  CircleHelp,
  ClipboardCheck,
  Handshake,
  MapPin,
  Rocket,
  Smartphone,
  Sparkles,
  UserCheck2,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/profile-image.png";

export const metadata: Metadata = {
  title: "Get Seen in Gloucester",
  description:
    "Local digital support for Gloucester small businesses: websites, visibility improvements, and practical help for one-off projects or ongoing support.",
  keywords: [
    "gloucester web design",
    "gloucester digital support",
    "local seo gloucester",
    "small business website gloucester",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Penumbra Digital | Get Seen in Gloucester",
    description:
      "Local digital support for Gloucester small businesses: websites, visibility improvements, and practical help for one-off projects or ongoing support.",
  },
  twitter: {
    title: "Penumbra Digital | Get Seen in Gloucester",
    description:
      "Local digital support for Gloucester small businesses: websites, visibility improvements, and practical help for one-off projects or ongoing support.",
  },
};

const audience = [
  "Cafes and restaurants",
  "Salons and barbers",
  "Trades and local services",
  "Gyms and wellness businesses",
  "Local shops",
  "Therapists and consultants",
  "Wedding businesses",
  "Independent hospitality brands",
];

const valueStrip = [
  { icon: Rocket, title: "Get seen", label: "Business visibility" },
  {
    icon: ClipboardCheck,
    title: "Clear digital plan",
    label: "Practical next steps",
  },
  { icon: UserCheck2, title: "Easy updates", label: "Stay in control" },
  { icon: Handshake, title: "Direct support", label: "One local partner" },
];

const serviceIconMap = {
  essential: Sparkles,
  growth: Rocket,
  ecommerce: Smartphone,
  bespoke: Wrench,
  care: Handshake,
} as const;

const process = [
  {
    title: "20-minute first chat",
    text: "A relaxed call to understand your business, where leads come from, and what feels stuck right now.",
  },
  {
    title: "Simple action plan",
    text: "You get clear priorities in plain language, with recommended next steps and realistic effort.",
  },
  {
    title: "Build and launch",
    text: "I implement the agreed improvements and keep you updated so there are no surprises.",
  },
  {
    title: "Support when you need it",
    text: "After launch, you can choose a clean handover or ongoing support and practical improvements as your business evolves.",
  },
];

const proofCards = [
  {
    title: "Gloucester-only focus",
    text: "I work exclusively with local small businesses, so every project gets direct attention.",
  },
  {
    title: "Monthly care plans",
    text: "Optional support, updates, monitoring, and improvements after launch.",
  },
  {
    title: "Training and handover",
    text: "Clear guidance so you and your team can confidently manage day-to-day updates.",
  },
  {
    title: "Honest fit first",
    text: "If something falls outside my best fit, I help you find the right specialist.",
  },
];

const faqs = [
  {
    question: "Do I need a full new website?",
    answer:
      "Not always. Sometimes a focused improvement is enough. I will recommend the simplest route that gets results.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Usually within a few days of our first call. You will get a clear next-step timeline straight away.",
  },
  {
    question: "Will I still get support after launch?",
    answer:
      "Yes. You can choose ongoing support after launch, or keep things as a one-off project with a clear handover.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Penumbra Digital",
  url: "https://penumbradigital",
  email: "jackwakeham82@gmail.com",
  areaServed: {
    "@type": "City",
    name: "Gloucester",
  },
  description:
    "Local digital support for Gloucester small businesses, including websites, visibility, and practical help for one-off projects or ongoing support.",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-surface font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <section className="relative px-6 py-20 md:py-28 border-b border-outline-variant bg-background blueprint-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center border border-primary text-primary px-3 py-1 text-xs font-semibold font-mono uppercase tracking-widest bg-surface w-fit mb-5">
                <MapPin className="w-3 h-3 mr-2" />
                Gloucester · Small business focus
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary-fixed font-sans font-extrabold">
                Your local digital partner.
                <br />
                <span className="text-foreground">
                  For small businesses in Gloucester.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/85 leading-relaxed">
                I help Gloucester small businesses improve websites, increase
                online visibility, and simplify digital tasks. No jargon. No
                outsourcing. One local partner you can rely on for one-off
                projects or ongoing support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#contact"
                  className="bg-primary text-surface px-8 py-4 text-sm font-bold uppercase tracking-widest font-mono transition-colors hover:bg-primary-fixed w-fit border border-primary flex items-center justify-center"
                >
                  Get a free website review
                </a>
                <Link
                  href="/services"
                  className="bg-surface text-primary px-8 py-4 text-sm font-bold uppercase tracking-widest font-mono transition-colors hover:bg-outline-variant/20 w-fit border border-primary flex items-center justify-center"
                >
                  View services
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="bg-surface border border-outline-variant p-6 shadow-[0_14px_30px_rgba(11,78,219,0.12)]">
                <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
                  Who I work with
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {audience.map((item) => (
                    <div
                      key={item}
                      className="border border-outline-variant bg-background px-3 py-2 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground/75 mt-5">
                  These are examples, not exclusions. If you are a small
                  business in Gloucester, I am happy to work with you.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-surface border-b border-outline-variant overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border-x border-outline-variant max-w-7xl mx-auto w-full">
          {valueStrip.map((item) => (
            <div
              key={item.title}
              className="bg-surface p-8 flex flex-col items-center text-center justify-center min-h-[160px]"
            >
              <item.icon className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg md:text-xl font-bold tracking-tight">
                {item.title}
              </h4>
              <span className="text-xs font-bold font-mono uppercase tracking-widest text-outline mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="px-6 py-24 bg-background border-b border-outline-variant"
        id="services"
      >
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight leading-tight mb-4">
            Practical support built around business outcomes.
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mb-10">
            Website, visibility, ecommerce, bespoke tools, and flexible support
            from one local partner, whether you need a focused project or
            ongoing help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant border border-outline-variant shadow-sm">
            {serviceCategories.map((service) => {
              const Icon = serviceIconMap[service.id];
              return (
                <article key={service.title} className="bg-surface p-8">
                  <Icon className="w-8 h-8 text-primary mb-5" />
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {service.summary}
                  </p>
                </article>
              );
            })}
            <Link
              href="/services"
              className="bg-primary text-surface p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-surface">
                  See all services in detail
                </h3>
                <p className="text-sm text-surface/85 leading-relaxed">
                  Explore full breakdowns, who each service is for, and how we
                  scope custom plans.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-surface/95">
                Visit Services page <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>

          <div className="mt-8 border border-outline-variant bg-surface p-6">
            <p className="text-sm text-foreground/80 leading-relaxed">
              Need help with something else digital? Ask. If it is a good fit,
              we can scope a custom plan. If not, I will point you to the right
              specialist.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
            >
              View full service details <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-background border border-outline-variant p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <BadgePoundSterling className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-4xl font-sans font-extrabold tracking-tight leading-tight">
                Senior digital expertise without the agency layers.
              </h2>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4 max-w-4xl">
              Work directly with the person advising, designing and building
              your solution. Clear scope, transparent pricing and no unnecessary
              extras.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
            How we work together
          </p>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight leading-tight mb-10">
            Clear process. Low pressure. Fast momentum.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant shadow-sm">
            {process.map((step, i) => (
              <div
                key={step.title}
                className="bg-background p-6 flex flex-col min-h-[230px]"
              >
                <div className="text-3xl font-semibold text-outline font-mono mb-5">
                  0{i + 1}
                </div>
                <h3 className="font-semibold text-base mb-3">{step.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-background border-b border-outline-variant">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
            Why local businesses choose me
          </p>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight leading-tight mb-10">
            Trusted support from one accountable local partner.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
            {proofCards.map((item) => (
              <div key={item.title} className="bg-surface p-7">
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-background border border-outline-variant p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
                  Who am I?
                </p>
                <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight leading-tight mb-4">
                  Meet the person behind Penumbra Digital.
                </h2>
                <p className="text-foreground/80 leading-relaxed max-w-3xl">
                  Learn more about my background, how I work with local
                  businesses, and what you can expect whether you need a one-off
                  project or ongoing support.
                </p>
                <Link
                  href="/who-am-i"
                  className="mt-6 inline-flex items-center bg-primary text-surface px-6 py-3 text-sm font-bold uppercase tracking-widest font-mono transition-colors hover:bg-primary-fixed"
                >
                  Find out more
                </Link>
              </div>
              <div className="md:col-span-1">
                <div className="aspect-square border border-outline-variant bg-surface overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="Jack Wakeham, founder of Penumbra Digital"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight leading-tight mb-10">
            Quick answers before we talk.
          </h2>
          <div className="grid grid-cols-1 gap-px bg-outline-variant border border-outline-variant">
            {faqs.map((item) => (
              <div key={item.question} className="bg-background p-7">
                <div className="flex items-start gap-3 mb-2">
                  <CircleHelp className="w-5 h-5 text-primary mt-0.5" />
                  <h3 className="font-semibold">{item.question}</h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-surface" id="contact">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight leading-tight mb-5">
              Want more for your business in Gloucester?
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-5">
              Send a quick message and I will reply with practical next steps.
              You can also email directly if you prefer.
            </p>
            <a
              href="mailto:jackwakeham82@gmail.com"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              jackwakeham82@gmail.com <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <p className="text-xs text-foreground/65 mt-4">
              Typical response time: within one working day.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
