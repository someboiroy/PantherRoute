import PocketBase from 'pocketbase';

export const pb = new PocketBase(import.meta.env.VITE_PB_URL);

interface newUserFormData {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	passwordConfirm: string;
	pantherID: string;
}

export async function _createNewUser(data: newUserFormData) {
	const res = await pb.collection('users').create(data);

	return res;
}

export async function _loginUser(email: string, password: string) {
	const authData = await pb.collection('users').authWithPassword(email, password);

	return authData;
}

export function _logoutUser() {
	pb.authStore.clear();
}
