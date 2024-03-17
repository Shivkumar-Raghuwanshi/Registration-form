import * as z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(3, { message: "First name is required" }),
  lastName: z.string().min(3, { message: "Last name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .refine((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), {
      message: "Invalid email address",
    }),
  phoneNumber: z
    .string()
    .refine(
      (phoneNumber) =>
        phoneNumber.startsWith("+91") &&
        phoneNumber.slice(3).length === 10 &&
        /^\d+$/.test(phoneNumber.slice(3)),
      {
        message:
          "Phone number must start with +91 and be followed by 10 digits",
      }
    ),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select a valid gender" }),
  }),
  dateOfBirth: z.date().refine(
      (dateOfBirth) => {
        const dob = dateOfBirth;
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
          age--;
        }
        return age >= 18 && age <= 100;
      },
      { message: "You must be between 18 and 100 years old" }
    ),
    techStack: z.array(z.string())
});