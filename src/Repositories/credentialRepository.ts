import prisma from '../Config/db';

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