
'use client'
import React from 'react';
import Hero from './components/Hero'; // Ensure correct path
import Newproducts from './components/Newproducts'; // Ensure correct path
import Testimonial from './components/Testimonial'; // Ensure correct path

export default function Home() {
  return (
    <main>
      <Hero />
      <Newproducts />
      <Testimonial />
    </main>
  );
}
