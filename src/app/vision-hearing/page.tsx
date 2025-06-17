'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function VisionHearing() {
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
              Vision & Hearing Screening
            </h1>
            <p className="text-xl text-base-100/90 max-w-2xl">
              Advanced AI-powered screenings to detect vision and hearing impairments early,
              ensuring optimal learning conditions for every student.
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
                Our Screening Services
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-healing-teal">Vision Screening</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Visual acuity testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Color vision assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Eye muscle balance tests</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-healing-teal">Hearing Screening</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Pure-tone audiometry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Speech recognition testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-healing-teal mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Tympanometry (middle ear function)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/services/health screening.png"
                alt="Vision and Hearing Screening"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact?subject=vision-hearing"
              className="inline-block px-8 py-4 text-lg rounded-xl bg-healing-teal hover:bg-healing-teal/90 text-clinic-white shadow-lg hover:shadow-xl transition-all"
            >
              Schedule a Screening
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
