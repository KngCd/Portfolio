import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Database, Zap, Network } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const coreStack = ['React', 'Tailwind', 'Node.js', 'Express.js', 'MySQL'];

  const skillCategories = [
    {
      title: 'Frontend',
      summary: 'Interfaces that feel clean, fast, and accessible.',
      skills: ['React', 'Next.js', 'JavaScript', 'Tailwind', 'Bootstrap'],
      icon: Code2,
      iconBg: 'bg-blue-600',
      badgeBg: 'bg-blue-600',
      borderColor: 'border-blue-200 dark:border-blue-700',
    },
    {
      title: 'Backend',
      summary: 'APIs and data flows built to be reliable.',
      skills: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'PHP', 'JWT'],
      icon: Database,
      iconBg: 'bg-purple-600',
      badgeBg: 'bg-purple-600',
      borderColor: 'border-purple-200 dark:border-purple-700',
    },
    {
      title: 'Tools & Workflow',
      summary: 'A practical toolkit for shipping with confidence.',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Trello', 'Playwright', 'Selenium'],
      icon: Zap,
      iconBg: 'bg-orange-600',
      badgeBg: 'bg-orange-600',
      borderColor: 'border-orange-200 dark:border-orange-700',
    },
    {
      title: 'Networking',
      summary: 'Fundamentals that keep systems connected and stable.',
      skills: ['Routing', 'Switching', 'VLANs', 'STP', 'OSPF', 'ACLs'],
      icon: Network,
      iconBg: 'bg-green-600',
      badgeBg: 'bg-green-600',
      borderColor: 'border-green-200 dark:border-green-700',
    },
  ];

  return (
    <section id="skills" ref={ref} className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-zinc-100/60 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 left-0 w-72 h-72 bg-zinc-100/60 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-3 mb-12"
      >
        <motion.p
          className="text-sm md:text-base text-zinc-500 tracking-widest uppercase font-semibold"
        >
          My Toolbox
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          Skills & Expertise
        </motion.h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mb-12 leading-relaxed"
      >
        From frontend frameworks to backend systems, I work with modern technologies to build scalable solutions.
      </motion.p>

      {/* Core stack */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12 rounded-2xl bg-zinc-100 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 p-8"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Primary Stack</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Technologies I work with every day.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {coreStack.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm overflow-hidden transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-5 inline-block">
                <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* Title and description */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {category.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {category.summary}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.25 + idx * 0.08 + skillIdx * 0.04 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 shadow-sm hover:shadow-md transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}