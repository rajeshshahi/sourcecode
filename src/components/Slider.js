import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/traditional-work-method.jpeg',
    '/images/ai-to-human.jpeg'  // Updated path without spaces
  ];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // Log the image path for debugging
  console.log("Current Image:", images[index]);

  // Switch images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer); // Clean up timer on component unmount
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '500px', // You can adjust this as needed
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',  // Center horizontally
      alignItems: 'center',      // Center vertically
    }}>
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}  // Display image based on index
          initial={{ opacity: 0, x: 100 }}  // Fade in and slide from right
          animate={{ opacity: 1, x: 0 }}    // Fully visible and in original position
          exit={{ opacity: 0, x: -100 }}    // Fade out and slide to left
          transition={{ duration: 1 }}       // 1 second transition time
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',    // Make sure the image covers the entire div
            backgroundColor: 'lightgray', // Fallback background color
            border: '2px solid red',       // Border to check if image is loaded
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Slider;
