import prisma from '../Config/db';
import {CreateCard} from '../Types/cardType';

export async function findByUserIdETitle(userId: number, title: string) {
	return await prisma.cards.findUnique({
		where: {
			userId_title: {
				userId,
				title
			}
		}
	});
}

export async function findByIdEUserId(id: number, userId: number) {
	return await prisma.cards.findUnique({
		where: {
			id_userId: {
				id,
				userId
			}
		}
	});
}

export async function create(card: CreateCard){
	return await prisma.cards.create({
		data : card
	});
}

export async function findByUserId(userId: number) {
	return await prisma.cards.findMany({
		where: {userId}
	});
}

export async function deleteById(id: number) {
	return await prisma.notes.delete({
		where: {id}
	});
}