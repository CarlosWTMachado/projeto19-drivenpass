import { Request, Response } from 'express';
import * as genericService from '../Services/genericService';

export async function CreateCredentialController(req: Request, res: Response){
	const tokenData = res.locals.tokenData;
	const {title, url, username, password} = req.body;
	// uma url, um nome de usuário e uma senha
	console.log(tokenData)
	return res.sendStatus(200);
}