import React from 'react'
import './Contact.css'
import Lottie from 'lottie-react'
import contactAnimation from "../../../src/assets/Animation/Animation - 1707181077531 (1).json";
import contactAnimationDark from '../../../src/assets/Animation/Animation - 1707181077531.json'
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

  
 /*  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  } */

const Contact = ({theme}) => {

  const [state, handleSubmit] = useForm("xoqogvne");
  return (
    <>
      <motion.section
        className="contact-us"
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
        <h1 className="title-section">
          <span className="icon-envelope1" />
          Contact Us
        </h1>
        <p className="subtitle">
          if you have any suggestions, projects, free consultations, or even if
          you want to say “hello”, please fill out the form below and I will
          reply to you shortly.
        </p>

        <div className="flex content">
          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y:0,
              x: -300,
            }}
            whileInView={{
              opacity: 1,
              y:0,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
          >
            <div className="flex">
              <label htmlFor="email">Email Address : </label>
              <input required type="email" id="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex" style={{ marginTop: "24px" }}>
              <label htmlFor="message">Your Message : </label>
              <textarea
                required
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" className="submit">
              Submit
            </button>

            {state.succeeded && (
              <div>your message has been sent successfully</div>
            )}
          </motion.form>

          <motion.div
            className="animate"
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
            <Lottie
              style={{ width: "400px" }}
              animationData={
                theme === "light" ? contactAnimation : contactAnimationDark
              }
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Contact
