import Joi, { CustomHelpers } from 'joi'
import { ProductsFilterFormData } from '@/pages/ProductList/components/AsideFilter/AsideFilter'

export const schemaCommonAuth = Joi.object({
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

export const schemaProductsFilter = Joi.object<ProductsFilterFormData>({
  price_min: Joi.string().trim().allow(''),
  price_max: Joi.string().trim().allow('')
})
  .custom((value: ProductsFilterFormData, helpers: CustomHelpers<ProductsFilterFormData>) => {
    if (!value.price_min && !value.price_max) {
      return helpers.error(
        'value.invalid',
        {},
        {
          path: ['price_min']
        }
      )
    }
    if (value.price_min && value.price_max && Number(value.price_min) > Number(value.price_max)) {
      return helpers.error(
        'value.invalid',
        {},
        {
          path: ['price_min']
        }
      )
    }
    return value
  })
  .messages({
    'value.invalid': 'Vui lòng điền khoảng giá phù hợp'
  })
