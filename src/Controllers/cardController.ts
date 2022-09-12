import { Request, Response } from 'express';
import * as cardService from '../Services/cardService';
import {CreateCard} from '../Types/cardType'

export async function Create(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const card = req.body;
	await cardService.CreateCard({...card, userId: Number(id)});
	return res.sendStatus(201);
}

// export async function GetNotesController(req: Request, res: Response){
// 	const {id} = res.locals.tokenData;
// 	const notes = await noteService.GetNotes(Number(id));
// 	return res.status(200).send(notes);
// }

// export async function GetNoteByIdController(req: Request, res: Response){
// 	const {id: userId} = res.locals.tokenData;
// 	const {id} = req.params;
// 	const note = await noteService.GetNoteById(Number(id), Number(userId));
// 	return res.status(200).send(note);
// }

// export async function DeleteNoteByIdController(req: Request, res: Response){
// 	const {id: userId} = res.locals.tokenData;
// 	const {id} = req.params;
// 	const notes = await noteService.DeleteNoteById(Number(id), Number(userId));
// 	return res.sendStatus(200);
// }