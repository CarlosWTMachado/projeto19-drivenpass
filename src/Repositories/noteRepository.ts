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

export async function create(note: CreateNote){
	return await prisma.notes.create({
		data : note
	});
}