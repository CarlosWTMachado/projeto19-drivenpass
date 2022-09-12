import * as credentialRepository from '../Repositories/credentialRepository';
import { credentials } from '@prisma/client';
import EncryptPassword from '../Utils/encryptPasswordCRYPTR';
import DecryptPassword from '../Utils/decryptPasswordCRYPTR';

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

export async function GetAllCredentials(userId: number){
	const credentials = await credentialRepository.findByUserId(userId);
	const decryptedCredentials: credentials[] = credentials.map((credential) => {
		const decryptedPassword = DecryptPassword(credential.password);
		return {...credential, password: decryptedPassword};
	});
	return decryptedCredentials;
}

export async function GetCredentialById(credentialId: number, userId: number){
	const credential = await credentialRepository.findByIdEUserId(credentialId, userId);
	if(credential === null) throw {
		type: 'NotFound',
		message: 'Credential not found'
	}

	const decryptedPassword = DecryptPassword(credential.password);
	const decryptedCredential: credentials = {...credential, password: decryptedPassword};
	return decryptedCredential;
}