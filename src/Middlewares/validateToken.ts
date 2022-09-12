import Joi from 'joi';
import {Request, Response, NextFunction} from 'express';
import tokenSchema from '../Schemas/tokenSchema';
import VerifyToken from '../Utils/verifyToken';

export default function schemaValidateToken (req: Request, res: Response, next: NextFunction) {
	const {authorization} = req.headers;
	const validate = tokenSchema.validate({authorization});
	if(validate.error) throw {
		type: 'Unauthorized',
		message: 'Invalid token'
	};
	const token = authorization ? authorization.replace('Bearer ', '') : '';
	const data = VerifyToken(token);
	res.locals.tokenData = data;
	next();
}