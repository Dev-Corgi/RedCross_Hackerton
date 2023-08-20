import React, { useState, useEffect } from 'react';
import ControllerSetConfig from '@/Controller/ControllerSetConfig';
import Login from '@/app/login/page';

export default function HomePage() {
  console.log("hi")
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsLoading(false); // Mark loading as false when done
  }, []);

  return (
    <>
      {isLoading ? null : <Login />} 
      <ControllerSetConfig />
    </>
  );
}
