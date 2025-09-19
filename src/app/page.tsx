'use client';

import OptimizedImage from './components/OptimizedImage';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleBookHealthCheck = () => {
    router.push('/contact?subject=checkup&type=comprehensive');
  };

  const handleLearnMore = () => {
    router.push('/services?section=overview');
  };


  const handleServiceClick = (serviceTitle: string) => {
    const service = services.find((s) => s.title === serviceTitle);
    router.push(
      `/services?service=${encodeURIComponent(serviceTitle.toLowerCase())}&description=${encodeURIComponent(service?.description || '')}`
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Video Background with Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-trust-navy/95 via-trust-navy/90 to-healing-teal/80 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-2000"
          >
            <source src="/videos/Smart School Healthcare Technology_simple.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-healing-teal/20 blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-trust-navy/30 blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-clinic-white">
              Comprehensive Health Care for{' '}
              <span className="bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Tomorrow&apos;s Leaders
              </span>
            </h1>
            <p className="text-gray-100 text-xl leading-relaxed mb-12 font-medium">
              Advanced AI-powered health assessments combined with expert medical care,
              designed specifically for educational institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                onClick={handleBookHealthCheck}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 text-lg rounded-xl bg-healing-teal hover:bg-healing-teal/90 text-clinic-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              <motion.button
                onClick={handleLearnMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary px-8 py-4 text-lg rounded-xl border-2 border-healing-teal/20 hover:bg-healing-teal/5 text-clinic-white flex items-center justify-center gap-2"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <svg className="w-6 h-6 text-clinic-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/10 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-healing-teal text-sm uppercase tracking-wider font-semibold mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
              Comprehensive Health Services
            </h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              Providing complete healthcare solutions for educational institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                onClick={() => handleServiceClick(service.title)}
                className="cursor-pointer bg-clinic-white dark:bg-soft-charcoal/50 rounded-2xl shadow-lg backdrop-blur-sm overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/60 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-healing-teal/10 flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-trust-navy dark:text-clinic-white group-hover:text-healing-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-healing-teal/5 dark:bg-soft-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-noise.svg')] opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-healing-teal text-sm uppercase tracking-wider font-semibold mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
              What Schools Say About Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-clinic-white dark:bg-soft-charcoal/50 rounded-2xl shadow-lg p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full ring-4 ring-healing-teal/20"
                  />
                  <div>
                    <h4 className="font-semibold text-trust-navy dark:text-clinic-white">{testimonial.name}</h4>
                    <p className="text-sm text-soft-charcoal/80 dark:text-clinic-white/80">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-lg mb-6 text-soft-charcoal/80 dark:text-clinic-white/80">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-br from-trust-navy to-trust-navy/95 text-clinic-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-healing-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-healing-teal/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-healing-teal text-sm uppercase tracking-wider font-semibold mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose School Health+
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-20 h-20 rounded-2xl bg-healing-teal/20 flex items-center justify-center mx-auto mb-6 transform -rotate-6"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-healing-teal transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-clinic-white/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Video Feature */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Experience Modern School Healthcare</h2>
              <p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-lg leading-relaxed">
                Our innovative approach combines advanced technology with compassionate care to create a comprehensive health monitoring system for schools.
              </p>
              <button
                onClick={handleLearnMore}
                className="btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                Learn More
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-trust-navy/10"
            >
              <div className="relative aspect-video">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controlsList="nodownload"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-1000"
                >
                  <source src="/videos/Smart School Healthcare Technology_simple.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AIRA Bot Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
onClick={() => {}}
        className="fixed bottom-6 right-6 w-16 h-16 bg-healing-teal hover:bg-healing-teal/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
        aria-label="Open AI Assistant"
      >
        <svg
          className="w-7 h-7 text-clinic-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </motion.button>
    </>
  );
}

const services = [
  {
    title: "Physical Examination",
    description: "Comprehensive health assessment including vital signs, growth monitoring, and overall wellness evaluation.",
    image: "/images/services/School friends.png",
    icon: <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  },
  {
    title: "Vision & Hearing",
    description: "Advanced screening using AI-powered technology for early detection of vision and hearing impairments.",
    image: "/images/services/health screening.png",
    icon: <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  },
  {
    title: "Dental Care",
    description: "Expert dental evaluations with state-of-the-art equipment and on-site specialist consultation.",
    image: "/images/services/Modern Dental Consultation.png",
    icon: <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
  }
];

const testimonials = [
  {
    quote: "School Health+ has transformed how we manage student health. Their AI-powered assessments have helped us identify health concerns early.",
    name: "Dr. Sarah Patel",
    role: "Principal, Riverside Academy",
    image: "/images/profile/Friendly School Welcome.png"
  },
  {
    quote: "The digital health records and real-time updates have made it so much easier to keep parents informed about their children's health.",
    name: "Dr. Rajesh Kumar",
    role: "School Physician, Oak Grove School",
    image: "/images/profile/Friendly Doctor .png"
  },
  {
    quote: "Their preventive care approach has significantly reduced health-related absences in our school.",
    name: "Nurse Priya Singh",
    role: "School Nurse, Sunnydale High",
    image: "/images/profile/Warm School Nurse.png"
  }
];

const benefits = [
  {
    title: "Early Detection",
    description: "Identify health issues before they become serious concerns.",
    icon: <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "AI-Powered",
    description: "Advanced technology for accurate diagnostics and analysis.",
    icon: <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  },
  {
    title: "Expert Care",
    description: "Qualified healthcare professionals and specialists on-site.",
    icon: <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  },
  {
    title: "Digital Records",
    description: "Secure online access to health reports and history.",
    icon: <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  }
];
