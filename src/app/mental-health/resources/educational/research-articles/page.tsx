import Image from 'next/image';

export default function ResearchArticlesPage() {
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
              Research
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Articles
              </span>
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-8 animate-fadeUp">
              Stay informed with the latest research and insights on student mental health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-clinic-white dark:bg-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8">
            {articles.map((article, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-soft-charcoal/30 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/4 aspect-video md:aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-sm bg-healing-teal/10 text-healing-teal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-trust-navy dark:text-clinic-white">
                      {article.title}
                    </h3>
                    <p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-6">
                      {article.abstract}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-healing-teal/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-trust-navy dark:text-clinic-white">
                            {article.author}
                          </div>
                          <div className="text-sm text-soft-charcoal/60 dark:text-clinic-white/60">
                            {article.date}
                          </div>
                        </div>
                      </div>
                      <button className="text-healing-teal hover:text-trust-navy flex items-center gap-2 transition-colors">
                        Read More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/5 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-trust-navy dark:text-clinic-white text-center">
            Research Topics
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-healing-teal/10 flex items-center justify-center">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white">
                  {topic.title}
                </h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const articles = [
  {
    title: "The Impact of Digital Learning on Student Mental Health",
    abstract: "An in-depth analysis of how digital learning environments affect student mental wellbeing and academic performance.",
    author: "Dr. Sarah Johnson",
    date: "June 10, 2025",
    image: "/images/services/Virtual Healthcare Consultation.png",
    tags: ["Digital Learning", "Mental Health", "Academic Performance"]
  },
  {
    title: "Mindfulness Practices in Education: A Systematic Review",
    abstract: "Comprehensive review of research on the effectiveness of mindfulness programs in educational settings.",
    author: "Prof. Michael Chen",
    date: "June 8, 2025",
    image: "/images/services/Supportive Counseling.png",
    tags: ["Mindfulness", "Education", "Research Review"]
  },
  {
    title: "Stress Management Techniques for High School Students",
    abstract: "Evidence-based strategies for helping students cope with academic pressure and personal stress.",
    author: "Dr. Emily Williams",
    date: "June 5, 2025",
    image: "/images/services/Interactive Health Lesson.png",
    tags: ["Stress Management", "Academic Success", "Student Wellness"]
  },
  {
    title: "Social Media's Effect on Teen Mental Health",
    abstract: "Latest findings on the relationship between social media use and adolescent mental wellbeing.",
    author: "Dr. James Martinez",
    date: "June 1, 2025",
    image: "/images/services/School friends.png",
    tags: ["Social Media", "Teen Health", "Digital Wellness"]
  }
];

const topics = [
  {
    title: "Student Wellness",
    description: "Research focused on overall student mental health and wellbeing in educational settings.",
    icon: <svg className="w-8 h-8 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  },
  {
    title: "Academic Impact",
    description: "Studies examining the relationship between mental health and academic performance.",
    icon: <svg className="w-8 h-8 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  },
  {
    title: "Intervention Programs",
    description: "Analysis of various mental health intervention strategies and their effectiveness.",
    icon: <svg className="w-8 h-8 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  }
];
