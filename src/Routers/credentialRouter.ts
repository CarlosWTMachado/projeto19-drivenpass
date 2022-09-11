import { Router } from 'express';
import ValidateToken from '../Middlewares/validateToken';
import {CreateCredentialController} from '../Controllers/credentialController';

const credentialRouter = Router();

credentialRouter.post('/create/credential', ValidateToken, CreateCredentialController);
// genericRouter.get('/read', GControler);
// genericRouter.put('/update', GControler);
// genericRouter.delete('/delete', GControler);

export default credentialRouter;