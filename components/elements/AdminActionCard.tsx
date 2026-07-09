import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface AdminActionCardProps {
	title: string;
	description: string;
	icon: LucideIcon;
	href: string;
}

export default function AdminActionCard({
	title,
	description,
	icon: Icon,
	href,
}: AdminActionCardProps) {
	return (
		<Link href={href}>
			<Card className="overflow-hidden transition-all duration-200 hover:bg-white/10 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-400/10 cursor-pointer h-full">
				<CardHeader className="pb-4">
					<div className="flex items-center gap-4">
						<div className="p-3 rounded-full bg-red-500/10 text-red-400">
							<Icon className="w-6 h-6" />
						</div>
						<CardTitle className="text-2xl">{title}</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground leading-relaxed">
						{description}
					</p>
				</CardContent>
			</Card>
		</Link>
	);
}

