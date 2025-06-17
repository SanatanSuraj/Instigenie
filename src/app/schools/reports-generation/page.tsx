'use client';
import { motion } from 'framer-motion';

export default function ReportsGenerationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-navy to-healing-teal/90 text-clinic-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeUp">
              Reports Generation
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-12 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
              Generate comprehensive health reports and statistics for your school.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-32 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Available Reports</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Health Statistics Report</h3>
                    <p className="text-soft-charcoal/80 dark:text-clinic-white/70 text-sm">Comprehensive overview of school health metrics</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Immunization Compliance</h3>
                    <p className="text-soft-charcoal/80 dark:text-clinic-white/70 text-sm">Track vaccination status and requirements</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Incident Reports</h3>
                    <p className="text-soft-charcoal/80 dark:text-clinic-white/70 text-sm">Detailed documentation of health incidents</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Wellness Program Reports</h3>
                    <p className="text-soft-charcoal/80 dark:text-clinic-white/70 text-sm">Progress tracking of health initiatives</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Report Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customizable report templates</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multiple export formats (PDF, Excel, CSV)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated report scheduling</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Interactive data visualizations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-healing-teal/10 dark:bg-healing-teal/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/70 mb-4">
                  Our support team is here to help you generate the reports you need.
                </p>
                <button className="btn-primary px-6 py-3">
                  Contact Support
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
