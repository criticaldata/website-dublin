import HighlightsManager from '@/components/elements/HighlightsManager';
import { checkUser } from '@/actions/auth';

export default async function HighlightsPage() {
	const { isAdmin } = await checkUser();

	return (
		<div className="flex flex-col gap-20 pb-20">
			<div className="container pt-20">
				<HighlightsManager isAdmin={isAdmin} showHeader={true} />
			</div>
		</div>
	);
}
