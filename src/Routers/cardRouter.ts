import { Router } from 'express';
import ValidateToken from '../Middlewares/validateToken';
import * as cardController from '../Controllers/cardController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import cardSchema from '../Schemas/cardSchema';

const cardRouter = Router();

cardRouter.post('/create/card', schemaValidate(cardSchema), ValidateToken, cardController.Create);
cardRouter.get('/user/cards', ValidateToken, cardController.GetCards);
cardRouter.get('/user/card/:id', ValidateToken, cardController.GetCardById);
cardRouter.delete('/card/:id', ValidateToken, cardController.DeleteById);

export default cardRouter;