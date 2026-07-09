'use server';

import { registrationSchema, type RegistrationFormData } from './schema';

const WEBHOOK_URL = process.env.ROME_REGISTRATION_WEBHOOK_URL;

const DAY_LABELS: Record<string, string> = {
	may1: 'Friday, September 4, 2026 - Community Data Workshop',
	may2: 'Saturday, September 5, 2026 - Life Skills, AI Literacy, and Curriculum Partnership',
};

const ATTENDANCE_LABELS: Record<string, string> = {
	'in-person': 'In person',
	virtual: 'Virtually',
	either: 'Open to either',
};

const STUDENT_LABELS: Record<string, string> = {
	yes: 'Yes',
	no: 'No',
};

const EXPERIENCE_LABELS: Record<string, string> = {
	first: 'No, this would be my first',
	few: 'Yes, a few',
	regularly: 'Yes, regularly',
};

const AI_COMFORT_LABELS: Record<string, string> = {
	new: 'Brand new to AI',
	curious: 'Curious / beginner',
	some: 'Some hands-on experience',
	experienced: 'Experienced',
};

const PERSPECTIVE_LABELS: Record<string, string> = {
	yes: 'Yes',
	no: 'No',
	'not-sure': "I'm not sure",
	'prefer-not-to-say': 'Prefer not to say',
};

const HEARD_FROM_LABELS: Record<string, string> = {
	'social-media': 'Social media',
	'organizer-email': 'Email from an organizer',
	university: 'Through my university or school',
	friend: 'A friend or colleague',
	other: 'Other',
};

function humanizeData(data: RegistrationFormData) {
	return {
		eventName: 'AI as a Catalyst - Roma',
		email: data.email,
		firstName: data.firstName,
		lastName: data.lastName,
		days: data.days.map((d) => DAY_LABELS[d] || d).join(', '),
		may1Attendance: data.may1Attendance
			? ATTENDANCE_LABELS[data.may1Attendance]
			: '',
		may2Attendance: data.may2Attendance
			? ATTENDANCE_LABELS[data.may2Attendance]
			: '',
		affiliation: data.affiliation,
		role: data.role,
		isStudent: STUDENT_LABELS[data.isStudent] || data.isStudent,
		school: data.school || '',
		educationLevel: data.educationLevel || '',
		interests: (data.interests || []).join(', '),
		interestsOther: data.interestsOther || '',
		languages: data.languages,
		communityRoles: (data.communityRoles || []).join(', '),
		communityRolesOther: data.communityRolesOther || '',
		communityConnection: data.communityConnection,
		aiComfort: AI_COMFORT_LABELS[data.aiComfort] || data.aiComfort,
		communityQuestion: data.communityQuestion,
		eventExperience:
			EXPERIENCE_LABELS[data.eventExperience] || data.eventExperience,
		uniquePerspective:
			PERSPECTIVE_LABELS[data.uniquePerspective] || data.uniquePerspective,
		perspectiveDetails: data.perspectiveDetails || '',
		hopes: data.hopes,
		heardFrom: (data.heardFrom || [])
			.map((h) => HEARD_FROM_LABELS[h] || h)
			.join(', '),
		heardFromOther: data.heardFromOther || '',
		dietaryNone: data.dietaryNone ? 'None' : 'Yes',
		dietaryDetails: data.dietaryDetails || '',
		linkedin: data.linkedin || '',
		hobbies: data.hobbies || '',
	};
}

export async function submitRegistration(
	data: RegistrationFormData
): Promise<{ success: boolean; error?: string }> {
	const parsed = registrationSchema.safeParse(data);
	if (!parsed.success) {
		return {
			success: false,
			error: 'Please check the form for errors and try again.',
		};
	}

	if (!WEBHOOK_URL) {
		return {
			success: false,
			error:
				'Rome registration is not connected yet. Please set ROME_REGISTRATION_WEBHOOK_URL.',
		};
	}

	try {
		const response = await fetch(WEBHOOK_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				...humanizeData(parsed.data),
				submittedAt: new Date().toISOString(),
			}),
			redirect: 'follow',
		});

		if (!response.ok) {
			console.error('Rome registration webhook returned:', response.status);
			return {
				success: false,
				error:
					'Something went wrong submitting your registration. Please try again.',
			};
		}

		return { success: true };
	} catch (error) {
		console.error('Failed to submit Rome registration:', error);
		return {
			success: false,
			error:
				'Something went wrong submitting your registration. Please try again.',
		};
	}
}
