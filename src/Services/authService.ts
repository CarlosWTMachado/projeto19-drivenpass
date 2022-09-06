import * as genericRepository from '../Repositories/genericRepository';
import encryptPassword from '../Utils/encryptPassword';

export async function SignUpService(email: string, password: string){
	const encryptedPassword: string = encryptPassword(password);
	return;
}