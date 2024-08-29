import Joi from 'joi'

export const schemaCommon = Joi.object({
  email: Joi.string()
    .required()
    .min(5)
    .max(160)
    .pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))
    .messages({
      'string.pattern.base': 'Email không hợp lệ',
      'string.min': 'Email phải có ít nhất 5 ký tự',
      'string.max': 'Email không được quá 160 ký tự',
      'string.empty': 'Email không được để trống',
      'any.required': 'Email không được để trống'
    }),
  password: Joi.string()
    .min(6)
    .required()
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{6,20}/)
    .messages({
      'string.min': 'Password phải có ít nhất 6 ký tự',
      'string.pattern.base': 'Password phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt',
      'string.empty': 'Password không được để trống',
      'any.required': 'Password không được để trống'
    })
})
