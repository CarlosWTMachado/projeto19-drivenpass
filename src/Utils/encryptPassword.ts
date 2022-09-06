import bcrypt from 'bcrypt';

export default function EncryptPassword(password: string): string{
	const encryptedPassword = bcrypt.hashSync(password, 10);
	return encryptedPassword;
}