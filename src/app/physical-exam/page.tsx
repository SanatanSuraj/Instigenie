'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function PhysicalExam() {
  return (
    <div className="min-h-screen bg-base-50 dark:bg-base-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-trust-navy text-clinic-white">
        <div className="absolute inset-0 bg-gradient-to-br from-trust-navy/95 via-trust-navy/90 to-healing-teal/80" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Physical Examinations
            </h1>
            <p className="text-xl text-base-100/90 max-w-2xl">
              Our thorough physical examinations ensure your child&apos;s health and wellness,
              following the latest medical guidelines and standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-trust-navy dark:text-clinic-white">
                What We Check
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Height, weight, and BMI measurements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Blood pressure and heart rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Respiratory system evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Posture and spine assessment</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/services/School friends.png"
                alt="Physical Examination"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact?subject=physical-exam"
              className="inline-block px-8 py-4 text-lg rounded-xl bg-healing-teal hover:bg-healing-teal/90 text-clinic-white shadow-lg hover:shadow-xl transition-all"
            >
              Schedule an Examination
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
