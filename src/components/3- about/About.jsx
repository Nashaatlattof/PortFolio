import React from 'react'
import Svgbox from '../../assets/SVG/download.svg'
import './about.css'
import { AnimatePresence, motion } from "framer-motion";
const About = () => {
  return (
    <section className="about-us" id="about">
      <h1 className="title-section">ABOUT ME</h1>
      <p className="subtitle-section">Who Am I?</p>
      <p className="subtitle">
        Hi, I'm A Front-End Developer, I Can Build A Dream Website With High
        Quality, Best Performance, Best SEO, And A Responsive Website, So Don't
        Waste Your Time And Let Me Help Your Business To Fly Up There.
      </p>
      <div className="social-data">
        <div className="info">
          <div className="social-bar">
            <span className="data-key">Name</span>
            <span className="data-value">nashaat lattouf</span>
          </div>
          <div className="social-bar">
            <span className="data-key">position</span>
            <span className="data-value">react deveoper</span>
          </div>
          <div className="social-bar">
            <span className="data-key">adress</span>
            <span className="data-value">syria, damascus</span>
          </div>
          <div className="social-bar">
            <span className="data-key">email</span>
            <a href="" className="data-value">
              nashaatlattof@gmail.com
            </a>
          </div>
          <div className="social-bar">
            <span className="data-key">linkedIn</span>
            <a href="" className="data-value">
              nashaatlattouf
            </a>
          </div>
          <div className="social-bar">
            <span className="data-key">Phone</span>
            <span className="data-value">+963-991889924</span>
          </div>
        </div>

        <motion.article
          className="cv"
          initial={{
            opacity: 0,

            y: 200,
          }}
          whileInView={{
            opacity: 1,

            y: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <a href="/cv-sudan.pdf" download="cv-sudan.pdf">
            <div className="wrap-download">
              <img src={Svgbox} className="down-box" alt="" />

              <p>download CV</p>
            </div>
          </a>
        </motion.article>
      </div>
    </section>
  );
}

export default About
