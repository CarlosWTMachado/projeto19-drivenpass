import { Router } from 'express';
import {SignUpController, SignInController} from '../Controllers/authController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import authSchema from '../Schemas/authSchema';

const authRouter = Router();

authRouter.post('/signup', schemaValidate(authSchema), SignUpController);
authRouter.post('/signin', schemaValidate(authSchema), SignInController);
// authRouter.get('/read', GControler);
// authRouter.put('/update', GControler);
// authRouter.delete('/delete', GControler);

export default authRouter;

