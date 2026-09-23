"use client";

import { useEffect, useState } from "react";
import { Star, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface Review {
  id: number;
  author: string;
  location: string;
  project: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [project, setProject] = useState("Willow House");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      if (data.success) {
        setReviews(data.data);
      }
    } catch (err) {
      console.error("Failed to load reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, location, project, rating, comment })
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg(true);
        setAuthor("");
        setLocation("");
        setComment("");
        fetchReviews();
        setTimeout(() => setSuccessMsg(false), 5000);
      }
    } catch (err) {
      console.error("Failed to submit review:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-2">
            Client Voices
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1C1A] leading-tight mb-6">
            Testimonials & Architectural Dialogue
          </h1>
          <p className="text-[#6B6864] text-base sm:text-lg leading-relaxed">
            Read perspectives from our patrons, restaurateurs, and collaborators. You are also welcome to submit your review of our spatial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Reviews Stream (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl text-[#1C1C1A] mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#B68D5D]" />
              <span>Published Client Reflections ({reviews.length})</span>
            </h2>

            {loading ? (
              <p className="text-sm text-[#8C867D]">Loading client reviews...</p>
            ) : (
              reviews.map((rev) => (
                <article
                  key={rev.id}
                  className="bg-[#FFFFFF] border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 hover-lift"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#B68D5D]">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#B68D5D]" />
                      ))}
                    </div>
                    <span className="text-xs text-[#8C867D]">{rev.date}</span>
                  </div>

                  {/* 
                    STORED XSS SINK:
                    Unsanitized comment rendered via dangerouslySetInnerHTML
                  */}
                  <div
                    className="review-comment text-sm text-[#1C1C1A] leading-relaxed mb-6 space-y-2"
                    dangerouslySetInnerHTML={{ __html: rev.comment }}
                  />

                  <div className="pt-4 border-t border-[#F2ECE4] flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-[#1C1C1A] font-semibold block">{rev.author}</strong>
                      <span className="text-[#8C867D]">{rev.location}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE4DC] text-[#6B6864] text-[11px] font-medium">
                      Project: {rev.project}
                    </span>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Submit Review Form (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] border border-[#EAE4DC] rounded-3xl p-8 sticky top-28 shadow-xs">
              <h3 className="font-serif text-2xl text-[#1C1C1A] mb-2">
                Share Your Experience
              </h3>
              <p className="text-xs text-[#6B6864] mb-6">
                Contribute feedback regarding an Atelier North private commission or space. Rich text styling is supported.
              </p>

              {successMsg && (
                <div className="mb-6 p-4 rounded-xl bg-[#8B9E8B]/15 border border-[#8B9E8B]/40 text-[#2C4A2C] text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B9E8B] shrink-0" />
                  <span>Your testimonial has been published to the client review stream!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-1.5">
                    Your Name / Family Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Rohini & Sameer Nair"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EAE4DC] bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:border-[#B68D5D]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-1.5">
                      Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Pune"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#EAE4DC] bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:border-[#B68D5D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-1.5">
                      Project
                    </label>
                    <select
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#EAE4DC] bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:border-[#B68D5D]"
                    >
                      <option value="Willow House">Willow House</option>
                      <option value="Meridian Café">Meridian Café</option>
                      <option value="Cedar Lane Studio">Cedar Lane Studio</option>
                      <option value="North Quay Residence">North Quay Residence</option>
                      <option value="Elm Courtyard">Elm Courtyard</option>
                      <option value="Private Consultation">Private Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-1.5">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setRating(num)}
                        className={`p-2 rounded-lg border transition-all ${
                          rating >= num
                            ? "bg-[#1C1C1A] text-[#FAF8F5] border-[#1C1C1A]"
                            : "bg-[#FAF8F5] text-[#8C867D] border-[#EAE4DC]"
                        }`}
                      >
                        <Star className={`w-4 h-4 ${rating >= num ? "fill-[#B68D5D]" : ""}`} />
                      </button>
                    ))}
                    <span className="text-xs text-[#8C867D] ml-2 font-medium">
                      {rating} of 5 Stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-1.5">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe the architectural execution, materials, and overall ambience..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EAE4DC] bg-[#FAF8F5] text-[#1C1C1A] text-sm focus:outline-hidden focus:border-[#B68D5D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1C1C1A] text-[#FAF8F5] hover:bg-[#B68D5D] transition-colors text-xs uppercase tracking-wider font-semibold disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Publishing...</span>
                    ) : (
                      <>
                        <span>Publish Testimonial</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
