import React, { useState, useEffect, useRef } from "react";
import { 
  Users, Sparkles, TrendingUp, Zap, BarChart3, HeartHandshake, 
  Megaphone, Code2, Palette, Camera, SearchCode, ArrowRight, CheckCircle, Star 
} from "lucide-react";
import { COMPANY_STATS, WHY_CHOOSE_US, SERVICES_DATA, TESTIMONIALS_DATA } from "../data";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  const map: Record<string, React.ComponentType<any>> = {
    Users,
    Sparkles,
    TrendingUp,
    Zap,
    BarChart3,
    HeartHandshake,
    Megaphone,
    Code2,
    Palette,
    Camera,
    SearchCode
  };
  const IconComponent = map[name] || Sparkles;
  return <IconComponent className={className} />;
};

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Parse numeric part and suffix (e.g., "100+" => 100 and "+", "95%" => 95 and "%")
  const numMatch = value.match(/^(\d+)/);
  const target = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch ? value.substring(numMatch[0].length) : value;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    if (!isInView || target === 0) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds for nice, visible progression
    const stepTime = 20; // ~50fps
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={containerRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export default function Home({ setActiveTab }: HomeProps) {
  
  const handleAction = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-24 pb-24" id="home-page-container">
      
      {/* 1. HERO SECTION WITH DECORATION & GENERATED 3D ART */}
      <section className="relative overflow-hidden bg-white pt-10 lg:pt-16 pb-12" id="hero-section">
        {/* Abstract animated blurred circles in background */}
        <div className="absolute top-1/4 left-0 -z-10 h-72 w-72 rounded-full bg-primary-burgundy/5 blur-3xl" />
        <div className="absolute top-1/3 right-10 -z-10 h-96 w-96 rounded-full bg-secondary-gold/5 blur-3xl animate-pulse" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left intro text info */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="block pb-2 animate-fadeIn">
                <img 
                  src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" 
                  alt="Siltawi Digital Marketing Logo" 
                  className="h-12 sm:h-14 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="inline-flex items-center space-x-2.5 rounded-full bg-primary-burgundy/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-burgundy animate-pulse">
                <Sparkles className="h-3.5 w-3.5 text-secondary-gold" />
                <span>Addis Ababa's Premier Creative Agency</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-dark-charcoal">
                Empowering Businesses Through <br />
                <span className="relative inline-block text-primary-burgundy">
                  Digital Innovation
                  <span className="absolute left-0 bottom-1.5 h-1.5 w-full bg-secondary-gold/40 -z-10 rounded-full" />
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-gray leading-relaxed max-w-2xl">
                Siltawi Digital Marketing crafts premium online experiences, targeted conversion campaigns, and striking brand identities. We combine local strategic execution with world-class design standards to scale your business since 2023.
              </p>

              {/* Action triggers */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => handleAction("contact")}
                  id="hero-cta-get-started"
                  className="rounded-xl bg-primary-burgundy px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-burgundy-hover hover:shadow-xl hover:shadow-primary-burgundy/25 text-center cursor-pointer"
                >
                  Get Started Today
                </button>
                <button
                  onClick={() => handleAction("portfolio")}
                  id="hero-cta-view-portfolio"
                  className="group flex items-center justify-center space-x-2 rounded-xl bg-white border border-gray-200 hover:border-primary-burgundy/40 px-8 py-4 text-sm font-bold text-dark-charcoal transition-all duration-300 hover:bg-gray-50 cursor-pointer"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="h-4 w-4 text-slate-gray transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-burgundy" />
                </button>
              </div>

              {/* Highlighting trust context */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-100 text-xs">
                <div className="text-slate-gray font-semibold uppercase tracking-wider">Trusted by brands in:</div>
                <div className="flex items-center space-x-4 font-display font-medium text-dark-charcoal">
                  <span>Coffee Export</span>
                  <span className="text-secondary-gold font-bold">•</span>
                  <span>E-Commerce</span>
                  <span className="text-secondary-gold font-bold">•</span>
                  <span>Tech Startups</span>
                  <span className="text-secondary-gold font-bold">•</span>
                  <span>Logistics</span>
                </div>
              </div>
            </div>

            {/* Right side illustration representation */}
            <div className="lg:col-span-5 relative" id="hero-graphics-container">
              {/* Outer decorative borders mapping gold accents */}
              <div className="absolute -top-3 -left-3 h-12 w-12 border-t-2 border-l-2 border-secondary-gold" />
              <div className="absolute -bottom-3 -right-3 h-12 w-12 border-b-2 border-r-2 border-primary-burgundy" />
              
              <div className="overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <img 
                  src="/src/assets/images/hero_illustration_1781936319187.jpg" 
                  alt="Siltawi Digital Marketing Growth Representation" 
                  className="rounded-xl w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  id="hero-image-render"
                />
              </div>

              {/* Ambient badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl border border-gray-50 hidden sm:flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-gold/10 text-secondary-gold">
                  <Star className="h-5 w-5 fill-secondary-gold" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-dark-charcoal">3+ Years</div>
                  <div className="text-[11px] text-slate-gray">Pioneering Local Growth</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPANY STATISTICS SECTION */}
      <section className="bg-primary-burgundy text-white py-16 relative overflow-hidden" id="stats-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,180,0,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-2 text-center" id={`stat-node-${idx}`}>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-secondary-gold">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="font-display text-sm font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
                <p className="text-xs text-white/70 leading-normal max-w-[180px] mx-auto hidden sm:block">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US – OPTIMIZED SIDE-BY-SIDE INTERACTIVE LAYOUT */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="why-choose-us-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky, Premium Branding & Metrics Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 rounded-lg bg-secondary-gold/10 px-3.5 py-1 text-xs font-bold text-[#B78300] uppercase tracking-widest">
                <Sparkles className="h-3 w-3 text-secondary-gold animate-spin-slow" />
                <span>Unrivaled Value Proposition</span>
              </span>
              <h2 className="font-display text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-[1.12] tracking-tight">
                Why Top East African Brands Partner With Siltawi
              </h2>
              <p className="text-base sm:text-lg text-slate-gray leading-relaxed max-w-xl">
                In a dynamic market, transparency and swift execution are everything. We align our creative flair with real search rankings, optimizing user paths to scale your performance metrics.
              </p>
            </div>

            {/* Simulated Live Strategy Box with Micro-animations */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-100/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-primary-burgundy to-secondary-gold" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-xs font-mono font-bold text-slate-gray uppercase tracking-widest">Live Campaign Pipeline</span>
                  </div>
                  <span className="text-[11px] font-mono text-primary-burgundy font-semibold bg-primary-burgundy/5 px-2 py-0.5 rounded">Active Audit</span>
                </div>
                
                <div className="pt-2 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <div className="font-semibold text-dark-charcoal">Average Traffic Surge</div>
                    <div className="font-mono text-primary-burgundy font-bold">+200%</div>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary-burgundy h-full rounded-full transition-all duration-1000 w-[84%]" />
                  </div>
                  
                  <div className="flex justify-between items-center text-xs">
                    <div className="font-semibold text-dark-charcoal">Conversion Optimization Rate</div>
                    <div className="font-mono text-secondary-gold font-bold">95.4%</div>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary-gold h-full rounded-full transition-all duration-1000 w-[95%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick trust message */}
            <div className="flex items-center space-x-3 text-sm text-slate-gray">
              <CheckCircle className="h-5 w-5 text-[#9B1D20]" />
              <span>Full compliance with international UI/UX & SEO standards.</span>
            </div>
          </div>

          {/* Right Column: Beautiful Staggered Side-By-Side Feature List */}
          <div className="lg:col-span-7 space-y-6">
            {WHY_CHOOSE_US.map((card, idx) => (
              <div 
                key={idx} 
                id={`why-card-${idx}`}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 hover:shadow-xl hover:shadow-gray-100/70 hover:border-primary-burgundy/15 transition-all duration-300 text-left group"
              >
                {/* Large Serif Number Accent */}
                <div className="font-display text-4xl sm:text-5xl font-black text-secondary-gold/20 group-hover:text-secondary-gold/40 transition-colors duration-300 select-none pb-2 sm:pb-0 sm:min-w-[60px] tracking-tighter">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Elegant Circle Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-burgundy/[0.04] text-primary-burgundy transition-all duration-300 group-hover:bg-[#9B1D20] group-hover:text-white group-hover:scale-105 shadow-sm">
                  <IconMapper name={card.iconName} className="h-6 w-6" />
                </div>

                {/* Text Content */}
                <div className="space-y-1 text-left flex-1">
                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-dark-charcoal transition-colors group-hover:text-primary-burgundy">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-gray max-w-xl">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SERVICES PREVIEW WITH ICON CARDS */}
      <section className="bg-light-bg py-20 relative border-y border-gray-100" id="services-preview-section">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="text-left space-y-4 max-w-2xl">
              <span className="inline-block rounded-lg bg-primary-burgundy/10 px-3.5 py-1 text-xs font-bold text-primary-burgundy uppercase tracking-widest">
                Our Capabilities
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-dark-charcoal">
                Comprehensive Digital Suite Built for Modern Enterprises
              </h2>
            </div>
            <div>
              <button
                onClick={() => handleAction("services")}
                id="preview-learn-services"
                className="group flex items-center space-x-2 rounded-xl bg-primary-burgundy px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-burgundy-hover hover:shadow-lg hover:shadow-primary-burgundy/20"
              >
                <span>View Full Service Catalog</span>
                <ArrowRight className="h-4 w-4 text-secondary-gold" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((category) => (
              <div 
                key={category.id} 
                id={`preview-srv-cat-${category.id}`}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-6 text-left group hover:border-secondary-gold transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-gold/10 text-secondary-gold">
                    <IconMapper name={category.iconName} className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark-charcoal">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-gray leading-relaxed h-12 overflow-hidden">
                  {category.description}
                </p>
                <div className="border-t border-gray-50 pt-4">
                  <ul className="space-y-2">
                    {category.items.slice(0, 3).map((subItem) => (
                      <li key={subItem.id} className="flex items-center space-x-2 text-xs text-slate-gray">
                        <CheckCircle className="h-3.5 w-3.5 text-primary-burgundy shrink-0" />
                        <span className="font-medium text-dark-charcoal">{subItem.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleAction("services")}
                  className="flex items-center space-x-1.5 text-xs font-bold text-primary-burgundy group-hover:text-primary-burgundy-hover focus:outline-none"
                >
                  <span>Explore specifications</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS SLIDER LINK PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="testimonial-preview-home-section">
        <div className="rounded-3xl bg-dark-charcoal text-white p-10 lg:p-16 relative overflow-hidden text-left shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,rgba(128,0,32,0.18),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(244,180,0,0.15),transparent_40%)]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-block rounded-lg bg-secondary-gold/20 px-3 py-1 text-xs font-bold text-secondary-gold uppercase tracking-widest">
                Client Accolades
              </span>
              <blockquote className="space-y-4">
                <p className="font-display text-lg sm:text-2xl font-medium italic leading-relaxed text-white/90">
                  "Siltawi helped us increase our online sales by 200% within six months of our rebrand. Their digital mapping and local SEO setups are simply phenomenal."
                </p>
                <cite className="block">
                  <div className="text-base font-bold text-white">Martha Kidane</div>
                  <div className="text-xs text-secondary-gold">Startup Founder — Zoya Luxe Wear</div>
                </cite>
              </blockquote>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <div className="flex space-x-1 text-secondary-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary-gold" />
                ))}
              </div>
              <div className="text-sm text-white/60 text-left lg:text-right">
                Rated 4.9/5 stars based on 50+ localized client case studies.
              </div>
              <button
                onClick={() => handleAction("testimonials")}
                id="testimonial-preview-view-all"
                className="rounded-xl bg-white text-dark-charcoal hover:bg-secondary-gold hover:text-dark-charcoal px-6 py-3 text-sm font-bold transition-all cursor-pointer"
              >
                Read Client Reviews
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CONTACT CTA SECTION */}
      <section className="mx-auto max-w-5xl px-6 sm:px-8" id="home-contact-cta">
        <div className="bg-gradient-to-br from-primary-burgundy to-[#5c0017] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl" id="footer-cta-container">
          <div className="absolute top-0 right-0 -tr-y-12 translate-x-12 h-64 w-64 rounded-full bg-secondary-gold/10 blur-2xl" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
              Ready to Escalate Your Market Presence?
            </h2>
            <p className="text-base text-white/80">
              Let's craft custom campaigns, high-speeds React portals, or an exquisite brand system designed to win customers for your business. Let's form an authentic growth plan.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleAction("contact")}
                id="cta-bottom-btn"
                className="inline-flex items-center space-x-2.5 rounded-xl bg-secondary-gold text-dark-charcoal hover:bg-secondary-gold-hover px-8 py-4 font-bold transition-all shadow-md shadow-secondary-gold/15 cursor-pointer text-sm"
              >
                <span>Initiate Consultation Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
