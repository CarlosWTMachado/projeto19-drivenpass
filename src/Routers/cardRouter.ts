import { Router } from 'express';
import ValidateToken from '../Middlewares/validateToken';
import * as cardController from '../Controllers/cardController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import cardSchema from '../Schemas/cardSchema';

const noteRouter = Router();

noteRouter.post('/create/card', schemaValidate(cardSchema), ValidateToken, cardController.Create);
// noteRouter.get('/get/notes', ValidateToken, cardController.GetNotesController);
// noteRouter.get('/get/note/:id', ValidateToken, cardController.GetNoteByIdController);
// noteRouter.delete('/note/:id', ValidateToken, cardController.DeleteNoteByIdController);

export default noteRouter;