import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const coreStack = ['React', 'Tailwind', 'Node.js', 'Express.js', 'MySQL'];

  const skillCategories = [
    {
      title: 'Frontend',
      summary: 'Interfaces that feel clean, fast, and accessible.',
      skills: ['React', 'Next.js', 'JavaScript', 'Tailwind', 'Bootstrap'],
    },
    {
      title: 'Backend',
      summary: 'APIs and data flows built to be reliable.',
      skills: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'PHP', 'JWT'],
    },
    {
      title: 'Tools & Workflow',
      summary: 'A practical toolkit for shipping with confidence.',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Trello', 'Playwright', 'Selenium'],
    },
    {
      title: 'Networking',
      summary: 'Fundamentals that keep systems connected and stable.',
      skills: ['Routing', 'Switching', 'VLANs', 'STP'],
    },
  ];

  return (
    <section id="skills" ref={ref} className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-12 md:py-14">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50"
      >
        Skills & Expertise
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 mb-8 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
      >
        A snapshot of the skills I rely on—from building interfaces to working with data, tools, and fundamentals.
      </motion.p>

      {/* Core stack */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Core stack</h3>
            <p className="mt-1 text-sm md:text-base text-zinc-900 dark:text-zinc-50">
              The tools I use most often.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {coreStack.map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.25, delay: 0.1 + idx * 0.05 }}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Category grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 + idx * 0.08 }}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {category.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                  {category.summary}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.2, delay: 0.18 + idx * 0.05 + skillIdx * 0.03 }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full text-sm border border-zinc-200/70 dark:border-zinc-700"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}