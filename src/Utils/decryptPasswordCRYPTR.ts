import Cryptr from 'cryptr';
import { CRYPTRSECRET } from '../environmentVariables';

export default function DecryptPasswordCRYPTR(encryptedPassword: string){
	const cryptr = new Cryptr(CRYPTRSECRET());
	const decryptedString = cryptr.decrypt(encryptedPassword);
	return decryptedString;
}