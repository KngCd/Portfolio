import { useState } from 'react';
import type { ReactNode } from 'react';
import { skillsData } from '../data/content';
import { FadeIn } from './shared';
import type { Theme } from '../types';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPhp,
  SiGit,
  SiFigma,
  SiPostman,
  SiGooglesheets,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFileExcel } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { MdRouter, MdDns } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { TbTopologyStar3 } from "react-icons/tb";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { BsHddNetwork } from "react-icons/bs";

type SkillLogoProps = {
  name: string;
  theme: Theme;
};

const skillIcons = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: IoLogoJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,

  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MySQL: SiMysql,
  PHP: SiPhp,

  Playwright: BiTestTube,
  Postman: SiPostman,
  "Google Sheets": SiGooglesheets,
  "Microsoft Excel": FaFileExcel,

  Git: SiGit,
  Figma: SiFigma,
  "VS Code": VscCode,

  Routing: MdRouter,
  Switching: LuNetwork,
  VLANs: BsHddNetwork,
  OSPFs: TbTopologyStar3,
  ACLs: HiMiniShieldCheck,
  DNS: MdDns,
  DHCP: LuNetwork,
} as const;

export function SkillsSection({ theme }: { theme: Theme }) {
  const [active, setActive] = useState('Frontend');
  const categories = Object.keys(skillsData);
  const borderColor = theme === 'dark' ? '#242424' : '#E5E5E5';

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 border-t"
      style={{ borderColor }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionLabel>Skills</SectionLabel>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-10 sm:mb-14">
            Technical Stack
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            {categories.map((category) => {
              const isActive = category === active;

              return (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border whitespace-nowrap transition-all duration-300"
                  style={{
                    borderColor: isActive
                      ? theme === "dark"
                        ? "#fff"
                        : "#000"
                      : borderColor,
                    backgroundColor: isActive
                      ? theme === "dark"
                        ? "#fff"
                        : "#000"
                      : "transparent",
                    color: isActive
                      ? theme === "dark"
                        ? "#000"
                        : "#fff"
                      : "inherit",
                    opacity: isActive ? 1 : 0.45,
                    willChange:
                      "transform, opacity, box-shadow, border-color, background-color, color",
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
          {skillsData[active as keyof typeof skillsData].map(
            (skill, index) => (
              <FadeIn key={skill.name} delay={index * 0.04}>
                <SkillCard skill={skill} theme={theme} />
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-1 h-3.5 bg-current rounded-full opacity-30" />

      <span
        className="font-mono-code text-[10px] sm:text-xs tracking-[0.18em] uppercase opacity-40"
        style={{ letterSpacing: "0.18em" }}
      >
        {children}
      </span>
    </div>
  );
}

function SkillCard({
  skill,
  theme,
}: {
  skill: {
    name: string;
    years: number;
    level: number;
    icon: string;
  };
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
      className="p-3 sm:p-4 lg:p-5 rounded-2xl border cursor-default"
      style={{
        backgroundColor:
          theme === "dark" ? "#0e0e0e" : "#fafafa",
        borderColor,
        transform: hovered
          ? "translateY(-3px)"
          : "translateY(0)",
        boxShadow: hovered
          ? theme === "dark"
            ? "0 8px 24px rgba(0,0,0,0.4)"
            : "0 8px 24px rgba(0,0,0,0.06)"
          : "none",
        transition:
          "transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease, border-color 0.45s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center overflow-hidden shrink-0"
          style={{
            borderColor:
              theme === "dark"
                ? "#242424"
                : "#E5E5E5",
          }}
        >
          <SkillLogo
            name={skill.name}
            theme={theme}
          />
        </div>

        <span className="font-mono-code text-[9px] sm:text-[10px] opacity-35">
          {skill.years}yr
        </span>
      </div>

      <div className="font-display font-semibold text-xs sm:text-sm md:text-base mb-3 leading-tight">
        {skill.name}
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between font-mono-code text-[9px] sm:text-[10px] md:text-xs opacity-35">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>

        <div
          className="h-1 rounded-full overflow-hidden"
          style={{
            backgroundColor:
              theme === "dark"
                ? "#252525"
                : "#e5e7eb",
          }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${skill.level}%`,
              backgroundColor:
                theme === "dark"
                  ? "#d6d6d6"
                  : "#4b5563",
              transition:
                "width 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function SkillLogo({ name, theme }: SkillLogoProps) {
  const Icon = skillIcons[name as keyof typeof skillIcons];

  if (!Icon) return null;

  const colorMap: Record<string, string> = {
    React: "#61DAFB",
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    "Tailwind CSS": "#06B6D4",
    "Node.js": "#5FA04E",
    MySQL: "#4479A1",
    PHP: "#777BB4",
    Git: "#F05032",
    Figma: "#F24E1E",
    Postman: "#FF6C37",
    "Google Sheets": "#34A853",
    "Microsoft Excel": "#217346",
  };

  return (
    <Icon
      size={22}
      color={
        name === "Next.js" || name === "Express.js"
          ? theme === "dark"
            ? "#ffffff"
            : "#000000"
          : colorMap[name]
      }
    />
  );
}
