"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">GET IN TOUCH</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">CONTACT</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl mb-6">CONTACT INFORMATION</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#C8102E] mt-1" />
                <div>
                  <div className="font-semibold mb-1">Telephone</div>
                  <a href="tel:+447438052254" className="text-white/80 hover:text-[#C8102E] transition-colors">
                    +44 7438 052 254
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#C8102E] mt-1" />
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:admin@shitoryuengland.uk" className="text-white/80 hover:text-[#C8102E] transition-colors">
                    admin@shitoryuengland.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-b from-[#171717] to-black border border-white/10">
              <p className="text-white/70 text-sm">
                <strong className="text-white">Note:</strong> This is a contact form template. For direct enquiries, please use the email or phone number above.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl mb-6">SEND A MESSAGE</h2>
            {submitted ? (
              <div className="p-8 bg-gradient-to-b from-[#171717] to-black border border-[#C8102E]/50 text-center">
                <h3 className="text-xl font-semibold mb-4 text-[#C8102E]">Message Sent</h3>
                <p className="text-white/80 mb-6">
                  Thank you for your enquiry. We will get back to you soon.
                </p>
                <p className="text-white/60 text-sm">
                  Please note: Form submission is not yet connected to a backend service.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#171717] border border-white/20 text-white focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#171717] border border-white/20 text-white focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#171717] border border-white/20 text-white focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium mb-2">Enquiry Type *</label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#171717] border border-white/20 text-white focus:border-[#C8102E] focus:outline-none transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="membership">Membership</option>
                    <option value="squad">Squad Training</option>
                    <option value="safeguarding">Safeguarding</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#171717] border border-white/20 text-white focus:border-[#C8102E] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#C8102E] text-white font-semibold hover:bg-[#a00d24] transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
