import { ArrowRight, Code2, LineChart, Server, Wrench, TerminalSquare, MousePointerClick, MapPin, Activity, Zap, Shield, Globe, Store, Coffee, Factory, Stethoscope } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-surface font-sans text-foreground">
      {/* Navigation Layer */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-background/90 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <TerminalSquare className="w-6 h-6 text-primary" />
          <span className="font-semibold tracking-tight text-lg">GLOUCESTER LOCAL WEB</span>
        </div>
        <div className="flex gap-4">
          <a href="#contact" className="hidden sm:flex text-sm items-center font-medium hover:text-primary transition-colors">
            Get in touch <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </nav>

      {/* Hero Section - Technical Blueprint Style */}
      <section className="relative flex flex-col justify-center px-6 py-24 md:py-32 border-b border-outline-variant blueprint-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center border border-primary text-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-surface w-fit mb-2">
              <MapPin className="w-3 h-3 mr-2" />
              BASED IN GLOUCESTER, UK
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter uppercase font-mono text-primary-fixed">
              Digital Partner.<br />
              <span className="text-foreground">Local Focus.</span>
            </h1>
            
            <div className="p-4 border-l-2 border-primary bg-background/80 backdrop-blur-sm max-w-2xl my-2">
              <p className="text-lg md:text-xl text-foreground font-mono leading-relaxed">
                <span className="text-primary font-bold">{">"} </span>
                A dedicated digital partnership exclusively for small Gloucester businesses. More than just websites—I build bespoke digital tools and provide reliable, jargon-free technical support to help your business operate smoother.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="#contact" className="bg-primary text-surface px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-primary-fixed w-fit border border-primary flex items-center justify-center">
                Get In Touch
              </a>
              <a href="#services" className="bg-surface text-primary px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-outline-variant/20 w-fit border border-primary flex items-center justify-center">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 USPs Section - Retained as requested */}
      <section className="bg-surface border-b border-outline-variant overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border-x border-outline-variant max-w-7xl mx-auto w-full">
          <div className="bg-surface p-8 flex flex-col items-center text-center justify-center hover:bg-background transition-colors min-h-[160px]">
            <Activity className="w-6 h-6 text-primary mb-3" />
            <h4 className="text-xl md:text-2xl font-bold font-mono tracking-tighter">99.9% Up</h4>
            <span className="text-xs font-bold uppercase tracking-widest text-outline mt-1">Reliability</span>
          </div>
          <div className="bg-surface p-8 flex flex-col items-center text-center justify-center hover:bg-background transition-colors min-h-[160px]">
            <Zap className="w-6 h-6 text-primary mb-3" />
            <h4 className="text-xl md:text-2xl font-bold font-mono tracking-tighter">Sub-100ms</h4>
            <span className="text-xs font-bold uppercase tracking-widest text-outline mt-1">Latency</span>
          </div>
          <div className="bg-surface p-8 flex flex-col items-center text-center justify-center hover:bg-background transition-colors min-h-[160px]">
            <Shield className="w-6 h-6 text-primary mb-3" />
            <h4 className="text-xl md:text-2xl font-bold font-mono tracking-tighter">Bespoke</h4>
            <span className="text-xs font-bold uppercase tracking-widest text-outline mt-1">Systems</span>
          </div>
          <div className="bg-surface p-8 flex flex-col items-center text-center justify-center hover:bg-background transition-colors min-h-[160px]">
             <Globe className="w-6 h-6 text-primary mb-3" />
            <h4 className="text-xl md:text-2xl font-bold font-mono tracking-tighter">ISO Tier</h4>
            <span className="text-xs font-bold uppercase tracking-widest text-outline mt-1">Local Support</span>
          </div>
        </div>
      </section>

      {/* My Experience Section (Updated with broad local focus and plain English) */}
      <section className="px-6 py-24 bg-background max-w-7xl mx-auto w-full border-b border-outline-variant" id="experience">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 uppercase">Senior Engineering. Local Focus.</h2>
            <div className="h-px bg-outline-variant w-24 mb-8"></div>
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p>
                In my past agency work, I've built and engineered platforms for multi-billion pound businesses. Now, I bring that exact same tier of engineering rigor directly to local Gloucester businesses—because this is where I'm from.
              </p>
              <p>
                I partner with a huge variety of local trades and services, ranging from <strong className="text-foreground">cafés and salons to dentists and engineering shops</strong>.
              </p>
              <p>
                I operate as a <strong className="text-foreground">jargon-busting mediator</strong>. I take confusing technical problems, explain them simply, and build entirely bespoke, highly-performant systems tailored precisely for your business. No frustrating page builders, no unstable generic plugins—just robust websites that work fast and drive your goals forward.
              </p>
            </div>
          </div>
          {/* A clean visual grid replacing the code block, illustrating the broad range of businesses */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-surface border border-outline-variant p-8 flex flex-col items-center text-center justify-center shadow-sm">
                <Coffee className="w-8 h-8 text-primary mb-4" />
                <span className="font-bold uppercase tracking-widest text-xs text-foreground">Hospitality & Cafés</span>
             </div>
             <div className="bg-surface border border-outline-variant p-8 flex flex-col items-center text-center justify-center shadow-sm">
                <Stethoscope className="w-8 h-8 text-primary mb-4" />
                <span className="font-bold uppercase tracking-widest text-xs text-foreground">Health & Dentists</span>
             </div>
             <div className="bg-surface border border-outline-variant p-8 flex flex-col items-center text-center justify-center shadow-sm">
                <Factory className="w-8 h-8 text-primary mb-4" />
                <span className="font-bold uppercase tracking-widest text-xs text-foreground">Engineering & Trades</span>
             </div>
             <div className="bg-surface border border-outline-variant p-8 flex flex-col items-center text-center justify-center shadow-sm">
                <Store className="w-8 h-8 text-primary mb-4" />
                <span className="font-bold uppercase tracking-widest text-xs text-foreground">Local Retail & Shops</span>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Box Grids (Jargon Free) */}
      <section className="px-6 py-24 bg-surface border-b border-outline-variant" id="services">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight uppercase mb-4">Core Services</h2>
            <p className="text-foreground/80 max-w-2xl text-lg">Modern, maintainable solutions tailored for local businesses, without the agency overhead.</p>
          </div>
          
          {/* Bento Box Structure via Gap borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant border border-outline-variant shadow-sm">
            {/* Tile 1 */}
            <div className="bg-background p-8 flex flex-col hover:bg-surface transition-colors">
              <Code2 className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Website Rebuilds</h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                Modern rebuilds of outdated or difficult-to-manage websites. Focusing on mobile usability, speed, and turning visitors into actual customers.
              </p>
            </div>
            {/* Tile 2 */}
            <div className="bg-background p-8 flex flex-col hover:bg-surface transition-colors">
              <MousePointerClick className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Content Management</h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                Helping you easily manage your own website content so you don't have to wait on a developer for simple text changes or updates.
              </p>
            </div>
            {/* Tile 3 */}
            <div className="bg-background p-8 flex flex-col hover:bg-surface transition-colors">
              <LineChart className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Google Ranking & Speed</h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                Improving site speed and making sure your business ranks better on Google so customers in Gloucester can easily find you.
              </p>
            </div>
            {/* Tile 4 (Span 2) */}
            <div className="bg-background p-8 flex flex-col md:col-span-2 hover:bg-surface transition-colors relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-64 bg-primary/[0.03] blueprint-grid-bg"></div>
              <Wrench className="w-8 h-8 text-primary mb-6 relative z-10" />
              <h3 className="text-xl font-bold mb-3 relative z-10">Custom Features & Automation</h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 max-w-xl relative z-10">
                Many local businesses do repetitive admin manually. If there’s a repetitive task in your business, there’s probably a way to simplify or automate it—from simple booking systems to bespoke digital tools.
              </p>
            </div>
            {/* Tile 5 */}
            <div className="bg-primary text-surface p-8 flex flex-col transition-colors">
              <Server className="w-8 h-8 text-surface mb-6" />
              <h3 className="text-xl font-bold mb-3 text-surface">Ongoing Support</h3>
              <p className="text-surface/80 text-sm leading-relaxed mb-6">
                Long-term technical support, proactive fixes, reporting reviews, and security updates so you can focus completely on running your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Technical Stepped */}
      <section className="px-6 py-24 bg-background max-w-7xl mx-auto w-full blueprint-border my-24 relative" id="process">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight uppercase mb-2">My Process</h2>
          <div className="h-px bg-outline-variant w-full max-w-xs mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant shadow-sm">
          {['Initial Chat', 'Review & Strategy', 'Build & Launch', 'Ongoing Support'].map((step, i) => (
             <div key={i} className="bg-surface p-6 flex flex-col justify-between min-h-[200px]">
               <div className="text-4xl font-light text-outline font-mono">0{i+1}</div>
               <div className="font-bold uppercase tracking-wide text-sm">{step}</div>
             </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-24 bg-surface border-t border-outline-variant" id="contact">
        <div className="max-w-3xl mx-auto w-full bg-background border border-outline-variant p-8 sm:p-12 shadow-sm">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight uppercase mb-4">Start a Conversation</h2>
            <p className="text-foreground/80">
              If your website feels outdated, difficult to manage, or just isn’t working as well as it should, feel free to get in touch for a completely jargon-free chat.
            </p>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline">Name</label>
              <input type="text" className="w-full bg-transparent border border-outline-variant p-3 outline-none focus:border-primary transition-colors font-mono text-sm" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline">Email</label>
              <input type="email" className="w-full bg-transparent border border-outline-variant p-3 outline-none focus:border-primary transition-colors font-mono text-sm" placeholder="Your email address" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline">Message</label>
              <textarea rows={4} className="w-full bg-transparent border border-outline-variant p-3 outline-none focus:border-primary transition-colors font-mono text-sm resize-none" placeholder="What can I help you with?"></textarea>
            </div>
            <button type="button" className="bg-foreground text-surface w-full py-4 font-bold uppercase tracking-widest hover:bg-primary transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline-variant py-8 text-center text-xs font-mono text-outline uppercase tracking-widest bg-background">
        &copy; {new Date().getFullYear()} Gloucester Developer. Standardised Output Module.
      </footer>
    </div>
  );
}
