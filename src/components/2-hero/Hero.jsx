import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import heroAnimation from "../../../src/assets/Animation/Animation - laptop-light.json";
import heroAnimLight from "../../../src/assets/Animation/Animation - 1701300508474";
import logoName from "../../assets/SVG/nashaat-lattouf-high-resolution-logo-black-transparent.svg"
import logoName1 from "../../assets/SVG/nashaat-lattouf-high-resolution-logo-white-transparent.svg"

export default function Hero({ theme , textEnter, textLeave, iconsLeave}) {
  const title = "Computer and Automation Engineer, Front-End Developer".split(
    " "
  );
  const subtitle =
    " Front-end Developer With 2 Year experience, bulding stable websites and web app in fast-paced , passionate about learning new technologiesand imrove my skills".split(
      " "
    );

  return (
    <section id="hero" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar ">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ duration: 2, type: "spring", damping: 5 }}
            src="./nash1.png"
            className="avatar"
            alt=""
          ></motion.img>
          <span className="icon-verified"></span>
          <img
            src={theme === "light" ? logoName : logoName1}
            alt=""
            width={250}
            height={40}
          />
        </div>

        <motion.h1
          className="title"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          {" "}
          {title.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 5,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.h1>

        <p className="sub-title">
          {subtitle.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.35,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duratio n
              delay: 2,
            },
          }}
          viewport={{ once: true }}
          className="media flex"
        >
          <a
            href="https://www.facebook.com/profile.php?id=100079869421580"
            className="icon icon-facebook-square"
            onMouseEnter={iconsLeave}
            onMouseLeave={textEnter}
          ></a>
          <a
            href=""
            className="icon icon-instagram"
            onMouseEnter={iconsLeave}
            onMouseLeave={textEnter}
          ></a>
          <a
            href="https://github.com/Nashaatlattof"
            className="icon icon-github"
            onMouseEnter={iconsLeave}
            onMouseLeave={textEnter}
          ></a>
          <a
            href="https://www.linkedin.com/in/nashaat-lattof-17883a252/"
            className="icon icon-linkedin-square"
            onMouseEnter={iconsLeave}
            onMouseLeave={textEnter}
          ></a>
        </motion.div>
      </div>

      <motion.div
     
        className="right-section"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: 100,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          y: 0,
          transition: {
            duration: 1, // Animation duration
          },
        }}
      >
        {" "}
        <Lottie
        

          animationData={theme === "light" ? heroAnimation : heroAnimLight}
        />
      </motion.div>
    </section>
  );
}
