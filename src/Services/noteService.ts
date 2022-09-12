import * as noteRepository from '../Repositories/noteRepository';

export async function CreateNote(
	userId: number,
	title: string,
	note: string
){
	const noteFound = await noteRepository.findByUserIdETitle(userId, title);
	if(noteFound !== null) throw {
		type: 'Conflict',
		message: 'user alredy have note with this title'
	}

	await noteRepository.create({userId, title, note});
	return;
}