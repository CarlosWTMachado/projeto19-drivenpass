import { Request, Response } from 'express';
import * as authService from '../Services/authService';

export async function SignUpController(req: Request, res: Response){
	const {email, password} = req.body;
	await authService.SignUpService(email, password);

	return res.sendStatus(200);
}