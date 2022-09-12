import { Request, Response } from 'express';
import * as noteService from '../Services/noteService';

export async function CreateNoteController(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const {title, note} = req.body;
	await noteService.CreateNote(Number(id), title, note);
	return res.sendStatus(201);
}

export async function GetNotesController(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const notes = await noteService.GetNotes(Number(id));
	return res.status(200).send(notes);
}

export async function GetNoteByIdController(req: Request, res: Response){
	const {id: userId} = res.locals.tokenData;
	const {id} = req.params;
	const note = await noteService.GetNoteById(Number(id), Number(userId));
	return res.status(200).send(note);
}