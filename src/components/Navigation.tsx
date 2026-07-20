import { useEffect, useState } from 'react';
import { navigationLinks } from '../data/content';
import { useScrolled } from '../hooks/useScrolled';
import type { Theme } from '../types';

function SunIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

export function Navigation({
    theme,
    toggleTheme,
}: {
    theme: Theme;
    toggleTheme: () => void;
}) {
    const scrolled = useScrolled();

    const [menuOpen, setMenuOpen] = useState(false);

    const [activeSection, setActiveSection] = useState("home");
    const [scrollProgress, setScrollProgress] = useState(0);

    const borderColor = theme === "dark" ? "#242424" : "#E5E5E5";

    const bgBase =
        theme === "dark"
            ? "rgba(0,0,0,0.82)"
            : "rgba(255,255,255,0.82)";

    const logoSrc =
        theme === "dark"
            ? "/assets/logo-lightmode-transparent.png"
            : "/assets/logo-darkmode-transparent.png";

    useEffect(() => {
        const handleScroll = () => {
            // Active section
            const viewportCenter = window.innerHeight / 2;

            let closestSection = "";
            let closestDistance = Number.POSITIVE_INFINITY;

            navigationLinks.forEach((link) => {
                const section = document.querySelector(link.href) as HTMLElement;

                if (!section) return;

                const rect = section.getBoundingClientRect();
                const sectionCenter = rect.top + rect.height / 2;
                const distance = Math.abs(sectionCenter - viewportCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section.id;
                }
            });

            setActiveSection((prev) =>
                prev === closestSection ? prev : closestSection
            );

            // Scroll progress
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            setScrollProgress((scrollTop / height) * 100);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                backgroundColor: bgBase,
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: scrolled
                    ? `1px solid ${borderColor}`
                    : "1px solid transparent",
                transition:
                    "border-color .5s ease, padding .5s ease, background-color .5s ease",
                padding: scrolled ? "10px 0" : "16px 0",
            }}
        >
            {/* Scroll Indicator */}

            <div
                className="absolute top-0 left-0 h-0.5 transition-all duration-150"
                style={{
                    width: `${scrollProgress}%`,
                    background:
                        theme === "dark"
                            ? "linear-gradient(90deg,#ffffff,#bdbdbd)"
                            : "linear-gradient(90deg,#000,#555)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-3">

                <a
                    href="#home"
                    className="flex items-center gap-2.5 min-w-0 transition-opacity duration-500 hover:opacity-80"
                >
                    <img
                        src={logoSrc}
                        alt="King Cedrick logo"
                        className="h-7 w-auto object-contain"
                    />

                    <span className="hidden lg:inline font-display font-semibold text-[15px] tracking-tight">
                        King Cedrick
                    </span>
                </a>

                {/* Desktop Navigation */}

                <div className="hidden md:flex items-center gap-7">

                    {navigationLinks.map((link) => {

                        const active =
                            activeSection ===
                            link.href.replace("#", "");

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                                className="relative text-[14px] transition-all duration-300"
                                style={{
                                    fontWeight: active ? 700 : 500,
                                    opacity: active ? 1 : 0.6,
                                }}
                            >
                                {link.label}

                                <span
                                    className="absolute left-0 -bottom-2 h-0.5 rounded-full transition-all duration-300"
                                    style={{
                                        width: active ? "100%" : "0%",
                                        backgroundColor:
                                            theme === "dark"
                                                ? "#ffffff"
                                                : "#000000",
                                    }}
                                />
                            </a>
                        );
                    })}

                </div>

                {/* Right Controls */}

                <div className="hidden md:flex items-center gap-2.5">

                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="w-9 h-9 rounded-xl border flex items-center justify-center text-[14px] font-medium opacity-60 hover:opacity-100 transition-all duration-500"
                        style={{
                            borderColor,
                        }}
                    >
                        {theme === "dark"
                            ? <SunIcon />
                            : <MoonIcon />}
                    </button>

                    <a
                        href="mailto:panaligankingcedrick@gmail.com?subject=Resume%20Request"
                        className="px-4 py-2 text-[13px] font-semibold border rounded-xl opacity-60 hover:opacity-100 transition-all duration-500 whitespace-nowrap"
                        style={{
                            borderColor,
                        }}
                    >
                        Resume ↗
                    </a>

                </div>

                {/* Mobile Menu Button */}

                <button
                    className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.25 transition-all duration-500 hover:-translate-y-0.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span
                        className="w-4.5 h-px bg-current transition-all duration-500"
                        style={{
                            transform: menuOpen
                                ? "translateY(5px) rotate(45deg)"
                                : "none",
                        }}
                    />

                    <span
                        className="w-4.5 h-px bg-current transition-all duration-500"
                        style={{
                            opacity: menuOpen ? 0 : 1,
                        }}
                    />

                    <span
                        className="w-4.5 h-px bg-current transition-all duration-500"
                        style={{
                            transform: menuOpen
                                ? "translateY(-5px) rotate(-45deg)"
                                : "none",
                        }}
                    />
                </button>

            </div>

            {/* Mobile Menu */}

            <div
                className="lg:hidden overflow-hidden transition-all duration-500"
                style={{
                    maxHeight: menuOpen ? "420px" : "0",
                    borderTop: menuOpen
                        ? `1px solid ${borderColor}`
                        : "none",
                }}
            >
                <div className="px-6 py-4 space-y-1.5">

                    {navigationLinks.map((link) => {

                        const active =
                            activeSection ===
                            link.href.replace("#", "");

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                                className="block py-2.5 text-sm transition-all duration-300"
                                style={{
                                    fontWeight: active ? 700 : 500,
                                    opacity: active ? 1 : 0.6,
                                }}
                            >
                                {link.label}
                            </a>
                        );

                    })}

                    <div className="flex items-center justify-between gap-4 pt-3 pb-1">

                        <button
                            onClick={toggleTheme}
                            className="text-sm opacity-60 hover:opacity-100 transition-all duration-300 flex items-center gap-2"
                        >
                            {theme === "dark" ? (
                                <>
                                    <SunIcon />
                                    Light mode
                                </>
                            ) : (
                                <>
                                    <MoonIcon />
                                    Dark mode
                                </>
                            )}
                        </button>

                        <a
                            href="mailto:panaligankingcedrick@gmail.com?subject=Resume%20Request"
                            className="text-sm font-semibold opacity-60 hover:opacity-100 transition-all duration-300"
                        >
                            Resume ↗
                        </a>

                    </div>
                </div>
            </div>

        </nav>
    );
}
