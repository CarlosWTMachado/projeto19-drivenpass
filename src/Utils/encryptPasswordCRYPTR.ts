import Cryptr from 'cryptr';
import { CRYPTRSECRET } from '../environmentVariables';

export default function EncryptPasswordCRYPTR(password: string){
	const cryptr = new Cryptr(CRYPTRSECRET());
	const encryptedString = cryptr.encrypt(password);
	return encryptedString;
}