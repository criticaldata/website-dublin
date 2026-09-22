// The organising committee's public LinkedIn profiles. The event address
// (a shared Gmail) is no longer published anywhere on the site: people reach
// the organisers here instead. Sebastián is first, as the main point of
// contact.
export const ORGANISERS: { name: string; linkedin: string }[] = [
	{
		name: 'Sebastián Cajas',
		linkedin: 'https://www.linkedin.com/in/sebasmos777/',
	},
	{
		name: 'Dr Muhammad Ali',
		linkedin: 'https://www.linkedin.com/in/m-ali-0112/',
	},
	{
		name: 'Dr Tamás Tiszai-Szűcs',
		linkedin: 'https://www.linkedin.com/in/tamas-tiszai-szucs-280930102/',
	},
	{
		name: 'Ezi Ozoani',
		linkedin: 'https://www.linkedin.com/in/ezi-ozoani/',
	},
	{
		name: 'Dr Leo Anthony Celi',
		linkedin: 'https://www.linkedin.com/in/leo-anthony-celi-b25131/',
	},
];

// The first name on the list, used wherever a single contact reads better
// than five.
export const PRIMARY_CONTACT = ORGANISERS[0];
