import { Router } from 'express';
import {SignUpController, SignInController} from '../Controllers/authController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import authSchema from '../Schemas/authSchema';

const authRouter = Router();

authRouter.post('/signup', schemaValidate(authSchema), SignUpController);
authRouter.post('/signin', schemaValidate(authSchema), SignInController);

export default authRouter;

