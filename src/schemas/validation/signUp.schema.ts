import { z } from 'zod'

const usernameValidation = z
      .string()
      .min(4, "Username must be atleast 4 characters")
      .max(20, "Username must be no more than 20 characters")
      .regex(/^[a-zA-z0-9]+$/, "Please enter a valid username")

const emailValidation = z
      .string()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address")

const passwordValidation = z
     .string()
     .min(8, 'Password must be at least 8 characters long')
     .max(40, 'Password must be no more than 40 characters')

const signUpSchema = z.object({
      username: usernameValidation,
      email: emailValidation,
      password: passwordValidation
})

export default signUpSchema