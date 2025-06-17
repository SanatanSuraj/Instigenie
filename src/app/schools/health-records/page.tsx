'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HealthRecordsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-navy to-healing-teal/90 text-clinic-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeUp">
                Digital Health Records Management
              </h1>
              <p className="text-clinic-white/90 text-xl leading-relaxed mb-12 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                Modern, secure, and efficient health records system designed for Indian schools, with multilingual support and comprehensive documentation.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/healthdocumentation/Multilingual EHR Interface.png"
                alt="Electronic Health Records Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Types Section */}
      <section className="py-24 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Documentation System</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              Our platform supports all essential health documentation needs for schools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-soft-charcoal/50 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="/images/healthdocumentation/Medical Fitness Certificate.png"
                  alt="Medical Fitness Certificate"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Medical Fitness Certificates</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  Standard medical fitness certification for sports and activities
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-soft-charcoal/50 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="/images/healthdocumentation/Emergency Contact Form.png"
                  alt="Emergency Contact Form"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Emergency Contact Forms</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  Quick access to emergency contact information and medical alerts
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-soft-charcoal/50 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="/images/healthdocumentation/Indian Vaccination Record.png"
                  alt="Vaccination Record"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Vaccination Records</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  Complete immunization tracking and scheduling system
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-soft-charcoal/50 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="/images/healthdocumentation/Bilingual Health Review.png"
                  alt="Bilingual Health Review"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bilingual Health Reviews</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  Comprehensive health assessments in multiple languages
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-healing-teal/5 dark:bg-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Easy Documentation Process</h2>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/healthdocumentation/Parents Completing Forms.png"
                  alt="Parents Completing Forms"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bilingual support for all documentation</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Digital signature and verification system</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated reminders for document updates</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Secure document sharing with healthcare providers</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Screening Section */}
      <section className="py-24 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Regular Health Screenings</h3>
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/healthdocumentation/School Health Screening.png"
                    alt="School Health Screening"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-4">
                  Comprehensive health screening programs with detailed documentation and follow-up tracking.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Medical Records</h3>
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/healthdocumentation/Medical Prescription Pad.png"
                    alt="Medical Records"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-4">
                  Secure storage and management of prescriptions, treatments, and medical histories.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
