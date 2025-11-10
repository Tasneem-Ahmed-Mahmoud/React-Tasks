import * as z from "zod"; 
 
// register validation
export const registerSchema = z.object({
  name:z.string('name is required').nonempty('name is required').max(3,'name is too long').min(3,'name is too short'),
  email:z.email('email is invalid'),
  password:z.string().nonempty('password is required').min(6,'password is too short').max(20,'password is too long'),
  rePassword:z.nonempty('rePassword is required'),
  dateOfBirth:z.nonempty('birthDate is required'),
  gender:z.nonempty('gender is required')
})
// login validation
  export const loginSchema = z.object({
  email:z.nonempty('email is required').email('email is invalid'),
  password:z.nonempty('password is required'),
})
