import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function SiteShell({ title, subtitle, children }: Props) {
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
          {/* Header */}
          <header className="px-6 pt-12 pb-6 text-center">
            <div className="text-4xl mb-4">🎢</div>
            <h1 className="text-4xl md:text-5xl font-black drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)]">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 text-white/90 font-semibold text-base md:text-lg max-w-3xl mx-auto">
                {subtitle}
              </p>
            ) : null}
          </header>

          {/* Main glass card */}
          <main className="px-6 pb-14">
            <div
              className="max-w-4xl mx-auto rounded-3xl p-6 md:p-10
                         bg-[#07163A]/30 border border-[#D7B5FF]/35 backdrop-blur-md
                         shadow-[0_24px_70px_rgba(0,0,0,0.20)]"
            >
              {children}
            </div>
          </main>

          {/* Footer (simple) */}
          <footer className="pb-10 text-center text-white/70 font-semibold">
            <div className="flex justify-center gap-10 mb-4">
              <a className="hover:text-white transition-colors" href="/">
                Home
              </a>
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
            <div className="text-sm">© 2026 Park Rides Quest.</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
