import { useState, type CSSProperties } from 'react';
import { heroContent } from '../data/content';
import type { Theme } from '../types';

function CornerMark({ style, theme, flip }: { style: CSSProperties; theme: Theme; flip: boolean }) {
  const color = theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)';

  return (
    <div className="absolute w-8 h-8 pointer-events-none" style={style}>
      <div
        className="absolute"
        style={{ top: 0, [flip ? 'right' : 'left']: 0, width: '100%', height: '1px', backgroundColor: color }}
      />
      <div
        className="absolute"
        style={{ top: 0, [flip ? 'right' : 'left']: 0, height: '100%', width: '1px', backgroundColor: color }}
      />
    </div>
  );
}

function PortraitCard({ theme }: { theme: Theme }) {
  const borderColor = theme === 'dark' ? '#242424' : '#E5E5E5';

  return (
    <div className="group relative w-full rounded-[2.4rem] border p-4 shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ borderColor, backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', maxWidth: 480, willChange: 'transform, opacity, box-shadow, border-color, background-color' }}>
      <img
        src="/assets/Formal.jpg"
        alt="King Cedrick Panaligan"
        className="relative z-10 w-full rounded-[1.8rem] object-cover"
        style={{
          aspectRatio: '4 / 5',
          objectPosition: 'center 15%',
          transform: 'scale(1)',
          transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.45s ease, box-shadow 0.45s ease',
          willChange: 'transform, opacity, box-shadow',
        }}
      />
    </div>
  );
}

export function HeroSection({ theme }: { theme: Theme }) {
  const [projectsHovered, setProjectsHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const gridColor = theme === 'dark' ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.04)';
  const borderColor = theme === 'dark' ? '#242424' : '#E5E5E5';

return (
  <section
    id="home"
    className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
  >
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: "72px 72px",
      }}
    />

    {[
      { top: "88px", left: "24px" },
      { top: "88px", right: "24px" },
      { bottom: "40px", left: "24px" },
      { bottom: "40px", right: "24px" },
    ].map((pos, i) => (
      <CornerMark key={i} style={pos} theme={theme} flip={i % 2 === 1} />
    ))}

    <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center py-16 sm:py-20">

        {/* LEFT SIDE */}
        <div className="space-y-8 max-w-2xl">

          {/* Availability */}
          <div
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full border font-medium transition-all duration-500"
            style={{
              borderColor,
              opacity: 0.9,
              fontSize: "clamp(0.72rem,1vw,0.9rem)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-current"
              style={{
                animation:
                  "pulse 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            {heroContent.availability}
          </div>

          {/* Name */}
          <div>
            <h1
              className="font-display font-bold leading-[0.9] tracking-tight"
              style={{
                fontSize: "clamp(2rem,9vw,7rem)",
              }}
            >
              {heroContent.name}
              <br />
              {heroContent.surname}
            </h1>

            <div
              className="mt-4 font-medium opacity-70 tracking-wide"
              style={{
                fontSize: "clamp(1rem,2vw,1.5rem)",
              }}
            >
              {heroContent.title}
            </div>
          </div>

          {/* Description */}
          <p
            className="leading-relaxed opacity-75 max-w-2xl"
            style={{
              fontSize: "clamp(0.95rem,1.3vw,1.15rem)",
              lineHeight: "1.9",
            }}
          >
            {heroContent.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">

            <a
              href="#projects"
              onMouseEnter={() => setProjectsHovered(true)}
              onMouseLeave={() => setProjectsHovered(false)}
              className="rounded-2xl font-semibold active:scale-[0.98]"
              style={{
                padding: "clamp(0.75rem,1vw,0.9rem) clamp(1.4rem,2vw,1.8rem)",
                fontSize: "clamp(0.85rem,1vw,1rem)",
                backgroundColor: theme === "dark" ? "#fff" : "#000",
                color: theme === "dark" ? "#000" : "#fff",
                transform: projectsHovered
                  ? "translateY(-2px)"
                  : "translateY(0)",
                boxShadow: projectsHovered
                  ? theme === "dark"
                    ? "0 8px 24px rgba(255,255,255,0.08)"
                    : "0 8px 24px rgba(0,0,0,0.12)"
                  : "none",
                transition:
                  "transform .45s cubic-bezier(0.16,1,0.3,1), box-shadow .45s ease",
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              className="rounded-2xl border font-semibold active:scale-[0.98]"
              style={{
                padding: "clamp(0.75rem,1vw,0.9rem) clamp(1.4rem,2vw,1.8rem)",
                fontSize: "clamp(0.85rem,1vw,1rem)",
                borderColor,
                transform: contactHovered
                  ? "translateY(-2px)"
                  : "translateY(0)",
                boxShadow: contactHovered
                  ? theme === "dark"
                    ? "0 8px 24px rgba(255,255,255,0.06)"
                    : "0 8px 24px rgba(0,0,0,0.08)"
                  : "none",
                transition:
                  "transform .45s cubic-bezier(0.16,1,0.3,1), box-shadow .45s ease, border-color .45s ease",
              }}
            >
              Contact →
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center justify-center">
          <PortraitCard theme={theme} />
        </div>

      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
      <span
        className="font-mono-code uppercase tracking-[0.25em]"
        style={{
          fontSize: "clamp(0.45rem,0.7vw,0.6rem)",
        }}
      >
        Scroll
      </span>

      <div
        className="w-px h-10 bg-current"
        style={{
          animation: "pulse 2s ease infinite",
        }}
      />
    </div>
  </section>
);
}
