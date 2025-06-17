'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SurajProfile() {
  const achievements = [
    {
      title: 'Rashtrapati Award',
      description: 'Prestigious award from The Bharat Scouts and Guides for exceptional achievements in scouting and youth leadership',
      icon: '🏆'
    },
    {
      title: 'Innovation in Healthcare',
      description: 'Pioneered AI-powered health screening solutions for educational institutions',
      icon: '🔬'
    },
    {
      title: 'National Handball Player',
      description: 'Represented at the national level in handball, demonstrating excellence in this dynamic team sport',
      icon: '🤾'
    },
    {
      title: 'Digital Transformation',
      description: 'Led the development of comprehensive digital health management systems',
      icon: '💻'
    }
  ];

  const expertise = [
    'Healthcare Technology',
    'AI & Machine Learning',
    'Educational Healthcare',
    'Digital Health Solutions',
    'School Health Programs',
    'Healthcare Innovation'
  ];

  return (
    <div className="min-h-screen bg-base-50 dark:bg-base-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-trust-navy text-clinic-white">
        <div className="absolute inset-0 bg-gradient-to-br from-trust-navy/95 via-trust-navy/90 to-healing-teal/80" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Suraj Kumar
              </h1>
              <h2 className="text-2xl text-healing-teal mb-6">
                Founder & CEO
              </h2>
              <p className="text-xl text-base-100/90 mb-8">
                Visionary founder of School Health+, leading the revolution in student healthcare 
                through innovative technology and compassionate service.
              </p>
              <a
                href="https://www.linkedin.com/in/sanatansuraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-healing-teal hover:bg-healing-teal/90 rounded-xl transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] w-full overflow-hidden rounded-xl"
            >
              <Image
                src="/images/profile/suraj_kumar.png"
                alt="Suraj Kumar"
                fill
                className="object-cover"
                style={{ objectPosition: '50% 15%' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-trust-navy/5 dark:bg-trust-navy/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
              Background & Recognition
            </h2>
            <div className="space-y-6">
              {/* Rashtrapati Award Card */}
              <div className="bg-white dark:bg-base-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-healing-teal/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🏅</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white">
                  Rashtrapati Award Recipient
                </h3>
                <p className="text-base-600 dark:text-base-300 mb-6">
                  Honored with the prestigious Rashtrapati Award from The Bharat Scouts and Guides,
                  recognizing outstanding achievements in scouting and youth development. This award
                  celebrates excellence in sports, art, military, literature, cinema, culture, science
                  and technology, and scouting activities.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-healing-teal/10 text-healing-teal rounded-full">
                    Youth Leadership
                  </span>
                  <span className="px-4 py-2 bg-healing-teal/10 text-healing-teal rounded-full">
                    Scouting Excellence
                  </span>
                  <span className="px-4 py-2 bg-healing-teal/10 text-healing-teal rounded-full">
                    Community Service
                  </span>
                </div>
              </div>

              {/* National Handball Player Card */}
              <div className="bg-white dark:bg-base-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-healing-teal/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🤾</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white">
                  National Handball Player
                </h3>
                <p className="text-base-600 dark:text-base-300 mb-6">
                  Competed at the national level, demonstrating excellence in competitive team sports
                  and developing strong leadership abilities. This experience has shaped my approach
                  to teamwork and strategic thinking in healthcare innovation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-healing-teal/10 p-4 rounded-lg">
                    <h4 className="font-bold text-healing-teal mb-2">Key Skills</h4>
                    <ul className="text-base-600 dark:text-base-300 space-y-2">
                      <li>• Team Leadership</li>
                      <li>• Strategic Thinking</li>
                      <li>• Quick Decision Making</li>
                    </ul>
                  </div>
                  <div className="bg-healing-teal/10 p-4 rounded-lg">
                    <h4 className="font-bold text-healing-teal mb-2">Athletics</h4>
                    <ul className="text-base-600 dark:text-base-300 space-y-2">
                      <li>• Physical Endurance</li>
                      <li>• Agility & Speed</li>
                      <li>• Hand-Eye Coordination</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-base-800 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
              Vision & Mission
            </h2>
            <p className="text-lg text-base-600 dark:text-base-300">
              Transforming student healthcare through technology and innovation. My goal is to make 
              quality healthcare accessible to every student, enabling them to focus on their education 
              without health concerns holding them back.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-base-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <h3 className="text-xl font-bold text-trust-navy dark:text-clinic-white">
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-base-600 dark:text-base-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-trust-navy/5 dark:bg-trust-navy/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {expertise.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-healing-teal/10 text-healing-teal rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-trust-navy text-clinic-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Transform Healthcare Together</h2>
          <p className="text-xl text-base-100/90 mb-8 max-w-2xl mx-auto">
            Interested in bringing innovative healthcare solutions to your educational institution?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-healing-teal hover:bg-healing-teal/90 rounded-xl transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
