'use client';

import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  'use client';

  const router = useRouter();

  const handleScheduleDemo = () => {
    router.push('/book-checkup');
  };

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-navy to-healing-teal/90 text-clinic-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-trust-navy/95 via-trust-navy/90 to-healing-teal/80 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-2000"
          >
            <source src="/videos/Cutting-Edge School Healthcare.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeUp">
              Comprehensive Health Services
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-12 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
              Our advanced health screening program combines cutting-edge technology with expert medical care to ensure the wellbeing of students.
            </p>
            <button onClick={handleContactClick} className="btn-primary px-8 py-4 text-lg animate-fadeUp shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all" style={{ animationDelay: '0.2s' }}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              Explore our range of comprehensive healthcare services designed specifically for educational institutions
            </p>
          </motion.div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch w-full max-w-6xl">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-healing-teal/5 to-clinic-white dark:from-healing-teal/10 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-1000"
              >
                <source src="/videos/Smart School Healthcare Technology.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Smart Healthcare Technology</h2>
              <p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-lg leading-relaxed">
                Experience the future of school healthcare with our cutting-edge technology solutions. From digital health records to AI-powered screenings, we&apos;re revolutionizing how schools manage student health.
              </p>
              <button
                onClick={handleScheduleDemo}
                className="btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                Schedule a Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-gradient-to-br from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/10 dark:to-soft-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-xl mb-12 leading-relaxed">
              Contact us today to learn more about how we can help protect and promote the health of your students.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={handleScheduleDemo} className="btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule Demo
              </button>
              <button onClick={handleContactClick} className="btn-secondary px-8 py-4 text-lg border-2 border-healing-teal/20 hover:bg-healing-teal/5 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Physical Examination",
    description: "Comprehensive physical assessment including vital signs, growth monitoring, and overall wellness evaluation.",
    icon: <svg className="w-12 h-12 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    features: [
      "Height and weight measurement",
      "Blood pressure monitoring", 
      "Growth tracking",
      "Physical fitness assessment"
    ],
    imageUrl: "/images/schools/School Health Checkup.png",
    href: "/services/physical-examination"
  },
  {
    title: "Vision & Hearing Assessment",
    description: "State-of-the-art vision and hearing screening using AI-powered technology for accurate results.",
    icon: <svg className="w-12 h-12 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>,
    features: [
      "AI-powered vision screening",
      "Comprehensive hearing tests",
      "Early detection of issues",
      "Regular monitoring"
    ],
    imageUrl: "/images/schools/Digital Vision Screening.png",
    href: "/services/vision-hearing"
  },
  {
    title: "Mental Health Support",
    description: "Comprehensive mental health services including counseling, stress management, and emotional well-being programs.",
    icon: <svg className="w-12 h-12 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    features: [
      "Individual counseling sessions",
      "Group therapy workshops",
      "Stress management techniques",
      "Crisis intervention support"
    ],
    imageUrl: "/images/services/Supportive Counseling.png",
    href: "/services/mental-health-support"
  },
  {
    title: "Telemedicine Services",
    description: "Virtual healthcare consultations connecting students with healthcare providers for remote medical support and guidance.",
    icon: <svg className="w-12 h-12 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
    features: [
      "Real-time video consultations",
      "Secure medical data transmission",
      "Remote health monitoring",
      "Digital prescription services"
    ],
    imageUrl: "/images/services/Virtual Healthcare Consultation.png",
    href: "/services/telemedicine"
  },
  {
    title: "Nutrition Advisory",
    description: "Expert guidance on balanced nutrition, dietary planning, and healthy eating habits for optimal student health.",
    icon: <svg className="w-12 h-12 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>,
    features: [
      "Personalized meal planning",
      "Nutritional assessments",
      "Dietary counseling",
      "Food allergy management"
    ],
    imageUrl: "/images/schools/Nutrition Workshop with Students.png",
    href: "/services/nutrition-advisory"
  },
  {
    title: "Emergency Response Training",
    description: "Comprehensive training in emergency medical procedures and first aid for school staff and students.",
    icon: <svg className="w-12 h-12 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    features: [
      "CPR certification",
      "First aid training",
      "Emergency protocol education",
      "Safety drill coordination"
    ],
    imageUrl: "/images/schools/First Aid Demonstration.png",
    href: "/services/emergency-response"
  }
];