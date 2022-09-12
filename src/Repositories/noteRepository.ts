import prisma from '../Config/db';
import {CreateNote} from '../Types/noteType';

export async function findByUserIdETitle(userId: number, title: string) {
	return await prisma.notes.findUnique({
		where: {
			userId_title: {
				userId,
				title
			}
		}
	});
}

export async function findByIdEUserId(id: number, userId: number) {
	return await prisma.notes.findUnique({
		where: {
			id_userId: {
				id,
				userId
			}
		}
	});
}

export async function create(note: CreateNote){
	return await prisma.notes.create({
		data : note
	});
}

export async function findByUserId(userId: number) {
	return await prisma.notes.findMany({
		where: {userId}
	});
}