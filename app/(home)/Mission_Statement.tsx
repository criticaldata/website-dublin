import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const coreValues = [
	{
		id: 'ai-capacity',
		title: 'We develop AI capacity globally',
		description:
			'We work with and develop multidisciplinary teams from around the world to build local capacity.',
	},

	{
		id: 'data-sharing',
		title: 'We democratize Clinical Data Sharing',
		description:
			'We advocate for open data and software sharing. We believe that sharing more clinical data is vital for innovation in healthcare.',
	},
	{
		id: 'health-equity',
		title: 'We drive health equity research',
		description:
			'We promote health equity research and advocate for diversity and equity in AI. This is achieved by leveraging relevant clinical data and data science to address health disparities.',
	},
];

export default function MissionStatement() {
	return (
		<>
			<h2 className="text-4xl sm:text-6xl mb-8 font-bold tracking-tight text-gray-900">
				Our Mission
			</h2>
			<div className="flex items-center w-full gap-x-4 gap-y-8 xl:gap-8 flex-wrap lg:flex-nowrap">
				<div className="text-xl lg:text-2xl lg:max-w-xl xl:text-3xl xl:max-w-2xl xl:pr-12 font-medium tracking-tight text-slate-500">
					Our mission is to unite clinicians, data scientists, engineers, and
					research communities around the world to revolutionize healthcare in a
					way that is democratised, decentralised, and equitable. We achieve
					this by publishing{' '}
					<span className="text-red-700 font-bold">open health data</span> and
					software tools; training local communities to build AI capacity
					through <span className="text-red-700 font-bold">datathons</span>; and
					advocating for{' '}
					<span className="text-red-700 font-bold">diversity and equity</span>{' '}
					in AI.
				</div>
				<Accordion
					type="single"
					collapsible
					className="bg-black text-white px-8 pt-4 pb-8 rounded-2xl w-full"
					defaultValue={coreValues[0].id}
				>
					{coreValues.map((value, valueIndex) => (
						<AccordionItem key={value.id} value={value.id}>
							<AccordionTrigger className="text-left text-xl xl:text-2xl font-bold">
								<div className="flex items-center gap-x-4 p-2">
									<div className="bg-red-800 text-white p-4 text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
										{valueIndex + 1}
									</div>
									<div className="text-white">{value.title}</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								<p className="pl-16 pb-2 text-lg text-white">
									{value.description}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</>
	);
}
