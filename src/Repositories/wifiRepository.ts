import prisma from '../Config/db';
import { CreateWifi } from '../Types/wifiType';

export async function findByUserIdETitle(userId: number, title: string) {
	return await prisma.wifis.findUnique({
		where: {
			userId_title: {
				userId,
				title
			}
		}
	});
}

export async function findByIdEUserId(id: number, userId: number) {
	return await prisma.wifis.findUnique({
		where: {
			id_userId: {
				id,
				userId
			}
		}
	});
}

export async function create(wifi: CreateWifi){
	return await prisma.wifis.create({
		data : wifi
	});
}

export async function findByUserId(userId: number) {
	return await prisma.wifis.findMany({
		where: {userId}
	});
}

export async function deleteById(id: number) {
	return await prisma.wifis.delete({
		where: {id}
	});
}