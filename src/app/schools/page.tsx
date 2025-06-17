'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const features = [
	{
		title: 'Health Records',
		description:
			'Secure digital storage of student health records with easy access and updates',
		href: '/schools/health-records',
		icon: (
			<svg
				className="w-6 h-6 text-healing-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
		),
	},
	{
		title: 'Schedule Management',
		description:
			'Efficiently plan and manage health check-ups and wellness programs',
		href: '/schools/schedule-management',
		icon: (
			<svg
				className="w-6 h-6 text-healing-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		),
	},
	{
		title: 'Analytics Dashboard',
		description: 'Comprehensive health analytics and insights for your school',
		href: '/schools/analytics-dashboard',
		icon: (
			<svg
				className="w-6 h-6 text-healing-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
	},
	{
		title: "Parent Portal",
		description: "Dedicated access for parents to view their child's health records",
		href: "/schools/parent-portal",
		icon: (
			<svg
				className="w-6 h-6 text-healing-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
		),
	},
	{
		title: 'Emergency Protocols',
		description: 'Quick access to emergency procedures and contact information',
		href: '/schools/emergency-protocols',
		icon: (
			<svg
				className="w-6 h-6 text-healing-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
		),
	},
	{
		title: 'Reports Generation',
		description: 'Generate detailed health reports and statistics for your school',
		href: '/schools/reports-generation',
		icon: (
			<svg
				className="w-6 h-6 text-healing-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
		),
	},
];

export default function SchoolsPage() {
	
	const router = useRouter();

	const handleScheduleDemo = () => {
		router.push('/book-checkup');
	};

	return (
		<>
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-trust-navy to-healing-teal/90 text-clinic-white py-32 overflow-hidden">
				<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
				<div className="max-w-7xl mx-auto px-6 relative">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-4xl md:text-5xl font-bold mb-8"
							>
								Comprehensive School Health Management
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
								className="text-clinic-white/90 text-xl leading-relaxed mb-12"
							>
								Transform your school's healthcare system with our integrated
								digital solutions. Streamline health records, scheduling, and
								emergency protocols all in one place.
							</motion.p>
						</div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2 }}
							className="grid grid-cols-2 gap-4"
						>
							<div className="space-y-4">
								<div className="relative h-48 rounded-lg overflow-hidden">
									<Image
										src="/images/schools/School Health Checkup.png"
										alt="School Health Checkup"
										fill
										className="object-cover transform hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<div className="relative h-48 rounded-lg overflow-hidden">
									<Image
										src="/images/schools/Digital Vision Screening.png"
										alt="Digital Vision Screening"
										fill
										className="object-cover transform hover:scale-105 transition-transform duration-300"
									/>
								</div>
							</div>
							<div className="space-y-4 pt-8">
								<div className="relative h-48 rounded-lg overflow-hidden">
									<Image
										src="/images/schools/School Dental Checkup.png"
										alt="School Dental Checkup"
										fill
										className="object-cover transform hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<div className="relative h-48 rounded-lg overflow-hidden">
									<Image
										src="/images/schools/Indian Health Education Class.png"
										alt="Health Education Class"
										fill
										className="object-cover transform hover:scale-105 transition-transform duration-300"
									/>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="py-32 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-20"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Everything You Need for School Healthcare
						</h2>
						<p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
							Explore our comprehensive suite of tools designed specifically for
							school health management
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
							>
								<Link
									href={feature.href}
									className="block bg-white dark:bg-soft-charcoal/50 rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
								>
									<div className="w-14 h-14 rounded-lg bg-healing-teal/10 flex items-center justify-center mb-6">
										{feature.icon}
									</div>
									<h3 className="text-xl font-semibold mb-4">
										{feature.title}
									</h3>
									<p className="text-soft-charcoal/80 dark:text-clinic-white/70">
										{feature.description}
									</p>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Process Steps */}
			<section className="py-32 bg-gradient-to-br from-healing-teal/5 to-trust-navy/5 dark:from-healing-teal/10 dark:to-trust-navy/20">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-20"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Getting Started
						</h2>
						<p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
							Follow these simple steps to set up your school&apos;s health
							management system
						</p>
					</motion.div>
					<div className="grid md:grid-cols-4 gap-8">
						{[
							{
								step: '1',
								title: 'Register',
								description:
									'Complete the school registration form with basic details',
								icon: (
									<svg
										className="w-6 h-6 text-healing-teal"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								),
							},
							{
								step: '2',
								title: 'Verify',
								description:
									'Verify your school\'s credentials and documentation',
								icon: (
									<svg
										className="w-6 h-6 text-healing-teal"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								),
							},
							{
								step: '3',
								title: 'Setup',
								description:
									'Set up your portal account and customize settings',
								icon: (
									<svg
										className="w-6 h-6 text-healing-teal"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								),
							},
							{
								step: '4',
								title: 'Launch',
								description: 'Start managing your school\'s health programs',
								icon: (
									<svg
										className="w-6 h-6 text-healing-teal"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								),
							},
						].map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="relative bg-white dark:bg-soft-charcoal/50 rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
							>
								<div className="absolute -top-4 left-8 bg-healing-teal text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
									{step.step}
								</div>
								<div className="w-16 h-16 rounded-full bg-healing-teal/10 flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform">
									{step.icon}
								</div>
								<h3 className="text-xl font-semibold text-center mb-4">
									{step.title}
								</h3>
								<p className="text-soft-charcoal/80 dark:text-clinic-white/70 text-center leading-relaxed">
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-32 bg-gradient-to-br from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/10 dark:to-soft-charcoal relative overflow-hidden">
				<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
				<div className="max-w-7xl mx-auto px-6 text-center relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-8">
							Ready to Transform Your School&apos;s Health Management?
						</h2>
						<p className="text-soft-charcoal/80 dark:text-clinic-white/80 text-xl mb-12 leading-relaxed">
							Join hundreds of schools already using our digital health management
							platform.
						</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<button onClick={handleScheduleDemo} className="btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
								Schedule Demo
							</button>
							<button className="btn-secondary px-8 py-4 text-lg border-2 border-healing-teal/20 hover:bg-healing-teal/5 transition-all duration-300">
								Contact Sales
							</button>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
}