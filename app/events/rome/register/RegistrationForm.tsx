'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import {
	COMMUNITY_ROLE_OPTIONS,
	DAY_OPTIONS,
	INTEREST_OPTIONS,
	registrationSchema,
	type RegistrationFormData,
} from './schema';
import { submitRegistration } from './actions';

const inputClass =
	'h-12 rounded-md border-[#ecd7b3]/[0.14] bg-[#fff7ea]/[0.06] text-[#fff7ea] placeholder:text-[#ecd7b3]/35 transition-all focus-visible:border-[#e8b75e]/70 focus-visible:bg-[#fff7ea]/[0.09] focus-visible:ring-2 focus-visible:ring-[#e8b75e]/[0.22]';

const textareaClass =
	'rounded-md border-[#ecd7b3]/[0.14] bg-[#fff7ea]/[0.06] text-[#fff7ea] placeholder:text-[#ecd7b3]/35 transition-all focus-visible:border-[#e8b75e]/70 focus-visible:bg-[#fff7ea]/[0.09] focus-visible:ring-2 focus-visible:ring-[#e8b75e]/[0.22]';

const optionRowClass =
	'group flex cursor-pointer items-center gap-3 rounded-md border border-[#ecd7b3]/[0.1] bg-[#fff7ea]/[0.045] px-4 py-3.5 transition-all duration-200 hover:border-[#ecd7b3]/[0.2] hover:bg-[#fff7ea]/[0.08]';

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
		<section className="relative pb-5 pt-16">
			<div className="mb-9 flex items-baseline gap-5">
				<span className="font-serif text-6xl font-bold italic leading-none text-[#e8b75e]/35 sm:text-7xl">
					{number}
				</span>
				<div className="flex-1 pb-2">
					<div className="mb-2 text-xs font-bold uppercase text-[#9dd0d3]">
						{kicker}
					</div>
					<h2 className="font-serif text-3xl font-bold leading-tight text-[#fff7ea] sm:text-4xl">
						{title}
					</h2>
					{description && (
						<p className="mt-3 max-w-xl text-sm leading-relaxed text-[#ecd7b3]/55">
							{description}
						</p>
					)}
				</div>
			</div>

			<div className="mb-10 h-px w-full bg-gradient-to-r from-[#e8b75e]/40 via-[#ecd7b3]/10 to-transparent" />
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
				<Label className="block text-base font-semibold leading-snug text-[#fff7ea] sm:text-lg">
					{label}
					{required && <span className="ml-1 text-[#e4562a]">*</span>}
				</Label>
				{helper && (
					<p className="mt-1.5 text-sm leading-relaxed text-[#ecd7b3]/48">
						{helper}
					</p>
				)}
			</div>
			<div>{children}</div>
			{error && <p className="text-sm text-[#ff9b76]">{error}</p>}
		</div>
	);
}

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
			communityRoles: [],
			dietaryNone: true,
			isStudent: undefined,
		},
	});

	const selectedInterests = watch('interests') || [];
	const selectedCommunityRoles = watch('communityRoles') || [];
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
			return;
		}

		setSubmitError(result.error || 'Something went wrong.');
	};

	if (submitted) {
		return (
			<div className="mx-auto max-w-2xl py-24 text-center">
				<div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#e8b75e]/[0.34] bg-[#e8b75e]/[0.12]">
					<CheckCircle2 className="h-10 w-10 text-[#e8b75e]" />
				</div>
				<h2 className="font-serif text-4xl font-bold leading-tight text-[#fff7ea] sm:text-5xl">
					Your application is in.
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#ecd7b3]/65">
					Thank you for applying to join AI as a Catalyst: Roma. We will review
					applications and follow up as venue and schedule details are
					finalized.
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="relative">
			<Section
				number="01"
				kicker="Introduce yourself"
				title="Who are you?"
				description="The basics, so we know who we are hearing from."
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
					label="First and last name"
					required
					error={errors.firstName?.message || errors.lastName?.message}
				>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
					label="Your role"
					required
					helper="For example: student, physician, founder, software engineer, community organizer."
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
									{ value: 'yes', label: 'Yes' },
									{ value: 'no', label: 'No' },
								].map((option) => (
									<label key={option.value} className={optionRowClass}>
										<RadioGroupItem
											value={option.value}
											className="border-[#ecd7b3]/40 text-[#e8b75e]"
										/>
										<span className="text-[#ecd7b3]/82 transition-colors group-hover:text-[#fff7ea]">
											{option.label}
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
							helper="For example: undergraduate, master's, PhD, MD, JD."
							error={errors.educationLevel?.message}
						>
							<Input className={inputClass} {...register('educationLevel')} />
						</Field>
					</>
				)}
			</Section>

			<Section
				number="02"
				kicker="Choose your labs"
				title="When can you join us?"
				description="Apply for one or both. For each day, you can choose in person, virtual, or open to either."
			>
				<Field
					label="Which lab(s) are you applying to attend?"
					required
					helper="Check all that apply. Then pick in person, virtual, or open to either."
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
								{DAY_OPTIONS.map((day, index) => {
									const checked = field.value?.includes(day.id);
									const attendanceField =
										day.id === 'may1' ? 'may1Attendance' : 'may2Attendance';
									const accent =
										index === 0
											? {
													border: 'border-[#e8b75e]/[0.42]',
													bg: 'bg-[#e8b75e]/[0.08]',
													text: 'text-[#e8b75e]',
													divider: 'border-[#e8b75e]/[0.2]',
												}
											: {
													border: 'border-[#9dd0d3]/[0.42]',
													bg: 'bg-[#9dd0d3]/[0.08]',
													text: 'text-[#9dd0d3]',
													divider: 'border-[#9dd0d3]/[0.2]',
												};

									return (
										<div
											key={day.id}
											className={`overflow-hidden rounded-lg border transition-all duration-300 ${
												checked
													? `${accent.border} ${accent.bg}`
													: 'border-[#ecd7b3]/[0.1] bg-[#fff7ea]/[0.045] hover:border-[#ecd7b3]/[0.2] hover:bg-[#fff7ea]/[0.08]'
											}`}
										>
											<label className="flex cursor-pointer items-start gap-4 p-5">
												<Checkbox
													checked={checked}
													onCheckedChange={(isChecked) => {
														const current = field.value || [];
														if (isChecked) {
															field.onChange([...current, day.id]);
															return;
														}

														field.onChange(
															current.filter((value) => value !== day.id)
														);
														setValue(attendanceField, undefined);
													}}
													className="mt-1 border-[#ecd7b3]/40 data-[state=checked]:border-[#e8b75e] data-[state=checked]:bg-[#e8b75e]"
												/>
												<div className="flex-1">
													<div
														className={`mb-1 text-xs font-bold uppercase ${accent.text}`}
													>
														{day.title}
													</div>
													<div className="text-base font-semibold leading-snug text-[#fff7ea] sm:text-lg">
														{day.subtitle}
													</div>
													<div className="mt-1 text-sm text-[#ecd7b3]/50">
														{day.venue}
													</div>
												</div>
											</label>

											{checked && (
												<div className={`border-t ${accent.divider} px-5 py-4`}>
													<div
														className={`mb-3 text-xs font-bold uppercase ${accent.text}`}
													>
														How will you attend?
													</div>
													<Controller
														name={attendanceField}
														control={control}
														render={({ field: attendance }) => (
															<RadioGroup
																value={attendance.value}
																onValueChange={attendance.onChange}
																className="grid grid-cols-1 gap-2 sm:grid-cols-3"
															>
																{[
																	{ value: 'in-person', label: 'In person' },
																	{ value: 'virtual', label: 'Virtually' },
																	{ value: 'either', label: 'Open to either' },
																].map((option) => (
																	<label
																		key={option.value}
																		className="group flex cursor-pointer items-center gap-2.5 rounded-md border border-[#ecd7b3]/[0.12] bg-[#fff7ea]/[0.045] px-3 py-2.5 transition-all hover:border-[#ecd7b3]/[0.22] hover:bg-[#fff7ea]/[0.08]"
																	>
																		<RadioGroupItem
																			value={option.value}
																			className="h-4 w-4 border-[#ecd7b3]/40 text-[#e8b75e]"
																		/>
																		<span className="text-sm text-[#ecd7b3]/82 transition-colors group-hover:text-[#fff7ea]">
																			{option.label}
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
							<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
								{INTEREST_OPTIONS.map((interest) => {
									const checked = field.value?.includes(interest);

									return (
										<label
											key={interest}
											className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-all duration-200 ${
												checked
													? 'border-[#e8b75e]/[0.42] bg-[#e8b75e]/[0.08]'
													: 'border-[#ecd7b3]/[0.1] bg-[#fff7ea]/[0.045] hover:border-[#ecd7b3]/[0.2] hover:bg-[#fff7ea]/[0.08]'
											}`}
										>
											<Checkbox
												checked={checked}
												onCheckedChange={(isChecked) => {
													const current = field.value || [];
													if (isChecked) {
														field.onChange([...current, interest]);
														return;
													}

													field.onChange(
														current.filter((value) => value !== interest)
													);
												}}
												className="border-[#ecd7b3]/40 data-[state=checked]:border-[#e8b75e] data-[state=checked]:bg-[#e8b75e]"
											/>
											<span className="text-sm text-[#ecd7b3]/88">
												{interest}
											</span>
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
						placeholder="For example: English, Italian, Tagalog"
						className={inputClass}
						{...register('languages')}
					/>
				</Field>

				<Field
					label="Which connection(s) to this work best describe you?"
					required
					helper="Check all that apply."
					error={errors.communityRoles?.message}
				>
					<Controller
						name="communityRoles"
						control={control}
						render={({ field }) => (
							<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
								{COMMUNITY_ROLE_OPTIONS.map((role) => {
									const checked = field.value?.includes(role);

									return (
										<label
											key={role}
											className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-all duration-200 ${
												checked
													? 'border-[#9dd0d3]/[0.42] bg-[#9dd0d3]/[0.08]'
													: 'border-[#ecd7b3]/[0.1] bg-[#fff7ea]/[0.045] hover:border-[#ecd7b3]/[0.2] hover:bg-[#fff7ea]/[0.08]'
											}`}
										>
											<Checkbox
												checked={checked}
												onCheckedChange={(isChecked) => {
													const current = field.value || [];
													if (isChecked) {
														field.onChange([...current, role]);
														return;
													}

													field.onChange(
														current.filter((value) => value !== role)
													);
												}}
												className="border-[#ecd7b3]/40 data-[state=checked]:border-[#9dd0d3] data-[state=checked]:bg-[#9dd0d3]"
											/>
											<span className="text-sm text-[#ecd7b3]/88">{role}</span>
										</label>
									);
								})}
							</div>
						)}
					/>
				</Field>

				{selectedCommunityRoles.includes('Other') && (
					<Field
						label="Please specify your other connection"
						required
						error={errors.communityRolesOther?.message}
					>
						<Input
							className={inputClass}
							{...register('communityRolesOther')}
						/>
					</Field>
				)}

				<Field
					label="What is your connection to Filipino, immigrant, diaspora, school, or community work in Italy?"
					required
					helper="A short answer is fine. We are trying to understand the room we are building."
					error={errors.communityConnection?.message}
				>
					<Textarea
						rows={4}
						className={textareaClass}
						{...register('communityConnection')}
					/>
				</Field>

				<Field
					label="How comfortable are you with AI tools right now?"
					required
					error={errors.aiComfort?.message}
				>
					<Controller
						name="aiComfort"
						control={control}
						render={({ field }) => (
							<RadioGroup
								value={field.value}
								onValueChange={field.onChange}
								className="grid grid-cols-1 gap-3 sm:grid-cols-2"
							>
								{[
									{ value: 'new', label: 'Brand new to AI' },
									{ value: 'curious', label: 'Curious / beginner' },
									{ value: 'some', label: 'Some hands-on experience' },
									{ value: 'experienced', label: 'Experienced' },
								].map((option) => (
									<label key={option.value} className={optionRowClass}>
										<RadioGroupItem
											value={option.value}
											className="border-[#ecd7b3]/40 text-[#e8b75e]"
										/>
										<span className="text-[#ecd7b3]/82 transition-colors group-hover:text-[#fff7ea]">
											{option.label}
										</span>
									</label>
								))}
							</RadioGroup>
						)}
					/>
				</Field>

				<Field
					label="What community question or challenge should this gathering make space for?"
					required
					helper="For example: work, school, health, migration, language access, family caregiving, public services, or trust in AI."
					error={errors.communityQuestion?.message}
				>
					<Textarea
						rows={4}
						className={textareaClass}
						{...register('communityQuestion')}
					/>
				</Field>

				<Field
					label="Have you attended hackathons, datathons, or similar AI/community learning events before?"
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
									{ value: 'first', label: 'No, this would be my first' },
									{ value: 'few', label: 'Yes, a few' },
									{ value: 'regularly', label: 'Yes, regularly' },
								].map((option) => (
									<label key={option.value} className={optionRowClass}>
										<RadioGroupItem
											value={option.value}
											className="border-[#ecd7b3]/40 text-[#e8b75e]"
										/>
										<span className="text-[#ecd7b3]/82 transition-colors group-hover:text-[#fff7ea]">
											{option.label}
										</span>
									</label>
								))}
							</RadioGroup>
						)}
					/>
				</Field>
			</Section>

			<Section
				number="04"
				kicker="Your perspective"
				title="What do you bring?"
				description="This is the part that matters most to us. Be honest. There are no wrong answers."
			>
				<Field
					label="Do you feel that you bring a perspective that is not typically represented in AI, data, or policy spaces?"
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
								className="grid grid-cols-1 gap-3 sm:grid-cols-2"
							>
								{[
									{ value: 'yes', label: 'Yes' },
									{ value: 'no', label: 'No' },
									{ value: 'not-sure', label: "I'm not sure" },
									{ value: 'prefer-not-to-say', label: 'Prefer not to say' },
								].map((option) => (
									<label key={option.value} className={optionRowClass}>
										<RadioGroupItem
											value={option.value}
											className="border-[#ecd7b3]/40 text-[#e8b75e]"
										/>
										<span className="text-[#ecd7b3]/82 transition-colors group-hover:text-[#fff7ea]">
											{option.label}
										</span>
									</label>
								))}
							</RadioGroup>
						)}
					/>
				</Field>

				{(uniquePerspective === 'yes' || uniquePerspective === 'not-sure') && (
					<Field
						label="If you are comfortable, tell us more"
						helper="What perspective, experience, or community do you represent that you feel is often missing from conversations about how AI systems are designed and used? Share as much or as little as you would like."
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
					helper="Think about the Rome gathering and the communities it is meant to serve."
					error={errors.hopes?.message}
				>
					<Textarea rows={5} className={textareaClass} {...register('hopes')} />
				</Field>
			</Section>

			<Section number="05" kicker="A few last things" title="Almost done.">
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
										{ value: 'social-media', label: 'Social media' },
										{
											value: 'organizer-email',
											label: 'Email from an organizer',
										},
										{
											value: 'university',
											label: 'Through my university or school',
										},
										{ value: 'friend', label: 'A friend or colleague' },
										{ value: 'other', label: 'Other' },
									] as const
								).map((option) => {
									const checked = field.value?.includes(option.value);

									return (
										<label
											key={option.value}
											className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3.5 transition-all duration-200 ${
												checked
													? 'border-[#e8b75e]/[0.42] bg-[#e8b75e]/[0.08]'
													: 'border-[#ecd7b3]/[0.1] bg-[#fff7ea]/[0.045] hover:border-[#ecd7b3]/[0.2] hover:bg-[#fff7ea]/[0.08]'
											}`}
										>
											<Checkbox
												checked={checked}
												onCheckedChange={(isChecked) => {
													const current = field.value || [];
													if (isChecked) {
														field.onChange([...current, option.value]);
														return;
													}

													field.onChange(
														current.filter((value) => value !== option.value)
													);
												}}
												className="border-[#ecd7b3]/40 data-[state=checked]:border-[#e8b75e] data-[state=checked]:bg-[#e8b75e]"
											/>
											<span className="text-[#ecd7b3]/88">{option.label}</span>
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
								onValueChange={(value) => field.onChange(value === 'none')}
								className="grid grid-cols-2 gap-3"
							>
								<label className={optionRowClass}>
									<RadioGroupItem
										value="none"
										className="border-[#ecd7b3]/40 text-[#e8b75e]"
									/>
									<span className="text-[#ecd7b3]/82 transition-colors group-hover:text-[#fff7ea]">
										None
									</span>
								</label>
								<label className={optionRowClass}>
									<RadioGroupItem
										value="yes"
										className="border-[#ecd7b3]/40 text-[#e8b75e]"
									/>
									<span className="text-[#ecd7b3]/82 transition-colors group-hover:text-[#fff7ea]">
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
					helper="Optional, but we are curious."
					error={errors.hobbies?.message}
				>
					<Textarea
						rows={3}
						className={textareaClass}
						{...register('hobbies')}
					/>
				</Field>
			</Section>

			<div className="pb-4 pt-16">
				<div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-[#ecd7b3]/15 to-transparent" />

				{submitError && (
					<div className="mb-6 rounded-md border border-[#e4562a]/35 bg-[#e4562a]/[0.12] px-5 py-4 text-center">
						<p className="text-sm text-[#ffb094]">{submitError}</p>
					</div>
				)}

				<Button
					type="submit"
					disabled={isSubmitting}
					className="h-16 w-full rounded-md bg-[#e8b75e] text-lg font-bold text-[#19130f] shadow-2xl shadow-[#b44824]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f2c76d] disabled:opacity-50 disabled:hover:translate-y-0"
				>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-5 w-5 animate-spin" />
							Submitting your application...
						</>
					) : (
						<>
							Submit application
							<ArrowRight className="ml-2 h-5 w-5" />
						</>
					)}
				</Button>
				<p className="mt-5 text-center text-xs text-[#ecd7b3]/38">
					Submitting places you in the Rome applicant pool. We will review and
					respond as venue and schedule details are finalized.
				</p>
			</div>
		</form>
	);
}
