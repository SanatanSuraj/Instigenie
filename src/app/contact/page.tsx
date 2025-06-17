'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

interface SubmitStatus {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export default function ContactPage() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
    time: ''
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  // Set initial subject from URL query parameter
  useEffect(() => {
    const subjectFromUrl = searchParams.get('subject');
    if (subjectFromUrl) {
      setFormData(prev => ({
        ...prev,
        subject: subjectFromUrl
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Here you would typically make an API call to your backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        date: '',
        time: ''
      });
    } catch {
      setSubmitStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to submit form. Please try again.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-trust-navy via-trust-navy/95 to-healing-teal/90 text-clinic-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-noise.svg')] opacity-5"></div>
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
              Get in Touch
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                With Us
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-clinic-white/90 text-xl leading-relaxed mb-12"
            >
              Have questions about our healthcare services? Our team is here to help you find the perfect solution for your school.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-clinic-white via-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:via-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-soft-charcoal/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-healing-teal/10 hover:border-healing-teal/30"
            >
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-trust-navy to-healing-teal bg-clip-text text-transparent">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-trust-navy dark:text-clinic-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-healing-teal/20 focus:border-healing-teal focus:ring-2 focus:ring-healing-teal focus:ring-opacity-20 bg-white dark:bg-soft-charcoal/30 text-trust-navy dark:text-clinic-white transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-trust-navy dark:text-clinic-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-healing-teal/20 focus:border-healing-teal focus:ring-2 focus:ring-healing-teal focus:ring-opacity-20 bg-white dark:bg-soft-charcoal/30 text-trust-navy dark:text-clinic-white transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-trust-navy dark:text-clinic-white">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-healing-teal/20 focus:border-healing-teal focus:ring-2 focus:ring-healing-teal focus:ring-opacity-20 bg-white dark:bg-soft-charcoal/30 text-trust-navy dark:text-clinic-white transition-all duration-200"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="checkup">Book Health Checkup</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request Demo</option>
                    <option value="sales">Sales</option>
                  </select>
                </div>

                {formData.subject === 'checkup' && (
                  <>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-2 text-trust-navy dark:text-clinic-white">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-lg border border-healing-teal/20 focus:border-healing-teal focus:ring-2 focus:ring-healing-teal focus:ring-opacity-20 bg-white dark:bg-soft-charcoal/30 text-trust-navy dark:text-clinic-white transition-all duration-200"
                        required={formData.subject === 'checkup'}
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-2 text-trust-navy dark:text-clinic-white">
                        Preferred Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-healing-teal/20 focus:border-healing-teal focus:ring-2 focus:ring-healing-teal focus:ring-opacity-20 bg-white dark:bg-soft-charcoal/30 text-trust-navy dark:text-clinic-white transition-all duration-200"
                        required={formData.subject === 'checkup'}
                      >
                        <option value="">Select a time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-trust-navy dark:text-clinic-white">
                    {formData.subject === 'checkup' ? 'Additional Notes' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-healing-teal/20 focus:border-healing-teal focus:ring-2 focus:ring-healing-teal focus:ring-opacity-20 bg-white dark:bg-soft-charcoal/30 text-trust-navy dark:text-clinic-white transition-all duration-200"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus.isSubmitting}
                  className={`w-full px-6 py-4 bg-healing-teal text-white rounded-lg font-medium transform transition-all duration-200 ${
                    submitStatus.isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-healing-teal/90 hover:-translate-y-1 hover:shadow-lg'
                  }`}
                >
                  {submitStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus.isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-healing-teal/10 text-healing-teal rounded-lg flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Thank you for your message! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-100 text-red-600 rounded-lg flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {submitStatus.error}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-soft-charcoal/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-healing-teal/10 hover:border-healing-teal/30"
              >
                <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-trust-navy to-healing-teal bg-clip-text text-transparent">Contact Information</h2>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-healing-teal/10 flex items-center justify-center group-hover:bg-healing-teal/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 text-trust-navy dark:text-clinic-white">Address</h3>
                      <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                        123 Healthcare Avenue<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-healing-teal/10 flex items-center justify-center group-hover:bg-healing-teal/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 text-trust-navy dark:text-clinic-white">Phone</h3>
                      <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-healing-teal/10 flex items-center justify-center group-hover:bg-healing-teal/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 text-trust-navy dark:text-clinic-white">Email</h3>
                      <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                        contact@healthtech.com
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group bg-white dark:bg-soft-charcoal/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-healing-teal/10 hover:border-healing-teal/30"
              >
                <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-trust-navy to-healing-teal bg-clip-text text-transparent">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-healing-teal/10 group-hover:border-healing-teal/20 transition-colors">
                    <span className="font-medium text-trust-navy dark:text-clinic-white">Monday - Friday</span>
                    <span className="text-soft-charcoal/80 dark:text-clinic-white/80">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-healing-teal/10 group-hover:border-healing-teal/20 transition-colors">
                    <span className="font-medium text-trust-navy dark:text-clinic-white">Saturday</span>
                    <span className="text-soft-charcoal/80 dark:text-clinic-white/80">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-healing-teal/10 group-hover:border-healing-teal/20 transition-colors">
                    <span className="font-medium text-trust-navy dark:text-clinic-white">Sunday</span>
                    <span className="text-soft-charcoal/80 dark:text-clinic-white/80">Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How can I schedule a demo?",
                answer: "You can schedule a demo by filling out the contact form above or calling us directly. Our team will get back to you within 24 hours."
              },
              {
                question: "What support options are available?",
                answer: "We offer 24/7 technical support via email and phone for all our customers. Premium support plans are also available."
              },
              {
                question: "How secure is your platform?",
                answer: "Our platform is HIPAA compliant and uses industry-standard encryption to protect all health data."
              },
              {
                question: "Do you offer training?",
                answer: "Yes, we provide comprehensive training for all new clients, including online resources and live sessions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
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
    </>
  );
}