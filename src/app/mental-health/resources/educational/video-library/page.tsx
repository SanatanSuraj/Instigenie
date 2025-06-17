import Image from 'next/image';

export default function VideoLibraryPage() {
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
              Video
              <span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
                Library
              </span>
            </h1>
            <p className="text-clinic-white/90 text-xl leading-relaxed mb-8 animate-fadeUp">
              Expert-led video content covering various aspects of mental health, wellness strategies, and personal development.
            </p>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-20 bg-clinic-white dark:bg-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-soft-charcoal/30 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={category.thumbnail}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-trust-navy/30 flex items-center justify-center">
                    <svg className="w-16 h-16 text-clinic-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white">
                  {category.title}
                </h3>
                <p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-healing-teal">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{category.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="py-20 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/5 dark:to-soft-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-trust-navy dark:text-clinic-white text-center">
            Featured Playlists
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {playlists.map((playlist, index) => (
              <div key={index} className="flex gap-6 bg-white dark:bg-soft-charcoal/30 p-6 rounded-xl shadow-lg">
                <div className="w-32 h-32 relative shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">
                    {playlist.title}
                  </h3>
                  <p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-4">
                    {playlist.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-soft-charcoal/60 dark:text-clinic-white/60">
                    <span>{playlist.videos} videos</span>
                    <span>•</span>
                    <span>{playlist.totalDuration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const videoCategories = [
  {
    title: "Mental Health Basics",
    description: "Essential knowledge about mental health, common conditions, and warning signs.",
    thumbnail: "/images/services/Virtual Health Consultation.png",
    duration: "10 videos"
  },
  {
    title: "Coping Strategies",
    description: "Practical techniques for managing stress, anxiety, and other emotional challenges.",
    thumbnail: "/images/services/Supportive Counseling.png",
    duration: "8 videos"
  },
  {
    title: "Expert Interviews",
    description: "In-depth discussions with mental health professionals on various topics.",
    thumbnail: "/images/services/Professional Clinic Team.png",
    duration: "12 videos"
  },
  {
    title: "Student Stories",
    description: "Real experiences and testimonials from students who've overcome challenges.",
    thumbnail: "/images/schools/Friendly Counseling Session.png",
    duration: "6 videos"
  },
  {
    title: "Mindfulness Practices",
    description: "Guided sessions for meditation, breathing exercises, and mindfulness.",
    thumbnail: "/images/schools/Health Education Class.png",
    duration: "15 videos"
  },
  {
    title: "Academic Wellness",
    description: "Tips for maintaining mental health while managing academic pressures.",
    thumbnail: "/images/schools/School Health Checkup.png",
    duration: "9 videos"
  }
];

const playlists = [
  {
    title: "Mental Health Essentials",
    description: "A comprehensive introduction to mental health awareness and self-care strategies.",
    thumbnail: "/images/services/Interactive Health Lesson.png",
    videos: 15,
    totalDuration: "3 hours"
  },
  {
    title: "Stress Management Series",
    description: "Learn effective techniques for managing academic and personal stress.",
    thumbnail: "/images/services/Caring School Nurse.png",
    videos: 12,
    totalDuration: "2.5 hours"
  },
  {
    title: "Mindfulness Meditation",
    description: "Guided meditation sessions for beginners to advanced practitioners.",
    thumbnail: "/images/services/School friends.png",
    videos: 20,
    totalDuration: "4 hours"
  },
  {
    title: "Exam Anxiety Toolkit",
    description: "Specific strategies for managing test anxiety and academic pressure.",
    thumbnail: "/images/services/Virtual Healthcare Consultation.png",
    videos: 8,
    totalDuration: "1.5 hours"
  }
];
