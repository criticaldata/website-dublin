'use server';

import { encodedRedirect } from '@/lib/utils';
import { createClient } from '@/lib/supabase/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthUser } from '@/types/app.types';
import { revalidatePath } from 'next/cache';

export async function checkUser(): Promise<AuthUser> {
	if (
		!process.env.NEXT_PUBLIC_SUPABASE_URL ||
		!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
	) {
		return { isAuthenticated: false, isAdmin: false };
	}

	const supabase = await createClient();

	try {
		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (!user) return { isAuthenticated: false, isAdmin: false };

		const { data: adminData } = await supabase
			.from('admins')
			.select('*')
			.eq('user_id', user.id)
			.single();

		return {
			user_id: user.id,
			isAuthenticated: true,
			name: adminData?.name || '',
			isAdmin: adminData?.role === 'admin' ? true : false,
		};
	} catch (error) {
		console.error(error);
		return { isAuthenticated: false, isAdmin: false };
	}
}

export const signInAction = async (formData: FormData) => {
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;
	const supabase = await createClient();

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return encodedRedirect('error', '/auth/sign-in', error.message);
	}

	return redirect('/admin');
};

export const signOutAction = async () => {
	const supabase = await createClient();
	await supabase.auth.signOut();
	revalidatePath('/');
	return redirect('/');
};

export const signUpAction = async (formData: FormData) => {
	const email = formData.get('email')?.toString();
	const password = formData.get('password')?.toString();
	const supabase = await createClient();
	const origin = (await headers()).get('origin');

	if (!email || !password) {
		return encodedRedirect(
			'error',
			'/auth/sign-up',
			'Email and password are required'
		);
	}

	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}/auth/callback`,
		},
	});

	if (error) {
		console.error(error.code + ' ' + error.message);
		return encodedRedirect('error', '/auth/sign-up', error.message);
	} else {
		return encodedRedirect(
			'success',
			'/auth/sign-up',
			'Thanks for signing up! Please check your email for a verification link.'
		);
	}
};

export const forgotPasswordAction = async (formData: FormData) => {
	const email = formData.get('email')?.toString();
	const supabase = await createClient();
	const origin = (await headers()).get('origin');
	const callbackUrl = formData.get('callbackUrl')?.toString();

	if (!email) {
		return encodedRedirect(
			'error',
			'/auth/forgot-password',
			'Email is required'
		);
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${origin}/auth/callback?redirect_to=/auth/reset-password`,
	});

	if (error) {
		console.error(error.message);
		return encodedRedirect(
			'error',
			'/auth/forgot-password',
			'Could not reset password'
		);
	}

	if (callbackUrl) {
		return redirect(callbackUrl);
	}

	return encodedRedirect(
		'success',
		'/auth/forgot-password',
		'Check your email for a link to reset your password.'
	);
};

export const resetPasswordAction = async (formData: FormData) => {
	const supabase = await createClient();

	const password = formData.get('password') as string;
	const confirmPassword = formData.get('confirmPassword') as string;

	if (!password || !confirmPassword) {
		encodedRedirect(
			'error',
			'/auth/reset-password',
			'Password and confirm password are required'
		);
	}

	if (password !== confirmPassword) {
		encodedRedirect('error', '/auth/reset-password', 'Passwords do not match');
	}

	const { error } = await supabase.auth.updateUser({
		password: password,
	});

	if (error) {
		encodedRedirect('error', '/auth/reset-password', 'Password update failed');
	}

	encodedRedirect('success', '/auth/reset-password', 'Password updated');
};
