import { Request, Response } from 'express';
import * as genericService from '../Services/genericService';

export async function CreateCredentialController(req: Request, res: Response){
	const tokenData = res.locals.tokenData;
	console.log(tokenData)
	return res.sendStatus(200);
}