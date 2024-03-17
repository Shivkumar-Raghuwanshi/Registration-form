"use client";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface DateOfBirthPickerProps {
  control: any;
}

const DateOfBirthPicker: React.FC<DateOfBirthPickerProps> = ({ control }) => {
  return (
    <>
      <FormField
        control={control}
        name="dateOfBirth"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className=" font-semibold text-sm">
              Date of Birth
            </FormLabel>
            <FormControl>
              <DatePicker
                selected={field.value ? new Date(field.value) : null}
                onChange={(date) => field.onChange(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                maxDate={new Date()}
                className="w-96 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default DateOfBirthPicker;
