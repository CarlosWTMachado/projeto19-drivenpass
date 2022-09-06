import { Router } from 'express';
import {GControler} from '../Controllers/genericController';

const genericRouter = Router();

genericRouter.post('/create', GControler);
genericRouter.get('/read', GControler);
genericRouter.update('/update', GControler);
genericRouter.delete('/delete', GControler);

export default genericRouter;

