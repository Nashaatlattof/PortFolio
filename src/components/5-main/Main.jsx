import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";


export default function Main() {
  const myProjects = [
    {
      projectTiltle: "Admin Dashboard Ecommerce",
      category: ["React", "Javascript"],
      imgPath: "Capture10.PNG",
      repoPath:
        "https://github.com/Nashaatlattof/Admin-Dashboard-Ecommerce.git",
      demoPath: "https://admin-dashboard-ecommerce-one.vercel.app/",
    },
    {
      projectTiltle: "Ecommerce Website",
      category: ["React", "MUI", "Javascript"],
      imgPath: "Capture20.PNG",
      repoPath:
        "https://github.com/Nashaatlattof/E-commerce-Website-Project.git",
      demoPath: "https://e-commerce-website-project.vercel.app/",
    },
    {
      projectTiltle: "Portfolio Template",
      category: ["Javascript", "Bootstrap"],
      imgPath: "DayImg.PNG",
      repoPath: "https://github.com/Nashaatlattof/Portfolio-Template.git",
      demoPath: "https://nashaatlattof.github.io/Portfolio-Template/",
    },
    {
      projectTiltle: "Elzero template3",
      category: ["Html/Css", "Javascript"],
      imgPath: "Capture1.PNG",
      repoPath: "https://github.com/Nashaatlattof/projrct-Html-Css-Js.git",
      demoPath: "https://nashaatlattof.github.io/projrct-Html-Css-Js/",
    },
    {
      projectTiltle: "static website",
      category: ["Bootstrap"],
      imgPath: "BootstrapImg.PNG",
      repoPath: "https://github.com/Nashaatlattof/Project-Bootstrap5.git",
      demoPath: "https://nashaatlattof.github.io/Project-Bootstrap5/",
    },
    {
      projectTiltle: "static website",
      category: ["Bootstrap"],
      imgPath: "Capture2.PNG",
      repoPath: "https://github.com/Nashaatlattof/Bondi-Project.git",
      demoPath: "https://nashaatlattof.github.io/Bondi-Project/",
    },
    {
      projectTiltle: "static website",
      category: ["Html/Css"],
      imgPath: "5.jpg",
      repoPath: "https://github.com/Nashaatlattof/Project-Html-Css.git",
      demoPath: "https://nashaatlattof.github.io/Project-Html-Css/",
    },
  ];
  const [currentActive, setCurrentActive] = useState("All Projects");
  const [projects, setProjects] = useState(myProjects);

  const handleClick = (cat) => {
    setCurrentActive(cat);
    const filtered = myProjects.filter((item) => {
      const CategorySelected = item.category.filter((myitem) => {
        return myitem === cat;
      });
      return CategorySelected[0] === cat;
    });
    setProjects(filtered);
  };

  return (
    <>
      <motion.main
        id="main"
        className="main"
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
        <h1 className="title-section">Projects</h1>
        <p className="subtitle-section">What I did? </p>
        <h3 className="subtitle">
          "I have successfully completed numerous projects using React, where I
          applied foundational concepts like hooks, JSX, props, and reusable
          components. Furthermore, I have implemented state management in
          diverse scenarios."
        </h3>

        <div className="flex">
          <motion.section
            className="left-section flex"
            initial={{
              opacity: 0,
              x: -300,
              y: 0,
            }}
            whileInView={{
              opacity: 1,
              x:0,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
          >
            <button
              onClick={() => {
                setCurrentActive("All Projects");
                setProjects(myProjects);
              }}
              className={currentActive === "All Projects" ? "active" : null}
            >
              All Progects
            </button>
            <button
              onClick={() => {
                handleClick("Html/Css");
              }}
              className={currentActive === "Html/Css" ? "active" : null}
            >
              Html/Css
            </button>
            <button
              onClick={() => {
                handleClick("Bootstrap");
              }}
              className={currentActive === "Bootstrap" ? "active" : null}
            >
              Bootstrap
            </button>
            <button
              onClick={() => {
                handleClick("Javascript");
              }}
              className={currentActive === "Javascript" ? "active" : null}
            >
              Javascript
            </button>
            <button
              onClick={() => {
                handleClick("React");
              }}
              className={currentActive === "React" ? "active" : null}
            >
              React
            </button>
          </motion.section>

          <motion.section
            className="right-section flex "
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
            <AnimatePresence>
              {projects.map((item, key) => {
                return (
                  <motion.article
                    className="project"
                    key={key}
                    layout
                    animate={{ transform: "scale(1)" }}
                    initial={{ transform: "scale(0)" }}
                    /* exit={{ scale: 0 }} */
                    transition={{ type: "spring", damping: 7, stiffness: 150 }}
                  >
                    <img src={item.imgPath} alt=""></img>
                    <div width={366} className="overlay">
                      <a href={item.demoPath}>
                        <button className="icon icon-link"></button>
                      </a>
                      <a href={item.repoPath}>
                        <button className="icon icon-github"></button>
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.section>
        </div>
      </motion.main>
    </>
  );
}
