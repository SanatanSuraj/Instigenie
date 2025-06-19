'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMobileNav } from '../hooks/useMobileNav';

const links = [
	{
		href: '/services',
		label: 'Services',
		icon: '/images/icons/Medical Gear Icon.png',
	},
	{
		href: '/schools',
		label: 'Schools',
		icon: '/images/icons/Education-Medical Icon.png',
	},
	{
		href: '/mental-health',
		label: 'Mental Health',
		icon: '/images/icons/Silhouette with Cross Badge.png',
	},
	{
		href: '/about',
		label: 'About Us',
		icon: '/images/icons/Medical Folder Icon.png',
	},
	{
		href: '/pricing',
		label: 'Pricing',
		icon: '/images/icons/Clipboard Bar Graph.png',
	},
];

export default function Navigation() {
	const pathname = usePathname();
	const { isOpen, toggleMenu, closeMenu } = useMobileNav();

	const handleBookCheckup = () => {
		window.location.href = '/book-checkup';
		closeMenu(); // Close mobile menu if open
	};

	return (
		<nav className="sticky top-0 z-50 border-b border-base-200/10 bg-base-50/80 backdrop-blur-lg dark:bg-base-900/80">
			<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="flex items-center gap-2 text-xl font-display text-base-900 dark:text-base-50"
				>
					<Image
						src="/images/logo.png"
						alt="HealthTech Logo"
						width={192}
						height={64}
						priority
						className="w-[12rem] h-[4rem]"
					/>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{links.map(({ href, label, icon }) => (
						<Link
							key={href}
							href={href}
							className={`flex items-center gap-2 text-base-700 dark:text-base-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors ${
								pathname === href ? 'text-accent-500 dark:text-accent-500' : ''
							}`}
						>
							<Image
								src={icon}
								alt={`${label} icon`}
								width={20}
								height={20}
								className="w-5 h-5"
							/>
							{label}
						</Link>
					))}
					<button
						onClick={handleBookCheckup}
						className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-base-50 px-4 py-2 rounded-lg transition-colors"
					>
						<Image
							src="/images/icons/Calendar Date Icon.png"
							alt="Calendar icon"
							width={20}
							height={20}
							className="w-5 h-5"
						/>
						Book Checkup
					</button>
				</div>

				{/* Mobile Navigation Button */}
				<div className="md:hidden flex items-center gap-4">
					<button
						onClick={toggleMenu}
						className="text-base-900 dark:text-base-50 hover:text-accent-500 transition-colors"
						aria-label="Toggle menu"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Navigation Menu */}
				{isOpen && (
					<div className="md:hidden fixed inset-0 top-16 bg-base-50/95 dark:bg-base-900/95 backdrop-blur-lg">
						<div className="flex flex-col items-center gap-8 p-8">
							{links.map(({ href, label, icon }) => (
								<Link
									key={href}
									href={href}
									onClick={closeMenu}
									className={`flex items-center gap-3 text-lg text-base-700 dark:text-base-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors ${
										pathname === href ? 'text-accent-500 dark:text-accent-500' : ''
									}`}
								>
									<Image
										src={icon}
										alt={`${label} icon`}
										width={24}
										height={24}
										className="w-6 h-6"
									/>
									{label}
								</Link>
							))}
							<button
								onClick={handleBookCheckup}
								className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-base-50 px-4 py-2 rounded-lg transition-colors w-full justify-center"
							>
								<Image
									src="/images/icons/Calendar Date Icon.png"
									alt="Calendar icon"
									width={24}
									height={24}
									className="w-6 h-6"
								/>
								Book Checkup
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}