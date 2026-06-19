import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: 'Google IT Support Professional Certificate',
      date: 'June 2026',
      description:
        'Comprehensive training in troubleshooting, help desk practices, network security, and hands-on labs for diagnosing and resolving real-world IT issues. Includes customer service and user support fundamentals.',
      status: 'Completed',
      certificateNo: 'PHXPL5H8E6TP',
    },
    {
      title: 'Cisco Networking Academy — Network Support and Security',
      date: 'April 2026',
      description:
        'Advanced networking credential focused on network security, troubleshooting, and system administration. Covers advanced routing, switching, security protocols, and threat mitigation.',
      status: 'Completed',
      certificateNo: 'Networking Academy',
    },
    {
      title: 'Cisco Networking Academy — Networking Devices and Basic Configuration',
      date: 'April 2026',
      description:
        'Foundational networking concepts including device configuration, network topology, switching, and routing protocols. Hands-on experience with Cisco devices and configuration management.',
      status: 'Completed',
      certificateNo: 'Networking Academy',
    },
    {
      title: 'PhilNITS Information Technology Passport (IP) Certification',
      date: 'October 2025',
      certificateNo: 'IP4500306',
      description:
        'Comprehensive IT fundamentals certification validating expertise in IT strategy, systems management, development practices, and IT governance. Demonstrates broad IT knowledge base.',
      status: 'Completed',
    },
    {
      title: 'Business Intelligence with POWER BI',
      date: 'August 2024',
      certificateNo: 'DAPh-24-4730228',
      description:
        'Advanced Power BI certification covering dashboard design, data modeling, DAX formulas, and business analytics. Demonstrates ability to transform raw data into actionable business insights.',
      status: 'Completed',
    },
  ];

  return (
    <section id="certifications" ref={ref} className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />
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
          Achievements
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          Certifications
        </motion.h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mb-12 leading-relaxed"
      >
        Professional credentials reflecting my commitment to continuous learning and practical expertise.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.certificateNo ?? cert.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative w-full sm:w-[min(45%,380px)] lg:w-[min(31%,380px)] rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 p-6"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 12, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="inline-block p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 mb-4"
            >
              <Award className="w-5 h-5 md:w-6 md:h-6 text-zinc-700 dark:text-zinc-300" />
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2 line-clamp-2">
              {cert.title}
            </h3>

            {/* Date */}
            <div className="flex items-center gap-2 mb-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Calendar className="w-4 h-4" />
              <span>{cert.date}</span>
            </div>

            {/* Certificate Number */}
            {cert.certificateNo && (
              <div className="mb-3 text-xs">
                <code className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">
                  {cert.certificateNo}
                </code>
              </div>
            )}

            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-zinc-500 dark:text-zinc-400" />
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                {cert.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}