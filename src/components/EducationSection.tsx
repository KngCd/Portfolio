import { educationData } from '../data/content';
import { FadeIn, SectionLabel } from './shared';
import type { Theme } from '../types';

export function EducationSection({ theme }: { theme: Theme }) {
  const borderColor = theme === "dark" ? "#424242" : "#E5E5E5";

  return (
    <section
      id="education"
      className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 border-t"
      style={{ borderColor }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionLabel>Education</SectionLabel>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mt-2 mb-10 sm:mb-14">
            Academic Background
          </h2>
        </FadeIn>

        <div className="relative pl-6 sm:pl-8 md:pl-14">
          <div
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{
              backgroundColor: borderColor,
              opacity: 0.5,
            }}
          />

          <div className="space-y-10 sm:space-y-12 lg:space-y-14">
            {educationData.map((edu, index) => (
              <FadeIn
                key={edu.school}
                delay={index * 0.1}
              >
                <EducationItem
                  edu={edu}
                  theme={theme}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationItem({
  edu,
  theme,
}: {
  edu: (typeof educationData)[number];
  theme: Theme;
}) {
  return (
    <div className="relative">
      <div
        className="absolute -left-6 sm:-left-8 md:-left-14 top-2 w-2 h-2 rounded-full -translate-x-1/2"
        style={{
          backgroundColor:
            theme === "dark" ? "#fff" : "#000",
        }}
      />

      <div className="space-y-2 sm:space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
            {edu.school}
          </h3>

          <span className="font-mono-code text-[10px] sm:text-xs opacity-50 shrink-0">
            {edu.years}
          </span>
        </div>

        <div className="text-sm sm:text-base font-medium opacity-70">
          {edu.degree}
        </div>

        <p className="text-sm sm:text-[15px] md:text-base leading-7 md:leading-8 opacity-75 max-w-2xl">
          {edu.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {edu.achievements.map((achievement) => (
            <span
              key={achievement}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs rounded-full border"
              style={{
                borderColor:
                  theme === "dark"
                    ? "#242424"
                    : "#E5E5E5",
                opacity: 0.8,
              }}
            >
              <span className="opacity-40 text-[7px] sm:text-[8px]">
                ◆
              </span>

              {achievement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
