import { Router } from 'express';
import ValidateToken from '../Middlewares/validateToken';
import {
	CreateCredentialController,
	GetCredentialController,
	GetCredentialByIdController,
	DeleteCredentialByIdController
} from '../Controllers/credentialController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import credentialSchema from '../Schemas/credentialSchema';

const credentialRouter = Router();

credentialRouter.post('/create/credential', schemaValidate(credentialSchema), ValidateToken, CreateCredentialController);
credentialRouter.get('/get/credentials', ValidateToken, GetCredentialController);
credentialRouter.get('/get/credential/:id', ValidateToken, GetCredentialByIdController);
credentialRouter.delete('/credential/:id', ValidateToken, DeleteCredentialByIdController);

export default credentialRouter;