import { z } from 'zod';

export const INTEREST_OPTIONS = [
	'Healthcare / Public Health',
	'Machine Learning / AI',
	'Venture Capital / Angel Investing',
	'Entrepreneurship / Startups',
	'Health Policy / Governance',
	'Social Sciences',
	'Arts / Design',
	'Community Organizing / Advocacy',
	'Other',
] as const;

export const COMMUNITY_ROLE_OPTIONS = [
	'Second-generation Filipino / diaspora community member',
	'Student / youth participant',
	'Educator / school staff',
	'Healthcare / public health worker',
	'Community organizer / advocate',
	'Institutional partner',
	'Researcher / technologist',
	'Other',
] as const;

export const DAY_OPTIONS = [
	{
		id: 'may1',
		title: 'Friday, September 4, 2026',
		subtitle: 'Community Data Workshop',
		venue: 'Rome venue to be announced',
	},
	{
		id: 'may2',
		title: 'Saturday, September 5, 2026',
		subtitle: 'Life Skills, AI Literacy, and Curriculum Partnership',
		venue: 'Rome venue to be announced',
	},
] as const;

export const registrationSchema = z
	.object({
		email: z.string().email('Please enter a valid email address'),
		firstName: z.string().min(1, 'First name is required').max(100),
		lastName: z.string().min(1, 'Last name is required').max(100),
		days: z
			.array(z.enum(['may1', 'may2']))
			.min(1, 'Please select at least one lab'),
		may1Attendance: z.enum(['in-person', 'virtual', 'either']).optional(),
		may2Attendance: z.enum(['in-person', 'virtual', 'either']).optional(),
		affiliation: z.string().min(1, 'Affiliation is required').max(200),
		role: z.string().min(1, 'Role is required').max(200),
		isStudent: z.enum(['yes', 'no']),
		school: z.string().max(200).optional(),
		educationLevel: z.string().max(200).optional(),
		interests: z
			.array(z.string())
			.min(1, 'Please select at least one interest'),
		interestsOther: z.string().max(200).optional(),
		languages: z.string().min(1, 'Please list at least one language').max(300),
		communityRoles: z
			.array(z.string())
			.min(1, 'Please select at least one community connection'),
		communityRolesOther: z.string().max(200).optional(),
		communityConnection: z
			.string()
			.min(
				1,
				'Please tell us about your connection to the communities in focus'
			)
			.max(2000),
		aiComfort: z.enum(['new', 'curious', 'some', 'experienced']),
		communityQuestion: z
			.string()
			.min(1, 'Please share a question or challenge for the gathering')
			.max(2000),
		eventExperience: z.enum(['first', 'few', 'regularly']),
		uniquePerspective: z.enum(['yes', 'no', 'not-sure', 'prefer-not-to-say']),
		perspectiveDetails: z.string().max(2000).optional(),
		hopes: z
			.string()
			.min(1, 'Please share your hopes for the gathering')
			.max(2000),
		heardFrom: z
			.array(
				z.enum([
					'social-media',
					'organizer-email',
					'university',
					'friend',
					'other',
				])
			)
			.min(1, 'Please select at least one option'),
		heardFromOther: z.string().max(200).optional(),
		dietaryNone: z.boolean(),
		dietaryDetails: z.string().max(500).optional(),
		linkedin: z.string().max(300).optional(),
		hobbies: z.string().max(500).optional(),
	})
	.refine((data) => !data.days.includes('may1') || !!data.may1Attendance, {
		message: 'Please select how you would like to attend on September 4',
		path: ['may1Attendance'],
	})
	.refine((data) => !data.days.includes('may2') || !!data.may2Attendance, {
		message: 'Please select how you would like to attend on September 5',
		path: ['may2Attendance'],
	})
	.refine(
		(data) =>
			data.isStudent === 'no' || (data.school && data.school.length > 0),
		{
			message: 'Please tell us what school you attend',
			path: ['school'],
		}
	)
	.refine(
		(data) =>
			data.isStudent === 'no' ||
			(data.educationLevel && data.educationLevel.length > 0),
		{
			message: 'Please tell us what level you are pursuing',
			path: ['educationLevel'],
		}
	)
	.refine(
		(data) =>
			!data.interests.includes('Other') ||
			(data.interestsOther && data.interestsOther.length > 0),
		{
			message: 'Please specify your other interest',
			path: ['interestsOther'],
		}
	)
	.refine(
		(data) =>
			!data.communityRoles.includes('Other') ||
			(data.communityRolesOther && data.communityRolesOther.length > 0),
		{
			message: 'Please specify your other community connection',
			path: ['communityRolesOther'],
		}
	);

export type RegistrationFormData = z.infer<typeof registrationSchema>;
