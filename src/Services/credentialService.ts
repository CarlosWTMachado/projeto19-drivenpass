import * as credentialRepository from '../Repositories/credentialRepository';
import { credentials } from '@prisma/client';
import Encrypter from '../Utils/encrypterCRYPTR';
import Decrypter from '../Utils/decrypterCRYPTR';

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
	
	const encryptedPassword = Encrypter(password);
	await credentialRepository.create({userId, title, url, username, password: encryptedPassword});

	return;
}

export async function GetAllCredentials(userId: number){
	const credentials = await credentialRepository.findByUserId(userId);
	const decryptedCredentials: credentials[] = credentials.map((credential) => {
		const decryptedPassword = Decrypter(credential.password);
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

	const decryptedPassword = Decrypter(credential.password);
	const decryptedCredential: credentials = {...credential, password: decryptedPassword};
	return decryptedCredential;
}

export async function DeleteCredentialById(credentialId: number, userId: number){
	const credential = await credentialRepository.findByIdEUserId(credentialId, userId);
	if(credential === null) throw {
		type: 'NotFound',
		message: 'Credential not found'
	}

	await credentialRepository.deleteById(credentialId);
	return;
}