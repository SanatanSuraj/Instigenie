'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useChat } from '../context/ChatContext';

export default function MentalHealthPage() {
	const router = useRouter();
	const { openChat } = useChat();

	const handleScheduleConsultation = () => {
		router.push('/book-checkup');
	};

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-trust-navy via-trust-navy/95 to-healing-teal/90 text-clinic-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-noise.svg')] opacity-5 animate-subtle-shift"></div>
        {/* Add animated circles in the background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-healing-teal/20 blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-trust-navy/30 blur-3xl animate-float-delayed"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-healing-teal/10 rounded-full blur-xl"></div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fadeUp relative">
              Student Mental 
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Wellness
              </span>
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-12 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
              Comprehensive mental health support and resources for students, combining professional care with AI-assisted early detection.
            </p>
            <div className="flex gap-4 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              <button onClick={handleScheduleConsultation} className="btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                Schedule Consultation
              </button>
              <button className="btn-secondary px-8 py-4 text-lg border-2 border-healing-teal/20 hover:bg-healing-teal/5 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-clinic-white via-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:via-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-healing-teal text-sm uppercase tracking-wider font-semibold mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-trust-navy to-healing-teal bg-clip-text text-transparent">
              Our Mental Health Services
            </h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
              Comprehensive mental health support tailored for educational institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="group animate-fadeUp bg-white dark:bg-soft-charcoal/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-healing-teal/10 hover:border-healing-teal/30">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-healing-teal/20 to-healing-teal/5 flex items-center justify-center shrink-0 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-trust-navy dark:text-clinic-white group-hover:text-healing-teal transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-lg mb-6">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-soft-charcoal/70 dark:text-clinic-white/70">
                            <svg className="w-5 h-5 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-gradient-to-br from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/10 dark:to-soft-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-healing-teal/20 to-healing-teal/5 rounded-2xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/Supportive Counseling.png"
                  alt="Supportive counseling session"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional Support When <br />
                <span className="text-healing-teal">Students Need It Most</span>
              </h2>
              <p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-lg mb-8 leading-relaxed">
                Our team of experienced counselors and mental health professionals provides compassionate support to help students navigate their emotional and psychological well-being.
              </p>
              <ul className="space-y-4">
                {[
                  "Individual counseling sessions",
                  "Group therapy workshops",
                  "Crisis intervention support",
                  "Stress management techniques"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-healing-teal mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-soft-charcoal/80 dark:text-clinic-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <span className="text-healing-teal text-sm uppercase tracking-wider font-semibold mb-4 block">Making a Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Creating a Supportive <br />
                <span className="text-healing-teal">Learning Environment</span>
              </h2>
              <p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-lg mb-8 leading-relaxed">
                Our mental health program has helped thousands of students achieve better emotional well-being and academic success through comprehensive support and early intervention.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white dark:bg-soft-charcoal/30 rounded-xl border border-healing-teal/10">
                  <div className="text-3xl font-bold text-healing-teal mb-2">95%</div>
                  <p className="text-soft-charcoal/80 dark:text-clinic-white/80">Student satisfaction with counseling services</p>
                </div>
                <div className="p-6 bg-white dark:bg-soft-charcoal/30 rounded-xl border border-healing-teal/10">
                  <div className="text-3xl font-bold text-healing-teal mb-2">24/7</div>
                  <p className="text-soft-charcoal/80 dark:text-clinic-white/80">Access to mental health resources</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-healing-teal/20 to-healing-teal/5 rounded-2xl transform -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/schools/Friendly Counseling Session.png"
                  alt="Friendly counseling session"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Icons Section */}
      <section className="py-32 bg-gradient-to-b from-healing-teal/5 via-healing-teal/10 to-healing-teal/5 dark:from-healing-teal/10 dark:via-healing-teal/5 dark:to-healing-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pillars of Mental Wellness</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto">
              Our holistic approach to student mental health encompasses four key areas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {wellnessIcons.map((item, index) => (
              <div
                key={item.title}
                className="text-center animate-fadeUp group hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-healing-teal/20 to-healing-teal/10 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white group-hover:text-healing-teal transition-colors duration-300">{item.title}</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-32 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/5 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mental Health Resources</h2>
            <p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto">
              Access our comprehensive collection of mental health resources and support tools
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="block group bg-white dark:bg-soft-charcoal/50 rounded-2xl p-8 shadow-lg hover:shadow-xl animate-fadeUp transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-healing-teal/20 to-healing-teal/5 flex items-center justify-center mb-6 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white group-hover:text-healing-teal transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-6">
                  {resource.description}
                </p>
                <div className="text-healing-teal group-hover:text-trust-navy dark:group-hover:text-healing-teal flex items-center gap-2 transition-colors duration-300">
                  Learn More 
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="relative py-16 bg-gradient-to-br from-trust-navy to-trust-navy/95 text-clinic-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-noise.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Need Immediate Support?</h3>
            <p className="text-clinic-white/90 text-lg mb-8">
              Our mental health professionals are available 24/7 to provide immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917050140340" 
                className="btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Helpline
              </a>
              <button
                onClick={openChat}
                className="btn-secondary px-8 py-4 text-lg border-2 border-healing-teal/20 hover:bg-healing-teal/5 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat with Counselor
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Individual Counseling",
    description: "One-on-one sessions with qualified mental health professionals in a safe, confidential environment.",
    href: "/mental-health/individual-counseling",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    features: [
      "Personalized support",
      "Stress management",
      "Coping strategies",
      "Academic pressure support"
    ]
  },
  {
    title: "Group Support Sessions",
    description: "Facilitated group discussions providing peer support and shared learning experiences.",
    href: "/mental-health/group-support",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    features: [
      "Peer support network",
      "Shared experiences",
      "Social skills development",
      "Emotional resilience"
    ]
  },
  {
    title: "AI-Powered Assessment",
    description: "Early detection of potential mental health concerns using advanced AI analysis.",
    href: "/mental-health/ai-assessment",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>,
    features: [
      "Early detection",
      "Behavioral analysis",
      "Progress tracking",
      "Personalized insights"
    ]
  },
  {
    title: "Parent Consultation",
    description: "Regular updates and guidance for parents to support their child's mental wellbeing.",
    href: "/mental-health/parent-consultation",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    features: [
      "Regular updates",
      "Parenting guidance",
      "Communication strategies",
      "Home support tips"
    ]
  }
];

const wellnessIcons = [
  {
    title: "Emotional Balance",
    description: "Understanding and managing emotions effectively",
    icon: <svg className="w-8 h-8 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Mental Clarity",
    description: "Developing focus and cognitive wellness",
    icon: <svg className="w-8 h-8 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  },
  {
    title: "Social Connection",
    description: "Building meaningful relationships",
    icon: <svg className="w-8 h-8 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  },
  {
    title: "Self Growth",
    description: "Personal development and resilience",
    icon: <svg className="w-8 h-8 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  }
];

const resources = [
  {
    title: "Self-Help Tools",
    description: "Access our library of mental wellness resources, including guided meditations and stress management techniques.",
    href: "/mental-health/resources/self-help",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  },
  {
    title: "Educational Materials",
    description: "Learn about mental health through our curated collection of articles, videos, and interactive modules.",
    href: "/mental-health/resources/educational",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  },
  {
    title: "Crisis Support",
    description: "Immediate assistance and resources for students experiencing mental health emergencies.",
    href: "/mental-health/resources/crisis",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  }
];