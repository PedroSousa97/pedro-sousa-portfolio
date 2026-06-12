import { motion } from 'framer-motion';
import './ProjectsPage.css';

import imageToTextLogo from '../assets/imageToText.png';
import paradiseRentsLogo from '../assets/paradiseRents.png';
import codeWord from '../assets/codeword.jpg';
import arkadiumLogo from '../assets/arkadiumLogo.jpg';
import pool from '../assets/pool.jpg';
import crystalCollapseOdyssey from '../assets/crystalCollapseOdyssey.jpg';
import solitaireKitchen from '../assets/solitaireKitchen.jpg';
import kvStore from '../assets/kvStore.png';

export default function Projects() {
  return (
    <section className="projects">

      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">

        {/* 1 */}
        <motion.div className="project-card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={paradiseRentsLogo} alt="Full stack web app" />
          <div className="project-content">

            <h3>Full Stack Rent-a-Car CRM</h3>

            <p>
              As an independent developer, I engineered a comprehensive internal Rent-A-Car web application for{" "}
              <a href="https://www.instagram.com/paradise.rents_madeira/" target="_blank" rel="noreferrer">
                Paradise Rents
              </a>, a local business. This solution, built using the MERN stack, remains the cornerstone of their customer, vehicle, and booking management operations.
            </p>

            <p>Key features include:</p>

            <ul>
              <li>Fully responsive user interface</li>
              <li>Authentication system with brute force protection</li>
              <li>Role-based access control</li>
              <li>Financial reports</li>
              <li>Vehicle management system</li>
              <li>Booking calendar</li>
              <li>Customer database with rental history</li>
            </ul>

          </div>
        </motion.div>

        {/* 2 */}
        <motion.div className="project-card" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={codeWord} alt="Arkadium Codeword" />
          <div className="project-content">

            <h3>Arkadium's Codeword</h3>

            <p>
              Reflecting on my inaugural project at{" "}
              <a href="https://arkadium.com/" target="_blank" rel="noreferrer">Arkadium</a>, a React-based crossword game.
            </p>

            <p>
              <a href="https://www.arkadium.com/games/arkadium-codeword/" target="_blank" rel="noreferrer">
                Arkadium's Codeword
              </a>{" "}
              marked the beginning of my journey in game development.
            </p>

            <p>My contributions included:</p>

            <ul>
              <li>Bug fixing</li>
              <li>Responsiveness improvements</li>
              <li>Printing component implementation</li>
            </ul>

          </div>
        </motion.div>

        {/* 3 */}
        <motion.div className="project-card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={imageToTextLogo} alt="ImageToText extension" />
          <div className="project-content">

            <h3>ImageToText</h3>

            <p>
              Chrome extension using OCR. Over 1,000 users.
            </p>

            <p>
              Right-click any image and extract text instantly.
            </p>

            <a
              href="https://chrome.google.com/webstore/detail/imagetotext/ojmelblegakdgcjacaclnlgdmifgppdb/related?hl=pt-PT"
              target="_blank"
              rel="noreferrer"
            >
              View Extension
            </a>

          </div>
        </motion.div>

        {/* 4 */}
        <motion.div className="project-card" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={pool} alt="8 Ball Pool" />
          <div className="project-content">

            <h3>Arkadium's 8 Ball Pool</h3>

            <p>
              <a href="https://www.arkadium.com/games/free-8-ball-pool/" target="_blank" rel="noreferrer">
                8 Ball Pool
              </a>{" "}
              with advanced physics and Daily Challenge system.
            </p>

            <ul>
              <li>NodeJS level generator</li>
              <li>Leaderboard APIs</li>
              <li>Monetization systems</li>
            </ul>

          </div>
        </motion.div>

        {/* 5 */}
        <motion.div className="project-card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={kvStore} alt="KV Store" />
          <div className="project-content">

            <h3>Embedded Linux KeyValue Store</h3>

            <p>
              <a href="https://github.com/PedroSousa97/Embedded-Linux-KeyValue-Store-App" target="_blank" rel="noreferrer">
                KVStoreAPP
              </a>{" "}
              built in C++ with LevelDB.
            </p>

            <ul>
              <li>Persistent key-value storage</li>
              <li>CLI interface</li>
              <li>Linux + embedded support</li>
              <li>SET / GET / DELETE commands</li>
            </ul>

          </div>
        </motion.div>

        {/* 6 */}
        <motion.div className="project-card" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={crystalCollapseOdyssey} alt="Crystal Collapse Odyssey" />
          <div className="project-content">

            <h3>Crystal Collapse Odyssey</h3>

            <p>
              Progression-based puzzle game at{" "}
              <a href="https://arkadium.com/" target="_blank" rel="noreferrer">Arkadium</a>.
            </p>

            <ul>
              <li>3000-level generator</li>
              <li>Progression system</li>
              <li>Monetization design</li>
            </ul>

          </div>
        </motion.div>

        {/* 7 */}
        <motion.div className="project-card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={solitaireKitchen} alt="Solitaire Kitchen" />
          <div className="project-content">

            <h3>Solitaire Kitchen</h3>

            <p>
              <a href="https://www.arkadium.com/games/solitaire-kitchen/" target="_blank" rel="noreferrer">
                Solitaire Kitchen
              </a>{" "}
              progression solitaire game.
            </p>

            <ul>
              <li>Full game architecture</li>
              <li>Gameplay systems</li>
              <li>Level editor tool</li>
            </ul>

          </div>
        </motion.div>

        {/* 8 */}
        <motion.div className="project-card" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={arkadiumLogo} alt="Level Editor" />
          <div className="project-content">

            <h3>React Level Editor</h3>

            <p>
              Drag & drop level editor built with React + MUI.
            </p>

            <ul>
              <li>Grid-based editor</li>
              <li>Game designer tool</li>
              <li>Fully responsive UI</li>
            </ul>

          </div>
        </motion.div>

      </div>
    </section>
  );
}