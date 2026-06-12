import { motion } from 'framer-motion';
import AvatarImg from '../assets/Avatar-NoBG.png';
import './LandingPage.css';

const textVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

const imageVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="landing-container">

        <motion.div
          className="landing-text"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="name">Pedro Sousa</h1>
          <h2 className="career">
            Software Engineer & Web Developer
          </h2>
        </motion.div>

        <motion.div
          className="landing-image"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <img
            src={AvatarImg}
            alt="Pedro Sousa"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default LandingPage;