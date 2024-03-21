import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

import projects from "./data/projects.json";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const darkToggle = () => {
    console.log(dark);
    setDark(!dark);
  };

  const svgSizeSkills = 30

  return (
    <div className={`${dark && "dark"}`}>
      <main className="dark:bg-black">
        <section className="bg-green-600">
          <nav className="py-10 mb-12 flex justify-around">
            <h1 className="text-black text-3xl dark:text-white">Henry</h1>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="dark:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="dark:text-white">
                  Projects
                </a>
              </li>
              <li onClick={darkToggle}>
                <BsFillMoonStarsFill color={`${dark ? "white" : "black"}`} />
              </li>
            </ul>
          </nav>
        </section>

        <section>
          <div className="text-center">
            <h2 className="text-blue-500 text-4xl py-5">
              Full Stack Software Engineer
            </h2>
            <h3 className="text-xl dark:text-white text-center px-10">
              Hello! I'm a recent graduate from the Northcoders bootcamp in
              Manchester. I hold a degree in Computer Forensics & Security and
              have held a job in the hospitality industry over the past couple
              of years. I have a huge passion for technology and building
              things, have a look at some of the project I've made below!
            </h3>

            <div className="flex items-center justify-center text-2xl gap-10 py-5">
              <a href="https://github.com/BulletToothTony" target="_blank">
                <BsGithub size={40} color={`${dark ? "white" : "black"}`} />
              </a>

              <a
                href="https://www.linkedin.com/in/henry-westhoff-lewis-b18a91196/"
                target="_blank"
              >
                <BsLinkedin size={40} color={`${dark ? "white" : "black"}`} />
              </a>
            </div>
          </div>
        </section>

        <section className="">
          <h2
            id="projects"
            className="text-3xl text-center pt-5 dark:text-white"
          >
            Skills
          </h2>

          <div className="flex justify-center flex-wrap text-center py-2 flex gap-3">
            
            <div className="border-2 border-blue-500 rounded-md">
            <h3 className="text-2xl">Frontend</h3>
            <div className="flex justify-center gap-3">
              <div className="flex flex-col items-center justify-center gap-2">
                <span>React</span>
                <div className="border-2 border-teal-500">
                  <FaReact size={svgSizeSkills}/>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span>Javascript</span>
                <div className="border-2 border-teal-500">
                  <IoLogoJavascript size={svgSizeSkills}/>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span>HTML</span>
                <div className="border-2 border-blue-500 bg-blue-300">
                  <TiHtml5 size={svgSizeSkills}/>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span>CSS</span>
                <div className="border-2 border-blue-500 bg-blue-300">
                  <IoLogoCss3 size={svgSizeSkills}/>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span>Tailwind</span>
                <div className="border-2 border-blue-500 bg-blue-300">
                  <SiTailwindcss size={svgSizeSkills}/>
                </div>
              </div>
            </div>
            </div>

            <div className="border-2 border-blue-500 rounded-md">
            <h3 className="text-2xl">Backend</h3>
            <div className="flex justify-center p-2 gap-3">
              <div className="flex flex-col items-center justify-center gap-2">
                <span>Node</span>
                <div className="border-2 border-blue-500 bg-blue-300">
                  <FaNode size={svgSizeSkills}/>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span>Express</span>
                <div className="border-2 border-blue-500 bg-blue-300">
                  <SiExpress size={svgSizeSkills}/>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span>Jest</span>
                <div className="border-2 border-blue-500 bg-blue-300">
                  <SiJest size={svgSizeSkills}/>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span>PSQL</span>
                <div className="border-2 border-blue-500 bg-blue-300">
                  <BiLogoPostgresql size={svgSizeSkills}/>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span>MongoDB</span>
                <div className="border-2 border-blue-500 bg-blue-300">
                  <SiMongodb size={svgSizeSkills}/>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span>Firebase</span>
                <div className="border-2 border-blue-500 bg-blue-300">
                  <SiFirebase size={svgSizeSkills}/>
                </div>
              </div>
            </div>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </section>

        <h2 id="projects" className="text-2xl text-center pt-5 dark:text-white">
          Projects
        </h2>
        <section className="text-center py-4 flex flex-wrap justify-center gap-5">
          {projects.map((project) => {
            return (
              <div className="text-center shadow-lg p-10 rounded-xl max-w-96 min-h-44 border-gray-900 min-w-96 dark:bg-stone-950">
                <div class="flex justify-center items-center">
                  <img
                    src={project.projectImage}
                    width={350}
                    height={150}
                    alt={project.projectName}
                    className="object-contain rounded-md h-60"
                  />
                </div>

                <h3 className="text-lg font-medium dark:text-white">
                  {project.projectName}
                </h3>

                <p className="py-2 dark:text-white">
                  {project.projectDescription}
                </p>

                <h4 className="py-4 text-teal-600">Tech stack</h4>

                {project.projectTechStack.map((tech) => {
                  return (
                    <p className="text-gray-800 py-1 dark:text-white">{tech}</p>
                  );
                })}

                <div className="flex justify-center gap-10 pt-5">
                  <div className="transition ease-in-out border-2 border-blue-500 rounded-md p-2 hover:bg-blue-500 duration-400">
                    <a
                      href={project.projectGithub}
                      target="_blank"
                      className="dark:text-white"
                    >
                      Github
                    </a>
                  </div>

                  <div className="transition ease-in-out border-2 border-blue-500 rounded-md p-2 hover:bg-blue-500 duration-400">
                    <a
                      href={project.projectDemo}
                      target="_blank"
                      className="dark:text-white"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
