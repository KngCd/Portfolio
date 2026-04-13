import { Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: 'Cisco Networking Academy — Networking Devices and Basic Configuration',
      date: 'April 2026',
      description:
        'A course completion credential focused on foundational networking concepts and hands-on device configuration through Cisco Networking Academy.',
    },
    {
      title: 'PhilNITS Information Technology Passport (IP) Certification',
      date: 'October 2025',
      certificateNo: 'IP4500306',
      description:
        'A fundamental IT certification demonstrating comprehensive knowledge of IT basics, including strategy, management, systems, and development.',
    },
    {
      title: 'Business Intelligence with POWER BI',
      date: 'August 2024',
      certificateNo: 'DAPh-24-4730228',
      description:
        'A certification focused on building dashboards, creating data models, and delivering insights using Microsoft Power BI.',
    },
  ];

  return (
    <section id="certifications" ref={ref} className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-12 md:py-14">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-8"
      >
        Certifications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="-mt-4 mb-8 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
      >
        Certifications that reflect my commitment to continuous learning and building practical, real-world skills.
      </motion.p>

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.certificateNo ?? cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xl dark:hover:shadow-zinc-900/50 transition-all duration-300 bg-white dark:bg-zinc-900"
          >
            <div className="flex items-start gap-4 md:gap-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="p-3 md:p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-sm"
              >
                <Award className="w-6 h-6 md:w-8 md:h-8 text-zinc-700 dark:text-zinc-100" />
              </motion.div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {cert.title}
                  </h3>
                  {cert.date && (
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                      {cert.date}
                    </span>
                  )}
                </div>

                {cert.certificateNo && (
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Certificate No:{' '}
                    <span className="font-mono text-zinc-800 dark:text-zinc-200 bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">
                      {cert.certificateNo}
                    </span>
                  </p>
                )}
                <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}