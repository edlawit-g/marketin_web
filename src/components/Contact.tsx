import React, { useState } from "react";
import { 
  Phone, Mail, MapPin, Globe, Clock, CheckCircle2, 
  Send, User, FileText, MessageSquare, AlertCircle 
} from "lucide-react";
import { ContactMessage } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<ContactMessage | null>(null);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please input a valid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = "Provide a valid phone format";
    }

    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must contain at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error inline
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const logRecord: ContactMessage = {
        ...formData,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      };
      setSubmittedMessage(logRecord);
      
      // Clear forms
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="space-y-16 pb-24" id="contact-page-container">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-primary-burgundy/5 to-secondary-gold/5 py-16 border-b border-gray-100" id="contact-header-banner">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-lg bg-primary-burgundy/10 px-3.5 py-1 text-xs font-bold text-primary-burgundy uppercase tracking-widest">
            Let's Shape Your Expansion
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-dark-charcoal tracking-tight">
            Connect With Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-gray">
            Connect with Yohannes, Eden, and our system engineers today to receive your custom, high-speed optimization blueprint.
          </p>
        </div>
      </section>

      {/* 2. Main Two Column Grid (Details vs Form) */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="contact-grid-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Information card */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <h2 className="font-display text-2xl font-extrabold text-dark-charcoal">
                Contact Information
              </h2>
              
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-burgundy/5 text-primary-burgundy">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-gray uppercase tracking-wider">Address Location</div>
                    <div className="text-sm font-semibold text-dark-charcoal mt-0.5">Addis Ababa, Ethiopia</div>
                    <div className="text-xs text-slate-gray mt-0.5">Bole Sub City, Creative Hubs District</div>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-burgundy/5 text-primary-burgundy">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-gray uppercase tracking-wider">Direct Hotline</div>
                    <div className="text-sm font-semibold text-dark-charcoal mt-0.5">
                      <a href="tel:+251900000000" className="hover:text-primary-burgundy transition-colors">
                        +251 900 000 000
                      </a>
                    </div>
                    <div className="text-xs text-slate-gray mt-0.5">Available Mon-Sat for instant assistance</div>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-burgundy/5 text-primary-burgundy">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-gray uppercase tracking-wider">Official Email</div>
                    <div className="text-sm font-semibold text-dark-charcoal mt-0.5">
                      <a href="mailto:info@siltawi.com" className="hover:text-primary-burgundy transition-colors">
                        info@siltawi.com
                      </a>
                    </div>
                    <div className="text-xs text-slate-gray mt-0.5">Response typically within 2 business hours</div>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-burgundy/5 text-primary-burgundy">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-gray uppercase tracking-wider">Official Portal</div>
                    <div className="text-sm font-semibold text-dark-charcoal mt-0.5">
                      <a href="https://www.siltawi.com" target="_blank" rel="noreferrer" className="hover:text-primary-burgundy transition-colors">
                        www.siltawi.com
                      </a>
                    </div>
                    <div className="text-xs text-slate-gray mt-0.5">SSL Secured Gateway Web System</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Business hours Card */}
            <div className="bg-dark-charcoal text-white p-8 rounded-3xl shadow-md border border-white/5 space-y-6">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-secondary-gold shrink-0" />
                <h3 className="font-display text-lg font-bold">Business Hours</h3>
              </div>
              <ul className="space-y-3.5 text-xs">
                <li className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-400 font-medium">Monday — Friday</span>
                  <span className="font-bold">8:30 AM — 5:30 PM (EAT)</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-400 font-medium">Saturday</span>
                  <span className="font-bold">9:00 AM — 1:00 PM (EAT)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-neutral-400 font-medium">Sunday</span>
                  <span className="text-secondary-gold font-bold uppercase">Closed</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column Form area */}
          <div className="lg:col-span-7">
            
            {isSuccess ? (
              <div 
                className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl text-center space-y-6 animate-scaleIn"
                id="contact-form-success-container"
              >
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-extrabold text-dark-charcoal">
                    Form Submitted Successfully!
                  </h3>
                  <p className="max-w-md mx-auto text-sm text-slate-gray leading-relaxedBox">
                    Thank you. Yohannes Siltawi or our lead account coordinator Eden Tesfaye will trace your contact information and respond immediately within 2 business hours.
                  </p>
                </div>

                {submittedMessage && (
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left space-y-3 max-w-lg mx-auto">
                    <div className="text-xs font-bold text-dark-charcoal uppercase border-b border-gray-100 pb-1.5 flex justify-between">
                      <span>Submitted Payload Log</span>
                      <span className="text-slate-gray font-normal">{submittedMessage.date}</span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-gray space-y-1">
                      <div><strong>Sender Name:</strong> {submittedMessage.fullName}</div>
                      <div><strong>Client Email:</strong> {submittedMessage.email}</div>
                      <div><strong>Verification Phone:</strong> {submittedMessage.phone}</div>
                      <div><strong>Chosen Subject:</strong> {submittedMessage.subject}</div>
                      <div className="pt-2 border-t border-gray-100 mt-2 italic">
                        "{submittedMessage.message}"
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-primary-burgundy hover:bg-primary-burgundy-hover text-xs sm:text-sm font-bold text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 text-left"
                id="contact-form"
                noValidate
              >
                <h3 className="font-display text-2xl font-extrabold text-dark-charcoal">
                  Initiate Your Launch Inquiry
                </h3>
                <p className="text-xs text-slate-gray">
                  Provide your business credentials. All inquiries are encrypted and processed in standard agency queue streams.
                </p>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="flex items-center space-x-1.5 text-xs font-bold text-dark-charcoal uppercase tracking-wider">
                      <User className="h-3.5 w-3.5 text-primary-burgundy" />
                      <span>Full Name</span>
                    </label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full bg-light-bg border ${formErrors.fullName ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:ring-primary-burgundy/10 focus:border-primary-burgundy/80"} px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-4 transition-all`}
                      placeholder="Yohannes Tekle"
                    />
                    {formErrors.fullName && (
                      <div className="flex items-center space-x-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{formErrors.fullName}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center space-x-1.5 text-xs font-bold text-dark-charcoal uppercase tracking-wider">
                      <Mail className="h-3.5 w-3.5 text-primary-burgundy" />
                      <span>Email Address</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-light-bg border ${formErrors.email ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:ring-primary-burgundy/10 focus:border-primary-burgundy/80"} px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-4 transition-all`}
                      placeholder="yohannes@company.com"
                    />
                    {formErrors.email && (
                      <div className="flex items-center space-x-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{formErrors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center space-x-1.5 text-xs font-bold text-dark-charcoal uppercase tracking-wider">
                      <Phone className="h-3.5 w-3.5 text-primary-burgundy" />
                      <span>Phone Number</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-light-bg border ${formErrors.phone ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:ring-primary-burgundy/10 focus:border-primary-burgundy/80"} px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-4 transition-all`}
                      placeholder="+251 900 000 000"
                    />
                    {formErrors.phone && (
                      <div className="flex items-center space-x-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{formErrors.phone}</span>
                      </div>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="flex items-center space-x-1.5 text-xs font-bold text-dark-charcoal uppercase tracking-wider">
                      <FileText className="h-3.5 w-3.5 text-primary-burgundy" />
                      <span>Inquiry Subject</span>
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full bg-light-bg border ${formErrors.subject ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:ring-primary-burgundy/10 focus:border-primary-burgundy/80"} px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-4 transition-all`}
                      placeholder="e.g. Website and SEO Package"
                    />
                    {formErrors.subject && (
                      <div className="flex items-center space-x-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{formErrors.subject}</span>
                      </div>
                    )}
                  </div>

                </div>

                {/* Message block */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center space-x-1.5 text-xs font-bold text-dark-charcoal uppercase tracking-wider">
                    <MessageSquare className="h-3.5 w-3.5 text-primary-burgundy" />
                    <span>Project Description / Message</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-light-bg border ${formErrors.message ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:ring-primary-burgundy/10 focus:border-primary-burgundy/80"} px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-4 transition-all resize-none`}
                    placeholder="Provide details about your project goals, timelines, and budgets..."
                  />
                  {formErrors.message && (
                    <div className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{formErrors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submission button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-contact-form-btn"
                    className="w-full flex items-center justify-center space-x-2 rounded-xl bg-primary-burgundy hover:bg-primary-burgundy-hover disabled:bg-primary-burgundy/50 px-6 py-4 font-bold text-white transition-all shadow-md shadow-primary-burgundy/15 hover:shadow-lg disabled:cursor-not-allowed cursor-pointer text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Registering Inquiries...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 text-secondary-gold" />
                        <span>Send Secure Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. Embedded Google Map Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12" id="contact-map-frame">
        <div className="text-center space-y-3 mb-8">
          <h2 className="font-display text-2xl font-bold text-dark-charcoal">
            Find Us in Addis Ababa
          </h2>
          <p className="text-xs sm:text-sm text-slate-gray">
            Located in the central creative agency district, easily accessible to local partners and visitors.
          </p>
        </div>

        <div className="rounded-[32px] overflow-hidden border border-gray-100 bg-gray-50 p-2 shadow-2xl h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.0461877682!2d38.61332824361539!3d9.008064567228805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1718873000000!5m2!1sen!2set" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            title="Siltawi Digital Marketing - Addis Ababa, Ethiopia"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </div>
      </section>

    </div>
  );
}
