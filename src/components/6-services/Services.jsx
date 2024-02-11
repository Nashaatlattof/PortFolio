import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const myServices = [
  {
    title: "Build React App",
    subtitle:
      "I can build your dream website using React App with more advanced features and libraries.",
    price: "$150",
  },
  {
    title: "Build Basic Website",
    subtitle:
      "I can build your basic website using Html, CSS, and JavaScript without animations or libraries.",
    price: "$60",
  },
  {
    title: "Build Static Website",
    subtitle:
      "I can build your Static website using Html, and CSS without animations or JavaScript Code, or libraries.",
    price: "$30",
  },
  {
    title: "Responsiveness Solutions( Hourly )",
    subtitle:
      "I can solve any responsive issue in your website by taking care of different screen sizes and providing a report clarifying the issue and how to prevent it the next time.",
    price: "$15",
  },
  {
    title: "Editing Website( Hourly )",
    subtitle:
      "I can edit your website if you need to fix, add or delete any part of your code.",
    price: "$15",
  },
];
const Services = () => {
  return (
    <motion.section
      className="services"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: -100,
        y: -200,
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
      <h1 className="title-section">Services</h1>
      <div className="subtitle">
        <p className="subtitle-section">What I Do </p>
        <p className="subtitle">
          I help ambitious businesses like yours generate more profits by
          building awareness, driving web traffic, connecting with customers,
          and growing overall sales.
        </p>
      </div>
      <div className="all-services flex ">
        {myServices.map((box, key) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: key % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="info-box"
              key={key}
            >
              <div className="info-box-data">
                <h1 className="title-serv">{box.title}</h1>
                <p className="sub-title">{box.subtitle}</p>
              </div>
              <div className="info-box-price">
                <p>Starts from</p>
                <span>{box.price}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Services;
