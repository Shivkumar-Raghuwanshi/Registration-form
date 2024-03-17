"use client"
import React, { useState } from 'react';
import { UserRegistrationForm } from './UserRegistrationForm';
import UserProfile from './UserProfile';

export type UserFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string | undefined;
  dateOfBirth: Date | undefined;
  techStack: string[];
};

const ParentComponent = () => {
  const [formData, setFormData] = useState<UserFormData | null>(null);

  const handleFormSubmit = (data: UserFormData) => {
    setFormData(data);
  };

  return (
    <div className="flex flex-col gap-8">
      <UserRegistrationForm onSubmit={handleFormSubmit} />
      {formData && <UserProfile {...formData} />}
    </div>
  );
};

export default ParentComponent;