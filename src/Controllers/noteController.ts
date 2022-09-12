import { Request, Response } from 'express';
import * as noteService from '../Services/noteService';

export async function CreateNoteController(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const {title, note} = req.body;
	await noteService.CreateNote(Number(id), title, note);
	return res.sendStatus(201);
}