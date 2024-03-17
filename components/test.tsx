"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import BasicDetails from "./BasicDetails"
import GenderSelection from "./GenderSelection"
import DateOfBirthPicker from "./DateOfBirthPicker";

const formSchema = z.object({
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
  });


  export function ProfileForm() {
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          gender: undefined,
          dateOfBirth: undefined,
        },
      });
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <BasicDetails control={form.control} />
          <h1 className="font-semibold md:text-xl mt-8 mb-2">
            Other Information
          </h1>
          <div className="flex justify-between items-center">
            <GenderSelection control={form.control} />
             <DateOfBirthPicker control={form.control} />
          </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
  }