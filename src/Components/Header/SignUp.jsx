import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function SignUp() {
  const navigate = useNavigate();
  const BASE_URL = 'https://localhost:44352/api/Users';
  const [userDetails, setUserDetails] = useState({

    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'email@xyz',
    password: 'pass@123',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response = await axios.post(BASE_URL,userDetails);
     console.log(response);
      navigate('/UploadImage', { state: userDetails });
    } catch (error) {
      console.error('Failed to submit user:', error);
    }

    console.log('Submitted:', userDetails);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="p-4" htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleChange}
            className='bg-blue-500 border border-black text-white p-2'
          />
        </div>

        <div>
          <label className="p-4" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleChange}
            className='bg-blue-500 border border-black text-white p-2'
          />
        </div>

        <div>
          <label className="p-4" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className='bg-blue-500 border border-black text-white p-2'
          />
        </div>

        <div>
          <label className="p-4" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            className='bg-blue-500 border border-black text-white p-2'
          />
        </div>

        <button type="submit" className='bg-red-500 border border-black text-white p-2 mt-4'>
          SUBMIT AND NEXT
        </button>
      </form>
    </div>
  );
}

export default SignUp;
