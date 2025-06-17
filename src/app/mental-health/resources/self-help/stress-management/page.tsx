import Image from 'next/image';

export default function StressManagementPage() {
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
              Stress
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-8 animate-fadeUp">
              Learn effective techniques to manage academic pressure, personal stress, and maintain a balanced life.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques Grid */}
      <section className="py-20 bg-clinic-white dark:bg-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-soft-charcoal/30 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center mb-6">
                  {technique.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white">
                  {technique.title}
                </h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  {technique.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Guide */}
      <section className="py-20 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/5 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-healing-teal/20 to-healing-teal/5 rounded-2xl transform rotate-3"></div>
              <Image 
                src="/images/services/Supportive Counseling.png"
                alt="Stress Management Techniques"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl w-full h-full object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
                Interactive Stress Management Guide
              </h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-healing-teal flex items-center justify-center text-clinic-white font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-trust-navy dark:text-clinic-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const techniques = [
  {
    title: "Deep Breathing",
    description: "Learn various breathing techniques to instantly calm your mind and reduce stress levels.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-11V4" />
    </svg>
  },
  {
    title: "Progressive Relaxation",
    description: "Practice systematic muscle relaxation to release physical tension and mental stress.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Time Management",
    description: "Master effective scheduling and prioritization to reduce academic stress.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Mindful Movement",
    description: "Simple exercises and stretches you can do at your desk to relieve stress.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
  },
  {
    title: "Positive Visualization",
    description: "Use guided imagery to create calming mental scenarios and reduce anxiety.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  },
  {
    title: "Study Breaks",
    description: "Learn how to structure effective study breaks to maintain focus and reduce stress.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  }
];

const steps = [
  {
    title: "Identify Your Stressors",
    description: "Learn to recognize and document your personal stress triggers in academic and social situations."
  },
  {
    title: "Choose Your Technique",
    description: "Select from our variety of proven stress management techniques based on your needs and preferences."
  },
  {
    title: "Practice Regularly",
    description: "Implement your chosen techniques daily and track their effectiveness in reducing stress levels."
  },
  {
    title: "Monitor Progress",
    description: "Use our built-in tracking tools to monitor your stress levels and technique effectiveness over time."
  }
];
