import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
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
        'Strengthened my IT foundation through rigorous coursework, practical projects, and research. Developed expertise in systems design, network administration, and IT service management.',
      gwa: '1.3214',
      period: 'Expected: 2026',
      achievement: "Consistent Dean's Lister for academic excellence",
      color: 'blue',
      bgColor: 'bg-blue-600',
      level: 'University',
    },
    {
      school: 'Alitagtag Senior High School',
      location: 'Poblacion East, Alitagtag, Batangas',
      strand: 'Science, Technology, Engineering, and Mathematics (STEM)',
      description:
        'Built strong foundations in STEM disciplines with focus on physics, chemistry, mathematics, and computer science. Developed problem-solving skills and technical thinking.',
      period: 'Graduated: July 7, 2022',
      achievement: "Graduated with honors, recognized for academic excellence",
      color: 'purple',
      bgColor: 'bg-purple-600',
      level: 'Senior High School',
    },
  ];

  return (
    <section id="education" ref={ref} className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-3 mb-10"
      >
        <motion.p
          className="text-sm md:text-base text-zinc-500 tracking-widest uppercase font-semibold"
        >
          My Journey
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          Education
        </motion.h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mb-12 leading-relaxed"
      >
        Academic experiences that shaped my technical foundation and professional growth.
      </motion.p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-300 dark:bg-zinc-700 rounded-full" />

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-20 md:pl-24"
            >
              {/* Timeline node */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute left-0 top-0 w-12 h-12 rounded-full bg-zinc-900 shadow-lg flex items-center justify-center border-4 border-white dark:border-zinc-950"
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                className="rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 backdrop-blur-sm overflow-hidden group transition-all duration-300"
              >


                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                      {edu.school}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">{edu.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium">{edu.period}</span>
                  </div>
                </div>

                {/* Degree/Strand */}
                <div className="mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-700 space-y-1">
                  {edu.degree && (
                    <p className="text-lg md:text-xl font-bold text-zinc-800 dark:text-zinc-200">
                      {edu.degree}
                    </p>
                  )}
                  {edu.major && (
                    <p className="text-zinc-700 dark:text-zinc-300">
                      <span className="font-semibold">Major:</span> {edu.major}
                    </p>
                  )}
                  {edu.strand && (
                    <p className="text-zinc-700 dark:text-zinc-300">
                      <span className="font-semibold">Strand:</span> {edu.strand}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* GWA and Achievement */}
                <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  {edu.gwa && (
                    <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-lg">
                      <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">GWA:</span>
                      <code className="font-mono font-bold text-zinc-900 dark:text-zinc-50">{edu.gwa}</code>
                    </div>
                  )}
                  
                  {edu.achievement && (
                    <div className="flex items-start gap-3 pt-2">
                      <Award className="w-5 h-5 text-zinc-500 dark:text-zinc-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-medium">
                        {edu.achievement}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
