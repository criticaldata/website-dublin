import EventsManager from '@/components/elements/EventsManager';
import { checkUser } from '@/actions/auth';

export default async function EventsPage() {
	const { isAdmin } = await checkUser();

	return (
		<div className="container py-20">
			<EventsManager isAdmin={isAdmin} showHeader={true} />
		</div>
	);
}
