import { checkUser } from '@/actions/auth';
import { type Message } from '@/components/primitives/form-message';
import LoginForm from './LoginForm';
import RestrictedUser from './RestrictedUser';
import AdminActionCard from '@/components/elements/AdminActionCard';
import { Calendar } from 'lucide-react';

export default async function AdminPage(props: {
	searchParams: Promise<Message>;
}) {
	const searchParams = await props.searchParams;
	const { name, isAdmin, isAuthenticated } = await checkUser();

	if (!isAuthenticated) return <LoginForm message={searchParams} />;

	if (isAuthenticated && !isAdmin) return <RestrictedUser />;

	return (
		<div className="container py-20">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
					<p className="text-xl text-muted-foreground">
						Hi {name}, below is a list of actions you can perform
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
					<AdminActionCard
						title="Manage Events"
						description="Add new events, edit existing event details, or remove past events. Control the complete lifecycle of events including datathons, workshops, and symposiums."
						icon={Calendar}
						href="/events"
					/>
					<AdminActionCard
						title="Manage Highlights"
						description="The lab at times wants to highlight specific papers, events, or opportunities. Here you can add new highlights, edit existing highlight details, or remove past highlights."
						icon={Calendar}
						href="/highlights"
					/>
					{/* Add more action cards here as new admin features are added */}
				</div>
			</div>
		</div>
	);
}
