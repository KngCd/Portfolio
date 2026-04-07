import GitHubIcon from '@mui/icons-material/GitHub';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

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
    },
    {
      title: 'ResponSys',
      subtitle: "A Web-based Incident Management System with Hazard Mapping for Padre Garcia's MDRRMO",
      description:
        'A web-based platform for incident reporting and hazard mapping to support faster, more organized disaster preparedness and response.',
      details: [
        'Designed and developed a web-based system for incident reporting and management, integrating basic hazard mapping to enhance situational awareness.',
        'Implemented front-end and back-end functionality for data entry, tracking, and overall system operations, with a focus on real-world application.',
        'Performed manual testing during development to verify that core features worked as intended.',
      ],
      tools: ['HTML', 'TailwindCSS', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/KngCd/Capstone-MDRRMO',
      date: 'November 2025',
      videoSrc: '/assets/videos/ResponSys.mp4',
    },
    {
      title: 'ResponSys Mobile',
      subtitle: 'Location-Based Incident Reporting & Hazard Mapping App',
      description:
        'A mobile extension of ResponSys that lets citizens submit incident reports and view hazard map information from their devices.',
      details: [
        'Preview video shown is a prototype for demonstration purposes.',
        'Developed the mobile version of ResponSys, enabling citizens to submit incident reports and view hazard map information.',
        'Worked across the application stack to support location-based reporting, map visualization, and data handling.',
        'Conducted manual testing to ensure feature consistency and smooth integration with the existing system.',
      ],
      tools: ['Flutter', 'Tailwind', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/KngCd/Kubo-Ware',
      date: 'July 2025',
      videoSrc: '/assets/videos/ResponSys-Mobile.mp4',
    },
  ];

  return (
    <section id="projects" ref={ref} className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-12 md:py-14">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50"
      >
        Featured Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 mb-8 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
      >
        A curated set of projects that highlight my work across web and mobile development.
      </motion.p>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xl dark:hover:shadow-zinc-900/50 transition-all duration-300"
          >
            <div className="flex flex-col gap-6">
              {/* Video Preview */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
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

              {project.title === 'ResponSys Mobile' && (
                <p className="-mt-2 text-[11px] sm:text-xs italic font-light text-zinc-500 dark:text-zinc-500">
                  Preview video shown is a prototype for demonstration purposes.
                </p>
              )}

              {/* Project Details */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                      {project.date}
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.05, x: 5 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    <GitHubIcon className="!w-5 !h-5" />
                    <span className="text-sm font-medium">View Code</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}