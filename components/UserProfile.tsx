import React from "react";

import { UserFormData } from "./ParentComponent";

interface UserProfileProps extends UserFormData {}

const UserProfile: React.FC<UserProfileProps> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  gender,
  dateOfBirth,
  techStack,
}) => {
  return (
    <div className="bg-zinc-100 p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">User Profile</h2>
      <div className="mb-2">
        <span className="font-medium">Name:</span> {firstName} {lastName}
      </div>
      <div className="mb-2">
        <span className="font-medium">Email:</span> {email}
      </div>
      <div className="mb-2">
        <span className="font-medium">Phone Number:</span> {phoneNumber}
      </div>
      <div className="mb-2">
        <span className="font-medium">Gender:</span> {gender || "Not specified"}
      </div>
      <div className="mb-2">
        <span className="font-medium">Date of Birth:</span>{" "}
        {dateOfBirth ? dateOfBirth.toLocaleDateString() : "Not specified"}
      </div>
      <div className="mb-2">
        <span className="font-medium">Tech Stack:</span>{" "}
        {techStack.length > 0 ? techStack.join(", ") : "Not specified"}
      </div>
    </div>
  );
};

export default UserProfile;
