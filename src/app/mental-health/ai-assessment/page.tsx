import Image from 'next/image';

export default function AIAssessmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-trust-navy via-trust-navy/95 to-healing-teal/90 text-clinic-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-noise.svg')] opacity-5 animate-subtle-shift"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-healing-teal/20 blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-trust-navy/30 blur-3xl animate-float-delayed"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeUp">
              AI-Powered
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-8 animate-fadeUp">
              Advanced technology for early detection and continuous monitoring of student mental health indicators.
            </p>
            <button className="btn-primary px-8 py-4 text-lg animate-fadeUp">
              Start Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-clinic-white dark:bg-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-healing-teal/20 to-healing-teal/5 rounded-2xl transform rotate-3"></div>
              <Image 
                src="/images/services/health screening.png"
                alt="AI Assessment Interface"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl w-full h-full object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
                How It Works
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">{feature.title}</h3>
                      <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/5 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-trust-navy dark:text-clinic-white">
            Assessment Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-soft-charcoal/30 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white">
                  {benefit.title}
                </h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-gradient-to-br from-trust-navy to-trust-navy/95 text-clinic-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Privacy Matters</h2>
            <p className="text-xl text-clinic-white/90 mb-8">
              Our AI assessment system adheres to the highest standards of data privacy and security. All information is encrypted and handled in accordance with HIPAA guidelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 text-lg">
                Learn About Security
              </button>
              <button className="btn-secondary px-8 py-4 text-lg border-2 border-healing-teal/20">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    title: "Data Collection",
    description: "Regular assessment through questionnaires, behavioral monitoring, and academic performance tracking.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  },
  {
    title: "AI Analysis",
    description: "Advanced algorithms analyze patterns and identify potential areas of concern.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  },
  {
    title: "Early Detection",
    description: "Proactive identification of potential mental health concerns before they escalate.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  },
  {
    title: "Personalized Reports",
    description: "Detailed insights and recommendations tailored to each student's needs.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  }
];

const benefits = [
  {
    title: "Early Intervention",
    description: "Identify and address mental health concerns before they become more serious.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Data-Driven Insights",
    description: "Make informed decisions based on comprehensive mental health data analysis.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  },
  {
    title: "Continuous Monitoring",
    description: "Track progress and adjust support strategies in real-time.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  }
];
