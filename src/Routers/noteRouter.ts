import { Router } from 'express';
import ValidateToken from '../Middlewares/validateToken';
import {
	CreateNoteController,
	GetNotesController,
	GetNoteByIdController,
	DeleteNoteByIdController,
} from '../Controllers/noteController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import noteSchema from '../Schemas/noteSchema';

const noteRouter = Router();

noteRouter.post('/create/note', schemaValidate(noteSchema), ValidateToken, CreateNoteController);
noteRouter.get('/get/notes', ValidateToken, GetNotesController);
noteRouter.get('/get/note/:id', ValidateToken, GetNoteByIdController);
noteRouter.delete('/note/:id', ValidateToken, DeleteNoteByIdController);

export default noteRouter;