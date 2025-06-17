'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'What services does School Health+ provide?',
    answer: 'We offer comprehensive health services including physical examinations, vision and hearing screenings, dental care, mental health support, and health education programs. Our services are designed to support the overall well-being of students in educational institutions.'
  },
  {
    question: 'How often should students get health check-ups?',
    answer: 'We recommend annual comprehensive health check-ups for students. However, vision and hearing screenings may be conducted more frequently, typically every 6 months, especially for students with previously identified concerns.'
  },
  {
    question: 'Are your health screenings covered by insurance?',
    answer: 'Yes, many of our services are covered by major insurance providers. We also offer various payment plans and school partnership programs to ensure accessibility to all students. Please contact us for specific coverage details.'
  },
  {
    question: 'How do you handle medical emergencies at schools?',
    answer: 'We have established emergency response protocols and trained medical staff available during school hours. We coordinate closely with local emergency services and maintain communication with parents/guardians throughout any medical situation.'
  },
  {
    question: 'What makes your AI-powered screenings different?',
    answer: 'Our AI-powered screenings combine advanced technology with medical expertise to provide more accurate and efficient health assessments. The system can detect subtle changes and patterns that might be missed in traditional screenings, enabling earlier intervention when needed.'
  },
  {
    question: 'How do you maintain student health records?',
    answer: 'We use a secure, HIPAA-compliant digital health record system. Parents and authorized school staff can access these records through our encrypted portal while maintaining strict privacy standards.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-base-100/90 max-w-2xl">
              Find answers to common questions about our services, procedures, and health care approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-base-800 rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-base-50 dark:hover:bg-base-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-trust-navy dark:text-clinic-white">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-healing-teal transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-base-50/50 dark:bg-base-800/50">
                    <p className="text-base-600 dark:text-base-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
