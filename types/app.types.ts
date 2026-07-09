export interface AuthUser {
	user_id?: string;
	name?: string;
	isAuthenticated: boolean;
	isAdmin: boolean;
}

export interface ResearchPaper {
	id: string;
	title: string;
	authors: string;
	abstract: string;
	comment?: string;
	link: string;
	publisher?: string;
	date_published: string;
	highlight: boolean;
}

export interface Event {
	id: string;
	event_type: string;
	title: string;
	desc: string;
	start_date: string;
	end_date: string;
	link: string | null;
	youtube_video_id: string;
	completed: boolean;
	city: string;
	state: string;
	country: string;
	image_url: string;
}

export interface Highlight {
	id: string;
	title: string;
	description?: string;
	link?: string;
	categories: string[]; // Changed to array
	created_at: string;
	// New fields for unified feed
	type: 'link' | 'video';
	video_url?: string;
	location?: string;
	featured?: boolean;
}
