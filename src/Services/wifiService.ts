import * as wifiRepository from '../Repositories/wifiRepository';
import { CreateWifi } from '../Types/wifiType';
import encrypter from '../Utils/encrypterCRYPTR';
import decrypter from '../Utils/decrypterCRYPTR';

export async function Create(wifi: CreateWifi){
	const wifiFound = await wifiRepository.findByUserIdETitle(wifi.userId, wifi.title);
	if(wifiFound !== null) throw {
		type: 'Conflict',
		message: 'user alredy have wifi with this title'
	}

	const encryptedPassword = encrypter(wifi.password);
	await wifiRepository.create({...wifi, password: encryptedPassword});
	return;
}

export async function GetAll(userId: number){
	const wifis = await wifiRepository.findByUserId(userId);
	if(wifis.length === 0) throw {
		type: 'NotFound',
		message: 'user has no wifis'
	}

	return wifis.map((wifi) => {
		const decryptedPassword = decrypter(wifi.password);
		return {...wifi, password: decryptedPassword};
	});
}

export async function GetById(wifiId: number, userId: number){
	const wifi = await wifiRepository.findByIdEUserId(wifiId, userId);
	if(wifi === null) throw {
		type: 'NotFound',
		message: 'Wifi not found'
	}

	const decryptedPassword = decrypter(wifi.password);
	return {...wifi, password: decryptedPassword};
}

export async function DeleteById(wifiId: number, userId: number){
	const wifi = await wifiRepository.findByIdEUserId(wifiId, userId);
	if(wifi === null) throw {
		type: 'NotFound',
		message: 'Wifi not found'
	}
	await wifiRepository.deleteById(wifiId);
	return wifi;
}