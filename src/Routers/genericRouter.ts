import { Router } from 'express';
import {GControler} from '../Controllers/genericController';

const genericRouter = Router();

genericRouter.post('/create', GControler);
genericRouter.get('/read', GControler);
genericRouter.put('/update', GControler);
genericRouter.delete('/delete', GControler);

export default genericRouter;

