import { Request, Response } from 'express';
import * as cardService from '../Services/cardService';
import {CreateCard} from '../Types/cardType'

export async function Create(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const card = req.body;
	await cardService.CreateCard({...card, userId: Number(id)});
	return res.sendStatus(201);
}

export async function GetCards(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const cards = await cardService.GetCards(Number(id));
	return res.status(200).send(cards);
}

export async function GetCardById(req: Request, res: Response){
	const {id: userId} = res.locals.tokenData;
	const {id} = req.params;
	const card = await cardService.GetCardById(Number(id), Number(userId));
	return res.status(200).send(card);
}

export async function DeleteById(req: Request, res: Response){
	const {id: userId} = res.locals.tokenData;
	const {id} = req.params;
	await cardService.DeleteById(Number(id), Number(userId));
	return res.sendStatus(200);
}