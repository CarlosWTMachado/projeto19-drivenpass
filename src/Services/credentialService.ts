import * as credentialRepository from '../Repositories/credentialRepository';

export async function CreateCredential(
	userId: number, 
	userEmail: string, 
	userPassword: string, 
	title: string, 
	url: string, 
	username: string, 
	password: string
){
	const credential = await credentialRepository.findByUserIdETitle(userId, title);
	if(credential !== null) throw {
		type: 'Conflict',
		message: 'user alredy have credential with this title'
	}
	return;
}