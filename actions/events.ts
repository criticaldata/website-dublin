'use server';

import { createClient } from '@/lib/supabase/server';
import { Event as EventType } from '@/types/app.types';
import { EventFormData } from '@/actions/schemas';
import { curatedEvents } from '@/data/curated-events';

const mergeEvents = (events: EventType[]) => {
	const eventMap = new Map<string, EventType>();

	for (const event of curatedEvents) {
		eventMap.set(event.id, event);
	}

	for (const event of events) {
		if (event.link) {
			const curatedMatch = curatedEvents.find(
				(curatedEvent) => curatedEvent.link === event.link
			);

			if (curatedMatch) {
				eventMap.delete(curatedMatch.id);
			}
		}

		eventMap.set(event.id, event);
	}

	return Array.from(eventMap.values()).sort(
		(a, b) =>
			new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
	);
};

export const getEvents = async (): Promise<EventType[]> => {
	if (
		!process.env.NEXT_PUBLIC_SUPABASE_URL ||
		!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
	) {
		return mergeEvents([]);
	}

	const supabase = await createClient();
	try {
		let query = supabase
			.from('events')
			.select('*')
			.order('start_date', { ascending: false });

		const { data, error } = await query;

		if (error) {
			throw new Error(error.message);
		}
		return mergeEvents((data as EventType[]) || []);
	} catch (error) {
		console.error(error);
		return mergeEvents([]);
	}
};

export const addEvent = async (event: EventFormData) => {
	const supabase = await createClient();

	try {
		const { data, error } = await supabase
			.from('events')
			.insert(event)
			.select()
			.single();

		if (error) {
			throw new Error(error.message);
		}
		return {
			success: true,
			message: 'Event added successfully',
			data,
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: 'Failed to add event',
			errors: {
				root: 'Failed to add event',
			},
		};
	}
};

export const updateEvent = async (id: string, event: EventFormData) => {
	const supabase = await createClient();

	try {
		const { data, error } = await supabase
			.from('events')
			.update(event)
			.eq('id', id)
			.select()
			.single();

		if (error) {
			throw new Error(error.message);
		}
		return {
			success: true,
			message: 'Event updated successfully',
			data,
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: 'Failed to update event',
			errors: {
				root: 'Failed to update event',
			},
		};
	}
};

export const deleteEvent = async (id: string) => {
	const supabase = await createClient();

	try {
		const { error } = await supabase.from('events').delete().eq('id', id);

		if (error) {
			throw new Error(error.message);
		}
		return {
			success: true,
			message: 'Event deleted successfully',
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: 'Failed to delete event',
		};
	}
};
