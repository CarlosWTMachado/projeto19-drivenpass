import { Request, Response } from 'express';
import * as wifiService from '../Services/wifiService';
import {CreateCard} from '../Types/cardType'

export async function Create(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const wifi = req.body;
	await wifiService.Create({...wifi, userId: Number(id)});
	return res.sendStatus(201);
}

export async function GetAll(req: Request, res: Response){
	const {id} = res.locals.tokenData;
	const wifis = await wifiService.GetAll(Number(id));
	return res.status(200).send(wifis);
}

export async function GetById(req: Request, res: Response){
	const {id: userId} = res.locals.tokenData;
	const {id} = req.params;
	const wifi = await wifiService.GetById(Number(id), Number(userId));
	return res.status(200).send(wifi);
}

export async function DeleteById(req: Request, res: Response){
	const {id: userId} = res.locals.tokenData;
	const {id} = req.params;
	await wifiService.DeleteById(Number(id), Number(userId));
	return res.sendStatus(200);
}