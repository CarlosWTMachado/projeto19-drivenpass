import prisma from '../Config/db';
import {CreateCredential} from '../Types/credentialType';

export async function findByUserIdETitle(userId: number, title: string) {
	return await prisma.credentials.findUnique({
		where: {
			userId_title: {
				userId,
				title
			}
		}
	});
}

export async function create(credential: CreateCredential) {
	return await prisma.credentials.create({
		data: credential
	});
}

export async function findByUserId(userId: number) {
	return await prisma.credentials.findMany({
		where: {userId}
	});
}