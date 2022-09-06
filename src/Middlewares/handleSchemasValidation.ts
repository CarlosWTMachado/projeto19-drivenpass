import Joi from 'joi';

export default function schemaValidate (object: any, schema: Joi.ObjectSchema) {
	const validate = schema.validate(object);
	if(validate.error) {
		console.log(validate.error)
		throw {
			type: 'BadRequest',
			message: `Data validation: ${
				validate.error.details.map((v:any) => v.message)
			}`
		}
	}
}

