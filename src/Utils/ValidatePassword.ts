import bcrypt from 'bcrypt';

async function VerifyPassword(password: string, encryptedPassword: string){
	const compare: boolean = bcrypt.compareSync(password, encryptedPassword);
	return compare;
}