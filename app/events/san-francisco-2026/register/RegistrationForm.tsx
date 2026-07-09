'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import {
	registrationSchema,
	type RegistrationFormData,
	INTEREST_OPTIONS,
	DAY_OPTIONS,
} from './schema';
import { submitRegistration } from './actions';

function Section({
	number,
	kicker,
	title,
	description,
	children,
}: {
	number: string;
	kicker: string;
	title: string;
	description?: string;
	children: React.ReactNode;
}) {
	return (
		<section className="relative pt-16 pb-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
			{/* Big editorial number */}
			<div className="flex items-baseline gap-6 mb-10">
				<span className="font-bold text-6xl sm:text-7xl tracking-tighter bg-gradient-to-br from-white/80 via-white/30 to-white/5 bg-clip-text text-transparent leading-none">
					{number}
				</span>
				<div className="flex-1 pb-2">
					<div className="text-[0.7rem] uppercase tracking-[0.25em] text-amber-500/70 font-semibold mb-1">
						{kicker}
					</div>
					<h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
						{title}
					</h2>
					{description && (
						<p className="text-sm text-white/40 mt-2 max-w-md">{description}</p>
					)}
				</div>
			</div>

			{/* Accent rule */}
			<div className="h-px w-full bg-gradient-to-r from-amber-500/30 via-white/5 to-transparent mb-10" />

			<div className="space-y-10">{children}</div>
		</section>
	);
}

function Field({
	label,
	required,
	helper,
	error,
	children,
}: {
	label: string;
	required?: boolean;
	helper?: string;
	error?: string;
	children: React.ReactNode;
}) {
	return (
		<div className="space-y-3">
			<div>
				<Label className="text-base sm:text-lg font-semibold text-white/90 leading-snug block">
					{label}
					{required && <span className="text-red-500 ml-1">*</span>}
				</Label>
				{helper && (
					<p className="text-sm text-white/40 mt-1.5 leading-relaxed">
						{helper}
					</p>
				)}
			</div>
			<div>{children}</div>
			{error && <p className="text-sm text-red-400">{error}</p>}
		</div>
	);
}

const inputClass =
	'h-12 bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 rounded-lg focus-visible:border-amber-500/60 focus-visible:ring-2 focus-visible:ring-amber-500/20 focus-visible:bg-white/[0.05] transition-all';

const textareaClass =
	'bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 rounded-lg focus-visible:border-amber-500/60 focus-visible:ring-2 focus-visible:ring-amber-500/20 focus-visible:bg-white/[0.05] transition-all';

const optionRowClass =
	'flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-200 cursor-pointer group';

export default function RegistrationForm({
	onSubmitted,
}: {
	onSubmitted?: () => void;
}) {
	const [submitted, setSubmitted] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		control,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<RegistrationFormData>({
		resolver: zodResolver(registrationSchema),
		defaultValues: {
			days: [],
			interests: [],
			dietaryNone: true,
			isStudent: undefined,
		},
	});

	const selectedInterests = watch('interests') || [];
	const isStudent = watch('isStudent');
	const dietaryNone = watch('dietaryNone');
	const heardFrom = watch('heardFrom') || [];
	const uniquePerspective = watch('uniquePerspective');

	const onSubmit = async (data: RegistrationFormData) => {
		setSubmitError(null);
		const result = await submitRegistration(data);
		if (result.success) {
			setSubmitted(true);
			onSubmitted?.();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			setSubmitError(result.error || 'Something went wrong.');
		}
	};

	if (submitted) {
		return (
			<div className="mx-auto max-w-2xl text-center py-20 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
				<div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
					<CheckCircle2 className="h-10 w-10 text-amber-400" />
				</div>
				<h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
					Your application <br />
					<span className="bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent italic">
						is in.
					</span>
				</h2>
				<p className="text-lg text-white/50 leading-relaxed max-w-xl mx-auto">
					Thank you for applying to join us. We&rsquo;ll review all applications
					and notify you as early as possible whether your attendance is
					confirmed. Keep an eye on your inbox.
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="relative">
			{/* ─────────── SECTION 01 — Identity ─────────── */}
			<Section
				number="01"
				kicker="Introduce yourself"
				title="Who are you?"
				description="The basics, so we know who we're hearing from."
			>
				<Field label="Email" required error={errors.email?.message}>
					<Input
						type="email"
						placeholder="you@example.com"
						className={inputClass}
						{...register('email')}
					/>
				</Field>

				<Field
					label="First & Last Name"
					required
					error={errors.firstName?.message || errors.lastName?.message}
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<Input
							placeholder="First name"
							className={inputClass}
							{...register('firstName')}
						/>
						<Input
							placeholder="Last name"
							className={inputClass}
							{...register('lastName')}
						/>
					</div>
				</Field>

				<Field
					label="Affiliation"
					required
					helper="Your university, company, organization, or community group."
					error={errors.affiliation?.message}
				>
					<Input className={inputClass} {...register('affiliation')} />
				</Field>

				<Field
					label="Your Role"
					required
					helper="e.g., Undergraduate Student, Physician, Founder, Software Engineer, Community Organizer."
					error={errors.role?.message}
				>
					<Input className={inputClass} {...register('role')} />
				</Field>

				<Field
					label="Are you currently a student?"
					required
					error={errors.isStudent?.message}
				>
					<Controller
						name="isStudent"
						control={control}
						render={({ field }) => (
							<RadioGroup
								value={field.value}
								onValueChange={field.onChange}
								className="grid grid-cols-2 gap-3"
							>
								{[
									{ v: 'yes', l: 'Yes' },
									{ v: 'no', l: 'No' },
								].map((opt) => (
									<label key={opt.v} className={optionRowClass}>
										<RadioGroupItem
											value={opt.v}
											className="border-white/30 text-amber-500"
										/>
										<span className="text-white/80 group-hover:text-white transition-colors">
											{opt.l}
										</span>
									</label>
								))}
							</RadioGroup>
						)}
					/>
				</Field>

				{isStudent === 'yes' && (
					<>
						<Field
							label="What school are you currently attending?"
							required
							error={errors.school?.message}
						>
							<Input className={inputClass} {...register('school')} />
						</Field>

						<Field
							label="What level are you pursuing?"
							required
							helper="e.g., Undergraduate, Master's, PhD, MD, JD"
							error={errors.educationLevel?.message}
						>
							<Input
								className={inputClass}
								{...register('educationLevel')}
							/>
						</Field>
					</>
				)}
			</Section>

			{/* ─────────── SECTION 02 — Days ─────────── */}
			<Section
				number="02"
				kicker="Choose your days"
				title="When can you join us?"
				description="Apply for one or both. Both is ideal, since the days complement each other."
			>
				<p className="text-xs text-amber-500/70 italic -mt-4 mb-2">
					Please plan to attend for the full day you&rsquo;re applying for. The
					workshops are designed to flow together.
				</p>

				<Field
					label="Which day(s) are you applying to attend?"
					required
					helper="Check all that apply. Then pick how you'd like to attend."
					error={
						errors.days?.message ||
						errors.may1Attendance?.message ||
						errors.may2Attendance?.message
					}
				>
					<Controller
						name="days"
						control={control}
						render={({ field }) => (
							<div className="space-y-3">
								{DAY_OPTIONS.map((day, i) => {
									const checked = field.value?.includes(day.id);
									const accent =
										i === 0
											? {
													border: 'border-amber-500/40',
													bg: 'bg-amber-500/[0.06]',
													kicker: 'text-amber-300/90',
													divider: 'border-amber-500/20',
												}
											: {
													border: 'border-indigo-400/40',
													bg: 'bg-indigo-500/[0.06]',
													kicker: 'text-indigo-300/90',
													divider: 'border-indigo-400/20',
												};
									const attendanceField =
										day.id === 'may1' ? 'may1Attendance' : 'may2Attendance';

									return (
										<div
											key={day.id}
											className={`rounded-xl border transition-all duration-300 overflow-hidden ${
												checked
													? `${accent.border} ${accent.bg}`
													: 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
											}`}
										>
											{/* Day header — click to toggle */}
											<label className="flex items-start gap-4 p-5 cursor-pointer">
												<Checkbox
													checked={checked}
													onCheckedChange={(isChecked) => {
														const current = field.value || [];
														if (isChecked) {
															field.onChange([...current, day.id]);
														} else {
															field.onChange(
																current.filter((v) => v !== day.id)
															);
															setValue(attendanceField, undefined);
														}
													}}
													className="mt-1 border-white/30 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
												/>
												<div className="flex-1">
													<div
														className={`text-[0.7rem] uppercase tracking-[0.25em] font-bold mb-1 ${accent.kicker}`}
													>
														{day.title}
													</div>
													<div className="text-base sm:text-lg font-semibold text-white leading-snug">
														{day.subtitle}
													</div>
													<div className="text-sm text-white/50 mt-1">
														{day.venue}
													</div>
												</div>
											</label>

											{/* Expanded attendance picker */}
											{checked && (
												<div
													className={`border-t ${accent.divider} px-5 py-4 animate-in fade-in-0 slide-in-from-top-1 duration-300`}
												>
													<div
														className={`text-[0.65rem] uppercase tracking-[0.25em] font-bold mb-3 ${accent.kicker}`}
													>
														How will you attend?
													</div>
													<Controller
														name={attendanceField}
														control={control}
														render={({ field: attField }) => (
															<RadioGroup
																value={attField.value}
																onValueChange={attField.onChange}
																className="grid grid-cols-1 sm:grid-cols-3 gap-2"
															>
																{[
																	{ v: 'in-person', l: 'In person' },
																	{ v: 'virtual', l: 'Virtually' },
																	{ v: 'either', l: 'Open to either' },
																].map((opt) => (
																	<label
																		key={opt.v}
																		className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 hover:bg-white/[0.07] hover:border-white/20 transition-all cursor-pointer group"
																	>
																		<RadioGroupItem
																			value={opt.v}
																			className="border-white/40 text-amber-500 h-4 w-4"
																		/>
																		<span className="text-sm text-white/80 group-hover:text-white transition-colors">
																			{opt.l}
																		</span>
																	</label>
																))}
															</RadioGroup>
														)}
													/>
												</div>
											)}
										</div>
									);
								})}
							</div>
						)}
					/>
				</Field>
			</Section>

			{/* ─────────── SECTION 03 — Background ─────────── */}
			<Section
				number="03"
				kicker="Your background"
				title="What draws you here?"
			>
				<Field
					label="Your areas of interest"
					required
					helper="Check all that apply."
					error={errors.interests?.message}
				>
					<Controller
						name="interests"
						control={control}
						render={({ field }) => (
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
								{INTEREST_OPTIONS.map((interest) => {
									const checked = field.value?.includes(interest);
									return (
										<label
											key={interest}
											className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 cursor-pointer ${
												checked
													? 'border-amber-500/40 bg-amber-500/[0.06]'
													: 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
											}`}
										>
											<Checkbox
												checked={checked}
												onCheckedChange={(isChecked) => {
													const current = field.value || [];
													if (isChecked) {
														field.onChange([...current, interest]);
													} else {
														field.onChange(
															current.filter((v) => v !== interest)
														);
													}
												}}
												className="border-white/30 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
											/>
											<span className="text-sm text-white/85">{interest}</span>
										</label>
									);
								})}
							</div>
						)}
					/>
				</Field>

				{selectedInterests.includes('Other') && (
					<Field
						label="Please specify your other interest"
						required
						error={errors.interestsOther?.message}
					>
						<Input className={inputClass} {...register('interestsOther')} />
					</Field>
				)}

				<Field
					label="What languages do you speak?"
					required
					error={errors.languages?.message}
				>
					<Input
						placeholder="e.g., English, Spanish, Mandarin"
						className={inputClass}
						{...register('languages')}
					/>
				</Field>

				<Field
					label="Have you attended hackathons, datathons, or similar innovation events before?"
					required
					error={errors.eventExperience?.message}
				>
					<Controller
						name="eventExperience"
						control={control}
						render={({ field }) => (
							<RadioGroup
								value={field.value}
								onValueChange={field.onChange}
								className="space-y-2"
							>
								{[
									{ v: 'first', l: 'No, this would be my first' },
									{ v: 'few', l: 'Yes, a few' },
									{ v: 'regularly', l: 'Yes, regularly' },
								].map((opt) => (
									<label key={opt.v} className={optionRowClass}>
										<RadioGroupItem
											value={opt.v}
											className="border-white/30 text-amber-500"
										/>
										<span className="text-white/80 group-hover:text-white transition-colors">
											{opt.l}
										</span>
									</label>
								))}
							</RadioGroup>
						)}
					/>
				</Field>
			</Section>

			{/* ─────────── SECTION 04 — Perspective ─────────── */}
			<Section
				number="04"
				kicker="Your perspective"
				title="What do you bring?"
				description="This is the part that matters most to us. Be honest. There are no wrong answers."
			>
				<Field
					label="Do you feel that you bring a perspective that is not typically represented at innovation and AI events?"
					required
					error={errors.uniquePerspective?.message}
				>
					<Controller
						name="uniquePerspective"
						control={control}
						render={({ field }) => (
							<RadioGroup
								value={field.value}
								onValueChange={field.onChange}
								className="grid grid-cols-1 sm:grid-cols-2 gap-3"
							>
								{[
									{ v: 'yes', l: 'Yes' },
									{ v: 'no', l: 'No' },
									{ v: 'not-sure', l: "I'm not sure" },
									{ v: 'prefer-not-to-say', l: 'Prefer not to say' },
								].map((opt) => (
									<label key={opt.v} className={optionRowClass}>
										<RadioGroupItem
											value={opt.v}
											className="border-white/30 text-amber-500"
										/>
										<span className="text-white/80 group-hover:text-white transition-colors">
											{opt.l}
										</span>
									</label>
								))}
							</RadioGroup>
						)}
					/>
				</Field>

				{(uniquePerspective === 'yes' ||
					uniquePerspective === 'not-sure') && (
					<Field
						label="If you're comfortable, tell us more"
						helper="What perspective, experience, or community do you represent that you feel is often missing from conversations about how we design AI systems and build companies? Share as much or as little as you'd like."
						error={errors.perspectiveDetails?.message}
					>
						<Textarea
							rows={5}
							className={textareaClass}
							{...register('perspectiveDetails')}
						/>
					</Field>
				)}

				<Field
					label="What do you hope to contribute, and take away?"
					required
					helper="Looking at the high-level program for the day(s) you're applying to."
					error={errors.hopes?.message}
				>
					<Textarea rows={5} className={textareaClass} {...register('hopes')} />
				</Field>
			</Section>

			{/* ─────────── SECTION 05 — A few last things ─────────── */}
			<Section
				number="05"
				kicker="A few last things"
				title="Almost done."
			>
				<Field
					label="How did you hear about this event?"
					required
					helper="Check all that apply."
					error={errors.heardFrom?.message}
				>
					<Controller
						name="heardFrom"
						control={control}
						render={({ field }) => (
							<div className="space-y-2">
								{(
									[
										{ v: 'social-media', l: 'Social media' },
										{ v: 'organizer-email', l: 'Email from an organizer' },
										{ v: 'university', l: 'Through my university or school' },
										{ v: 'friend', l: 'A friend or colleague' },
										{ v: 'other', l: 'Other' },
									] as const
								).map((opt) => {
									const checked = field.value?.includes(opt.v);
									return (
										<label
											key={opt.v}
											className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 transition-all duration-200 cursor-pointer ${
												checked
													? 'border-amber-500/40 bg-amber-500/[0.06]'
													: 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
											}`}
										>
											<Checkbox
												checked={checked}
												onCheckedChange={(isChecked) => {
													const current = field.value || [];
													if (isChecked) {
														field.onChange([...current, opt.v]);
													} else {
														field.onChange(
															current.filter((v) => v !== opt.v)
														);
													}
												}}
												className="border-white/30 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
											/>
											<span className="text-white/85">{opt.l}</span>
										</label>
									);
								})}
							</div>
						)}
					/>
					{heardFrom.includes('other') && (
						<Input
							placeholder="Please specify"
							className={`${inputClass} mt-3`}
							{...register('heardFromOther')}
						/>
					)}
				</Field>

				<Field label="Any dietary restrictions or accessibility needs?">
					<Controller
						name="dietaryNone"
						control={control}
						render={({ field }) => (
							<RadioGroup
								value={field.value ? 'none' : 'yes'}
								onValueChange={(v) => field.onChange(v === 'none')}
								className="grid grid-cols-2 gap-3"
							>
								<label className={optionRowClass}>
									<RadioGroupItem
										value="none"
										className="border-white/30 text-amber-500"
									/>
									<span className="text-white/80 group-hover:text-white transition-colors">
										None
									</span>
								</label>
								<label className={optionRowClass}>
									<RadioGroupItem
										value="yes"
										className="border-white/30 text-amber-500"
									/>
									<span className="text-white/80 group-hover:text-white transition-colors">
										Yes, I have some
									</span>
								</label>
							</RadioGroup>
						)}
					/>
					{!dietaryNone && (
						<Textarea
							rows={3}
							placeholder="Please specify your dietary restrictions or accessibility needs"
							className={`${textareaClass} mt-3`}
							{...register('dietaryDetails')}
						/>
					)}
				</Field>

				<Field
					label="LinkedIn profile or personal website"
					helper="Optional."
					error={errors.linkedin?.message}
				>
					<Input
						placeholder="https://..."
						className={inputClass}
						{...register('linkedin')}
					/>
				</Field>

				<Field
					label="What hobbies or interests do you engage in outside of your professional life?"
					helper="Optional, but we're curious."
					error={errors.hobbies?.message}
				>
					<Textarea rows={3} className={textareaClass} {...register('hobbies')} />
				</Field>
			</Section>

			{/* ─────────── SUBMIT ─────────── */}
			<div className="pt-16 pb-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
				<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

				{submitError && (
					<div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-center">
						<p className="text-sm text-red-300">{submitError}</p>
					</div>
				)}

				<Button
					type="submit"
					disabled={isSubmitting}
					className="relative w-full h-16 rounded-full text-lg font-semibold bg-gradient-to-r from-red-700 via-amber-600 to-orange-500 hover:from-red-600 hover:via-amber-500 hover:to-orange-400 text-white shadow-2xl shadow-red-900/30 transition-all duration-300 hover:shadow-amber-900/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 overflow-hidden group"
				>
					<span className="relative z-10 flex items-center">
						{isSubmitting ? (
							<>
								<Loader2 className="mr-2 h-5 w-5 animate-spin" />
								Submitting your application...
							</>
						) : (
							<>
								Submit Application
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</>
						)}
					</span>
				</Button>
				<p className="text-center text-xs text-white/30 mt-5 tracking-wide">
					Submitting places you on our waitlist. We&rsquo;ll review and respond
					as soon as possible.
				</p>
			</div>
		</form>
	);
}
