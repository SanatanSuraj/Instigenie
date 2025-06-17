'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function VisionHearingPage() {
  const router = useRouter();

  const handleScheduleDemo = () => {
    router.push('/book-checkup');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-navy to-healing-teal/90 text-clinic-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeUp">
                Vision & Hearing Assessment
              </h1>
              <p className="text-clinic-white/90 text-xl leading-relaxed mb-12 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                State-of-the-art vision and hearing screening using AI-powered technology for accurate and reliable results.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/schools/Digital Vision Screening.png"
                alt="Vision and Hearing Assessment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Screening Technology</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              Our AI-powered screening tools provide accurate and efficient assessment of vision and hearing capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-clinic-white dark:bg-soft-charcoal p-6 rounded-xl shadow-lg"
              >
                <div className="text-healing-teal mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-healing-teal/5 dark:bg-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Assessment Process</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              A streamlined process designed for accuracy and comfort
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-clinic-white dark:bg-soft-charcoal p-6 rounded-xl shadow-lg"
              >
                <div className="text-3xl font-bold text-healing-teal mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/10 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience Advanced Screening</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-xl mb-12">
              Learn how our AI-powered vision and hearing assessments can benefit your school.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={handleScheduleDemo} className="btn-primary px-8 py-4 text-lg">Schedule Demo</button>
              <button className="btn-secondary px-8 py-4 text-lg">Request Information</button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    title: "AI Vision Screening",
    description: "Advanced technology for accurate vision assessment and early detection of visual impairments.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  },
  {
    title: "Hearing Tests",
    description: "Comprehensive audiometric testing to identify hearing issues and assess auditory health.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 013.9-2.9" />
    </svg>
  },
  {
    title: "Real-time Results",
    description: "Instant analysis and reporting of screening results for immediate action if needed.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  },
  {
    title: "Progress Tracking",
    description: "Longitudinal monitoring of vision and hearing health over time.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  }
];

const process = [
  {
    title: "Initial Setup",
    description: "Quick and easy setup of our AI-powered screening equipment in a suitable space."
  },
  {
    title: "Screening Process",
    description: "Efficient and comfortable assessment process taking just minutes per student."
  },
  {
    title: "Results & Recommendations",
    description: "Immediate results with clear recommendations for follow-up if needed."
  }
];
