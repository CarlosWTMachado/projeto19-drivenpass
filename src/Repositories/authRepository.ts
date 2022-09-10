import prisma from '../Config/db';
import {CreateUser} from '../Types/authType';

export async function create(user: CreateUser) {
	return await prisma.users.create({
		data: user
	});
}

export async function findByEmail(email: string) {
	return await prisma.users.findUnique({
		where: { email },
	});
}