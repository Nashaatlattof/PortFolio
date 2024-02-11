import React, { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
 import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaJs } from "react-icons/fa";
import "./Skills.css";
import SvgPages from "../../assets/SVG/SvgPages";
/*  import { ReactComponent as ReduxIcon } from "../../assets/imgs/icons8-redux-100.svg";
 */ 
const SkillsSection = () => {
  const [showIcons, setShowIcons] = useState(false);

   const iconsProps = useSprings(
    8, // numbers of icons
    [...Array(8)].map((_, i) => ({
      opacity: showIcons ? 1 : 0,
      transform: showIcons ? "translateY(0)" : "translateY(100px)",
      config: { duration: 500 },
      delay: showIcons ? i * 300 : 0, 
    }))
  ); 

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-section");

      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight / 2 && rect.bottom >= 0;

        setShowIcons(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <div id="skills-section">
      <h2 className="title-section">My Skills</h2>
      <p className="subtitle-section">Technologies I use?</p>
      <div className="icons-container">
        {iconsProps.map((props, index) => (
          <animated.div key={index} style={props}>
            {index === 0 && <FaHtml5 className="icon" />}
            {index === 1 && <FaCss3 className="icon" />}
            {index === 2 && <FaReact className="icon" />}
            {index === 3 && <FaNodeJs className="icon" />}
            {index === 4 && <FaDatabase className="icon" />}
            {index === 5 && <FaBootstrap className="icon" />}
            {index === 6 && <FaJs className="icon" />}
            {index === 7 && <SvgPages className="icon" />}
            {/*      {  index === 7 && <ReduxIcon className="icon" />}
             */}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
