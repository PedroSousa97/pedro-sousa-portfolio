import { Row, Col } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';
import adaptabilityAnimationData from '../assets/adaptability.json';
import bookAnimationData from '../assets/book.json';
import brainAnimationData from '../assets/brain.json';
import rocketAnimationData from '../assets/rocket.json';
import scalableAnimationData from '../assets/scalable.json';
import teamWorkAnimationData from '../assets/teamWork.json';
import AboutSkillComponent from '../Components/AboutSkillComponent';

const AboutPage = () => {
  return (
    <div className="about-page">
      <span className="circle_a"></span>
      <Row className='about-header' justify="center" align="middle">
        <Col className='about-header-text'>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Who is Pedro Sousa?
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            A passionate Software Engineer specializing in Web Development.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <b>Ambitious</b> and <b>resilient</b> in achieving my dreams, I started working immediately after high school to fund my college education.
          </motion.h3>
        </Col>
      </Row>
      <Row className='about-content' justify="center" align="middle">
        <Col className='about-column'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <AboutSkillComponent animationData={adaptabilityAnimationData} text="I thrive in dynamic environments, quickly learning and adapting to new challenges." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <AboutSkillComponent animationData={scalableAnimationData} text="I am dedicated to delivering high-quality, scalable, and maintainable code." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <AboutSkillComponent animationData={bookAnimationData} text="I constantly seek new challenges to broaden my knowledge and skills." />
          </motion.div>
        </Col>
        <Col className='about-column content2'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <AboutSkillComponent animationData={rocketAnimationData} text="My fierce drive inspires and guides teams to achieve excellence and innovation." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <AboutSkillComponent animationData={brainAnimationData} text="I tackle complex challenges with creativity and precision, delivering innovative solutions." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <AboutSkillComponent animationData={teamWorkAnimationData} text="I collaborate effectively, bringing versatility and expertise to any team." />
          </motion.div>
        </Col>
      </Row>      
      <span className="circle_b"></span>
    </div>
  );
}

export default AboutPage;
