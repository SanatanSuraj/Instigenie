import Image from 'next/image';

export default function InteractiveModulesPage() {
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
              Interactive
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Modules
              </span>
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-8 animate-fadeUp">
              Engage with our interactive learning experiences designed to enhance your understanding of mental health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Module Grid */}
      <section className="py-20 bg-clinic-white dark:bg-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-soft-charcoal/30 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center mb-6">
                  {module.icon}
                </div>
                <div className="flex items-center gap-2 text-sm text-healing-teal mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{module.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{module.level}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white">
                  {module.title}
                </h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-6">
                  {module.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-healing-teal/10 border-2 border-white dark:border-soft-charcoal/30"></div>
                    ))}
                  </div>
                  <span className="text-soft-charcoal/60 dark:text-clinic-white/60 text-sm">
                    {module.participants} enrolled
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/5 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-trust-navy dark:text-clinic-white text-center">
            Your Learning Path
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-healing-teal/20"></div>
            <div className="space-y-12">
              {learningPath.map((step, index) => (
                <div key={index} className="relative flex items-center gap-8">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-healing-teal flex items-center justify-center text-clinic-white font-bold">
                    {index + 1}
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'ml-auto pl-12'}`}>
                    <h3 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">
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
      </section>
    </>
  );
}

const modules = [
  {
    title: "Understanding Mental Health",
    description: "An interactive introduction to mental health concepts and self-awareness.",
    duration: "2-3 hours",
    level: "Beginner",
    participants: "1.2k",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  },
  {
    title: "Stress & Anxiety Management",
    description: "Learn and practice evidence-based techniques for managing stress and anxiety.",
    duration: "3-4 hours",
    level: "Intermediate",
    participants: "2.5k",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  },
  {
    title: "Mindfulness Mastery",
    description: "Interactive exercises to develop mindfulness skills for daily life.",
    duration: "4-5 hours",
    level: "Advanced",
    participants: "1.8k",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Emotional Intelligence",
    description: "Develop your emotional awareness and interpersonal skills.",
    duration: "3-4 hours",
    level: "Intermediate",
    participants: "1.5k",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
  },
  {
    title: "Healthy Relationships",
    description: "Build and maintain positive relationships with peers and others.",
    duration: "2-3 hours",
    level: "Beginner",
    participants: "950",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  },
  {
    title: "Crisis Management",
    description: "Learn essential skills for handling personal and academic crises.",
    duration: "2-3 hours",
    level: "Advanced",
    participants: "750",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  }
];

const learningPath = [
  {
    title: "Foundation",
    description: "Begin with basic mental health concepts and self-awareness exercises."
  },
  {
    title: "Skill Building",
    description: "Learn and practice essential coping strategies and techniques."
  },
  {
    title: "Advanced Concepts",
    description: "Dive deeper into specific mental health topics and advanced practices."
  },
  {
    title: "Integration",
    description: "Apply learned skills to real-life situations through practical exercises."
  },
  {
    title: "Mastery",
    description: "Refine your skills and develop personalized wellness strategies."
  }
];
