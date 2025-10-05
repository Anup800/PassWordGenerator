import { useState,useCallback, useEffect } from 'react'
import "tailwindcss";




function PasswordGenerator() {
  const [ischaracters, setIsCharacters] = useState(false);
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [password,setPassword]= useState("");
  const passwordGenerator = useCallback(()=>{ 
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
  } , [length,isNumber,ischaracters,setPassword])
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);
  return (
    <>
    <div className="h-screen flex items-center justify-center">
      <input type="text"
      value={password}
      className='outline-none py-1 px3'
      placeholder='password'
      readOnly />
      <button>Copy</button>
      <div>
        <input type="range"
        min={8}
        max={100}
        value={
          length}
        onChange={(e)=>{setLength(e.target.value)}} />
        <label>length {length}</label>
      </div>
      <div>
        <input type="checkbox"
       defaultChecked= {isNumber}
        onChange={(e)=>{setIsNumber((prev)=>!prev)}} />
        <label>Number </label>
      </div>
       <div>
        <input type="checkbox"
       defaultChecked= {ischaracters}
        onChange={(e)=>{setIsCharacters((prev)=>!prev)}} />
        <label>character </label>
      </div>
      
    </div>
   
    </>
  )
}

export default PasswordGenerator
