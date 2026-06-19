import GitHubIcon from '@mui/icons-material/GitHub';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: 'Ledgerly',
      subtitle: 'An Expense Recording System',
      description:
        'A comprehensive expense tracking application designed to help users manage their finances effectively with clear categorization, reporting, and analytics.',
      details: [
        'Developed both front-end and back-end functionality for seamless expense tracking and management.',
        'Implemented user-friendly interfaces for expense categorization and financial reporting.',
        'Conducted thorough testing throughout development to ensure reliability and performance.',
      ],
      tools: ['React', 'Node.js', 'Express.js', 'MySQL'],
      githubUrl: 'https://github.com/KngCd/Kubo-Ware',
      date: '2026',
      videoSrc: '/assets/videos/Ledgerly.mp4',
      color: 'blue',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-700',
      badgeBg: 'bg-blue-600',
      buttonBg: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'ResponSys',
      subtitle: "Web-based Incident Management & Hazard Mapping System",
      description:
        'A web-based platform for incident reporting and hazard mapping to support faster, more organized disaster preparedness and response for local government agencies.',
      details: [
        'Designed and developed a web-based system for incident reporting and management, integrating basic hazard mapping to enhance situational awareness.',
        'Implemented front-end and back-end functionality for data entry, tracking, and overall system operations, with a focus on real-world application.',
        'Performed manual testing during development to verify that core features worked as intended.',
      ],
      tools: ['HTML', 'TailwindCSS', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/KngCd/Capstone-MDRRMO',
      date: 'November 2025',
      videoSrc: '/assets/videos/ResponSys.mp4',
      color: 'purple',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-700',
      badgeBg: 'bg-purple-600',
      buttonBg: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      title: 'ResponSys Mobile',
      subtitle: 'Location-Based Incident Reporting & Hazard Mapping App',
      description:
        'A mobile extension of ResponSys that lets citizens submit incident reports and view hazard map information from their devices with real-time location tracking.',
      details: [
        'Preview video shown is a prototype for demonstration purposes.',
        'Developed the mobile version of ResponSys, enabling citizens to submit incident reports and view hazard map information.',
        'Worked across the application stack to support location-based reporting, map visualization, and data handling.',
        'Conducted manual testing to ensure feature consistency and smooth integration with the existing system.',
      ],
      tools: ['Flutter', 'Tailwind', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/KngCd/responsys',
      date: 'July 2025',
      videoSrc: '/assets/videos/ResponSys-Mobile.mp4',
      color: 'orange',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-700',
      badgeBg: 'bg-orange-600',
      buttonBg: 'bg-orange-600 hover:bg-orange-700',
    },
  ];

  return (
    <section id="projects" ref={ref} className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-3 mb-10"
      >
        <motion.p
          className="text-sm md:text-base text-zinc-500 tracking-widest uppercase font-semibold"
        >
          My Work
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          Featured Projects
        </motion.h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mb-14 leading-relaxed"
      >
        A curated selection of projects showcasing my expertise in full-stack development, system design, and user-centered solutions.
      </motion.p>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/70 shadow-xl overflow-hidden transition-all"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden"
            >
              <video
                className="w-full aspect-video object-cover"
                src={project.videoSrc}
                autoPlay
                loop
                muted
                preload="metadata"
                playsInline
                aria-label={`${project.title} preview video`}
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 md:p-8"
            >
              <div className="space-y-4 mb-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap flex-shrink-0">
                    <div className="inline-block px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 text-xs font-semibold">
                      {project.date}
                    </div>
                  </div>
                </div>

                {project.title === 'ResponSys Mobile' && (
                  <p className="text-xs italic font-light text-zinc-500 dark:text-zinc-400">
                    Preview video shown is a prototype for demonstration purposes.
                  </p>
                )}
              </div>

              <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 pl-5">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 list-disc">
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="mb-6 border-t border-zinc-200 dark:border-zinc-800 pt-4">
                <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <motion.span
                      key={tool}
                      whileHover={{ scale: 1.03 }}
                      className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 text-xs font-semibold shadow-sm"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-white font-semibold shadow-lg hover:bg-zinc-800 transition-all"
              >
                <GitHubIcon className="!w-5 !h-5" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-4 h-4 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}