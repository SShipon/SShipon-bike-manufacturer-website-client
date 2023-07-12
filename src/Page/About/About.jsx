import React from 'react';
import './About.css'
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
const About = () => {
  

    return (
      <section className="banner bg-color">
        <div className='mx-12'>
          <h3 className="text-5xl text-center p-5 text-white">MY PORTFOLIO</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 flex justify-center ">
            <div>
              <Fade left big>
                <div className="my-12">
                  <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img
                      class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                      src="https://i.ibb.co/4RLYBvF/Screenshot-6.png"
                      alt=""
                      width="384"
                      height="512"
                    />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                      <blockquote>
                        <p class="text-lg font-medium">
                          Hi I am shipon web application Engineer, Fontend
                          Developer,Professional Web designer 
                        </p>
                      </blockquote>
                      <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                          Md: Shipon
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                          web application Engineer,
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
              </Fade>
              <div>
                <h2 className="text-3xl font-bold p-2 text-white">
                  <Typewriter
                    options={{
                      strings: [
                        "<span>Hi Hello I am </span> ",
                        "<span>Shipon</span>",
                        "<span>Fontend Developer</span>",
                        "<span>Professional Web designer</span>",
                        ,
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white p-5">
                  CAREER OBJECTIVES
                </h3>
                <p className="text-white">
                  I am a motivated team player and aspiring web developer with
                  great design and branding knowledge. My ultimate goal is to
                  grow my knowledge of the industry and use my conversational
                  skills startup SEO/GoogleAds charismas.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-3xl font-bold text-white p-5">
                  SPECIALIZATIONS
                </h4>
                <hr />
                <div className="text-white">
                  <ul>
                    <li>1. Front End Design (HTML5, CSS3, Bootstrap, Figma)</li>
                    <li>2. TailwindCSS (♥) and MATERIAL-UI</li>
                    <li>
                      3. Javascript ES6/*7 (Data Modelling, Debugging, Async
                      Performance)
                    </li>
                    <li>4. Front End Development ( React.js ,)</li>
                    <li>
                      5.Back End Development (Firebase, Node js,Express
                      js,MongoDB)
                    </li>
                    <li>6. User Interface/User Experience</li>
                    <li>7. Design Thinking & Problem Solving</li>
                    <li>
                      8. Can develop high-performant front-end interfaces which
                      interacts with backend API
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white p-5">EDUCATION</h4>
                <hr />
                <div className="text-white">
                  <ul>
                    <li>SSC (commerce)</li>
                    <li>HSC (commerce)</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white p-5">
                  CONTACT INFO:
                </h4>
                <hr />
                <div className="text-white">
                  <ul>
                    <li>Linkedin: <a href="https://www.linkedin.com/in/sh-shipon-5373b9241/"><span className=' text-cyan-500'>Click Me</span></a></li> 
                    <li>Email: nxshipon@gmail.com</li>
                    <li>Address: Cumilla,Chittagong,Bangladesh</li>
                    <li>Phone: +8801969846914</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white p-5">
                  MY PROJECTS
                </h4>
                <hr />
                <div className="text-white p-8">
                  <ul>
                    <li>
                      <a href="https://travel-tour-5fac8.web.app/">
                        TOUR WORLD
                      </a>
                    </li>
                    <li>
                      <a href="https://assignment-12-clintsite.web.app/">
                        CAR ZONE
                      </a>
                    </li>
                    <li>
                      <a href="https://laptop-warehouse-managem-7c512.web.app/">
                        LAPTOP WAREHOUSE
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;