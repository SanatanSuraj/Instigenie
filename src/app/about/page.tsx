'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const team = [
	{
		name: 'Suraj Kumar',
		role: 'Founder & CEO',
		image: '/images/profile/suraj_kumar.png',
		bio: 'Visionary founder of School Health+, leading the revolution in student healthcare through innovative technology and compassionate service.',
		linkedin: 'https://www.linkedin.com/in/sanatansuraj/',
		showProfile: true,
	},
	{
		name: 'Rakhi Devi',
		role: 'Director',
		image: '/images/profile/rakhi_devi.png',
		bio: 'As a mother deeply invested in student well-being, Rakhi brings valuable perspective to School Health+, advocating for accessible healthcare solutions that benefit every child.',
		showProfile: false,
	},
];

const stats = [
	{ number: '50+', label: 'Partner Schools' },
	{ number: '10,000+', label: 'Students Served' },
	{ number: '98%', label: 'Satisfaction Rate' },
	{ number: '24/7', label: 'Support Available' },
];

export default function About() {
	return (
		<div className="min-h-screen bg-base-50 dark:bg-base-900">
			{/* Logo Section */}
			<section className="py-20 bg-gradient-to-b from-trust-navy to-healing-teal/5 dark:from-trust-navy dark:to-healing-teal/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex flex-col items-center text-center"
					>
						<div className="relative w-64 h-24 mb-8">
							<Image
								src="/images/logo.png"
								alt="School Health+ Logo"
								fill
								className="object-contain"
								priority
							/>
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-trust-navy dark:text-clinic-white mb-4">
							Empowering School Healthcare
						</h2>
						<p className="text-xl text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl">
							Pioneering a new era of student well-being through innovative health solutions, personalized care, and cutting-edge technology.
						</p>
						<div className="mt-12 p-8 bg-white dark:bg-soft-charcoal/30 rounded-2xl shadow-lg">
							<p className="text-lg text-soft-charcoal/90 dark:text-clinic-white/90 italic">
								&ldquo;Our mission is to create healthier learning environments where every student can thrive.&rdquo;
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-3xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
								Our Mission
							</h2>
							<p className="text-lg text-base-600 dark:text-base-300 mb-6">
								At School Health+, we are committed to providing comprehensive
								healthcare solutions that enhance the well-being of students and
								support their academic success. Our innovative approach combines
								cutting-edge technology with compassionate care to ensure every
								student has access to quality health services.
							</p>
							<p className="text-lg text-base-600 dark:text-base-300">
								We believe that healthy students are better learners, and our
								mission is to create healthier school communities through
								preventive care, education, and accessible healthcare services.
							</p>
						</motion.div>
						<div className="relative h-[400px]">
							<Image
								src="/images/schools/School Health Checkup.png"
								alt="School Health Checkup"
								fill
								className="object-cover rounded-xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-trust-navy/5 dark:bg-trust-navy/20">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="text-center"
							>
								<div className="text-4xl font-bold text-healing-teal mb-2">
									{stat.number}
								</div>
								<div className="text-base-600 dark:text-base-300">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-12 text-center text-trust-navy dark:text-clinic-white">
						Our Leadership Team
					</h2>
					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{team.map((member, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="bg-white dark:bg-base-800 rounded-xl overflow-hidden shadow-lg"
							>                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_top]"
                    style={{ objectPosition: '50% 15%' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">
										{member.name}
									</h3>
									<div className="text-healing-teal mb-3">{member.role}</div>
									<p className="text-base-600 dark:text-base-300 mb-4">
										{member.bio}
									</p>
									<div className="flex flex-wrap gap-3">
										{member.showProfile && (
											<>
												<Link
													href="/profile/suraj-kumar"
													className="inline-flex items-center text-healing-teal hover:text-healing-teal/80 transition-colors"
												>
													<svg
														className="w-5 h-5 mr-2"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
														/>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
														/>
													</svg>
													View Full Profile
												</Link>
												{member.linkedin && (
													<a
														href={member.linkedin}
														target="_blank"
														rel="noopener noreferrer"
														className="inline-flex items-center text-healing-teal hover:text-healing-teal/80 transition-colors"
													>
														<svg
															className="w-5 h-5 mr-2"
															fill="currentColor"
															viewBox="0 0 24 24"
														>
															<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
														</svg>
														Connect on LinkedIn
													</a>
												)}
											</>
										)}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
