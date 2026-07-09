export default function RestrictedUser() {
	return (
		<div className="flex flex-col items-center justify-center container py-24">
			<h1 className="text-4xl font-bold mb-8">Restricted</h1>
			<p className="max-w-2xl mx-auto text-lg text-center text-muted-foreground">
				You are not an authorized admin. You do not have access to this page.
				Please contact the site administrator if you think this is an error.
			</p>
		</div>
	);
}
