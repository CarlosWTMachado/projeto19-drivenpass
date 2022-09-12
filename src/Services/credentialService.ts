import * as credentialRepository from '../Repositories/credentialRepository';
import EncryptPassword from '../Utils/encryptPasswordCRYPTR';

export async function CreateCredential(
	userId: number, 
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
	
	const encryptedPassword = EncryptPassword(password);
	await credentialRepository.create({userId, title, url, username, password: encryptedPassword});

	return;
}