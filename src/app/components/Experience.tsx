import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      role: 'Tech Support Associate',
      company: 'Kubo-Ware Software Development Services',
      location: 'Bauan, Batangas',
      period: 'Ongoing',
      type: 'Part-time',
      description: 'After my internship, I was offered a part-time role as a Tech Support Associate. I now provide on-site technical support, troubleshoot system issues, perform quality assurance testing, and work closely with the development team to help improve system reliability and user experience.',
      color: 'border-blue-500 bg-white dark:bg-zinc-900',
      dotColor: 'bg-blue-600',
      icon: Briefcase,
    },
    {
      role: 'IT Trainee',
      company: 'Kubo-Ware Software Development Services',
      location: 'Bauan, Batangas',
      period: 'February 2026 – May 2026',
      type: 'Full-time',
      description: 'Started my journey at Kubo-Ware as an IT Trainee, where I worked on kiosk deployments, system configuration, network troubleshooting, and software testing. During my internship, I also developed an internal financial management system and gained hands-on experience supporting real-world implementation projects.',
      color: 'border-zinc-300 bg-white dark:bg-zinc-900',
      dotColor: 'bg-zinc-600',
      icon: Briefcase,
    }
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 md:py-20 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-3 mb-12"
      >
        <motion.p
          className="text-sm md:text-base text-zinc-500 tracking-widest uppercase font-semibold"
        >
          Work Experience
        </motion.p>
        <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50">
          Experience
        </motion.h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mb-12 leading-relaxed"
      >
        Hands-on professional experience in system administration, software development, and technical support.
      </motion.p>

      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl border border-zinc-200 bg-white dark:bg-zinc-900 p-6 md:p-8 backdrop-blur-sm overflow-hidden group transition-all hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-lg bg-zinc-900 text-white flex-shrink-0"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-col items-start md:flex-row md:items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="self-start px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs font-semibold">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4"
              >
                {exp.description}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
