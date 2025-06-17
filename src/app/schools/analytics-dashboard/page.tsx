'use client';
import { motion } from 'framer-motion';

export default function AnalyticsDashboardPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-navy to-healing-teal/90 text-clinic-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeUp">
              Analytics Dashboard
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-12 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
              Gain valuable insights into your school&apos;s health trends and make data-driven decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-32 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold mb-6">Key Metrics</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">Health Trends</h3>
                  <p className="text-healing-teal text-2xl font-bold">85%</p>
                  <p className="text-sm text-soft-charcoal/60 dark:text-clinic-white/60">Student wellness rate</p>
                </div>
                
                <div className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">Vaccinations</h3>
                  <p className="text-healing-teal text-2xl font-bold">92%</p>
                  <p className="text-sm text-soft-charcoal/60 dark:text-clinic-white/60">Compliance rate</p>
                </div>
                
                <div className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">Check-ups</h3>
                  <p className="text-healing-teal text-2xl font-bold">250+</p>
                  <p className="text-sm text-soft-charcoal/60 dark:text-clinic-white/60">Monthly average</p>
                </div>
                
                <div className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                  <p className="text-healing-teal text-2xl font-bold">&lt;5min</p>
                  <p className="text-sm text-soft-charcoal/60 dark:text-clinic-white/60">Emergency response</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Analytics Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>Real-time health trend monitoring</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                  <span>Interactive data visualization</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Customizable reports and exports</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-healing-teal mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>Predictive health trend analysis</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
