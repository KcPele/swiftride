"use client";

const testimonials = [
  { quote: "Swift makes my daily commute in Minna so stress-free. The drivers are always professional!", name: "Chinedu O.", location: "Minna", color: "#ff6600" },
  { quote: "Finally, a logistics app that actually delivers on time. Sent a package to my mum and she got it same day.", name: "Fatima B.", location: "Niger State", color: "#28a745" },
  { quote: "The live tracking is a game changer. I always know exactly where my ride is.", name: "Emmanuel K.", location: "Regular Rider", color: "#007bff" },
  { quote: "Safe, affordable, and easy to use. I recommend Swift to everyone in school.", name: "Grace A.", location: "FUT Minna", color: "#6610f2" },
  { quote: "I love the wallet feature. Cashless rides are just smoother and faster.", name: "Tunde L.", location: "Business Owner", color: "#dc3545" },
  { quote: "Best delivery service in town. My business relies on them for local dispatch.", name: "Sarah's Cakes", location: "Vendor", color: "#fd7e14" },
  { quote: "Very polite drivers and clean cars. A truly premium experience compared to keke.", name: "Dr. Ibrahim", location: "Commuter", color: "#20c997" },
  { quote: "Works perfectly even when network is shaky. Really optimized app.", name: "Miracle U.", location: "Student", color: "#e83e8c" },
  { quote: "Cheap rates compared to others but the service is top notch. Love it.", name: "Yusuf M.", location: "Daily Rider", color: "#17a2b8" },
  { quote: "Customer support is actually helpful. Had an issue and they resolved it in minutes.", name: "Zainab K.", location: "Trader", color: "#6f42c1" },
];

const allTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section className="relative p-0 m-0">
      <div className="relative z-[2] pb-8">
        <h2 className="text-center pt-15 text-section-title font-extrabold mb-2.5 text-text-dark">
          What Our Users Say
        </h2>
        <p className="text-center text-text-light text-lg mb-10">
          Trusted by thousands of riders and businesses across Minna and beyond.
        </p>

        {/* Marquee */}
        <div className="w-full overflow-hidden relative py-5" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
          <div className="flex gap-7.5 w-max animate-[marquee-scroll_60s_linear_infinite]">
            {allTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_320px] bg-surface p-6 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-surface-muted flex flex-col justify-between select-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:border-primary"
              >
                {/* Stars */}
                <div className="text-accent-star text-sm mb-4">
                  ★ ★ ★ ★ ★
                </div>
                <p className="text-base leading-relaxed text-text-medium mb-5 italic grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-surface-alt pt-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-surface shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-text-dark">{t.name}</span>
                    <span className="block text-xs text-text-muted uppercase tracking-wider">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
