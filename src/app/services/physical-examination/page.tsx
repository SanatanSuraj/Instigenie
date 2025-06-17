'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PhysicalExaminationPage() {
	
	const router = useRouter();

  const handleScheduleConsultation = () => {
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
                Physical Examination Services
              </h1>
              <p className="text-clinic-white/90 text-xl leading-relaxed mb-12 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                Comprehensive physical assessment including vital signs, growth monitoring, and overall wellness evaluation for students.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/schools/School Health Checkup.png"
                alt="Physical Examination"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Health Assessment</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              Our physical examination service provides a thorough evaluation of student health through various measurements and assessments.
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

      {/* Benefits Section */}
      <section className="py-24 bg-healing-teal/5 dark:bg-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Physical Examination Service?</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              Our service ensures comprehensive health monitoring and early detection of potential health issues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="text-healing-teal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-soft-charcoal/80 dark:text-clinic-white/80">{benefit.description}</p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-xl mb-12">
              Contact us today to learn more about our physical examination services and how we can help protect your students' health.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={handleScheduleConsultation} className="btn-primary px-8 py-4 text-lg">Schedule Consultation</button>
              <button className="btn-secondary px-8 py-4 text-lg">Learn More</button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    title: "Height & Weight",
    description: "Accurate measurement of height and weight to track growth and development.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  },
  {
    title: "Blood Pressure",
    description: "Regular monitoring of blood pressure to ensure cardiovascular health.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  },
  {
    title: "Growth Tracking",
    description: "Continuous monitoring of growth patterns and development milestones.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  },
  {
    title: "Fitness Assessment",
    description: "Evaluation of physical fitness levels and recommendations for improvement.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  }
];

const benefits = [
  {
    title: "Early Detection",
    description: "Identify potential health issues early for timely intervention and treatment."
  },
  {
    title: "Comprehensive Records",
    description: "Maintain detailed health records to track progress and changes over time."
  },
  {
    title: "Expert Assessment",
    description: "Evaluations conducted by qualified healthcare professionals using modern equipment."
  },
  {
    title: "Preventive Care",
    description: "Focus on preventive measures to maintain optimal student health."
  }
];
