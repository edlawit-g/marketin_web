import React, { useState } from "react";
import { X, Calendar, Folder, Building2, TrendingUp, Sparkles, SlidersHorizontal } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "Website Development", label: "Web Development" },
    { id: "Branding Projects", label: "Branding" },
    { id: "Social Media Campaigns", label: "Social Campaigns" },
    { id: "Marketing Campaigns", label: "Marketing" },
    { id: "UI/UX Projects", label: "UI/UX Designs" }
  ];

  const filteredProjects = activeFilter === "all"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-16 pb-24" id="portfolio-page-container">
      
      {/* 1. Page Header banner */}
      <section className="bg-gradient-to-br from-primary-burgundy/5 to-secondary-gold/5 py-16 border-b border-gray-100" id="portfolio-header-lead">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-lg bg-primary-burgundy/10 px-3.5 py-1 text-xs font-bold text-primary-burgundy uppercase tracking-widest">
            Proofs of our Dedication
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-dark-charcoal tracking-tight">
            Our Portfolio
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-gray">
            Explore how we build clean digital products, scale localized marketing parameters, and capture new user audiences for our regional and international partners.
          </p>
        </div>
      </section>

      {/* 2. Portfolio Category Filters */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="portfolio-category-nav">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div className="flex items-center space-x-2 text-slate-gray text-xs sm:text-sm font-semibold">
            <SlidersHorizontal className="h-4 w-4 text-primary-burgundy" />
            <span>Filter Case Studies:</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-primary-burgundy text-white shadow-md"
                    : "bg-gray-50 text-slate-gray hover:text-primary-burgundy hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projects Grid Gallery */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="portfolio-items-grid">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-slate-gray font-medium">No projects added under this specific filter yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  
                  {/* Photo area with category tag overlays */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-100 px-3.5 py-1 text-[10px] font-bold text-primary-burgundy uppercase tracking-wider">
                      {project.category}
                    </div>
                  </div>

                  {/* Descriptions block */}
                  <div className="px-6 pb-2 space-y-2">
                    <div className="flex items-center space-x-2 text-[11px] text-slate-gray">
                      <Building2 className="h-3.5 w-3.5 text-secondary-gold" />
                      <span>{project.client}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-dark-charcoal group-hover:text-primary-burgundy transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-gray leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                </div>

                {/* Footer trigger bar */}
                <div className="px-6 py-4 mt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-primary-burgundy group-hover:bg-primary-burgundy/5 transition-all">
                  <span>View Full Case Study</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-light-bg group-hover:bg-primary-burgundy group-hover:text-white transition-colors">
                    →
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. MODAL POPUP - PROJECT DETAILED CASE STUDY */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-charcoal/60 backdrop-blur-sm animate-fadeIn"
          id="project-detail-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-100 text-left animate-scaleIn space-y-8"
            id="modal-case-study"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close trigger bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-5">
              <div className="space-y-1">
                <span className="inline-block rounded-md bg-secondary-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-[#B78300] uppercase tracking-widest">
                  {selectedProject.category}
                </span>
                <h2 className="font-display text-xl sm:text-3xl font-extrabold text-dark-charcoal leading-tight">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                id="close-modal-btn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-slate-gray hover:text-primary-burgundy transition-colors focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Two column grid content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column Description */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Challenge Block */}
                <div className="space-y-2">
                  <div className="font-display text-sm font-bold text-primary-burgundy uppercase tracking-wider">
                    The Challenge
                  </div>
                  <p className="text-xs sm:text-sm text-slate-gray leading-relaxed p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    {selectedProject.challenge}
                  </p>
                </div>

                {/* Solution Block */}
                <div className="space-y-2">
                  <div className="font-display text-sm font-bold text-primary-burgundy uppercase tracking-wider">
                    Our Solution Strategy
                  </div>
                  <p className="text-xs sm:text-sm text-slate-gray leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Results achieved Block */}
                <div className="space-y-3 p-5 bg-secondary-gold/5 rounded-2xl border border-secondary-gold/10">
                  <div className="flex items-center space-x-2 text-[#B78300] font-bold text-sm uppercase tracking-wider">
                    <TrendingUp className="h-4 w-4" />
                    <span>Tangible Performance Results</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-gray leading-relaxed font-medium">
                    {selectedProject.results}
                  </p>
                </div>

              </div>

              {/* Right Column details list & Media display */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Main preview picture */}
                <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-md aspect-[4/3] bg-gray-50">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Quick specifications roster */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-4">
                  <div className="text-xs font-bold text-dark-charcoal uppercase tracking-wider border-b border-gray-100 pb-2">
                    Case Study Parameters
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-slate-gray font-semibold">Client Name</div>
                      <div className="font-bold text-dark-charcoal mt-0.5">{selectedProject.client}</div>
                    </div>
                    <div>
                      <div className="text-slate-gray font-semibold">Launch Year</div>
                      <div className="font-bold text-dark-charcoal mt-0.5">{selectedProject.year}</div>
                    </div>
                    <div>
                      <div className="text-slate-gray font-semibold">Service Group</div>
                      <div className="font-bold text-dark-charcoal mt-0.5">{selectedProject.category}</div>
                    </div>
                    <div>
                      <div className="text-slate-gray font-semibold">Status</div>
                      <div className="inline-flex items-center rounded-md bg-green-50 px-2 py-0.5 font-bold text-green-700 mt-1">
                        Active Support
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Clear close trigger at bottom */}
            <div className="flex justify-end pt-4 border-t border-gray-100">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm font-bold text-slate-gray hover:text-primary-burgundy hover:bg-gray-50 focus:outline-none transition-colors"
              >
                Close Project Case
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
