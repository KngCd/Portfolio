import { GraduationCap, Award } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      school: 'Batangas State University - TNEU',
      location: 'Lipa, Batangas',
      degree: 'Bachelor of Science in Information Technology',
      major: 'Major in Service Management',
      description:
        'A chapter where I strengthened my IT foundation through steady learning, practice, and growth.',
      gwa: 'GWA: 1.3214',
      period: 'Expected: 2026',
      achievement: "Consistent Dean's Lister for academic excellence",
      Icon: GraduationCap,
    },
    {
      school: 'Alitagtag Senior High School',
      location: 'Poblacion East, Alitagtag, Batangas',
      strand: 'Science, Technology, Engineering, and Mathematics (STEM)',
      description:
        'An early chapter that built discipline in STEM thinking and a deeper curiosity for technology.',
      period: 'July 7, 2022',
      achievement: "Graduated with honors, recognized for academic excellence",
      Icon: GraduationCap,
    },
  ];

  return (
    <section id="education" ref={ref} className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-12 md:py-14">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50"
      >
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 mb-8 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
      >
        A quick look at my academic journey, focus areas, and key highlights.
      </motion.p>

      <div className="space-y-8">
        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-10 sm:pl-14 pb-10 last:pb-0"
            >
              {/* Timeline node */}
              <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                <div className="h-3 w-3 rounded-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700" />
              </div>

              {/* Branch connector */}
              <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 h-px w-6 sm:w-8 bg-zinc-200 dark:bg-zinc-800" />

              {/* Card */}
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xl dark:hover:shadow-zinc-900/50 transition-all duration-300 bg-white dark:bg-zinc-900">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm grid place-items-center flex-shrink-0">
                      <edu.Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-200" />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                        {edu.school}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.location}</p>
                    </div>
                  </div>

                  <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.degree && (
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                      {edu.degree}
                    </p>
                  )}

                  {edu.major && (
                    <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">{edu.major}</p>
                  )}

                  {edu.strand && (
                    <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">{edu.strand}</p>
                  )}

                  {edu.gwa && (
                    <p className="text-sm font-mono text-zinc-600 dark:text-zinc-400">{edu.gwa}</p>
                  )}

                  {edu.achievement && (
                    <div className="flex items-start gap-2 mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                      <Award className="w-4 h-4 text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{edu.achievement}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
