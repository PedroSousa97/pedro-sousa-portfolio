// src/LoadingScreen.js
import React from 'react';
import './LoadingScreen.css'; // This is where the CSS for the loading screen will go

const LoadingScreen = () => (
  <div className="loading-screen">
    <div className="cup">
      <div className="handle" />
    </div>
    <h2>Loading my coffee...</h2>
  </div>
);

export default LoadingScreen;
