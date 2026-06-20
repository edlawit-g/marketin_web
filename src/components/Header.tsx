import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Award } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Our Team" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo block */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center space-x-3 text-left focus:outline-none group"
          id="nav-logo-btn"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" id="desktop-nav">
          {navigationItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}-btn`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-primary-burgundy bg-primary-burgundy/5 font-semibold"
                    : "text-slate-gray hover:text-primary-burgundy hover:bg-gray-50"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-secondary-gold" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Lead Magnet on right side */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => handleNavClick("contact")}
            id="nav-cta-btn"
            className="group flex items-center space-x-2 rounded-xl bg-primary-burgundy px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-burgundy-hover hover:shadow-lg hover:shadow-primary-burgundy/20"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="h-4 w-4 text-secondary-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="mobile-menu-toggle"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-dark-charcoal hover:bg-gray-100 hover:text-primary-burgundy md:hidden focus:outline-none transition-colors border border-gray-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 md:hidden max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}-btn`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "text-primary-burgundy bg-primary-burgundy/5 font-semibold border-l-4 border-secondary-gold pl-3"
                      : "text-slate-gray hover:text-primary-burgundy hover:bg-gray-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="inline-block h-2 w-2 rounded-full bg-secondary-gold" />
                  )}
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-gray-100 mt-2">
              <button
                onClick={() => handleNavClick("contact")}
                id="mobile-nav-cta-btn"
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-primary-burgundy py-3 text-center text-sm font-semibold text-white shadow-md shadow-primary-burgundy/15"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="h-4 w-4 text-secondary-gold" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
