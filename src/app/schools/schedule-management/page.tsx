'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ScheduleCalendar, { ScheduleEvent } from '@/app/components/ScheduleCalendar';
import { addDays, addWeeks } from 'date-fns';

const sampleEvents: ScheduleEvent[] = [
	{
		id: '1',
		title: 'Annual Health Check-up - Grade 10',
		start: addDays(new Date(), 3),
		end: addDays(new Date(), 3),
		type: 'health-check',
		description: 'Annual health screening for Grade 10 students',
		status: 'scheduled',
	},
	{
		id: '2',
		title: 'Dental Camp',
		start: addDays(new Date(), 5),
		end: addDays(new Date(), 5),
		type: 'dental',
		description: 'School-wide dental check-up and awareness camp',
		status: 'scheduled',
	},
	{
		id: '3',
		title: 'Vision Screening - Primary Classes',
		start: addWeeks(new Date(), 1),
		end: addWeeks(new Date(), 1),
		type: 'eye-check',
		description: 'Vision screening for primary school students',
		status: 'scheduled',
	},
];

export default function ScheduleManagementPage() {
	const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null);

	const handleEventSelect = (event: ScheduleEvent) => {
		setSelectedEvent(event);
	};

	return (
		<>
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-trust-navy to-healing-teal/90 text-clinic-white py-32 overflow-hidden">
				<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
				<div className="max-w-7xl mx-auto px-6 relative">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeUp">
							Schedule Management
						</h1>
						<p
							className="text-clinic-white/90 text-xl leading-relaxed mb-12 animate-fadeUp"
							style={{ animationDelay: '0.1s' }}
						>
							Efficiently plan and manage health check-ups, wellness programs, and
							medical staff schedules.
						</p>
					</div>
				</div>
			</section>

			{/* Calendar Section with Sidebar */}
			<section className="py-12 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
						{/* Calendar */}
						<div className="lg:col-span-3">
							<ScheduleCalendar
								events={sampleEvents}
								onEventSelect={handleEventSelect}
							/>
						</div>

						{/* Sidebar */}
						<div className="space-y-6">
							{/* Event Details */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-6 shadow-lg"
							>
								<h3 className="text-xl font-semibold mb-4">
									{selectedEvent ? 'Event Details' : 'Select an Event'}
								</h3>
								{selectedEvent ? (
									<div className="space-y-4">
										<div>
											<h4 className="font-medium text-healing-teal">
												{selectedEvent.title}
											</h4>
											<p className="text-soft-charcoal/70 dark:text-clinic-white/70">
												{selectedEvent.description}
											</p>
										</div>
										<div className="flex items-center space-x-2">
											<span className="px-2 py-1 text-sm rounded-full bg-healing-teal/10 text-healing-teal">
												{selectedEvent.type}
											</span>
											<span className="px-2 py-1 text-sm rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
												{selectedEvent.status}
											</span>
										</div>
										<div className="text-sm text-soft-charcoal/70 dark:text-clinic-white/70">
											{selectedEvent.start.toLocaleDateString('en-IN', {
												weekday: 'long',
												year: 'numeric',
												month: 'long',
												day: 'numeric',
											})}
										</div>
									</div>
								) : (
									<p className="text-soft-charcoal/70 dark:text-clinic-white/70">
										Click on an event to view its details
									</p>
								)}
							</motion.div>

							{/* Legend */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1 }}
								className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-6 shadow-lg"
							>
								<h3 className="text-xl font-semibold mb-4">Event Types</h3>
								<div className="space-y-3">
									{[
										{ label: 'Health Check', color: '#00B4D3' },
										{ label: 'Vaccination', color: '#17254E' },
										{ label: 'Dental', color: '#1E2959' },
										{ label: 'Eye Check', color: '#4B5563' },
										{ label: 'Consultation', color: '#047857' },
									].map((type, index) => (
										<div
											key={index}
											className="flex items-center space-x-2"
										>
											<div
												className="w-4 h-4 rounded-full"
												style={{ backgroundColor: type.color }}
											/>
											<span className="text-soft-charcoal/80 dark:text-clinic-white/80">
												{type.label}
											</span>
										</div>
									))}
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-32 bg-gradient-to-b from-clinic-white to-healing-teal/5 dark:from-soft-charcoal dark:to-healing-teal/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-20"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Scheduling Features
						</h2>
						<p className="text-soft-charcoal/80 dark:text-clinic-white/80 max-w-2xl mx-auto text-lg">
							Everything you need to manage your school&apos;s health programs
							effectively
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								title: 'Calendar Integration',
								description:
									'Sync with school calendars and avoid scheduling conflicts',
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
								title: 'Automated Reminders',
								description:
									'Send notifications to staff, students, and parents about upcoming appointments',
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
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
									</svg>
								),
							},
							{
								title: 'Resource Management',
								description:
									'Track availability of medical staff, rooms, and equipment',
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
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
									</svg>
								),
							},
						].map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-white dark:bg-soft-charcoal/50 rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
							>
								<div className="w-14 h-14 rounded-lg bg-healing-teal/10 flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform">
									{feature.icon}
								</div>
								<h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
								<p className="text-soft-charcoal/80 dark:text-clinic-white/70 leading-relaxed">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
