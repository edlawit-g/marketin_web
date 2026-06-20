import React from "react";
import { Phone, Mail, MapPin, ArrowUp, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100" id="global-footer">
      {/* Top Footer Banner / Contact Bar */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-100 pb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center space-x-3 text-left focus:outline-none group"
              id="footer-logo-btn"
            >
              <div className="flex h-12 items-center transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" 
                  alt="Siltawi Digital Marketing Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </button>
            <p className="text-sm leading-relaxed text-slate-gray">
              Revolutionizing digital optimization and strategic growth in Addis Ababa and across East Africa since 2023. Custom-building digital products with precision.
            </p>
            <div className="flex space-x-3" id="footer-socials">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 text-slate-gray transition-all hover:border-primary-burgundy hover:bg-primary-burgundy hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 text-slate-gray transition-all hover:border-primary-burgundy hover:bg-primary-burgundy hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 text-slate-gray transition-all hover:border-primary-burgundy hover:bg-primary-burgundy hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-5">
            <h3 className="font-display text-[15px] font-bold text-dark-charcoal uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Services Preview" },
                { id: "portfolio", label: "Portfolio Gallery" },
                { id: "team", label: "Our Professionals" },
                { id: "contact", label: "Get in Touch" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="group flex items-center text-sm text-slate-gray transition-all hover:text-primary-burgundy focus:outline-none"
                  >
                    <ArrowRight className="mr-1.5 h-3 w-3 text-secondary-gold opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Col */}
          <div className="space-y-5">
            <h3 className="font-display text-[15px] font-bold text-dark-charcoal uppercase tracking-wider">
              Our Core Expertise
            </h3>
            <ul className="space-y-3">
              {[
                "Digital Marketing",
                "Website Development",
                "Branding & Design",
                "Content Creation",
                "SEO Optimization Services"
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick("services")}
                    className="group flex items-center text-sm text-slate-gray transition-all hover:text-primary-burgundy focus:outline-none"
                  >
                    <ArrowRight className="mr-1.5 h-3 w-3 text-secondary-gold opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="space-y-5">
            <h3 className="font-display text-[15px] font-bold text-dark-charcoal uppercase tracking-wider">
              Address Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-gray">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-burgundy" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-gray">
                <Phone className="h-4 w-4 shrink-0 text-primary-burgundy" />
                <a href="tel:+251900000000" className="hover:text-primary-burgundy transition-colors">
                  +251 900 000 000
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-gray">
                <Mail className="h-4 w-4 shrink-0 text-primary-burgundy" />
                <a href="mailto:info@siltawi.com" className="hover:text-primary-burgundy transition-colors">
                  info@siltawi.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-flex items-center rounded-md bg-secondary-gold/10 px-2.5 py-1 text-xs font-medium text-[#B78300]">
                Est. 2023 • Live Support
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs text-slate-gray">
          <div>
            © {currentYear} <strong>Siltawi Digital Marketing</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-primary-burgundy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-burgundy transition-colors">Terms of Service</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-primary-burgundy hover:text-white transition-all shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
