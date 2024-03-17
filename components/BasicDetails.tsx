import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface BasicDetailsProps {
  control: any;
}

interface FormFieldData {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

const BasicDetails: React.FC<BasicDetailsProps> = ({ control }) => {
  const formFields: FormFieldData[] = [
    { name: "firstName", label: "First Name", placeholder: "Enter First name", type: "text" },
    { name: "lastName", label: "Last Name", placeholder: "Enter Last lame", type: "text" },
    { name: "email", label: "Email", placeholder: "abcd@example.com", type: "text" },
    { name: "phoneNumber", label: "Phone Number", placeholder: "+911234567890", type: "text" },
  ];

  return (
    <div className="w-full">
      <h1 className="font-semibold md:text-lg mb-2">Basic Details</h1>
      <div className="grid grid-cols-2 gap-4">
        {formFields.map((inputField, index) => (
          <FormField
            key={index}
            control={control}
            name={inputField.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" font-semibold text-sm">{inputField.label}</FormLabel>
                <FormControl>
                  <Input
                    type={inputField.type}
                    placeholder={inputField.placeholder}
                    {...field}
                    className="text-black w-96"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default BasicDetails;