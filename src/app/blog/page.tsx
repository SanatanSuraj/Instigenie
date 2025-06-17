'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Importance of Regular Health Screenings in Schools',
    excerpt: 'Learn why routine health screenings are crucial for early detection and prevention of health issues in school-age children.',
    date: 'June 15, 2025',
    image: '/images/schools/School Health Checkup.png',
    category: 'Health Screening'
  },
  {
    title: 'Maintaining Good Mental Health in Students',
    excerpt: 'Tips and strategies for supporting student mental health and creating a positive learning environment.',
    date: 'June 10, 2025',
    image: '/images/services/Caring School Nurse.png',
    category: 'Mental Health'
  },
  {
    title: 'Vision Health: What Parents Need to Know',
    excerpt: 'Understanding the signs of vision problems and the importance of regular eye examinations.',
    date: 'June 5, 2025',
    image: '/images/schools/Digital Vision Screening.png',
    category: 'Vision Care'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-base-50 dark:bg-base-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-trust-navy text-clinic-white">
        <div className="absolute inset-0 bg-gradient-to-br from-trust-navy/95 via-trust-navy/90 to-healing-teal/80" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Health Blog
            </h1>
            <p className="text-xl text-base-100/90 max-w-2xl">
              Stay informed with the latest insights on student health, wellness tips, and healthcare innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-base-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-healing-teal mb-2">{post.category}</div>
                  <h2 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">
                    {post.title}
                  </h2>
                  <p className="text-base-600 dark:text-base-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-base-400">{post.date}</span>
                    <Link
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-healing-teal hover:text-healing-teal/80 transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
