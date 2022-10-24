import * as yup from 'yup'

export const ImageResizerYupSchema = yup.object({
  filename: yup.string().required(),
  height: yup.number().integer().required().positive().min(1),
  width: yup.number().integer().required().positive().min(1),
})
