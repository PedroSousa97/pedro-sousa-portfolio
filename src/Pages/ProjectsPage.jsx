import { Row, Col } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsPage.css';
import Lottie from 'lottie-react';
import laptopAnimationData from '../assets/laptop.json';
import CardCarousel from '../Components/CardCarousel';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Row className='projects-header' justify="center" align="middle">
        <Col className='projects-header-text'>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Explore an highlight of some of my best projects and projects I've worked on
          </motion.h3>
        </Col>
      </Row>
      <Row className='projects-content' justify="center" align="middle">
        <Col className='projects-content-column'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='projects-container-parent'
          >
            <div className="projects-container">
              <CardCarousel />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='projects-animation'
          >
            <div className="projects-animation-container">
              <div className="projects-animation-icon">
                <Lottie
                  animationData={laptopAnimationData}
                  loop={true}
                />
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectsPage;
