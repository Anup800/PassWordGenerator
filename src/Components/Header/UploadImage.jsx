import React, { use, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function UploadImage() {
    const loc = useLocation();
    const userDetails = loc.state;
    const BASE_URL = 'https://localhost:44352/api/Users/uploadImage';
    const [userImage,setUserImage]= useState(null);
    const formData = new FormData();
     // matches backend param name
    const UploadImage = async (e)=>{
      e.preventDefault();
    try {
    formData.append('file', userImage);
    const response = await axios.post(`${BASE_URL}?id=${userDetails.id}`, formData);
    //const response = await axios.post(BASE_URL,userImage,userDetails.id);
    return response.data;
  }
   catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }

    }

  return (
    <>
    <div>UploadImage</div>
     <div className=" bg-gray-100 p-4">
   
      
        <input
          type='file'
          className="mt-4 max-w-xs rounded shadow-md"
          onChange={(e)=>{setUserImage(e.target.value)}}
        />
        <button onClick={UploadImage}>Submit</button>
    </div> 
    </>
  )
}

export default UploadImage