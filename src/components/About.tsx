import React from "react";
import { 
  Lightbulb, Palette, Eye, Award, Target, GraduationCap, 
  CheckCircle, History, Landmark, Sparkles 
} from "lucide-react";
import { CORE_VALUES } from "../data";

const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  const map: Record<string, React.ComponentType<any>> = {
    Lightbulb,
    Palette,
    Eye,
    Award,
    Target,
    GraduationCap
  };
  const IconComponent = map[name] || Sparkles;
  return <IconComponent className={className} />;
};

export default function About() {
  return (
    <div className="space-y-24 pb-24" id="about-page-container">
      
      {/* Page Header banner */}
      <section className="bg-gradient-to-br from-primary-burgundy/5 to-secondary-gold/5 py-16 border-b border-gray-100" id="about-heading-banner">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-lg bg-primary-burgundy/10 px-3.5 py-1 text-xs font-bold text-primary-burgundy uppercase tracking-widest">
            A Glimpse Into Our DNA
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-dark-charcoal tracking-tight">
            Who We Are
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-gray">
            A results-oriented collective of software engineers, campaign experts, and creative storytellers crafting custom brand transformations in East Africa.
          </p>
        </div>
      </section>

      {/* 2. COMPANY STORY */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="about-history">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 rounded-lg bg-secondary-gold/10 px-3 py-1 text-xs font-bold text-[#B78300] uppercase tracking-wider">
              <History className="h-4 w-4 text-[#B78300]" />
              <span>Established 2023 in Addis Ababa</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-dark-charcoal leading-tight">
              Pioneering High-Performance Design Standards in Ethiopia
            </h2>
            
            <p className="text-sm sm:text-base text-slate-gray leading-relaxed">
              Founded in early 2023, <strong>Siltawi Digital Marketing</strong> emerged from a unified realization: local businesses were forced to choose between beautiful-but-underperforming graphics, or engineering-heavy interfaces with zero creative character. 
            </p>
            <p className="text-sm sm:text-base text-slate-gray leading-relaxed">
              We bridges that gap. By combining modern web deployment standards (including lightweight API configurations and structured SEO practices) with premium visual storytelling, we guide companies toward dominant online search rankings and record-breaking ad conversions.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
              <div>
                <div className="font-display text-2xl font-extrabold text-primary-burgundy">2023</div>
                <div className="text-xs text-slate-gray mt-1">Founded with a core team of 3 specialists in Addis Ababa.</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-secondary-gold">100+</div>
                <div className="text-xs text-slate-gray mt-1">Clients successfully accelerated across the continent.</div>
              </div>
            </div>
          </div>

          {/* Graphical illustration stack */}
          <div className="lg:col-span-6 relative" id="about-image-grids">
            <div className="absolute top-4 left-4 right-4 bottom-4 rounded-3xl bg-secondary-gold/5 -z-10" />
            <div className="overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl p-4">
              <div className="relative group overflow-hidden rounded-2xl bg-gray-50 aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                  alt="Siltawi Team Creative Collaboration" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary-gold">Collaborative Office</div>
                  <div className="font-display text-sm font-semibold">Where concepts turn into production algorithms</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION STATEMENTS */}
      <section className="bg-light-bg py-20 border-y border-gray-100" id="about-mission-vision">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Mission Statement */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primary-burgundy/15 transition-all duration-300 text-left space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-burgundy/10 text-primary-burgundy">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-dark-charcoal">
                Our Mission Statement
              </h3>
              <p className="text-base leading-relaxed text-slate-gray">
                "To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful customer connections."
              </p>
              <div className="border-t border-gray-50 pt-4 space-y-2">
                {["Measurable conversion increases", "Sleek, eye-safe typography", "Data-driven marketing structures"].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-gray">
                    <CheckCircle className="h-4 w-4 text-primary-burgundy shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Statement */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-secondary-gold/25 transition-all duration-300 text-left space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-gold/10 text-secondary-gold">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-dark-charcoal">
                Our Vision Statement
              </h3>
              <p className="text-base leading-relaxed text-slate-gray">
                "To become one of Africa's leading digital marketing agencies by delivering creative, data-driven, and results-oriented digital solutions."
              </p>
              <div className="border-t border-gray-50 pt-4 space-y-2">
                {["Local business scaling nationwide", "Fostering regional design benchmarks", "Long-term client partnerships"].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-gray">
                    <CheckCircle className="h-4 w-4 text-secondary-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="about-core-values">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-lg bg-primary-burgundy/10 px-3.5 py-1 text-xs font-bold text-primary-burgundy uppercase tracking-widest">
            Our Guiding Anchors
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-dark-charcoal">
            The Values That Power Every Action
          </h2>
          <p className="text-sm sm:text-base text-slate-gray">
            These shared commitments aren't just slides in a deck — they shape how we structure code, audit metrics, design logos, and communicate results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((val, idx) => (
            <div 
              key={idx} 
              id={`core-card-${idx}`}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-left space-y-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-burgundy/5 text-primary-burgundy group-hover:bg-primary-burgundy group-hover:text-white transition-all duration-300">
                <IconMapper name={val.iconName} className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-dark-charcoal group-hover:text-primary-burgundy transition-colors">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-gray leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
