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
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
	{
		label: 'Research',
		href: '/research',
	},
	{
		label: 'Events',
		href: '/events',
	},
	{
		label: 'Highlights',
		href: '/highlights',
	},
	{
		label: 'Community',
		href: '/community',
	},
];

export default function Header({ children }: { children?: React.ReactNode }) {
	const pathname = usePathname();
	return (
		<nav className="w-full z-50 sticky bg-black top-0 flex items-center md:justify-between border-b border-white/10 h-16 px-4">
			<Logo />
			{/* Desktop Navigation */}
			<div className="opacity-0 flex-1 md:opacity-100 md:flex md:gap-x-8 justify-center">
				{navItems.map((item) => {
					const isActive = pathname === item.href;
					return (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								'text-gray-400 hover:text-white transition-colors',
								isActive && 'text-red-400 hover:text-red-400'
							)}
						>
							<span>{item.label}</span>
						</Link>
					);
				})}
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
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			{/* Spacer for desktop */}
			<div className="flex w-auto ml-2 justify-end md:w-[125px]">
				{children}
			</div>
		</nav>
	);
}
