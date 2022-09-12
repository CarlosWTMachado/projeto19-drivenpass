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

export async function GetNotes(userId: number){
	const notes = await noteRepository.findByUserId(userId);
	if(notes.length === 0) throw {
		type: 'NotFound',
		message: 'user has no notes'
	}
	return notes;
}

export async function GetNoteById(noteId: number, userId: number){
	const note = await noteRepository.findByIdEUserId(noteId, userId);
	if(note === null) throw {
		type: 'NotFound',
		message: 'Note not found'
	}
	return note;
}