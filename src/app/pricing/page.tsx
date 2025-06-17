'use client';

import PricingTable from '../components/PricingTable';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-trust-navy via-trust-navy/95 to-healing-teal/90 text-clinic-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-noise.svg')] opacity-5"></div>
        {/* Add animated circles in the background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-healing-teal/20 blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-trust-navy/30 blur-3xl animate-float-delayed"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-healing-teal/10 rounded-full blur-xl"></div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold mb-8"
            >
              Simple, Transparent
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Pricing
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-clinic-white/90 text-xl leading-relaxed mb-12"
            >
              Choose the perfect plan for your school&apos;s health monitoring needs. All plans include our core health services and AI-powered analytics.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-clinic-white via-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:via-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-healing-teal text-sm uppercase tracking-wider font-semibold mb-4 block">Our Plans</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-trust-navy to-healing-teal bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              Select the perfect plan that matches your institution&apos;s needs and scale
            </p>
          </motion.div>
          <PricingTable />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-healing-teal/5 via-healing-teal/10 to-healing-teal/5 dark:from-healing-teal/10 dark:via-healing-teal/5 dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-healing-teal text-sm uppercase tracking-wider font-semibold mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-trust-navy to-healing-teal bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-soft-charcoal/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-healing-teal/10 hover:border-healing-teal/30"
              >
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white group-hover:text-healing-teal transition-colors duration-300">{faq.question}</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-trust-navy via-trust-navy/95 to-healing-teal/90 text-clinic-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-noise.svg')] opacity-5"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-healing-teal/20 blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-trust-navy/30 blur-3xl animate-float-delayed"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Need a Custom Solution?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-clinic-white/90">
              Contact our team for personalized pricing options tailored to your institution&apos;s specific requirements.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                Contact Sales
              </button>
              <button className="btn-secondary px-8 py-4 text-lg border-2 border-healing-teal/20 hover:bg-healing-teal/5 transition-all">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const faqs = [
  {
    question: "What's included in the basic plan?",
    answer: "The basic plan includes essential health monitoring features suitable for small to medium-sized schools, including student health records, basic analytics, and emergency notifications."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. We'll prorate any charges or credits based on your billing cycle."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes, we offer customized solutions for large institutions with specific requirements. Contact our sales team to discuss your needs."
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no hidden fees. The price you see is what you pay, and it includes full setup and onboarding support."
  }
];