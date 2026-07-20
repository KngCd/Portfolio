import { useState } from 'react';
import { contactLinks } from '../data/content';
import { FadeIn, SectionLabel } from './shared';
import type { Theme } from '../types';

function MailIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function getIcon(label: string) {
  switch (label) {
    case 'Email':
      return <MailIcon size={15} />;
    case 'LinkedIn':
      return <LinkedInIcon size={15} />;
    case 'GitHub':
      return <GitHubIcon size={15} />;
    case 'Instagram':
      return <InstagramIcon size={15} />;
    default:
      return <MailIcon size={15} />;
  }
}

export function ContactSection({ theme }: { theme: Theme }) {
  const baseBorderColor = theme === "dark" ? "#242424" : "#E5E5E5";

  return (
    <section
      id="contact"
      className="border-t py-20 md:py-28 lg:py-36"
      style={{ borderColor: baseBorderColor }}
    >
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 lg:gap-24 items-start">

          {/* Left */}

          <FadeIn>
            <div className="max-w-xl">
              <SectionLabel>Contact</SectionLabel>

              <h2
                className="font-display font-bold tracking-tight mt-3"
                style={{
                  fontSize: "clamp(2.5rem,5vw,4.5rem)",
                  lineHeight: 0.95,
                }}
              >
                Let's Build
                <br />
                Something
              </h2>

              <p
                className="mt-6 opacity-70 leading-8"
                style={{
                  fontSize: "clamp(1rem,1.2vw,1.1rem)",
                }}
              >
                Open to technical support, QA, networking, and software
                development opportunities. I typically respond within a day.
              </p>
            </div>
          </FadeIn>

          {/* Right */}

          <FadeIn delay={0.1}>
            <div className="grid gap-4">
              {contactLinks.map((item) => (
                <ContactCard
                  key={item.label}
                  item={item}
                  theme={theme}
                />
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

function ContactCard({
  item,
  theme,
}: {
  item: (typeof contactLinks)[number];
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
    <a
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-between rounded-2xl border p-6"
      style={{
        backgroundColor: theme === "dark" ? "#0f0f0f" : "#fafafa",
        borderColor,

        transform: hovered
          ? "translateY(-3px) scale(1.02)"
          : "translateY(0) scale(1)",

        boxShadow: hovered
          ? theme === "dark"
            ? "0 18px 50px rgba(0,0,0,.35)"
            : "0 18px 50px rgba(0,0,0,.08)"
          : "none",

        transition:
          "transform .5s cubic-bezier(.16,1,.3,1), border-color .5s ease, box-shadow .5s ease",
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-xl border flex items-center justify-center overflow-hidden"
          style={{
            borderColor,
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition:
              "transform .45s cubic-bezier(.16,1,.3,1)",
          }}
        >
          {getIcon(item.label)}
        </div>

        <div>
          <div className="text-xs opacity-50 mb-1 font-mono-code">
            {item.label}
          </div>

          <div className="font-medium text-[15px] break-all">
            {item.value}
          </div>
        </div>
      </div>

      <span
        style={{
          opacity: hovered ? 1 : 0.45,
          transform: hovered
            ? "translateX(4px)"
            : "translateX(0)",

          transition:
            "transform .45s cubic-bezier(.16,1,.3,1), opacity .45s ease",

          fontSize: "18px",
        }}
      >
        ↗
      </span>
    </a>
  );
}
