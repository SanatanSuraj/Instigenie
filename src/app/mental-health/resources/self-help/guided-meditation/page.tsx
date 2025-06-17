import Image from 'next/image';

export default function GuidedMeditationPage() {
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
              Guided
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Meditation
              </span>
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-8 animate-fadeUp">
              Find peace and clarity through our collection of guided meditation sessions designed specifically for students.
            </p>
            <button className="btn-primary px-8 py-4 text-lg animate-fadeUp">
              Start Meditating
            </button>
          </div>
        </div>
      </section>

      {/* Meditation Categories */}
      <section className="py-20 bg-clinic-white dark:bg-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meditations.map((meditation, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-soft-charcoal/30 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center mb-6">
                  {meditation.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white group-hover:text-healing-teal transition-colors">
                  {meditation.title}
                </h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-4">
                  {meditation.description}
                </p>
                <div className="flex items-center gap-2 text-healing-teal">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{meditation.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/5 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-trust-navy dark:text-clinic-white">
                Benefits of Meditation
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">
                        {benefit.title}
                      </h3>
                      <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-healing-teal/20 to-healing-teal/5 rounded-2xl transform rotate-3"></div>
              <Image 
                src="/images/services/Supportive-Counseling.png"
                alt="Meditation Session"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl w-full h-full object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gradient-to-br from-trust-navy to-trust-navy/95 text-clinic-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Meditation Journey</h2>
            <p className="text-xl text-clinic-white/90 mb-8">
              Begin your mindfulness practice with our guided sessions designed to help you find balance and peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 text-lg">
                Try a Session
              </button>
              <button className="btn-secondary px-8 py-4 text-lg border-2 border-healing-teal/20">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const meditations = [
  {
    title: "Focus & Concentration",
    description: "Enhance your study sessions with meditations designed to improve focus and concentration.",
    duration: "10-15 minutes",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Stress Relief",
    description: "Release academic pressure and anxiety with calming meditation practices.",
    duration: "15-20 minutes",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Better Sleep",
    description: "Improve your sleep quality with evening relaxation meditations.",
    duration: "20-30 minutes",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  }
];

const benefits = [
  {
    title: "Improved Focus",
    description: "Enhance your concentration and study efficiency through regular meditation practice.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Stress Reduction",
    description: "Learn techniques to manage academic stress and maintain emotional balance.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  },
  {
    title: "Better Sleep",
    description: "Develop healthy sleep patterns through evening meditation practices.",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  }
];
