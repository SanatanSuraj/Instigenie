'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ParentConsultationPage() {
	
	const router = useRouter();

	const handleScheduleConsultation = () => {
		router.push('/book-checkup');
	};

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
							Parent
							<span className="block mt-2 bg-gradient-to-r from-healing-teal to-clinic-white bg-clip-text text-transparent">
								Consultation
							</span>
						</h1>
						<p className="text-clinic-white/90 text-xl leading-relaxed mb-8 animate-fadeUp">
							Empowering parents with insights and strategies to support their child's mental wellbeing.
						</p>
						<button onClick={handleScheduleConsultation} className="btn-primary px-8 py-4 text-lg animate-fadeUp">
							Schedule Consultation
						</button>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-20 bg-clinic-white dark:bg-soft-charcoal">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-12">
						<div>
							<h2 className="text-3xl font-bold mb-6 text-trust-navy dark:text-clinic-white">
								How We Support Parents
							</h2>
							<div className="space-y-6">
								{services.map((service, index) => (
									<div key={index} className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center shrink-0">
											{service.icon}
										</div>
										<div>
											<h3 className="text-xl font-bold mb-2 text-trust-navy dark:text-clinic-white">
												{service.title}
											</h3>
											<p className="text-soft-charcoal/80 dark:text-clinic-white/80">
												{service.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-br from-healing-teal/20 to-healing-teal/5 rounded-2xl transform rotate-3"></div>
							<Image 
								src="/images/services/Virtual Healthcare Consultation.png"
								alt="Parent Consultation Session"
								width={600}
								height={400}
								className="relative rounded-2xl shadow-xl w-full h-full object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Resources Section */}
			<section className="py-20 bg-gradient-to-b from-clinic-white via-healing-teal/5 to-clinic-white dark:from-soft-charcoal dark:via-healing-teal/5 dark:to-soft-charcoal">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-12 text-center text-trust-navy dark:text-clinic-white">
						Parent Resources
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{resources.map((resource, index) => (
							<div 
								key={index}
								className="bg-white dark:bg-soft-charcoal/30 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
							>
								<div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center mb-6">
									{resource.icon}
								</div>
								<h3 className="text-xl font-bold mb-4 text-trust-navy dark:text-clinic-white">
									{resource.title}
								</h3>
								<p className="text-soft-charcoal/80 dark:text-clinic-white/80 mb-6">
									{resource.description}
								</p>
								<button className="text-healing-teal hover:text-trust-navy dark:hover:text-healing-teal flex items-center gap-2 transition-colors">
									Access Now
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Consultation Types */}
			<section className="py-20 bg-gradient-to-br from-trust-navy to-trust-navy/95 text-clinic-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Consultation Options</h2>
						<p className="text-xl text-clinic-white/90 max-w-2xl mx-auto">
							Choose the consultation format that best fits your schedule and needs
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{consultationTypes.map((type, index) => (
							<div 
								key={index}
								className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-healing-teal/20 hover:border-healing-teal/40 transition-colors"
							>
								<div className="w-12 h-12 rounded-xl bg-healing-teal/10 flex items-center justify-center mb-6">
									{type.icon}
								</div>
								<h3 className="text-xl font-bold mb-4">
									{type.title}
								</h3>
								<p className="text-clinic-white/80 mb-6">
									{type.description}
								</p>
								<div className="flex items-center gap-2 text-healing-teal">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<span>{type.duration}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

const services = [
	{
		title: "Regular Updates",
		description: "Stay informed about your child's mental health progress through detailed reports and updates.",
		icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
		</svg>
	},
	{
		title: "Expert Guidance",
		description: "Receive professional advice on supporting your child's emotional wellbeing at home.",
		icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
		</svg>
	},
	{
		title: "Communication Skills",
		description: "Learn effective strategies for discussing mental health with your child.",
		icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
		</svg>
	}
];

const resources = [
	{
		title: "Parent Guide",
		description: "Comprehensive guide to understanding and supporting student mental health.",
		icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
		</svg>
	},
	{
		title: "Workshops",
		description: "Online and in-person workshops on various mental health topics.",
		icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
		</svg>
	},
	{
		title: "Support Network",
		description: "Connect with other parents and share experiences in a supportive environment.",
		icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
		</svg>
	}
];

const consultationTypes = [
	{
		title: "Virtual Consultation",
		description: "Connect with our mental health professionals from the comfort of your home.",
		duration: "45 minutes",
		icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
		</svg>
	},
	{
		title: "In-Person Meeting",
		description: "Face-to-face consultation at our school facility.",
		duration: "60 minutes",
		icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
		</svg>
	},
	{
		title: "Group Workshop",
		description: "Join other parents in guided discussion sessions.",
		duration: "90 minutes",
		icon: <svg className="w-6 h-6 text-healing-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
		</svg>
	}
];
