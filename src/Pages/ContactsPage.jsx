import { Row, Col } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';
import './ContactsPage.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactsPage = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+351969850692';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:henriquesantos293@gmail.com';
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/PedroSousa97', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/pedro-henrique-santos-sousa-5800661a4/', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/peterhssousa/', '_blank');
  };


  return (
    <div className="contacts-page">
      <Row className='contacts-header' justify="center" align="middle">
        <Col className='contacts-header-text'>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Contacts
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Want to know more? Reach out through these channels!
          </motion.h3>
        </Col>
      </Row>
      <Row className='contacts-content' justify="center" align="middle">
        <Col className='contacts-content-column'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='contacts-container-parent'
          >
            <div className="contacts-container">
            <PhoneIphoneIcon className="contacts-icon" onClick={handlePhoneClick} />
            <EmailIcon className="contacts-icon" onClick={handleEmailClick} />
            <GitHubIcon className="contacts-icon" onClick={handleGitHubClick} />
            <LinkedInIcon className="contacts-icon" onClick={handleLinkedInClick} />
            <InstagramIcon className="contacts-icon" onClick={handleInstagramClick} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='contacts-image'
          >
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactsPage;
