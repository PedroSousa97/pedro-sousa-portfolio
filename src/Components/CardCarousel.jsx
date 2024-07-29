import React, { useState, useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './CardCarousel.css';
// import required modules
import { EffectCards } from 'swiper/modules';

import imageToTextLogo from '../assets/imageToText.png';
import paradiseRentsLogo from '../assets/paradiseRents.png';
import codeWord from '../assets/codeword.jpg';
import arkadiumLogo from '../assets/arkadiumLogo.jpg';
import pool from '../assets/pool.jpg';
import crystalCollapseOdyssey from '../assets/crystalCollapseOdyssey.jpg';
import solitaireKitchen from '../assets/solitaireKitchen.jpg';
import kvStore from '../assets/kvStore.png';

const CardCarousel = () => {
  const swiperRef = useRef(null);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isPortrait: window.innerHeight > window.innerWidth,
    });

    let aspectRatio = window.innerWidth / window.innerHeight;
    
    if (windowSize.isPortrait) {
      swiperRef.current.style.height = aspectRatio < 0.5 ? `${swiperRef.current.offsetWidth*2}px` : `${swiperRef.current.offsetWidth + (swiperRef.current.offsetWidth*(1-aspectRatio))}px`;
    } else {
      swiperRef.current.style.height = `${swiperRef.current.offsetWidth/2}px`;
    }
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      let aspectRatio = window.innerWidth / window.innerHeight;
      
      if (window.innerHeight > window.innerWidth) {
        swiperRef.current.style.height = aspectRatio < 0.5 ? `${swiperRef.current.offsetWidth*2}px` : `${swiperRef.current.offsetWidth + (swiperRef.current.offsetWidth*(1-aspectRatio))}px`;
      } else {
        swiperRef.current.style.height = `${swiperRef.current.offsetWidth/1.7}px`;
      }

    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className="card">
            <img className="card-image" src={paradiseRentsLogo} alt='Full stack web app' />
            <div className="card-content">
            <h3 className="card-title-dark">Full Stack Rent-a-Car CRM</h3>
            <p className="card-text-dark">
                As an independent developer, I engineered a comprehensive internal Rent-A-Car web application for <a href="https://www.instagram.com/paradise.rents_madeira/">Paradise Rents</a>, a local business. This solution, built using the MERN stack, remains the cornerstone of their customer, vehicle, and booking management operations.
                <br/><br/>
                Key features include:
            </p>            
            <ul className="card-list-parent">
                <li className="card-list-dark">Fully responsive user interface;</li>
                <li className="card-list-dark">Robust authentication system with brute force attack prevention;</li>
                <li className="card-list-dark">App user management capabilities;</li>
                <li className="card-list-dark">Role-based access control with distinct views and API endpoint permissions for administrators and collaborators;</li>
                <li className="card-list-dark">Detailed financial balance reports for specified time periods;</li>
                <li className="card-list-dark">Vehicle management, from creation to all related details and expenses;</li>
                <li className="card-list-dark">Integrated booking management featuring a calendar view;</li>
                <li className="card-list-dark">Customer database inluding rental history and management system;</li>
            </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="card-image" src={codeWord} alt="Arkadium's Codeword" />
            <div className="card-content">
              <h3 className="card-title-dark">Arkadium's Codeword</h3>
              <p className="card-text-dark">
                Reflecting on my inaugural project at <a href="https://arkadium.com/">Arkadium</a>, a sophisticated React-based Crossword game distinguished by its innovative features and mechanics.
                <br/><br/>
                <a href="https://www.arkadium.com/games/arkadium-codeword/">Arkadium's Codeword</a> marked the commencement of my journey, an endeavor that was as exhilarating as it was intellectually stimulating. The most remarkable aspect is its complete construction utilizing React.
                <br/><br/>
                My contributions encompassed:
              </p>            
              <ul className="card-list-parent">
                  <li className="card-list-dark">Resolving intricate bugs;</li>
                  <li className="card-list-dark">Ensuring seamless responsiveness;</li>
                  <li className="card-list-dark">Implementing advanced features such as the Printing Component;</li>
              </ul>
            </div>
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="card-image" src={imageToTextLogo} alt='imageToText extension' />
            <div className="card-content">
              <h3 className="card-title-light">ImageToText</h3>
              <p className="card-text-light">
                  During my college years, I identified a need for a tool that could seamlessly convert images containing text into editable text. <br/><br/>This led me to delve into AI-driven Optical Character Recognition (OCR) technology and subsequently develop a Chrome Extension named ImageToText. Although it began as a small personal project and hasn't been actively maintained, it continues to function flawlessly and has garnered over 1,000 users.
                  <br/><br/>
                  With ImageToText, users can effortlessly right-click on any image on the web and extract its text using OCR. The extracted text is then copied to the clipboard, ready for use. The extension supports almost any image on the internet and works with various languages.
                  <br/><br/>
                  Explore the convenience of <a href='https://chrome.google.com/webstore/detail/imagetotext/ojmelblegakdgcjacaclnlgdmifgppdb/related?hl=pt-PT'>ImageToText</a>.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="card-image" src={pool} alt="Arkadium's 8 Ball Pool" />
            <div className="card-content">
              <h3 className="card-title-light">Arkadium's 8 Ball Pool</h3>
              <p className="card-text-light">
                  <a href="https://www.arkadium.com/games/free-8-ball-pool/">8 Ball Pool</a> stands as a premier offering from <a href="https://arkadium.com/">Arkadium</a>, showcasing remarkable physics and 3D rendering.
                  <br/><br/>
                  Initially, my role was focused on project maintenance, but I soon took on the responsibility of developing a major feature now known as the Daily Challenge.
                  <br/><br/>
                  Key achievements during my tenure on this project include:
              </p>
              <ul className="card-list-parent">
                  <li className="card-list-light">Designed and implemented the Daily Challenge level generator algorithm using NodeJS;</li>
                  <li className="card-list-light">Played a pivotal role in architectural discussions and coordinated the development of new endpoints for the Daily Challenge leaderboards;</li>
                  <li className="card-list-light">Spearheaded the implementation of monetization strategies within the game;</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="card-image" src={kvStore} alt="Embedded Linux KeyValue Store App" />
            <div className="card-content">
              <h3 className="card-title-dark">Embedded Linux KeyValue Store App</h3>
              <p className="card-text-dark">
                  This project, undertaken as a personal challenge, allowed me to explore my proficiency in C++ and Embedded Linux.
                  <br/><br/>
                  The application, which I have named <a href='https://github.com/PedroSousa97/Embedded-Linux-KeyValue-Store-App'>KVStoreAPP</a>, meets the following specifications:
              </p>
              <ul className="card-list-parent">
                  <li className="card-list-dark">Designed and implemented the Daily Challenge level generator algorithm using NodeJS;</li>
                  <li className="card-list-dark">Persistently store an arbitrary number of key-value pairs to disk, using LevelDB;</li>
                  <li className="card-list-dark">Controlled via stdin/stdout (command line);</li>
                  <li className="card-list-dark">Allows for it to be changed to be controlled over other interface, using IPC;</li>
                  <li className="card-list-dark">Supports SET/GET/DELETE commands as shown below:</li>
                  <li className="card-list-dark">Compiles and runs on any desktop Linux;</li>
                  <li className="card-list-dark">Can be added as a package to an embedded Linux build for any ARM architecture (so part of the rootfs produced by your build system) using Buildroot. The Buildroot packages can be found inside the Buildroot Build folder. It can run in an emulated environment such as QEMU;</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="card-image" src={crystalCollapseOdyssey} alt="Arkadium Crystal Collapse Odyssey" />
            <div className="card-content">
              <h3 className="card-title-dark">Arkadium's Crystal Collapse Odyssey</h3>
              <p className="card-text-dark">
                  My inaugural project in progression game development at <a href="https://arkadium.com/">Arkadium</a> marked my entry into the realm of game creation.
                  <br/><br/>
                  <a href="https://www.arkadium.com/games/crystal-collapse-odyssey/">Crystal Collapse Odyssey</a> evolved from the original Crystal Collapse game, introducing progression-based mechanics and monetization strategies.
                  <br/><br/>
                  As the sole developer of this game, my key contributions included:
              </p>
              <ul className="card-list-parent">
                  <li className="card-list-dark">Implemented innovative features and game mechanics, such as new blockers and boosts;</li>
                  <li className="card-list-dark">Assumed leadership roles and guided decision-making processes during project development and architectural planning;</li>
                  <li className="card-list-dark">Pioneered the monetization strategies within the game;</li>
                  <li className="card-list-dark">Integrated progression features to enhance the game into a progression-based experience;</li>
                  <li className="card-list-dark">Developed an automatic level generator algorithm using NodeJS, capable of generating levels closely aligned with a target difficulty progression graph, successfully creating 3000 levels automatically;</li>
                  <li className="card-list-dark">Created a manual Level Creator and Editor tool, empowering Game Designers to fully create and edit game levels;</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="card-image" src={solitaireKitchen} alt="Arkadium Solitaire Kitchen" />
            <div className="card-content">
              <h3 className="card-title-light">Arkadium's Solitaire Kitchen</h3>
              <p className="card-text-light">
                  <a href="https://www.arkadium.com/games/solitaire-kitchen/">Solitaire Kitchen</a> stands as one of the most sophisticated and polished HTML5 games developed by <a href="https://arkadium.com/">Arkadium</a>, and I had the privilege of being a part of this project!
                  <br/><br/>
                  Collaborating closely with another developer, we built this stunning progression-based solitaire game from the ground up.
                  <br/><br/>
                  This game tested the limits of our artistic and algorithmic capabilities, resulting in an outstanding product thanks to the incredible team involved.
                  <br/><br/>
                  My key responsibilities included:
              </p>
              <ul className="card-list-parent">
                  <li className="card-list-light">Developed the entire game from the user interface to all core mechanics;</li>
                  <li className="card-list-light">Played an integral role in architectural decisions, significantly influencing key development choices;</li>
                  <li className="card-list-light">Independently created a comprehensive, user-friendly Level Editor for the game, with more details available on the next card;</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="card-image" src={arkadiumLogo} alt='React Level Editor' />
            <div className="card-content">
              <h3 className="card-title-light">React Level Editor</h3>
              <p className="card-text-light">
                  Among my most significant and impactful projects at <a href="https://arkadium.com/">Arkadium</a>, I independently developed a feature-rich, user-friendly Level Editor for Solitaire Kitchen, leveraging Vite, React, and MUI.
                  <br/><br/>
                  The editor empowers our Game Designers to create levels effortlessly by visually dragging and dropping game elements onto the grid. The grid is a perfect projection of the actual game board, allowing for quick and efficient level creation. Moreover, the editor is fully responsive.
                  <br/><br/>
                  Everything is easily customizable, from board game elements to detailed level specifications, through intuitive user-friendly inputs.
              </p>
            </div>
          </div>
        </SwiperSlide>
    </Swiper>
  );
};

export default CardCarousel;