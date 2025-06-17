'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MentalHealthSupportPage() {
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
                Mental Health Support Services
              </h1>
              <p className="text-clinic-white/90 text-xl leading-relaxed mb-12 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                Comprehensive mental health services including counseling, stress management, and emotional well-being programs for students.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/services/Supportive Counseling.png"
                alt="Mental Health Support"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Support Services</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              We offer a range of mental health services designed to support students through their academic journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-clinic-white dark:bg-soft-charcoal p-6 rounded-xl shadow-lg"
              >
                <div className="text-healing-teal mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-healing-teal/5 dark:bg-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              A holistic and student-centered approach to mental health and well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
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
                  <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                  <p className="text-soft-charcoal/80 dark:text-clinic-white/80">{approach.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Support Your Students</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-xl mb-12">
              Learn how our mental health support services can create a more supportive and nurturing environment for your students.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={handleScheduleConsultation} className="btn-primary px-8 py-4 text-lg">Schedule Consultation</button>
              <button className="btn-secondary px-8 py-4 text-lg">Download Brochure</button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Individual Counseling",
    description: "One-on-one counseling sessions with licensed mental health professionals.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  },
  {
    title: "Group Therapy",
    description: "Supportive group sessions focusing on common challenges and shared experiences.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  },
  {
    title: "Crisis Support",
    description: "24/7 crisis intervention and emergency support services when needed.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Wellness Programs",
    description: "Preventive programs promoting mental health awareness and emotional well-being.",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  }
];

const approaches = [
  {
    title: "Student-Centered Care",
    description: "Tailored support that puts each student's unique needs and well-being first."
  },
  {
    title: "Evidence-Based Methods",
    description: "Utilizing proven therapeutic techniques and interventions backed by research."
  },
  {
    title: "Collaborative Approach",
    description: "Working together with teachers, parents, and healthcare providers for comprehensive care."
  },
  {
    title: "Preventive Focus",
    description: "Emphasis on early intervention and building resilience to prevent mental health challenges."
  }
];
