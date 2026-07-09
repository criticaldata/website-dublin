import Link from 'next/link';
import { LogInIcon, LogOutIcon } from 'lucide-react';
import { checkUser, signOutAction } from '@/actions/auth';
import { Button } from '@/components/ui/button';

export default async function AuthBtns() {
	const { isAuthenticated, isAdmin } = await checkUser();

	return (
		<div className="flex items-center gap-2">
			{isAuthenticated && isAdmin ? (
				<form className="flex items-center" action={signOutAction}>
					<Button
						type="submit"
						variant="ghost"
						size="sm"
						className="text-gray-400 hover:text-white gap-2"
					>
						<LogOutIcon className="w-4 h-4" />
						<span className="hidden sm:inline">Logout</span>
					</Button>
				</form>
			) : null}
		</div>
	);
}
