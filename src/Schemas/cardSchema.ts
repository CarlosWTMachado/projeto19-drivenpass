import joi from 'joi';

const cardSchema = joi.object({
	'title': joi.string().required(),
	'number': joi.string().creditCard().required(),
	'name': joi.string().required(),
	'cvc': joi.number().required(),
	'expirationDate': joi.string().required(),
	'password': joi.string().required(),
	'isVirtual': joi.boolean().required(),
	'type': joi.string().pattern(/^(credit|debit|creditdebit)$/).required(),
});

export default cardSchema;