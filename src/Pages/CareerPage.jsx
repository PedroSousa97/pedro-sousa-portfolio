import { Row, Col } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';
import './CareerPage.css';
import Lottie from 'lottie-react';
import programmerAnimationData from '../assets/programmer.json';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work'; // Import WorkIcon from Material-UI
import SchoolIcon from '@mui/icons-material/School'; // Import SchoolIcon from Material-UI
import StarIcon from '@mui/icons-material/Star';

const CareerPage = () => {
  return (
    <div className="career-page">
      <Row className='career-header' justify="center" align="middle">
        <Col className='career-header-text'>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            I've showcased my skills and adaptability across various domains. Let's start from the beginning...
          </motion.h3>
        </Col>
      </Row>
      <Row className='career-content' justify="center" align="middle">
        <Col className='career-content-column'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='career-container-parent'
          >
            <div className="career-container">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2015 - 2021"
                iconStyle={{ background: 'rgb(204,125,60)', color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">Computer Engineering Bachelor Degree</h3>
                <h4 className="vertical-timeline-element-subtitle">Universidade da Madeira, Funchal</h4>
                <p className="vertical-timeline-element-paragraph">
                  Completed a Bachelor of Science in Computer Engineering while simultaneously working to finance my education.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2016 - 2018"
                iconStyle={{ background: 'rgb(204,125,60)', color: '#fff' }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">From Cashier to Salesman</h3>
                <h4 className="vertical-timeline-element-subtitle">Full-time and Part-time, Funchal</h4>
                <p className="vertical-timeline-element-paragraph">
                  Throughout my studies, I held various part-time and full-time positions, including roles as a cashier, real estate agent, and salesman. I took on any work available to support my parents and help finance my education.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August 2020 - July 2021"
                iconStyle={{ background: 'rgb(204,125,60)', color: '#fff' }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">QA Tester</h3>
                <h4 className="vertical-timeline-element-subtitle">Connecting Software (Part-time), Funchal</h4>
                <ul className="vertical-timeline-element-unordered-list">
                  <li><p className="vertical-timeline-element-paragraph">Started as Intern QA Tester, secured contract within three weeks.</p></li>
                  <li><p className="vertical-timeline-element-paragraph">Developed test plans for manual and automated testing of integration software.</p></li>
                  <li><p className="vertical-timeline-element-paragraph">Conducted compatibility and regression tests.</p></li>
                  <li><p className="vertical-timeline-element-paragraph">Monitored bugs using defect tracking systems.</p></li>
                  <li><p className="vertical-timeline-element-paragraph">Promoted to Customer Support for key integration software product.</p></li>
              </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August 2021 - May 2022"
                iconStyle={{ background: 'rgb(204,125,60)', color: '#fff' }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Embedded Systems Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tech4Home, Funchal</h4>
                <ul className="vertical-timeline-element-unordered-list">
                  <li>
                    <p className="vertical-timeline-element-paragraph">Circuit Schematic and component analysis for future firmware development;</p>
                  </li>                  
                  <li>
                    <p className="vertical-timeline-element-paragraph">Low-level programming in C and C++, of high complexity and efficiency focused firmware Telink and Texas Microcontrollers, that was used on prize winning and feature rich RCU's for Android and Linux set-top-boxes used by worldwide TV service providers;</p>
                  </li>
                  <li>
                    <p className="vertical-timeline-element-paragraph">Integrate and use BLE, IR and Google Voice Protocols;</p>
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="June 2022 - Present"
                iconStyle={{ background: 'rgb(204,125,60)', color: '#fff' }}
                icon={<StarIcon />}
              >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Arkadium, Full Remote</h4>
                <ul className="vertical-timeline-element-unordered-list">
                  <li>
                      <p className="vertical-timeline-element-paragraph">Joined LiveOps as a Junior Software Engineer, specializing in ReactJS for a Crosswords game.</p>
                      <p className="vertical-timeline-element-paragraph">Progressed to managing multiple web games, facilitating communication, and leading feature development in JavaScript and TypeScript.</p>
                  </li>
                  <li>
                      <p className="vertical-timeline-element-paragraph">Promoted to Software Engineer, focused on games with progression and monetization.</p>
                      <p className="vertical-timeline-element-paragraph">Key contributions include dynamic level generation, web-based editing tools, and integrating in-game purchases.</p>
                  </li>
                  <li>
                      <p className="vertical-timeline-element-paragraph">Currently pivotal in crafting a new, monetization-focused web game, a flagship project for Arkadium.</p>
                      <p className="vertical-timeline-element-paragraph">Guiding strategic decisions, product engineering, and infrastructure enhancements.</p>
                  </li>
                  <li>
                      <p className="vertical-timeline-element-paragraph">Mentors and onboards new Software Engineers, ensuring team integration and productivity.</p>
                  </li>
                  <li>
                      <p className="vertical-timeline-element-paragraph">Utilizes extensive tech stack including Azure DevOps, Azure Storage, Git, NGROK, TypeScript, JavaScript, NodeJS, React, Redux, CSS, Webpack, Gulp, Vite, ThreeJS, Go, and more.</p>
                  </li>
              </ul>

              </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='career-animation'
          >
            <div className="career-animation-container">
              <div className="career-animation-icon">
                <Lottie
                  animationData={programmerAnimationData}
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

export default CareerPage;
