import type { Metadata } from "next";
import { ArrowRight, BadgePoundSterling, CheckCircle2, Handshake, Rocket, Settings2, ShoppingBag, Wrench } from "lucide-react";
import Link from "next/link";
import {
  partnershipBoundaries,
  serviceCategories,
} from "@/content/service-framework";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Detailed service offerings for Gloucester small businesses: websites, visibility, Shopify, bespoke tools, and ongoing care.",
  keywords: [
    "gloucester web services",
    "shopify developer gloucester",
    "small business seo gloucester",
    "website support gloucester",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
    title: "Services for Gloucester Small Businesses",
    description:
      "Websites, visibility, Shopify, bespoke tools, and ongoing care for local Gloucester businesses.",
  },
  twitter: {
    title: "Services for Gloucester Small Businesses",
    description:
      "Websites, visibility, Shopify, bespoke tools, and ongoing care for local Gloucester businesses.",
  },
};

const categoryIconMap = {
  essential: Settings2,
  growth: Rocket,
  ecommerce: ShoppingBag,
  bespoke: Wrench,
  care: Handshake,
} as const;

const categoryTagMap = {
  essential: "Essential",
  growth: "Growth",
  ecommerce: "Ecommerce",
  bespoke: "Bespoke",
  care: "Ongoing",
} as const;

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader currentPage="services" />

      <main>
        <section className="px-6 py-20 border-b border-outline-variant blueprint-grid-bg">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
              Services
            </p>
            <h1 className="text-4xl md:text-6xl font-sans font-extrabold leading-tight text-primary-fixed mb-5">
              Detailed support for small Gloucester businesses.
            </h1>
            <p className="text-lg text-foreground/80 max-w-4xl leading-relaxed">
              These are the core ways I help local businesses. If you need
              something else digital, ask. If it is a good fit, we can scope it.
              If not, I will help you find someone better suited.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 border-b border-outline-variant bg-surface">
          <div className="max-w-7xl mx-auto w-full space-y-8">
            {serviceCategories.map((category) => {
              const Icon = categoryIconMap[category.id];
              const tag = categoryTagMap[category.id];
              return (
                <article
                  key={category.id}
                  className="border border-outline-variant bg-background p-8 md:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                      <div className="inline-flex items-center gap-2 text-primary mb-4">
                        <Icon className="w-5 h-5" />
                        <span className="text-xs font-mono uppercase tracking-widest">
                          {tag}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display mb-3">
                        {category.title}
                      </h2>
                      <p className="text-foreground/80 leading-relaxed">
                        {category.summary}
                      </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-outline-variant bg-surface p-5">
                        <h3 className="font-semibold mb-2">Who this is for</h3>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {category.whoFor}
                        </p>
                      </div>
                      <div className="border border-outline-variant bg-surface p-5">
                        <h3 className="font-semibold mb-2">Typical outcomes</h3>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {category.outcomes}
                        </p>
                      </div>
                      <div className="md:col-span-2 border border-outline-variant bg-surface p-5">
                        <h3 className="font-semibold mb-3">What is included</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {category.includes.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs font-mono uppercase tracking-widest text-outline mt-4">
                          {category.pricingNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-6 py-20 border-b border-outline-variant bg-background">
          <div className="max-w-7xl mx-auto w-full">
            <div className="bg-surface border border-outline-variant p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <BadgePoundSterling className="w-8 h-8 text-primary" />
                <h2 className="text-2xl md:text-4xl font-display">
                  Pricing and transparency
                </h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4 max-w-5xl">
                I work lean and directly with local businesses, so quotes are
                often more competitive than agency pricing. You are not paying
                for account layers or unnecessary process overhead.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4 max-w-5xl">
                I will never recommend or charge for work that does not
                genuinely help your business. Clear reasoning and honest scope
                come first.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>{partnershipBoundaries.model}</li>
                <li>{partnershipBoundaries.transparency}</li>
                <li>{partnershipBoundaries.scope}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-surface">
          <div className="max-w-7xl mx-auto w-full bg-background border border-outline-variant p-8 md:p-10">
            <h2 className="text-2xl md:text-4xl font-display mb-4">
              Ready to talk through your priorities?
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-4xl">
              Start with a quick conversation and we can map what will make the
              biggest difference first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center bg-primary text-surface px-6 py-3 text-sm font-bold uppercase tracking-widest font-mono transition-colors hover:bg-primary-fixed"
              >
                Book a chat <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/who-am-i"
                className="inline-flex items-center border border-primary text-primary px-6 py-3 text-sm font-bold uppercase tracking-widest font-mono transition-colors hover:bg-outline-variant/15"
              >
                Meet your digital partner
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
