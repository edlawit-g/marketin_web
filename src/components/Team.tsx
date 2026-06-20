import React, { useState } from "react";
import { Linkedin, Twitter, Instagram, Mail, Briefcase, PhoneCall, ArrowRight, Sparkles } from "lucide-react";
import { TEAM_MEMBERS } from "../data";

export default function Team() {
  const [selectedDept, setSelectedDept] = useState<string>("all");

  const departments = [
    { id: "all", label: "Full Agency" },
    { id: "Executive Strategy", label: "Executive Strategy" },
    { id: "Marketing Management", label: "Marketing Directives" },
    { id: "Web Development Team", label: "Web Engineering" },
    { id: "Graphic Design Team", label: "Creative & Branding" },
    { id: "Content Creation Team", label: "Content Collectors" },
    { id: "SEO Specialists", label: "Search Analysts" },
  ];

  const filteredMembers = selectedDept === "all"
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.department === selectedDept);

  return (
    <div className="space-y-16 pb-24" id="team-page-container">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-primary-burgundy/5 to-secondary-gold/5 py-16 border-b border-gray-100" id="team-header-main">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-lg bg-primary-burgundy/10 px-3.5 py-1 text-xs font-bold text-primary-burgundy uppercase tracking-widest">
            The Minds Behind Siltawi
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-dark-charcoal tracking-tight">
            Meet Our Creative Experts
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-gray">
            Our collective brings together seasoned marketing directors, brilliant web developers, creative visual artists, and meticulous search researchers working in Addis Ababa.
          </p>
        </div>
      </section>

      {/* 2. Interactive Department Filter Menu */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="team-department-filter">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-100 pb-6">
          {departments.map((dept) => (
            <button
              key={dept.id}
              id={`dept-tab-${dept.id}`}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedDept === dept.id
                  ? "bg-primary-burgundy text-white shadow-md"
                  : "bg-gray-50 text-slate-gray hover:text-primary-burgundy hover:bg-gray-100"
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Team grid display */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 animate-fadeIn" id="team-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMembers.map((member) => (
            <div 
              key={member.id} 
              id={`team-member-card-${member.id}`}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary-burgundy/10 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                
                {/* Photo stack with dark vignette overlay */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-charcoal/40 to-transparent p-4 flex items-end justify-between">
                    <span className="inline-block rounded-lg bg-white/95 backdrop-blur-sm border border-gray-100 px-3 py-1 text-[10px] font-bold text-primary-burgundy uppercase tracking-wider">
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Text and stats */}
                <div className="px-6 space-y-2">
                  <div className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                    {member.role}
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark-charcoal transition-colors group-hover:text-primary-burgundy">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-gray leading-relaxed h-[68px] overflow-hidden line-clamp-3">
                    {member.bio}
                  </p>
                </div>

              </div>

              {/* Footer social connects */}
              <div className="px-6 py-4 mt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-gray">
                  Contact Specialist:
                </span>
                <div className="flex space-x-1.5" id={`socials-${member.id}`}>
                  {member.socials.linkedin && (
                    <a 
                      href={member.socials.linkedin} 
                      className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-100 text-slate-gray hover:border-primary-burgundy hover:bg-primary-burgundy hover:text-white transition-all duration-300"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a 
                      href={member.socials.twitter} 
                      className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-100 text-slate-gray hover:border-primary-burgundy hover:bg-primary-burgundy hover:text-white transition-all duration-300"
                      title="Twitter"
                    >
                      <Twitter className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a 
                      href={member.socials.instagram} 
                      className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-100 text-slate-gray hover:border-primary-burgundy hover:bg-primary-burgundy hover:text-white transition-all duration-300"
                      title="Instagram"
                    >
                      <Instagram className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a 
                      href={`mailto:${member.socials.email}`} 
                      className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-100 text-slate-gray hover:border-primary-burgundy hover:bg-primary-burgundy hover:text-white transition-all duration-300"
                      title="Email Contact"
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Call for Career */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 border border-gray-100 rounded-3xl p-8 sm:p-12 bg-gray-50 text-center space-y-6" id="team-recruitment-banner">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-dark-charcoal">
          Interested in joining Siltawi Digital?
        </h3>
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-gray leading-relaxed">
          We are constantly searching for meticulous Web Engineers, innovative Graphic UI designers, and conversion ads managers. If you enjoy driving excellence, let's explore careers.
        </p>
        <div className="pt-2">
          <a
            href="mailto:careers@siltawi.com"
            id="team-career-cta"
            className="inline-flex items-center space-x-2.5 rounded-xl bg-primary-burgundy hover:bg-primary-burgundy-hover px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all"
          >
            <span>Mail Your Resume</span>
            <ArrowRight className="h-4 w-4 text-secondary-gold" />
          </a>
        </div>
      </section>

    </div>
  );
}
