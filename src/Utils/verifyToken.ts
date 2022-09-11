import jwt from 'jsonwebtoken';
import {JWTSECRET} from '../environmentVariables';

export default function VerifyToken(authorization: string){
	try{
		const token = authorization.replace('Bearer ', '');
		const dados = jwt.verify(token, JWTSECRET());
		return dados;
	}catch (error){
		throw {type: 'Unauthorized', message: 'Invalid Token'};
	}
}