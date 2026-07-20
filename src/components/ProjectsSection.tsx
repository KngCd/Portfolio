import { projectsData } from '../data/content';
import { FadeIn, SectionLabel, Tag } from './shared';
import type { Theme } from '../types';

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function ProjectsSection({ theme }: { theme: Theme }) {
  const borderColor = theme === 'dark' ? '#242424' : '#E5E5E5';

  return (
    <section id="projects" className="py-32 px-6 border-t" style={{ borderColor }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight mt-2 mb-14">Featured Work</h2>
        </FadeIn>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} theme={theme} flip={index % 2 !== 0} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, theme, flip }: { project: (typeof projectsData)[number]; theme: Theme; flip: boolean }) {
  const borderColor = theme === 'dark' ? '#242424' : '#E5E5E5';

  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        backgroundColor: theme === "dark" ? "#0e0e0e" : "#fafafa",
        borderColor,
      }}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""
          }`}
      >
        {/* Preview */}
        <div
          className="relative min-h-56 sm:min-h-64 md:min-h-72 lg:min-h-96 group overflow-hidden"
          style={{
            backgroundColor: theme === "dark" ? "#090909" : "#f0f0f0",
          }}
        >
          <video
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={`${project.title} preview video`}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
            <div
              className="px-2 py-1 sm:px-2.5 rounded-lg text-[9px] sm:text-[10px] font-mono-code font-medium border"
              style={{
                backgroundColor: theme === "dark" ? "#0e0e0e" : "#fafafa",
                borderColor,
              }}
            >
              {project.year}
            </div>

            <div
              className="px-2 py-1 sm:px-2.5 rounded-lg text-[9px] sm:text-[10px] font-mono-code font-medium border"
              style={{
                backgroundColor: theme === "dark" ? "#0e0e0e" : "#fafafa",
                borderColor,
              }}
            >
              {project.status}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between gap-5 md:gap-8">
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
              {project.title}
            </h3>

            <p className="text-sm sm:text-[15px] md:text-base leading-7 md:leading-[1.85] opacity-75">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <Tag key={tag} theme={theme}>
                  {tag}
                </Tag>
              ))}
            </div>

            <a
              href={project.github}
              className="hover-lift flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-[13px] font-semibold border rounded-xl w-fit whitespace-nowrap"
              style={{ borderColor }}
            >
              <GitHubIcon size={13} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
