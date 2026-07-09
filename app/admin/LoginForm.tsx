import { signInAction } from '@/actions/auth';
import {
	FormMessage,
	type Message,
} from '@/components/primitives/form-message';
import { SubmitButton } from '@/components/primitives/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm({ message }: { message: Message }) {
	return (
		<form className="w-full max-w-sm mx-auto my-24">
			<h1 className="text-2xl font-medium mb-2">Admin Login</h1>
			<h2 className="text-sm text-muted-foreground">
				This is a restricted area for MIT Critical Data admins only. Please sign
				in to continue.
			</h2>
			<div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
				<Label htmlFor="email">Email</Label>
				<Input name="email" placeholder="you@example.com" required />
				<div className="flex justify-between items-center">
					<Label htmlFor="password">Password</Label>
				</div>
				<Input
					type="password"
					name="password"
					placeholder="Your password"
					required
				/>
				<SubmitButton pendingText="Signing In..." formAction={signInAction}>
					Sign in
				</SubmitButton>
				<FormMessage message={message} />
			</div>
		</form>
	);
}
