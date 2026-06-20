import React, { useState } from "react";
import { 
  Megaphone, Code2, Palette, Camera, SearchCode, 
  ArrowUpRight, CheckCircle, ArrowRight, Sparkles 
} from "lucide-react";
import { SERVICES_DATA } from "../data";

const CategoryIconMapper = ({ name, className }: { name: string; className?: string }) => {
  const map: Record<string, React.ComponentType<any>> = {
    Megaphone,
    Code2,
    Palette,
    Camera,
    SearchCode
  };
  const IconComponent = map[name] || Sparkles;
  return <IconComponent className={className} />;
};

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories = selectedCategory === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(cat => cat.id === selectedCategory);

  return (
    <div className="space-y-16 pb-24" id="services-page-container">
      
      {/* 1. Services Header */}
      <section className="bg-gradient-to-br from-primary-burgundy/5 to-secondary-gold/5 py-16 border-b border-gray-100" id="services-header-intro">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-lg bg-primary-burgundy/10 px-3.5 py-1 text-xs font-bold text-primary-burgundy uppercase tracking-widest">
            Aesthetic & High-Performance Suite
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-dark-charcoal tracking-tight">
            Our Premium Services
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-gray">
            Delivering modern marketing campaigns, clean code architectures, and high-converting creative structures designed to drive continuous growth.
          </p>
        </div>
      </section>

      {/* 2. Category Selector Menu Filters */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="services-tabs-menu">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-100 pb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            id="tab-service-all"
            className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === "all"
                ? "bg-primary-burgundy text-white shadow-md shadow-primary-burgundy/10"
                : "bg-gray-50 text-slate-gray hover:text-primary-burgundy hover:bg-gray-100"
            }`}
          >
            All Categories
          </button>
          {SERVICES_DATA.map((cat) => (
            <button
              key={cat.id}
              id={`tab-service-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary-burgundy text-white shadow-md shadow-primary-burgundy/10"
                  : "bg-gray-50 text-slate-gray hover:text-primary-burgundy hover:bg-gray-100"
              }`}
            >
              <CategoryIconMapper name={cat.iconName} className="h-4 w-4 shrink-0 text-secondary-gold" />
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Services Categories Listings */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-20" id="services-listings-section">
        {filteredCategories.map((category) => (
          <div 
            key={category.id} 
            id={`service-block-${category.id}`}
            className="space-y-8 text-left animate-fadeIn"
          >
            {/* Category header */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 border-b border-gray-100 pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-gold/10 text-secondary-gold">
                <CategoryIconMapper name={category.iconName} className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-dark-charcoal">
                  {category.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-gray h-auto mt-0.5">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Sub-item Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((subItem) => (
                <div 
                  key={subItem.id} 
                  id={`item-card-${subItem.id}`}
                  className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary-burgundy/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-dark-charcoal transition-colors group-hover:text-primary-burgundy">
                        {subItem.title}
                      </h3>
                      <div className="h-8 w-8 rounded-full bg-light-bg text-slate-gray transition-colors group-hover:bg-primary-burgundy/5 group-hover:text-primary-burgundy flex items-center justify-center shrink-0">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-gray">
                      {subItem.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-50 pt-5 mt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary-burgundy mb-3">
                      Included Deliverables:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {subItem.features.map((feat, index) => (
                        <li key={index} className="flex items-start space-x-2 text-[11px] sm:text-xs text-slate-gray">
                          <CheckCircle className="h-3.5 w-3.5 text-secondary-gold mt-0.5 shrink-0" />
                          <span className="leading-tight font-medium text-dark-charcoal">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </section>

      {/* 4. Bottom action Banner */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 border border-gray-100 rounded-3xl p-8 sm:p-12 bg-gray-50 text-center space-y-6" id="services-consultation-bar">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-dark-charcoal">
          Need a Custom Integrated Strategy Plan?
        </h3>
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-gray leading-relaxed">
          Our specialists can bundle multiple services (e.g. Website Development + Branding Identity + Content Reels + SEO Audits) to maximize growth and reduce general launching overheads.
        </p>
        <div className="pt-2">
          <a
            href="#contact"
            id="services-consult-cta"
            onClick={(e) => {
              e.preventDefault();
              const contactBtn = document.getElementById("nav-contact-btn");
              if (contactBtn) contactBtn.click();
            }}
            className="inline-flex items-center space-x-2 rounded-xl bg-primary-burgundy hover:bg-primary-burgundy-hover px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all shadow-md cursor-pointer"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="h-4 w-4 text-secondary-gold" />
          </a>
        </div>
      </section>

    </div>
  );
}
