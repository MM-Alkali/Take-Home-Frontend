import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userC.css";

interface UserData {
  id: string;
  name: string;
  companyName: string;
  numOfUsers: number;
  numOfProducts: number;
  image: File | null;
}

interface UserCViewProps {
  onImageUpload: (file: File, userId: string) => void;
  onCompare: () => void;
}

const UserCView: React.FC<UserCViewProps> = ({ onImageUpload }) => {
  const [userList, setUserList] = useState<UserData[]>([]);

  useEffect(() => {
    // Fetch user data using Axios
    axios.get("http://localhost:5000/data/getUserdata").then((response: { data: { users: React.SetStateAction<UserData[]>; }; }) => {
      setUserList(response.data.users);
    });
  }, []);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    userId: string
  ) => {
    const selectedImage = e.target.files && e.target.files[0];
    if (selectedImage) {
      const updatedUserList = userList.map((user) =>
        user.id === userId ? { ...user, image: selectedImage } : user
      );
      setUserList(updatedUserList);
      onImageUpload(selectedImage, userId);
    }
  };

  return (
    <div className="user-c-container">
      <h2>User C Dashboard</h2>
      <div className="user-cards-container">
        {userList.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-image">
              {user.image ? (
                <img src={URL.createObjectURL(user.image)} alt="User" />
              ) : (
                <div className="initials-placeholder">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div className="user-info">
              <h3>Company Name: {user.name}</h3>
              <p>Number of Users: {user.numOfUsers}</p>
              <p>Number of Products: {user.numOfProducts}</p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, user.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCView;
