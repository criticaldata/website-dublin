import Image from 'next/image';
import { LinkedInIcon } from '@/components/common/social-icons';

const committee: {
	name: string;
	title: string;
	photo: string | null;
	photoPosition?: string;
	initials: string;
	role: string;
	linkedin?: string;
}[] = [
	{
		name: 'Dr Leo Anthony Celi',
		title: 'Clinical Advisor, MIT Critical Data',
		photo: '/dublin/team/leo-celi.jpg',
		initials: 'LC',
		linkedin: 'https://www.linkedin.com/in/leo-anthony-celi-b25131/',
		role: 'Senior Research Scientist at MIT, Associate Professor of Medicine at Harvard Medical School and Critical Care Physician at Beth Israel Deaconess Medical Center. Clinical Research Director at the MIT Laboratory for Computational Physiology, internationally recognised for his work in clinical data science, responsible AI, and addressing bias and inequity in healthcare AI.',
	},
	{
		name: 'Sebastián Cajas',
		title: 'Workshop & Scientific Content Lead',
		photo: '/dublin/team/sebastian-cajas.png',
		initials: 'SC',
		linkedin: 'https://www.linkedin.com/in/sebasmos777/',
		role: 'Senior AI/ML Engineer with 9+ years of experience building and deploying intelligent systems. At Workday, he focuses on scaling human-AI systems. He has led and contributed to 40+ funded projects across healthcare, climate and scientific computing, collaborates with MIT Critical Data on open-source medical AI, and previously worked with CeADAR, Ireland’s National Centre for AI, and Harvard’s Visual Computing Group.',
	},
	{
		name: 'Ezi Ozoani',
		title: 'AI Ethics & Implementation',
		photo: '/dublin/team/ezi-ozoani.webp',
		initials: 'EO',
		linkedin: 'https://www.linkedin.com/in/ezi-ozoani/',
		role: 'Co-founder and Head of AI at Aethon.fund and an AI safety and ethics researcher, with an MEng from Trinity College Dublin. Previously led ML ethics and red-teaming work at Hugging Face, and has worked on AI governance and safety, including with the EU AI Office on the Codes of Practice. Her work spans AI safety, interpretability, reinforcement learning and responsible AI.',
	},
	{
		name: 'Dr Tamas Tiszai-Szűcs',
		title: 'Clinical Advisor',
		photo: '/dublin/team/tamas-tiszai-szucs.jpg',
		// Portrait crop: keep the face centred in the circular avatar
		photoPosition: 'object-[center_22%]',
		initials: 'TT',
		linkedin: 'https://www.linkedin.com/in/tamas-tiszai-szucs-280930102/',
		role: 'Consultant Intensivist and Quality & Audit Lead in the Intensive Care Unit at Tallaght University Hospital, with an MSc in Human Factors in Patient Safety from RCSI. Leads quality improvement, patient safety and risk management initiatives, and coordinates audit and data governance. His recent work focuses on cognitive biases in clinical decision-making and human-AI interaction.',
	},
	{
		name: 'Dr Muhammad Ali',
		title: 'Workshop & Scientific Content Lead',
		photo: '/dublin/team/muhammad-ali.jpg',
		// Face sits in the lower half of the frame
		photoPosition: 'object-[center_68%]',
		initials: 'MA',
		role: 'Educator and Researcher in AI and Digital Health at RCSI, where he recently completed his PhD in AI and precision medicine. With a background in bioinformatics, his expertise spans machine learning, genomics, histopathology and multi-omic data analysis. Recipient of the RCSI Vice Chancellor Innovation Award.',
		linkedin: 'https://www.linkedin.com/in/m-ali-0112/',
	},
];

export default function Committee() {
	return (
		<section
			id="team"
			className="scroll-mt-16 relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			<div className="absolute left-0 bottom-0 h-[40vh] w-[40vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						The Team
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mb-6">
					The organising committee behind{' '}
					<span className="italic text-white/50">the day.</span>
				</h2>
				<p className="text-base sm:text-lg text-white/50 max-w-3xl mb-14">
					DubLINK is organised by a multidisciplinary team of clinicians, AI
					researchers and educators spanning the host venue, MIT
					Critical Data, MedWrite.ai and the wider Irish and international
					health AI community.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
					{committee.map((member) => (
						<div
							key={member.name}
							className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 hover:from-teal-400/[0.06] transition-all duration-300 px-6 py-7 overflow-hidden"
						>
							<div className="absolute -top-10 -right-10 h-24 w-24 bg-teal-400/0 group-hover:bg-teal-400/15 blur-2xl rounded-full transition-all duration-500" />

							<div className="flex items-center gap-4 mb-4">
								{member.photo ? (
									<div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden ring-2 ring-teal-400/30 group-hover:ring-teal-400/60 transition-all">
										<Image
											src={member.photo}
											alt={member.name}
											fill
											sizes="64px"
											className={`object-cover ${member.photoPosition ?? ''}`}
										/>
									</div>
								) : (
									<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-2 ring-teal-400/30 group-hover:ring-teal-400/60 text-teal-200 font-bold text-lg transition-all">
										{member.initials}
									</div>
								)}
								<div>
									<div className="flex items-center gap-2">
										<h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
											{member.name}
										</h3>
										{member.linkedin && (
											<a
												href={member.linkedin}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`${member.name} on LinkedIn`}
												className="shrink-0 text-white/40 hover:text-teal-300 transition-colors"
											>
												<LinkedInIcon className="h-4 w-4" />
											</a>
										)}
									</div>
									<p className="mt-0.5 text-xs sm:text-sm font-medium text-teal-300/80">
										{member.title}
									</p>
								</div>
							</div>

							<p className="text-sm text-white/50 leading-relaxed">
								{member.role}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
