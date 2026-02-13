import React from "react";
import {
  Star,
  Users,
  Trophy,
  BarChart3,
  Heart,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Apple,
  Play,
} from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/us/app/park-rides-quest/id6758357921";

// Placeholder for now — replace when Android is live:
// https://play.google.com/store/apps/details?id=YOUR.PACKAGE.NAME
const GOOGLE_PLAY_URL = "#";

// Turn this ON after you add the badge files to public/badges/
const USE_OFFICIAL_BADGES = true;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function PrettyTitle() {
  const title = "Park Rides Quest";

  const outlineStyle: React.CSSProperties = {
    color: "rgba(0,0,0,0.22)",
  };

  return (
    <div className="relative inline-block select-none">
      {/* Outlines */}
      <div
        className="absolute inset-0 translate-x-[-1px]"
        style={outlineStyle}
        aria-hidden="true"
      >
        <span className="block font-black tracking-tight leading-[1.02] text-6xl md:text-7xl">
          {title}
        </span>
      </div>
      <div
        className="absolute inset-0 translate-x-[1px]"
        style={outlineStyle}
        aria-hidden="true"
      >
        <span className="block font-black tracking-tight leading-[1.02] text-6xl md:text-7xl">
          {title}
        </span>
      </div>
      <div
        className="absolute inset-0 translate-y-[-1px]"
        style={outlineStyle}
        aria-hidden="true"
      >
        <span className="block font-black tracking-tight leading-[1.02] text-6xl md:text-7xl">
          {title}
        </span>
      </div>
      <div
        className="absolute inset-0 translate-y-[1px]"
        style={outlineStyle}
        aria-hidden="true"
      >
        <span className="block font-black tracking-tight leading-[1.02] text-6xl md:text-7xl">
          {title}
        </span>
      </div>

      {/* Main */}
      <h1
        className="relative font-black tracking-tight leading-[1.02] text-6xl md:text-7xl text-white"
        style={{
          textShadow: "0px 5px 8px rgba(0,0,0,0.33)",
        }}
      >
        {title}
      </h1>
    </div>
  );
}

function StoreButtons({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  const appleButtonClass =
    variant === "primary"
      ? `inline-flex items-center rounded-2xl px-8 py-5 text-lg font-black
         bg-[#3E7BFF] hover:bg-[#3E7BFF]/90
         shadow-[0_16px_40px_rgba(0,0,0,0.25)]
         border border-white/20 transition-all group`
      : `inline-flex items-center rounded-2xl px-10 py-6 text-xl font-black
         bg-white text-[#07163A] hover:bg-white/95
         shadow-[0_16px_45px_rgba(0,0,0,0.22)]
         transition-all group`;

  // Disabled Google Play button (coming soon)
  const googleDisabledClass =
    variant === "primary"
      ? `inline-flex items-center rounded-2xl px-8 py-5 text-lg font-black
         bg-white/20 hover:bg-white/20
         shadow-[0_16px_40px_rgba(0,0,0,0.18)]
         border border-white/20 transition-all opacity-70 cursor-not-allowed`
      : `inline-flex items-center rounded-2xl px-10 py-6 text-xl font-black
         bg-white/70 text-[#07163A]
         shadow-[0_16px_45px_rgba(0,0,0,0.18)]
         transition-all opacity-70 cursor-not-allowed`;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* Apple */}
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
        <button className={appleButtonClass}>
          {USE_OFFICIAL_BADGES ? (
            <img
              src="/badges/app-store.svg"
              alt="Download on the App Store"
              className={variant === "primary" ? "h-7 mr-3" : "h-8 mr-3"}
              draggable={false}
            />
          ) : (
            <Apple className={variant === "primary" ? "w-6 h-6 mr-3" : "w-7 h-7 mr-3"} />
          )}

          {variant === "primary" ? "Download on the App Store" : "Download Now"}

          <ChevronRight
            className={
              variant === "primary"
                ? "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                : "w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform"
            }
          />
        </button>
      </a>

      {/* Google Play (coming soon placeholder) */}
      <a
        href={GOOGLE_PLAY_URL}
        onClick={(e) => e.preventDefault()}
        aria-disabled="true"
        tabIndex={-1}
      >
        <button className={googleDisabledClass}>
          {USE_OFFICIAL_BADGES ? (
            <img
              src="/badges/google-play.png"
              alt="Get it on Google Play (Coming soon)"
              className={variant === "primary" ? "h-7 mr-3" : "h-8 mr-3"}
              draggable={false}
            />
          ) : (
            <Play className={variant === "primary" ? "w-6 h-6 mr-3" : "w-7 h-7 mr-3"} />
          )}
          Google Play (Coming soon)
        </button>
      </a>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen text-white">
      {/* App palette background */}
      <div className="min-h-screen bg-gradient-to-br from-[#1FE0FF] to-[#E15BFF]">
        {/* Decorative bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-40 -top-32 h-[420px] w-[420px] rounded-full bg-white/15" />
          <div className="absolute -left-44 -bottom-40 h-[520px] w-[520px] rounded-full bg-white/10" />
          <div className="absolute left-1/2 top-20 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-white/10" />
        </div>

        <div className="relative">
          {/* HERO */}
          <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Logo: bigger image, minimal frame */}
              <div className="mx-auto mb-7 flex items-center justify-center">
                <div
                  className="rounded-[26px] p-[3px]
                             bg-white/0 border border-white/10 backdrop-blur-[2px]
                             shadow-[0_6px_18px_rgba(0,0,0,0.10)]"
                >
                  <img
                    src="/logo512.png"
                    alt="Park Rides Quest logo"
                    className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] object-contain"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Fancy title */}
              <PrettyTitle />

              <p className="mt-7 text-lg md:text-2xl text-white/90 mb-10 leading-relaxed font-semibold">
                Turn your wait time into playtime! Rate rides with friends and family, spark fun
                debates, and discover which character matches your unique style!
              </p>

              {/* ✅ Download buttons (Apple live + Google Play coming soon) */}
              <div className="flex justify-center mb-10">
                <StoreButtons variant="primary" />
              </div>

              {/* Fun chips */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {["Scan • Download • Play in line", "Up to 8 players", "Quick • Fun • Simple"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-full bg-[#07163A]/30 border border-white/20
                                 backdrop-blur-md text-white/90 font-bold shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
                {[
                  { value: "200+", label: "Rides to Rate" },
                  { value: "25+", label: "Characters" },
                  { value: "∞", label: "Fun Moments" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-4 text-center
                               bg-[#07163A]/28 border border-[#D7B5FF]/35 backdrop-blur-md
                               shadow-[0_14px_40px_rgba(0,0,0,0.14)]"
                  >
                    <div className="text-3xl font-black">{s.value}</div>
                    <div className="text-sm text-white/85 font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll */}
            <button
              onClick={() => scrollToSection("features")}
              className="absolute bottom-8 animate-bounce cursor-pointer hover:text-white/90 transition-colors"
              aria-label="Scroll"
            >
              <ChevronDown className="w-12 h-12 text-white/60" />
            </button>
          </section>

          {/* FEATURES */}
          <section id="features" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-5xl font-black mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)]">
                  Why You'll Love It
                </h2>
                <p className="text-xl text-white/90 font-semibold">
                  Turn your theme park visits into an epic adventure
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Rate Every Ride",
                    text: "Score attractions on aesthetics, thrills, duration, and line entertainment.",
                    icon: Star,
                  },
                  {
                    title: "Find Your Match",
                    text: "Get a fun character/personality match based on your ride style.",
                    icon: Sparkles,
                  },
                  {
                    title: "Play With Friends",
                    text: "Create groups, invite up to 8 friends, and compare results.",
                    icon: Users,
                  },
                  {
                    title: "Compare Results",
                    text: "See who rated what and uncover surprising group matches.",
                    icon: Trophy,
                  },
                  {
                    title: "Track Insights",
                    text: "Get fun stats on your preferences and favorite ride vibes.",
                    icon: BarChart3,
                  },
                  {
                    title: "Share Moments",
                    text: "Share your character match with friends and social.",
                    icon: Heart,
                  },
                ].map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="rounded-3xl p-8
                                 bg-[#07163A]/30 border border-[#D7B5FF]/35 backdrop-blur-md
                                 shadow-[0_18px_50px_rgba(0,0,0,0.16)]
                                 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.22)]
                                 transition-all"
                    >
                      <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center
                                      bg-[#2A2B8C]/55 border border-white/20">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-center mb-3">{f.title}</h3>
                      <p className="text-white/85 text-center font-semibold leading-relaxed">
                        {f.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-14">
                <ChevronDown className="w-12 h-12 text-white/70 animate-bounce mx-auto" />
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-5xl font-black mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)]">
                  How It Works
                </h2>
                <p className="text-xl text-white/90 font-semibold">
                  Get started in just a few simple steps
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { n: 1, title: "Create a Group", text: "Start a new group and invite your friends to join the fun." },
                  { n: 2, title: "Rate the Rides", text: "Score each attraction on four different metrics that matter to you." },
                  { n: 3, title: "Discover Results", text: "Find your character match and compare with your group!" },
                ].map((s, i) => (
                  <div key={s.n} className="relative">
                    <div
                      className="rounded-3xl p-8 text-center
                                 bg-[#07163A]/30 border border-[#D7B5FF]/35 backdrop-blur-md
                                 shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
                    >
                      <div
                        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                                   text-3xl font-black
                                   bg-[#3E7BFF] border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                      >
                        {s.n}
                      </div>
                      <h3 className="text-2xl font-black mb-3">{s.title}</h3>
                      <p className="text-white/85 font-semibold leading-relaxed">{s.text}</p>
                    </div>

                    {i < 2 && (
                      <ChevronRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-white/70 -translate-y-1/2 z-10" />
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-14">
                <ChevronDown className="w-12 h-12 text-white/70 animate-bounce mx-auto" />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-6">
            <div
              className="max-w-4xl mx-auto text-center rounded-[32px]
                         bg-[#07163A]/30 border border-[#D7B5FF]/35 backdrop-blur-md
                         shadow-[0_24px_70px_rgba(0,0,0,0.22)] p-10 md:p-14"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                Ready to Discover Your Park Personality?
              </h2>
              <p className="text-lg md:text-2xl text-white/90 font-semibold mb-10">
                Download now and start your Adventure while you wait in line.
              </p>

              {/* ✅ Download buttons again */}
              <div className="flex justify-center">
                <StoreButtons variant="secondary" />
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-10">
            <div className="px-6 pt-16 pb-10 text-center">
              <img
                src="/logo192.png"
                alt="Park Rides Quest logo"
                className="w-14 h-14 mx-auto mb-4 object-contain"
                draggable={false}
              />
              <h3 className="text-3xl font-black mb-3">Park Rides Quest</h3>
              <p className="text-white/80 text-lg mb-8 font-semibold">
                The ultimate theme park rating experience
              </p>

              <div className="flex justify-center gap-10 text-lg text-white/80 mb-10 font-semibold">
                <a className="hover:text-white transition-colors" href="/legal">
                  Legal
                </a>
                <a className="hover:text-white transition-colors" href="/privacy">
                  Privacy
                </a>
                <a className="hover:text-white transition-colors" href="/terms">
                  Terms
                </a>
              </div>

              <div className="text-white/65 text-base font-semibold">
                © 2026 Rate Your Rides. All rights reserved.
              </div>
            </div>

            <div className="h-px bg-white/15" />

            <div className="px-6 py-14">
              <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
                <div className="rounded-3xl p-8 bg-[#07163A]/22 border border-white/15 backdrop-blur-md">
                  <h4 className="text-2xl font-black mb-4">Park Rides Quest</h4>
                  <p className="text-white/80 leading-relaxed font-semibold">
                    An independent fan project for rating and comparing theme park attractions.
                  </p>
                  <p className="text-white/65 leading-relaxed mt-4 font-semibold">
                    Not affiliated with any theme park or entertainment company.
                  </p>
                </div>

                <div className="rounded-3xl p-8 bg-[#07163A]/22 border border-white/15 backdrop-blur-md">
                  <h4 className="text-2xl font-black mb-4">Legal</h4>
                  <div className="space-y-3 text-white/85 font-semibold">
                    <a className="block hover:text-white transition-colors" href="/legal">
                      Legal Disclaimer
                    </a>
                    <a className="block hover:text-white transition-colors" href="/privacy">
                      Privacy Policy
                    </a>
                    <a className="block hover:text-white transition-colors" href="/terms">
                      Terms of Use
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl p-8 bg-[#07163A]/22 border border-white/15 backdrop-blur-md">
                  <h4 className="text-2xl font-black mb-4">Important Notice</h4>
                  <p className="text-white/80 leading-relaxed font-semibold">
                    This app is an independent project and is NOT affiliated with, endorsed by, or
                    connected to any theme park or entertainment company. All trademarks are property
                    of their respective owners.
                  </p>
                </div>
              </div>
            </div>
          </footer>

          <div className="h-6" />
        </div>
      </div>
    </div>
  );
}
