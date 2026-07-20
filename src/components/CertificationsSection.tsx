import { useState } from 'react';
import { certificationsData } from '../data/content';
import { FadeIn, SectionLabel } from './shared';
import type { Theme } from '../types';

function VerifyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function CertLogoOrFallback({ cert }: { cert: (typeof certificationsData)[number] }) {
  const [err, setErr] = useState(false);
  const name = (cert.issuer || cert.title || '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const srcSvg = `/assets/logos/${name}.svg`;
  const srcPng = `/assets/logos/${name}.png`;

  if (err) return <span className="text-[11px] opacity-80">{(cert.issuer || '').slice(0, 3).toUpperCase()}</span>;

  return (
    <img
      src={srcSvg}
      alt={cert.issuer || cert.title}
      className="w-10 h-10 object-contain"
      onError={(e) => {
        if ((e.currentTarget as HTMLImageElement).src.endsWith('.svg')) {
          (e.currentTarget as HTMLImageElement).src = srcPng;
        } else {
          setErr(true);
        }
      }}
    />
  );
}

export function CertificationsSection({ theme }: { theme: Theme }) {
  const borderColor = theme === "dark" ? "#242424" : "#E5E5E5";

  return (
    <section
      id="certifications"
      className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 border-t"
      style={{ borderColor }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionLabel>Certifications</SectionLabel>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mt-2 mb-10 sm:mb-14">
            Credentials
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {certificationsData.map((cert, index) => (
            <FadeIn
              key={cert.title}
              delay={index * 0.07}
              className="
                w-full
                md:w-[calc(50%-0.75rem)]
                lg:w-[calc(33.333%-1rem)]
              "
            >
              <CertCard cert={cert} theme={theme} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({
  cert,
  theme,
}: {
  cert: (typeof certificationsData)[number];
  theme: Theme;
}) {
  const [hovered, setHovered] = useState(false);

  const borderColor = hovered
    ? theme === "dark"
      ? "#3a3a3a"
      : "#c0c0c0"
    : theme === "dark"
      ? "#242424"
      : "#E5E5E5";

  return (
    <div
      className="h-full min-h-70 sm:min-h-75 lg:min-h-80 p-5 sm:p-6 rounded-2xl border flex flex-col justify-between gap-5"
      style={{
        backgroundColor:
          theme === "dark" ? "#0e0e0e" : "#fafafa",

        borderColor,

        transform: hovered
          ? "translateY(-3px)"
          : "translateY(0)",

        boxShadow: hovered
          ? theme === "dark"
            ? "0 18px 50px rgba(0,0,0,0.35)"
            : "0 18px 50px rgba(0,0,0,0.08)"
          : "none",

        transition:
          "transform .5s cubic-bezier(0.16,1,0.3,1), border-color .5s ease, box-shadow .5s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center overflow-hidden shrink-0"
          style={{
            borderColor:
              theme === "dark"
                ? "#242424"
                : "#E5E5E5",
          }}
        >
          <CertLogoOrFallback cert={cert} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-base sm:text-lg leading-snug">
            {cert.title}
          </h3>

          <div className="text-sm sm:text-base opacity-65 mt-1">
            {cert.issuer}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3">
        <div className="flex justify-between items-center font-mono-code text-[10px] sm:text-xs">
          <span className="opacity-50">
            Date Issued
          </span>

          <span className="opacity-80">
            {cert.date}
          </span>
        </div>

        <div
          className="h-px"
          style={{
            backgroundColor:
              theme === "dark"
                ? "#1a1a1a"
                : "#efefef",
          }}
        />

        <div className="flex justify-between items-center font-mono-code text-[10px] sm:text-xs gap-3">
          <span className="opacity-50 shrink-0">
            Credential ID
          </span>

          <span className="opacity-80 truncate text-right">
            {cert.credentialId}
          </span>
        </div>
      </div>

      {/* Button */}
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover-lift flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 text-sm sm:text-[15px] font-semibold border rounded-xl whitespace-nowrap"
        style={{
          borderColor:
            theme === "dark"
              ? "#2a2a2a"
              : "#dedede",
        }}
      >
        <VerifyIcon />
        Verify Certificate ↗
      </a>
    </div>
  );
}
