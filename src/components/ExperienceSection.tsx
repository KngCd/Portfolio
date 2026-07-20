import { useState } from 'react';
import { experienceData } from '../data/content';
import { FadeIn, SectionLabel, Tag } from './shared';
import type { Theme } from '../types';

export function ExperienceSection({ theme }: { theme: Theme }) {
  const borderColor = theme === "dark" ? "#242424" : "#E5E5E5";

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 border-t"
      style={{ borderColor }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionLabel>Experience</SectionLabel>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mt-2 mb-10 sm:mb-14">
            Work History
          </h2>
        </FadeIn>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: borderColor }}
          />

          <div className="space-y-5 sm:space-y-6">
            {experienceData.map((exp, index) => (
              <FadeIn
                key={`${exp.company}-${exp.role}`}
                delay={index * 0.08}
              >
                <ExperienceItem
                  exp={exp}
                  theme={theme}
                  index={index}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  theme,
  index,
}: {
  exp: (typeof experienceData)[number];
  theme: Theme;
  index: number;
}) {
  const isEven = index % 2 === 0;

  const borderColor =
    theme === "dark" ? "#424242" : "#E5E5E5";

  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
      <div
        className="hidden md:block absolute left-1/2 top-7 w-2.5 h-2.5 rounded-full -translate-x-1/2 z-10"
        style={{
          backgroundColor:
            theme === "dark" ? "#fff" : "#000",
          outline: `3px solid ${theme === "dark" ? "#000" : "#fff"
            }`,
        }}
      />

      <div
        className={`pl-5 sm:pl-6 md:pl-0 border-l md:border-l-0 ${isEven
            ? "md:col-start-1 md:pr-10 lg:pr-12"
            : "md:col-start-2 md:pl-10 lg:pl-12"
          }`}
        style={{ borderColor }}
      >
        <div
          className="md:hidden absolute left-0 top-7 w-2 h-2 rounded-full -translate-x-1/2"
          style={{
            backgroundColor:
              theme === "dark" ? "#fff" : "#000",
          }}
        />

        <div
          className="p-5 sm:p-6 rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            backgroundColor:
              theme === "dark"
                ? "#0e0e0e"
                : "#fafafa",

            borderColor: hovered
              ? theme === "dark"
                ? "#3a3a3a"
                : "#c0c0c0"
              : borderColor,

            transform: hovered
              ? "translateY(-3px)"
              : "translateY(0)",

            boxShadow: hovered
              ? theme === "dark"
                ? "0 18px 50px rgba(0,0,0,0.32)"
                : "0 18px 50px rgba(0,0,0,0.08)"
              : "none",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl">
                {exp.role}
              </h3>

              <div className="text-sm sm:text-base opacity-65 mt-1">
                {exp.company}
              </div>
            </div>

            <span className="font-mono-code text-[10px] sm:text-xs opacity-50 whitespace-nowrap shrink-0 mt-0.5">
              {exp.period}
            </span>
          </div>

          <p className="text-sm sm:text-[15px] md:text-base leading-7 md:leading-8 opacity-75 mb-4">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map((technology) => (
              <Tag
                key={technology}
                theme={theme}
              >
                {technology}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}