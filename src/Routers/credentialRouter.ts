import { Router } from 'express';
import ValidateToken from '../Middlewares/validateToken';
import {CreateCredentialController} from '../Controllers/credentialController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import credentialSchema from '../Schemas/credentialSchema';

const credentialRouter = Router();

credentialRouter.post('/create/credential', schemaValidate(credentialSchema), ValidateToken, CreateCredentialController);
// genericRouter.get('/read', GControler);
// genericRouter.put('/update', GControler);
// genericRouter.delete('/delete', GControler);

export default credentialRouter;