import type { Metadata } from "next";
import { Camera, Handshake, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Who Am I?",
  description:
    "A personal introduction to the local digital partner behind Glevum Digital, with values, approach, and working style.",
  keywords: [
    "about glevum digital",
    "gloucester digital consultant",
    "local web partner gloucester",
  ],
  alternates: {
    canonical: "/who-am-i",
  },
  openGraph: {
    url: "/who-am-i",
    title: "Meet the Person Behind Glevum Digital",
    description:
      "A personal introduction to your local Gloucester digital partner, approach, and working style.",
  },
  twitter: {
    title: "Meet the Person Behind Glevum Digital",
    description:
      "A personal introduction to your local Gloucester digital partner, approach, and working style.",
  },
};

const sections = [
  {
    title: "My background",
    prompt:
      "Placeholder: Explain your professional background, years of experience, and the types of digital work you've done before focusing on Gloucester small businesses.",
  },
  {
    title: "Why I started this",
    prompt:
      "Placeholder: Share why you chose to work directly with small local businesses, what you enjoy about this work, and the impact you want to have in Gloucester.",
  },
  {
    title: "How I work with clients",
    prompt:
      "Placeholder: Describe your communication style, how projects are run, how often you update clients, and how you keep things clear and jargon-free.",
  },
  {
    title: "What clients can expect",
    prompt:
      "Placeholder: Outline expectations around response times, quality standards, support after launch, and how you handle ongoing improvements.",
  },
  {
    title: "How ongoing support works",
    prompt:
      "Placeholder: Explain your monthly care plan options, what is included, and how clients can request ad-hoc support.",
  },
  {
    title: "Training and handover",
    prompt:
      "Placeholder: Describe how you train owners/staff so they feel confident updating content and handling day-to-day website tasks.",
  },
];

const trustPoints = [
  "Placeholder: Local-first commitment and why Gloucester focus matters to your service quality.",
  "Placeholder: Direct partnership model with no outsourcing and no account managers.",
  "Placeholder: Plain-English communication approach for non-technical business owners.",
  "Placeholder: Long-term support philosophy with monthly care options.",
  "Placeholder: Honest scope boundaries and referral promise when something is outside your best fit.",
  "Placeholder: Transparent pricing approach with no unnecessary upsell.",
];

export default function WhoAmIPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader currentPage="who" />

      <main>
        <section className="px-6 py-20 border-b border-outline-variant blueprint-grid-bg">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Personal introduction</p>
              <h1 className="text-4xl md:text-6xl font-sans font-extrabold leading-tight text-primary-fixed mb-5">
                The person behind your digital partnership.
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Placeholder: Add a short first-person introduction that explains who you are, where you&apos;re based, and why local business partnerships matter to you.
              </p>
              <div className="inline-flex items-center border border-primary text-primary px-3 py-1 text-xs font-semibold font-mono uppercase tracking-widest bg-surface">
                <MapPin className="w-3 h-3 mr-2" />
                Gloucester · Small business focus
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-4">
              <div className="bg-surface border border-outline-variant p-6">
                <div className="aspect-4/5 border border-dashed border-outline bg-background flex items-center justify-center text-center p-4">
                  <div>
                    <Camera className="w-8 h-8 text-outline mx-auto mb-3" />
                    <p className="text-sm text-foreground/70">Portrait placeholder</p>
                    <p className="text-xs text-outline mt-1">Headshot or natural working photo</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface border border-outline-variant p-6">
                <div className="aspect-4/5 border border-dashed border-outline bg-background flex items-center justify-center text-center p-4">
                  <div>
                    <Camera className="w-8 h-8 text-outline mx-auto mb-3" />
                    <p className="text-sm text-foreground/70">Second portrait placeholder</p>
                    <p className="text-xs text-outline mt-1">Optional candid or local context image</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 py-20 border-b border-outline-variant bg-surface">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Suggested structure</p>
            <h2 className="text-3xl md:text-4xl font-display mb-8">What to include on this page</h2>
            <div className="grid grid-cols-1 gap-px bg-outline-variant border border-outline-variant">
              {sections.map((item) => (
                <article key={item.title} className="bg-background p-7">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item.prompt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 border-b border-outline-variant bg-background">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface border border-outline-variant p-7">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Trust points you can personalise</h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                {trustPoints.map((item) => (
                  <li key={item} className="border border-outline-variant bg-background p-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-outline-variant p-7">
              <div className="flex items-center gap-2 mb-4">
                <Handshake className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Personal note template</h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                Placeholder: Write a short, honest note about how you like to work with people. This is a good place to reinforce your calm, practical, and collaborative approach.
              </p>
              <div className="border border-dashed border-outline bg-background p-4 text-sm text-foreground/70">
                Placeholder: Signature block (your name, role, optional location line, optional direct contact preference).
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-surface">
          <div className="max-w-5xl mx-auto bg-background border border-outline-variant p-8 md:p-10">
            <div className="flex items-start gap-3 mb-4">
              <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
              <h2 className="text-2xl md:text-3xl font-display">Ready to chat?</h2>
            </div>
            <p className="text-foreground/80 mb-6">
              Placeholder: Add your invitation text here for people who read this page and want to start a conversation.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-primary text-surface px-6 py-3 text-sm font-bold uppercase tracking-widest font-mono transition-colors hover:bg-primary-fixed"
            >
              Go to contact section
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
