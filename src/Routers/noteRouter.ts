import { Router } from 'express';
import ValidateToken from '../Middlewares/validateToken';
import {
	CreateNoteController,
} from '../Controllers/noteController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import noteSchema from '../Schemas/noteSchema';

const noteRouter = Router();

noteRouter.post('/create/note', schemaValidate(noteSchema), ValidateToken, CreateNoteController);

export default noteRouter;