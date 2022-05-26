import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { AiTwotoneFlag } from 'react-icons/ai';
import { AiFillProject } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';
import { AiFillLike } from 'react-icons/ai';


const Projects = () => {
    return (
      <section className="my-24 mx-24">
        <h1 className="text-center font-semibold text-4xl my-12 text-teal-400">
          Successful Business Overview
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center">
          <div className="ard lg:max-w-lg bg-base-100 shadow-xl text-center py-3">
              <AiTwotoneFlag className='text-4xl mx-24 mb-2 text-emerald-300'/>
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={68}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="text-xl">+</span>
            </h1>
            <h2 className="text-2xl font-bold text-emerald-300">Countries</h2>
          </div>
          <div className="ard lg:max-w-lg bg-base-100 shadow-xl text-center py-3">
              <ImUsers className='text-4xl mx-24 mb-2 text-emerald-300'/>
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={230}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="text-xl"> M+</span>
            </h1>
            <h2 className="text-2xl font-bold text-emerald-300">Clients</h2>
          </div>
          <div className="ard lg:max-w-lg bg-base-100 shadow-xl text-center py-3">
          <AiFillLike  className='text-4xl mx-24 mb-2 text-emerald-300'/>
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={625}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="text-xl"> B+</span>
            </h1>
            <h2 className="text-2xl font-bold text-emerald-300 ">Customer Reviews</h2>
          </div>
          <div className="ard lg:max-w-lg bg-base-100 shadow-xl text-center py-3">
              <AiFillProject  className='text-4xl mx-24 mb-2 text-emerald-300'/>
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={690}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="text-xl"> K</span>
            </h1>
            <h2 className="text-2xl font-bold text-emerald-300">Complete Projects</h2>
          </div>
        </div>
      </section>
    );
};

export default Projects;
