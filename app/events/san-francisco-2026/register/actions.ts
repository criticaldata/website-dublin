'use server';

import { registrationSchema, type RegistrationFormData } from './schema';

// Server-only: never sent to the browser. Posts to Google Apps Script
// web app, which appends rows to the event registration sheet.
const WEBHOOK_URL =
	'https://script.google.com/macros/s/AKfycbyeHI0wHq1lgnjaUVIdjRgvW99CT6VXkgRJHIvpciSM6__rzKvi9BDXTpGfe1wgBfjB/exec';

// Maps internal enum values to the human-readable labels shown in the UI
// so the sheet contains meaningful text, not slugs like "friend" or "may1".
const DAY_LABELS: Record<string, string> = {
	may1: 'Friday, May 1, 2026 — Innovation & Entrepreneurship (Threshold Ventures)',
	may2: 'Saturday, May 2, 2026 — AI Workshops (Stanford)',
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
			console.error('Webhook returned non-OK status:', response.status);
			return {
				success: false,
				error:
					'Something went wrong submitting your registration. Please try again.',
			};
		}

		return { success: true };
	} catch (error) {
		console.error('Failed to submit registration:', error);
		return {
			success: false,
			error:
				'Something went wrong submitting your registration. Please try again.',
		};
	}
}
