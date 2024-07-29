import React, { useState, useEffect } from 'react';
import './App.css'
import LandingPage from './Pages/LandingPage'
import LoadingScreen from './Components/LoadingScreen';
import Navbar from './Components/Navbar';
import AboutPage from './Pages/AboutPage';
import CareerPage from './Pages/CareerPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactsPage from './Pages/ContactsPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time for the app
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed for loading

    return () => clearTimeout(timer);
  }, []);

  const MainContent = () => (  
    <div className='main-content'>
      <Navbar />
      <section id="home" className="section">
        <LandingPage />
      </section>
      <section id="about" className="section">
        <AboutPage />
      </section>
      <section id="career" className="section">
        <CareerPage />
      </section>
      <section id="projects" className="section">
        <ProjectsPage />
      </section>
      <section id="contacts" className="section">
        <ContactsPage />
      </section>
    </div>
  );

  return (
    <>
      {isLoading ? <LoadingScreen /> : <MainContent />}
    </>
  )
}

export default App
