import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Footer from './components/8-footer/Footer'
import Main from './components/5-main/Main'
import './App.css'
import Contact from './components/7-contact/Contact'
import Services from './components/6-services/Services'
import SkillsSection from './components/4-skills/SkillsComponent'
import Cookie from "cookie-universal";
import {  useState } from 'react'
import About from './components/3- about/About'
import AwesomeCursor from './components/AwesomeCursor'

function App() {
  const cookie = Cookie();
  const [theme, setTheme] = useState(cookie.get("currentMode"));

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    cookie.set("currentMode", newTheme);
    setTheme(newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

const [cursorVariants, setCursorVariants] = useState("default");
     const textEnter = () => {
       setCursorVariants("text");
     };
     const textLeave = () => {
       setCursorVariants("default");
     };
     const iconsLeave = () => {

      setCursorVariants("icons")
     }
return (
  <>
    <div className="container">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Hero
        theme={theme}
        textEnter={textEnter}
        textLeave={textLeave}
        iconsLeave={iconsLeave}
      />
      <div className="divider" />
      <About />
      <div className="divider" />
      <SkillsSection />
      <div className="divider" />

      <Main />
      <div className="divider" />
      <Services />

      <divider />
      <Contact theme={theme} />
      <div className="divider ">
        <div className="holder" onClick={scrollToTop}>
          <button className="icon-arrow-up"></button>
        </div>
      </div>

      <Footer />

      <AwesomeCursor theme={theme} cursorVariants={cursorVariants} />
    </div>
  </>
);
}

export default App
