'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import Logo from './logo';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
	{
		label: 'About',
		href: '/#about',
	},
	{
		label: 'Programme',
		href: '/#programme',
	},
	{
		label: 'Speakers',
		href: '/#speakers',
	},
	{
		label: 'Venue',
		href: '/#venue',
	},
	{
		label: 'Partners',
		href: '/#partners',
	},
];

export default function Header({ children }: { children?: React.ReactNode }) {
	return (
		<nav className="w-full z-50 sticky bg-black top-0 flex items-center md:justify-between border-b border-white/10 h-16 px-4">
			<Logo />
			{/* Desktop Navigation */}
			<div className="opacity-0 flex-1 md:opacity-100 md:flex md:gap-x-8 justify-center">
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className="text-gray-400 hover:text-white transition-colors"
					>
						<span>{item.label}</span>
					</Link>
				))}
			</div>

			{/* Mobile Navigation */}
			<div className="flex justify-end md:hidden">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="text-gray-400 hover:text-white"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="w-48 bg-black border-gray-700"
					>
						{navItems.map((item) => (
							<DropdownMenuItem asChild key={item.href}>
								<Link
									href={item.href}
									className="text-gray-400 hover:text-white cursor-pointer"
								>
									{item.label}
								</Link>
							</DropdownMenuItem>
						))}
						<DropdownMenuItem asChild>
							<Link
								href="/#register"
								className="text-teal-300 hover:text-teal-200 cursor-pointer font-medium"
							>
								Register
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* Register CTA — desktop */}
			<div className="hidden md:flex w-auto ml-2 justify-end">
				<Link href="/#register">
					<Button
						size="sm"
						className="rounded-full px-5 font-semibold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:via-teal-400 hover:to-cyan-400 text-white"
					>
						Register
					</Button>
				</Link>
				{children}
			</div>
		</nav>
	);
}
