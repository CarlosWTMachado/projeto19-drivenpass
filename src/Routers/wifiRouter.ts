import { Router } from 'express';
import ValidateToken from '../Middlewares/validateToken';
import * as wifiController from '../Controllers/wifiController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import wifiSchema from '../Schemas/wifiSchema';

const wifiRouter = Router();

wifiRouter.post('/create/wifi', schemaValidate(wifiSchema), ValidateToken, wifiController.Create);
wifiRouter.get('/user/wifis', ValidateToken, wifiController.GetAll);
wifiRouter.get('/user/wifi/:id', ValidateToken, wifiController.GetById);
wifiRouter.delete('/wifi/:id', ValidateToken, wifiController.DeleteById);

export default wifiRouter;