import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Intro from './Working_intro';
import ControllerSetConfig from '@/Controller/ControllerSetConfig';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsLoading(false); // Mark loading as false when done
  }, []);

  return (
    <>
      {isLoading ? null : <Intro />} 
      <ControllerSetConfig />
    </>
  );
}
