"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { validateContactForm, ContactFormData, ValidationErrors } from "@/lib/validation";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    projectType: preselectedService || "Residential Styling",
    location: "",
    approxBudget: "₹25L – ₹50L",
    message: ""
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const [submittedId, setSubmittedId] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmittedId(data.inquiryId);
        setSubmitted(true);
      }
    } catch {
      // Fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#FFFFFF] border border-[#EAE4DC] rounded-3xl p-8 sm:p-12 text-center shadow-xs">
        <div className="w-16 h-16 bg-[#8B9E8B]/15 text-[#8B9E8B] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-3xl text-[#1C1C1A] mb-3">
          Dialogue Initiated
        </h3>
        {submittedId && (
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#EAE4DC] text-xs font-mono text-[#B68D5D] mb-4 font-semibold">
            Inquiry Reference #{submittedId}
          </div>
        )}
        <p className="text-[#6B6864] text-sm leading-relaxed max-w-md mx-auto mb-8">
          Thank you, <strong className="text-[#1C1C1A]">{formData.fullName}</strong>. We have received your project details regarding {formData.projectType}. An architectural principal will review your dossier and be in touch within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setSubmittedId(null);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              projectType: "Residential Styling",
              location: "",
              approxBudget: "₹25L – ₹50L",
              message: ""
            });
          }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-full bg-[#1C1C1A] text-[#FAF8F5] hover:bg-[#B68D5D] transition-colors"
        >
          <span>Send Another Inquiry</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FFFFFF] border border-[#EAE4DC] rounded-3xl p-8 sm:p-12 shadow-xs space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-2">
            Full Name <span className="text-[#B68D5D]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Maya Advani"
            className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#B68D5D]/20 transition-all ${
              errors.fullName ? "border-red-500 focus:border-red-500" : "border-[#EAE4DC] focus:border-[#B68D5D]"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1.5">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-2">
            Email Address <span className="text-[#B68D5D]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="maya@domain.com"
            className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#B68D5D]/20 transition-all ${
              errors.email ? "border-red-500 focus:border-red-500" : "border-[#EAE4DC] focus:border-[#B68D5D]"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1.5">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98200 00000"
            className="w-full px-4 py-3 rounded-xl border border-[#EAE4DC] bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:border-[#B68D5D] focus:ring-2 focus:ring-[#B68D5D]/20 transition-all"
          />
        </div>

        {/* Project Scope / Type */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-2">
            Project Scope <span className="text-[#B68D5D]">*</span>
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#EAE4DC] bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:border-[#B68D5D] focus:ring-2 focus:ring-[#B68D5D]/20 transition-all"
          >
            <option value="Residential Styling">Residential Styling</option>
            <option value="Hospitality Spaces">Hospitality Spaces</option>
            <option value="Workspace Design">Workspace Design</option>
            <option value="Material & Finish Selection">Material & Finish Selection</option>
            <option value="Custom Furniture Planning">Custom Furniture Planning</option>
            <option value="Design Consultation">Design Consultation</option>
          </select>
          {errors.projectType && (
            <p className="text-red-600 text-xs mt-1.5">{errors.projectType}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Location */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-2">
            Project City / Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Pune, Mumbai, Goa, Bengaluru"
            className="w-full px-4 py-3 rounded-xl border border-[#EAE4DC] bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:border-[#B68D5D] focus:ring-2 focus:ring-[#B68D5D]/20 transition-all"
          />
        </div>

        {/* Approximate Budget */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-2">
            Anticipated Investment
          </label>
          <select
            name="approxBudget"
            value={formData.approxBudget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#EAE4DC] bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:border-[#B68D5D] focus:ring-2 focus:ring-[#B68D5D]/20 transition-all"
          >
            <option value="Under ₹25L">Under ₹25L</option>
            <option value="₹25L – ₹50L">₹25L – ₹50L</option>
            <option value="₹50L – ₹1 Cr">₹50L – ₹1 Cr</option>
            <option value="₹1 Cr+">₹1 Cr+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-2">
          Project Narrative & Vision <span className="text-[#B68D5D]">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your property, target completion timeline, and any special architectural aspirations..."
          className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#B68D5D]/20 transition-all resize-y ${
            errors.message ? "border-red-500 focus:border-red-500" : "border-[#EAE4DC] focus:border-[#B68D5D]"
          }`}
        />
        {errors.message && (
          <p className="text-red-600 text-xs mt-1.5">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1C1C1A] text-[#FAF8F5] hover:bg-[#B68D5D] transition-colors text-xs uppercase tracking-wider font-semibold shadow-md disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Submitting Dossier...</span>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-center text-xs text-[#8C867D] mt-3">
          We maintain strict privacy. Your architectural details remain strictly confidential.
        </p>
      </div>
    </form>
  );
}
