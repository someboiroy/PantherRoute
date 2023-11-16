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

interface incidentReportFormData {
	first_name: string;
	last_name: string;
	email: string;
	pantherID: string;
	report: string;
}

export async function _createNewUser(data: newUserFormData) {
	const res = await pb.collection('users').create(data);

	return res;
}

export async function _loginUser(email: string, password: string) {
	const authData = await pb.collection('users').authWithPassword(email, password);

	return authData;
}

export async function _submitIncidentReport(data: incidentReportFormData) {
	const dataWithID = {
		...data,
		user_id: pb.authStore.model!.id
	};

	const res = await pb.collection('incident_reports').create(dataWithID);
	return res;
}

export function _logoutUser() {
	pb.authStore.clear();
}
