import { z } from 'zod'

const studentRegisterSchema = z.object({
  email: z.string().max(100).email(),
})

export const zodValidator = (data: Record<string, any>) => {
  try {
    return studentRegisterSchema.parse(data)
  } catch (err: any) {
    const { path, message } = err.issues[0]
    throw { zod: `${path}: ${message}` }
  }
}
