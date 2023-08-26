import React from "react";
import User from "../components/UserForm/UserForm";

const UserPage: React.FC = () => {
  const userRole = 'A';
  const onSubmit = (formData: FormDataValues) => {
    // Save the form data to Firestore
  };

  return (
    <div>
      <User userRole={userRole} onSubmit={onSubmit} />
    </div>
  );
};

export default UserPage;