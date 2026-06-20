import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare, Check } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  autoPlayRef.current = nextSlide;

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 6500); // Swaps test slides smoothly every 6.5s
    return () => clearInterval(interval);
  }, []);

  const currentTest = TESTIMONIALS_DATA[activeIndex];

  return (
    <div className="space-y-16 pb-24" id="testimonials-page-container">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-primary-burgundy/5 to-secondary-gold/5 py-16 border-b border-gray-100" id="testimonials-header-main">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-lg bg-primary-burgundy/10 px-3.5 py-1 text-xs font-bold text-primary-burgundy uppercase tracking-widest">
            Accolades & Partners Stories
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-dark-charcoal tracking-tight">
            Client Success Stories
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-gray">
            Read first-hand accounts from prominent coffee exporters, regional fintech structures, luxury design startups, and corporate logistics firms in Ethiopia.
          </p>
        </div>
      </section>

      {/* 2. THE INTERACTIVE MAIN TESTIMONIAL SLIDER/CAROUSEL */}
      <section className="mx-auto max-w-5xl px-6 sm:px-8" id="testimonials-carousel-section">
        <div className="relative bg-dark-charcoal rounded-[36px] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/5 text-left">
          
          {/* Background visuals and glowing grids */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-primary-burgundy/15 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 h-48 w-48 bg-secondary-gold/10 rounded-full blur-3xl -z-10" />
          
          {/* Giant quotation visual mark and header */}
          <div className="flex justify-between items-start mb-6">
            <div className="inline-flex items-center space-x-2 rounded-full bg-secondary-gold/10 border border-secondary-gold/25 px-4 py-1 text-xs text-secondary-gold font-bold uppercase tracking-wider">
              <MessageSquare className="h-4.5 w-4.5 text-secondary-gold" />
              <span>Verified Customer Voice</span>
            </div>
            <Quote className="h-10 w-10 text-[#800020] opacity-40 fill-[#800020]" />
          </div>

          {/* Testimonial Active Slider block */}
          <div className="space-y-6 min-h-[220px] sm:min-h-[180px] flex flex-col justify-between animate-fadeIn">
            
            <p className="font-display text-base sm:text-2xl leading-relaxed text-white/90 italic font-medium">
              "{currentTest.quote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={currentTest.avatar} 
                  alt={currentTest.author} 
                  className="h-14 w-14 rounded-full border-2 border-secondary-gold object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-base sm:text-lg font-bold text-white">{currentTest.author}</div>
                  <div className="text-xs text-secondary-gold">{currentTest.role} — <span className="text-neutral-300 font-semibold">{currentTest.company}</span></div>
                </div>
              </div>

              {/* Star controls and scores */}
              <div className="space-y-1 text-left sm:text-right">
                <div className="flex sm:justify-end gap-0.5 text-secondary-gold">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary-gold" />
                  ))}
                </div>
                <div className="text-[10px] uppercase text-neutral-400 font-bold tracking-widest">
                  Performance Certified
                </div>
              </div>
            </div>

          </div>

          {/* Left / Right directional arrows */}
          <div className="flex items-center justify-end space-x-3 mt-6">
            <button
              onClick={prevSlide}
              id="slider-control-prev"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 hover:bg-white/5 text-neutral-300 hover:text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {/* Slide dots marker indicators */}
            <div className="flex space-x-1.5 px-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-6 bg-secondary-gold" : "w-2.5 bg-white/20 hover:bg-white/45"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              id="slider-control-next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 hover:bg-white/5 text-neutral-300 hover:text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. TESTIMONIALS SECONDARY BRICK-GRID */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="testimonials-grid-all">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-display text-2xl font-bold text-dark-charcoal">
            Partnering Across Diverse Industries
          </h2>
          <p className="text-xs sm:text-sm text-slate-gray">
            These companies trust Siltawi Digital to deliver high-performance campaigns in Ethiopia every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div 
              key={t.id} 
              id={`testimonial-tile-${t.id}`}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm text-left flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex gap-0.5 text-secondary-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary-gold" />
                  ))}
                </div>
                <p className="text-sm italic text-slate-gray leading-relaxed h-[68px] overflow-hidden line-clamp-3">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3.5 border-t border-gray-50 pt-5 mt-6">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="h-10 w-10 rounded-full border border-gray-100 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-dark-charcoal">{t.author}</div>
                  <div className="text-[10px] sm:text-xs text-slate-gray font-semibold">{t.role} — <span className="text-primary-burgundy font-bold">{t.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Authenticated satisfaction banner */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8" id="testimonials-audit-bar">
        <div className="p-6 bg-secondary-gold/5 rounded-2xl border border-secondary-gold/10 inline-flex items-center space-x-3 text-left">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B78300] text-white">
            <Check className="h-5 w-5" />
          </div>
          <p className="text-xs text-slate-gray leading-normal">
            <strong>Audit Guarantee:</strong> Our metrics are directly based on consolidated campaign values and official Google Business statistics. We stand by our client satisfaction score of <strong>95%</strong>.
          </p>
        </div>
      </section>

    </div>
  );
}
