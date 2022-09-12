import joi, { required } from 'joi';

const credentialSchema = joi.object({
	'title': joi.string().required(),
	'url': joi.string().required(),
	'username': joi.string().required(),
	'password': joi.string().required(),
});

export default credentialSchema;