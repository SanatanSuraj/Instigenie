import Image from 'next/image';

export default function GroupSupportPage() {
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
              Group Support
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Sessions
              </span>
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-8 animate-fadeUp">
              Build connections and share experiences in facilitated group discussions designed to foster peer support and collective growth.
            </p>
            <button className="btn-primary px-8 py-4 text-lg animate-fadeUp">
              Join a Group
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-clinic-white dark:bg-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-healing-teal/20 to-healing-teal/5 rounded-2xl transform rotate-3"></div>
              <Image 
                src="/images/services/Interactive Health Lesson.png"
                alt="Group Support Session"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl w-full h-full object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
                Benefits of Group Support
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">Shared Experiences</h3>
                    <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                      Connect with peers who understand your challenges and celebrate your successes together.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">Different Perspectives</h3>
                    <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                      Gain insights from diverse viewpoints and learn new coping strategies from others.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">Regular Support</h3>
                    <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                      Weekly sessions provide consistent support and accountability in your wellness journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Types */}
      <section className="py-20 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/5 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-trust-navy dark:text-clinic-white">
            Available Group Sessions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupTypes.map((group, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-soft-charcoal/30 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center mb-6">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white">{group.title}</h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-6">{group.description}</p>
                <div className="flex items-center gap-2 text-healing-teal">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{group.schedule}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-trust-navy to-trust-navy/95 text-clinic-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join a Supportive Community</h2>
          <p className="text-xl text-clinic-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards connection and growth by joining one of our group support sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 text-lg">
              Find Your Group
            </button>
            <button className="btn-secondary px-8 py-4 text-lg border-2 border-healing-teal/20">
              View Schedule
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

const groupTypes = [
  {
    title: "Anxiety & Stress Management",
    description: "Learn and practice techniques for managing academic stress and anxiety with peers.",
    schedule: "Tuesdays @ 4:00 PM",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  },
  {
    title: "Social Skills & Connection",
    description: "Build meaningful relationships and develop stronger social connections.",
    schedule: "Wednesdays @ 3:30 PM",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  },
  {
    title: "Academic Balance",
    description: "Find harmony between academic excellence and personal wellbeing.",
    schedule: "Thursdays @ 4:30 PM",
    icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  }
];
