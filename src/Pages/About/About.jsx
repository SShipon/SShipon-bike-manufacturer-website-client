import React from 'react';
import './About.css'
const About = () => {
    return (
      <section className="max-w-7xl mx-auto px-12 bg-color py-10">
        <div>
          <h3 className="text-5xl text-center p-5 text-white">MY PORTFOLIO</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 flex justify-center ">
            <div>
              <div className="my-12">
                <img
                  style={{ width: "350px", height: "450px" }}
                  src="https://i.ibb.co/4RLYBvF/Screenshot-6.png"
                  alt=""
                />
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
                    <li>Linkedin:(Not)</li>
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
                <div className="text-white">
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