import { string } from 'joi';
import * as cardRepository from '../Repositories/cardRepository';
import { CreateCard } from '../Types/cardType';
import encrypter from '../Utils/encryptPasswordCRYPTR';

export async function CreateCard(card: CreateCard){
	const cardFound = await cardRepository.findByUserIdETitle(card.userId, card.title);
	if(cardFound !== null) throw {
		type: 'Conflict',
		message: 'user alredy have card with this title'
	}

	const encryptedCVC = encrypter(card.cvc);
	const encryptedPassword = encrypter(card.password);
	await cardRepository.create({...card, cvc: encryptedCVC, password: encryptedPassword});
	return;
}

export async function GetCards(userId: number){
	const notes = await cardRepository.findByUserId(userId);
	if(notes.length === 0) throw {
		type: 'NotFound',
		message: 'user has no notes'
	}
	return notes;
}

export async function GetCardById(cardId: number, userId: number){
	const note = await cardRepository.findByIdEUserId(cardId, userId);
	if(note === null) throw {
		type: 'NotFound',
		message: 'Note not found'
	}
	return note;
}

// export async function DeleteNoteById(noteId: number, userId: number){
// 	const note = await noteRepository.findByIdEUserId(noteId, userId);
// 	if(note === null) throw {
// 		type: 'NotFound',
// 		message: 'Note not found'
// 	}

// 	await noteRepository.deleteById(noteId);
// 	return note;
// }