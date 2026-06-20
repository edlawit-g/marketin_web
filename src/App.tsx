import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");

  const renderActivePage = () => {
    switch (activeTab) {
      case "home":
        return <Home setActiveTab={setActiveTab} />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "portfolio":
        return <Portfolio />;
      case "team":
        return <Team />;
      case "testimonials":
        return <Testimonials />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-dark-charcoal antialiased flex flex-col justify-between selection:bg-primary-burgundy/10 selection:text-primary-burgundy" id="app-root-container">
      <div>
        {/* Navigation Bar Header */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Page content area with elegant motion/react transitions */}
        <main className="relative overflow-x-hidden min-h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {renderActivePage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Persistent global footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
