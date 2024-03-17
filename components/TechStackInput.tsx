// TechStackInput.tsx
"use client";
import React, { useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";

const TechStackInput: React.FC = () => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
  } = useController({
    name: "techStack",
    control,
  });

  const [newTech, setNewTech] = useState("");

  const handleAddTech = () => {
    if (newTech.trim()) {
      onChange([...(value || []), newTech.trim()]);
      setNewTech("");
    }
  };

  const handleRemoveTech = (index: number) => {
    const updatedTechStack = [...value];
    updatedTechStack.splice(index, 1);
    onChange(updatedTechStack);
  };

  return (
    <div className="w-96 gap-8 mt-2">
      <div className="flex justify-between items-center">
        <Label className="mb-2 font-semibold text-sm">Tech Stack</Label>
        <Plus onClick={handleAddTech} className="mr-4 w-4 h-4 cursor-pointer stroke-[4px]"/>
      </div>
      <div className="flex gap-2 mt-2">
        <Input
          type="text"
          placeholder="Enter tech stack"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
          className="text-black w-96"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {value?.map((tech: string, index: number) => (
          <div
            key={index}
            className="bg-gray-200 px-2 py-2 flex justify-between items-center rounded-md gap-1 w-96"
          >
            <span>{tech}</span>
            <X onClick={() => handleRemoveTech(index)} className="mr-2 w-4 h-4 cursor-pointer stroke-[4px]"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackInput;
