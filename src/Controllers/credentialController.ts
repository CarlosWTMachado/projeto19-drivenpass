import { Request, Response } from 'express';
import * as credentialService from '../Services/credentialService';

export async function CreateCredentialController(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const {title, url, username, password} = req.body;
	await credentialService.CreateCredential(Number(id), title, url, username, password);
	return res.sendStatus(200);
}

export async function GetCredentialController(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const credentials = await credentialService.GetAllCredentials(Number(id));
	return res.status(200).send(credentials);
}

export async function GetCredentialByIdController(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const credentials = await credentialService.GetAllCredentials(Number(id));
	return res.status(200).send(credentials);
}