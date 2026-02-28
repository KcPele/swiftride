"use client";

import { ArrowRight } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5">
        <h2 className="text-surface text-section-title font-extrabold text-center mb-10">
          There&apos;s more to love in the apps
        </h2>

        <div className="flex justify-center gap-7.5 flex-wrap">
          {/* Google Play Card */}
          <a
            href="https://play.google.com/store/apps/details?id=com.swiftpickup.ride"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-inherit transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="bg-surface rounded-xl py-4 px-6 flex items-center min-w-75 shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <img src="/images/logo.png" alt="Swift Logo" className="h-10 w-auto mr-4 shrink-0 object-contain" />
              <span className="text-lg font-bold text-text mr-auto">Get it on Playstore</span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary ml-4 transition-all duration-300">
                <ArrowRight size={16} />
              </div>
            </div>
          </a>

          {/* App Store Card */}
          <a
            href="https://apps.apple.com/ng/app/swiftride/id6757348422"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-inherit transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="bg-surface rounded-xl py-4 px-6 flex items-center min-w-75 shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <img src="/images/logo.png" alt="Swift Logo" className="h-10 w-auto mr-4 shrink-0 object-contain" />
              <span className="text-lg font-bold text-text mr-auto">Get it on Appstore</span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary ml-4 transition-all duration-300">
                <ArrowRight size={16} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
