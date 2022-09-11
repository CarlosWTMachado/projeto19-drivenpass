import { Request, Response } from 'express';
import * as credentialService from '../Services/credentialService';

export async function CreateCredentialController(req: Request, res: Response){
	const {id: userId, email: userEmail, password: userPassword} = res.locals.tokenData;
	const {title, url, username, password} = req.body;
	await credentialService.CreateCredential(Number(userId), userEmail, userPassword, title, url, username, password);
	return res.sendStatus(200);
}