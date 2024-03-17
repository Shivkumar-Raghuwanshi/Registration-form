"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import BasicDetails from "./BasicDetails";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import DateOfBirthPicker from "./DateOfBirthPicker";
import GenderSelection from "./GenderSelection";
import TechStackInput from "./TechStackInput";
import { formSchema } from "./formSchema";
import { UserFormData } from "./ParentComponent";
import { ImSpinner9 } from "react-icons/im";

interface UserRegistrationFormProps {
  onSubmit: (data: UserFormData) => void;
}

export const UserRegistrationForm: React.FC<UserRegistrationFormProps> = ({
  onSubmit,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: undefined,
      dateOfBirth: undefined,
      techStack: [],
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = () => {
    const errors = form.formState.errors;
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isFormValid()) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
      onSubmit(values);
    }
  };

  return (
    <div className="bg-zinc-100 p-4 rounded-xl h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col "
        >
          <BasicDetails control={form.control} />
          <h1 className="font-semibold md:text-lg mt-4 mb-2">
            Other Information
          </h1>
          <div className="flex justify-between items-center">
            <GenderSelection control={form.control} />
            <DateOfBirthPicker control={form.control} />
          </div>
          <TechStackInput />
          <div className="flex self-end">
            <Button type="submit" variant="default">
              {isLoading ? <ImSpinner9 className=" w-4 h- 4 animate-spin" /> : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
