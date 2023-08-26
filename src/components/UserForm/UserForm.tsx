import React, { useState } from 'react';
import './UserForm.css';

interface UserFormProps {
  userRole: 'A' | 'B';
  onSubmit: (formData: FormDataValues) => void;
}

interface FormDataValues {
  companyName: string;
  numUsers: number;
  numProducts: number;
  percentage: any;
}

const UserForm: React.FC<UserFormProps> = ({ userRole }) => {
  const [companyName, setCompanyName] = useState('');
  const [numUsers, setNumUsers] = useState(0);
  const [numProducts, setNumProducts] = useState(0);

  const handleSubmit = () => {
    const formData: FormDataValues = {
      companyName,
      numUsers,
      numProducts,
      percentage: userRole === 'A' ? (numUsers / numProducts) * 100 : undefined,
    };

    // Call the backend API to submit the user data
    fetch(`http://localhost:5000/data/submitUserData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          alert('User data updated successfully.');
        } else {
          alert('Something went wrong.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong.');
      });
  };

  return (
    <div className='user-form-container'>
      <h2>{userRole === 'A' ? 'User A Form' : 'User B Form'}</h2>
      <input
        type="text"
        placeholder="Company Name"
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of Users"
        value={numUsers}
        onChange={(e) => setNumUsers(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Number of Products"
        value={numProducts}
        onChange={(e) => setNumProducts(Number(e.target.value))}
      />
      {userRole === 'A' && (
        <input
          type="number"
          placeholder="Percentage"
          value={(numUsers / numProducts) * 100}
        />
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserForm;