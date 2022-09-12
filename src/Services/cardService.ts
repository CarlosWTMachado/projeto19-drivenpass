import * as cardRepository from '../Repositories/cardRepository';
import { CreateCard } from '../Types/cardType';
import encrypter from '../Utils/encrypterCRYPTR';
import decrypter from '../Utils/decrypterCRYPTR';

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
	const cards = await cardRepository.findByUserId(userId);
	if(cards.length === 0) throw {
		type: 'NotFound',
		message: 'user has no cards'
	}
	return cards.map((card) => {
		const decryptedPassword = decrypter(card.password);
		const decryptedCVC = decrypter(card.cvc);
		return {...card, password: decryptedPassword, cvc: decryptedCVC};
	});
}

export async function GetCardById(cardId: number, userId: number){
	const card = await cardRepository.findByIdEUserId(cardId, userId);
	if(card === null) throw {
		type: 'NotFound',
		message: 'Card not found'
	}
	const decryptedPassword = decrypter(card.password);
	const decryptedCVC = decrypter(card.cvc);
	return {...card, password: decryptedPassword, cvc: decryptedCVC};
}

export async function DeleteById(noteId: number, userId: number){
	const card = await cardRepository.findByIdEUserId(noteId, userId);
	if(card === null) throw {
		type: 'NotFound',
		message: 'Card not found'
	}

	await cardRepository.deleteById(noteId);
	return card;
}