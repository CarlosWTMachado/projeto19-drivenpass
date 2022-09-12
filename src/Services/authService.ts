import * as authRepository from '../Repositories/authRepository';
import EncryptPassword from '../Utils/encryptPasswordBCRYPT';
import VerifyPassword from '../Utils/validatePassword';
import GenerateToken from '../Utils/generateToken';

export async function SignUpService(email: string, password: string){
	const encryptedPassword: string = EncryptPassword(password);
	await authRepository.create({email, password: encryptedPassword});
	return;
}

export async function SignInService(email: string, password: string){
	const user = await authRepository.findByEmail(email);
	if(user === null) throw {
		type: 'NotFound',
		message: 'email and/or password invalid'
	}
	const isValid: boolean = VerifyPassword(password, user.password);
	if(!isValid) throw {
		type: 'NotFound',
		message: 'email and/or password invalid'
	}

	const token = GenerateToken(user);
	return token;
}