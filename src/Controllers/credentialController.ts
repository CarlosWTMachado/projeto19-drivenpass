import { Request, Response } from 'express';
import * as credentialService from '../Services/credentialService';

export async function CreateCredentialController(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const {title, url, username, password} = req.body;
	await credentialService.CreateCredential(Number(id), title, url, username, password);
	return res.sendStatus(200);
}