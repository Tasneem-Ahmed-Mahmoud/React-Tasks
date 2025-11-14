import * as z from "zod";

// register validation
export const registerSchema = z
  .object({
    name: z
      .string("name is required")
      .nonempty("name is required")
      .max(30, "name is too long")
      .min(3, "name is too short"),
    email: z.email("email is invalid"),
    password: z
      .string()
      .nonempty("password is required")
      .min(3, "password is too short")
      .max(20, "password is too long"),
    rePassword: z.string().nonempty("rePassword is required"),
    dateOfBirth: z
      .string()
      .nonempty("birthDate is required")
      .refine((data) => {
        const currentYear = new Date().getFullYear();
        const birthYear = new Date(data).getFullYear();
        return currentYear - birthYear >= 18;
      },{message:"date of birth must be at least 18 years old"}),
    gender: z.string().nonempty("gender is required"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "passwords do not match",
    path: ["rePassword"],
  });

// login validation
export const loginSchema = z.object({
  email: z.string().nonempty("email is required").email("email is invalid"),
  password: z.string().nonempty("password is required"),
});
