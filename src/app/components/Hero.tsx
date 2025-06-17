'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-trust-navy to-healing-teal/90 text-clinic-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg-noise.svg')] opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering School Healthcare with Technology
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-clinic-white/90">
              Comprehensive health management system designed for schools, combining advanced technology with personalized care.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-healing-teal hover:bg-healing-teal/90 text-clinic-white px-8 py-3 rounded-lg font-medium transition-colors">
                Get Started
              </button>
              <button className="bg-clinic-white/10 hover:bg-clinic-white/20 text-clinic-white px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/profile/Friendly Doctor .png"
                    alt="Friendly Doctor"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/profile/School Friends.png"
                    alt="School Friends"
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/profile/Warm School Nurse.png"
                    alt="Warm School Nurse"
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/profile/Friendly School Welcome.png"
                    alt="Friendly School Welcome"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p className="text-clinic-white/80">Schools Served</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">100k+</h3>
            <p className="text-clinic-white/80">Students Protected</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">98%</h3>
            <p className="text-clinic-white/80">Satisfaction Rate</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">24/7</h3>
            <p className="text-clinic-white/80">Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
