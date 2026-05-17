import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Compass,
  Handshake,
  Mail,
  MapPin,
  Settings2,
  Smartphone,
  Sparkles,
  Store,
  UserCheck2,
  Wrench,
} from "lucide-react";

export default function Home() {
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

  const services = [
    {
      icon: Smartphone,
      title: "Website rebuilds",
      text: "If your current website feels old, slow, or hard to use on phones, I can rebuild it so it is clear, fast, and built to bring in more enquiries.",
    },
    {
      icon: Sparkles,
      title: "Get seen",
      text: "I help people find you online by fixing the basics that matter most, so your business is easier to discover when locals are ready to buy.",
    },
    {
      icon: Settings2,
      title: "Easy website updates",
      text: "I set your site up so updating text, prices, photos, and opening times is simple and stress-free without needing a developer for every small change.",
    },
    {
      icon: Wrench,
      title: "Save time with smarter tools",
      text: "If you repeat admin tasks every week, I can build practical tools that reduce manual work, from enquiry flows to booking and follow-up steps.",
    },
    {
      icon: Compass,
      title: "Clear reporting",
      text: "I show you what is working on your website in plain English, so you can make better decisions without getting lost in confusing dashboards.",
    },
    {
      icon: Handshake,
      title: "Ongoing support",
      text: "I stay around after launch with reliable local support, small improvements, fixes, and regular check-ins so your site keeps working for your business.",
    },
  ];

  const process = [
    {
      title: "Initial chat",
      text: "A friendly conversation about your business, your current setup, and where things are getting in the way.",
    },
    {
      title: "Clear improvement plan",
      text: "I suggest practical next steps in plain English, with no pressure and no confusing technical language.",
    },
    {
      title: "Build and improve",
      text: "I make the agreed changes and keep you updated so you always know what is happening and why.",
    },
    {
      title: "Ongoing local support",
      text: "After launch, I stay available for updates, fixes, and small improvements as your business grows.",
    },
  ];

  const faqs = [
    {
      question: "Do you only work with Gloucester businesses?",
      answer:
        "Yes. I work exclusively with small businesses in Gloucester and nearby areas, so I can give each partnership proper attention.",
    },
    {
      question: "Will I understand what is being done?",
      answer:
        "Yes. I explain everything in plain language and focus on practical decisions, not technical jargon.",
    },
    {
      question: "Can you help after the website goes live?",
      answer:
        "Absolutely. I offer ongoing support so you are not left on your own after launch.",
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-surface font-sans text-foreground">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-background/90 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="font-semibold tracking-tight text-lg">Glevum Digital</span>
        </div>
        <div className="flex gap-3">
          <a
            href="#services"
            className="hidden sm:flex text-sm items-center font-medium hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="inline-flex text-sm items-center font-semibold text-surface bg-primary hover:bg-primary-fixed transition-colors px-4 py-2 rounded-sm"
          >
            Book a chat <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </nav>

      <section className="relative flex flex-col justify-center px-6 py-24 md:py-32 border-b border-outline-variant blueprint-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col gap-12 items-start justify-between">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center border border-primary text-primary px-3 py-1 text-xs font-semibold font-mono uppercase tracking-widest bg-surface w-fit mb-2">
              <MapPin className="w-3 h-3 mr-2" />
              Gloucester, Small Businesses Only
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-primary-fixed">
              Your local digital partner for growing a small business in Gloucester.
            </h1>

            <div className="p-4 border-l-2 border-primary bg-background/80 backdrop-blur-sm max-w-2xl my-2">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                I work directly with local owners to improve websites, simplify day-to-day digital tasks, and help your business get seen online. No outsourcing. No confusing language. Just clear, practical support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="#contact"
                className="bg-primary text-surface px-8 py-4 text-sm font-bold uppercase tracking-widest font-mono transition-colors hover:bg-primary-fixed w-fit border border-primary flex items-center justify-center"
              >
                Book a chat
              </a>
              <a
                href="#services"
                className="bg-surface text-primary px-8 py-4 text-sm font-bold uppercase tracking-widest font-mono transition-colors hover:bg-outline-variant/20 w-fit border border-primary flex items-center justify-center"
              >
                See how I help
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-b border-outline-variant overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border-x border-outline-variant max-w-7xl mx-auto w-full">
          <div className="bg-surface p-8 flex flex-col items-center text-center justify-center hover:bg-background transition-colors min-h-[160px]">
            <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
            <h4 className="text-lg md:text-xl font-bold tracking-tight">Get seen</h4>
            <span className="text-xs font-bold font-mono uppercase tracking-widest text-outline mt-1">Business visibility</span>
          </div>
          <div className="bg-surface p-8 flex flex-col items-center text-center justify-center hover:bg-background transition-colors min-h-[160px]">
            <UserCheck2 className="w-6 h-6 text-primary mb-3" />
            <h4 className="text-lg md:text-xl font-bold tracking-tight">Easy to update</h4>
            <span className="text-xs font-bold font-mono uppercase tracking-widest text-outline mt-1">Stay in control</span>
          </div>
          <div className="bg-surface p-8 flex flex-col items-center text-center justify-center hover:bg-background transition-colors min-h-[160px]">
            <Handshake className="w-6 h-6 text-primary mb-3" />
            <h4 className="text-lg md:text-xl font-bold tracking-tight">Local support</h4>
            <span className="text-xs font-bold font-mono uppercase tracking-widest text-outline mt-1">Direct contact</span>
          </div>
          <div className="bg-surface p-8 flex flex-col items-center text-center justify-center hover:bg-background transition-colors min-h-[160px]">
            <Settings2 className="w-6 h-6 text-primary mb-3" />
            <h4 className="text-lg md:text-xl font-bold tracking-tight">Built around you</h4>
            <span className="text-xs font-bold font-mono uppercase tracking-widest text-outline mt-1">Practical tools</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-background max-w-7xl mx-auto w-full border-b border-outline-variant" id="who-for">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Who I work with</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Small Gloucester businesses that want practical digital help.
            </h2>
            <div className="h-px bg-outline-variant w-24 mb-8"></div>
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p>
                I have spent years building high-quality digital products, and now I bring that same standard to local businesses here in Gloucester.
              </p>
              <p>
                I only partner with smaller local businesses. That keeps things personal, focused, and built around your real day-to-day challenges.
              </p>
              <p>You deal directly with me from start to finish, with clear updates and no jargon.</p>
            </div>
          </div>
          <div className="bg-surface border border-outline-variant p-6 md:p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-5">
              <Store className="w-4 h-4" />
              Gloucester sectors
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {audience.map((item) => (
                <div
                  key={item}
                  className="border border-outline-variant bg-background px-4 py-3 text-sm text-foreground/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">What this helps you achieve</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 max-w-3xl">
            Clear improvements that make your business easier to run and easier to trust online.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
            <div className="bg-background p-8">
              <h3 className="text-xl font-semibold mb-3">More enquiries</h3>
              <p className="text-foreground/80">
                A clearer website and stronger local visibility help more of the right people contact you.
              </p>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-xl font-semibold mb-3">Less admin stress</h3>
              <p className="text-foreground/80">
                Simpler systems and better workflows save time and reduce repetitive manual tasks.
              </p>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-xl font-semibold mb-3">Long-term support</h3>
              <p className="text-foreground/80">
                You have a reliable local partner to keep improving things, not someone who disappears after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-surface border-b border-outline-variant" id="services">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Practical digital support for Gloucester businesses.</h2>
            <p className="text-foreground/80 max-w-2xl text-lg">
              You do not need technical complexity. You need the right improvements, explained clearly, and delivered reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant border border-outline-variant shadow-sm">
            {services.map((service) => (
              <div key={service.title} className="bg-background p-8 flex flex-col hover:bg-surface transition-colors">
                <service.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-background max-w-7xl mx-auto w-full blueprint-border my-24 relative" id="process">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">How we work together</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Simple, collaborative, and low pressure.</h2>
          <div className="h-px bg-outline-variant w-full max-w-xs mb-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant shadow-sm">
          {process.map((step, i) => (
            <div key={step.title} className="bg-surface p-6 flex flex-col min-h-[220px]">
              <div className="text-3xl font-semibold text-outline font-mono mb-5">0{i + 1}</div>
              <h3 className="font-semibold text-base mb-3">{step.title}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 bg-surface border-y border-outline-variant">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Why local businesses choose me</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            A direct partnership built on trust, clarity, and consistency.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
            <div className="bg-background p-7">
              <h3 className="font-semibold mb-2">Direct communication</h3>
              <p className="text-sm text-foreground/80">You work with me directly from start to finish.</p>
            </div>
            <div className="bg-background p-7">
              <h3 className="font-semibold mb-2">Gloucester focused</h3>
              <p className="text-sm text-foreground/80">I only work with local small businesses, so support stays personal.</p>
            </div>
            <div className="bg-background p-7">
              <h3 className="font-semibold mb-2">Plain language</h3>
              <p className="text-sm text-foreground/80">Clear advice you can act on, without agency buzzwords.</p>
            </div>
            <div className="bg-background p-7">
              <h3 className="font-semibold mb-2">Long-term mindset</h3>
              <p className="text-sm text-foreground/80">I focus on practical improvements that continue to help over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-background border-b border-outline-variant">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Quick answers before we talk.</h2>
          <div className="grid grid-cols-1 gap-px bg-outline-variant border border-outline-variant">
            {faqs.map((item) => (
              <div key={item.question} className="bg-surface p-7">
                <div className="flex items-start gap-3 mb-2">
                  <CircleHelp className="w-5 h-5 text-primary mt-0.5" />
                  <h3 className="font-semibold">{item.question}</h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-surface border-t border-outline-variant" id="contact">
        <div className="max-w-3xl mx-auto w-full bg-background border border-outline-variant p-8 sm:p-12 shadow-sm">
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Contact</p>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Let&apos;s talk about where your website is holding you back.
            </h2>
            <p className="text-foreground/80">
              If your site feels outdated, difficult to manage, or is not bringing in enough enquiries, send me a message. I will reply with practical next steps.
            </p>
            <p className="text-sm text-foreground/70 mt-4">
              Prefer email?{" "}
              <a href="mailto:hello@glevum.digital" className="text-primary font-medium hover:underline">
                hello@glevum.digital
              </a>
            </p>
          </div>

          <form className="space-y-6" action="mailto:hello@glevum.digital" method="post" encType="text/plain">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border border-outline-variant p-3 outline-none focus:border-primary transition-colors text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border border-outline-variant p-3 outline-none focus:border-primary transition-colors text-sm"
                placeholder="Your email address"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border border-outline-variant p-3 outline-none focus:border-primary transition-colors text-sm resize-none"
                placeholder="Tell me a little about your business and what you need help with."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-surface w-full py-4 font-bold uppercase tracking-widest font-mono hover:bg-primary-fixed transition-colors"
            >
              Send message
            </button>
            <p className="text-xs text-foreground/60">
              This form opens your email app so you can send the message directly.
            </p>
          </form>

          <a
            href="mailto:hello@glevum.digital"
            className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email me directly
          </a>
        </div>
      </section>

      <footer className="border-t border-outline-variant py-8 text-center text-xs font-mono text-outline uppercase tracking-widest bg-background">
        &copy; {new Date().getFullYear()} Glevum Digital · Local digital partner for Gloucester small businesses.
      </footer>
    </div>
  );
}
