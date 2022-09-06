import * as genericRepository from '../Repositories/genericRepository';
import EncryptPassword from '../Utils/encryptPassword';
import VerifyPassword from '../Utils/validatePassword';
import GenerateToken from '../Utils/generateToken';

export async function SignUpService(email: string, password: string){
	const encryptedPassword: string = EncryptPassword(password);
	console.log(encryptedPassword);
	return;
}

export async function SignInService(email: string, password: string){
	// const isValid: boolean = VerifyPassword(password, encryptedPassword);
	// console.log(isValid);
	const token = GenerateToken({email, password});
	console.log(token);
	return;
}