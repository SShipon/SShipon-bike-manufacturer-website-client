import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor'
import './Projects.css'
const Projects = () => {
    return (
      <section className="my-12">
        <h1 className="text-center font-semibold text-4xl my-12 text-purple-400">
          Successful Business Your Progress
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center">
          <div className="ard lg:max-w-lg text-center py-3">
            <i className="fa-solid fa-flag font_icon"></i>
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={77}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
        
            </h1>
            <p className="text-2xl font-bold text-teal-400">Countries</p>
          </div>
          <div className="ard lg:max-w-lg text-center py-3">
            <i class="fa-solid fa-computer font_icon"></i>
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={110}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span>+</span>
            </h1>
            <h2 className="text-2xl font-bold text-teal-400">
              Completed Projects
            </h2>
          </div>
          <div className="ard lg:max-w-lg text-center py-3">
            <i class="fa-solid fa-users-between-lines font_icon"></i>
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={782}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span>+</span>
            </h1>
            <p className="text-2xl font-bold text-teal-400">Happy Clients</p>
          </div>
          <div className="ard lg:max-w-lg text-center py-3">
            <i class="fa-solid fa-thumbs-up font_icon"></i>
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={700}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="text-1xl">+</span>
            </h1>
            <h2 className="text-2xl font-bold text-teal-400">Review</h2>
          </div>
        </div>
      </section>
    );
};

export default Projects;