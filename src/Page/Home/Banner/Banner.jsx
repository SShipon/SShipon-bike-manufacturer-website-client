import React from "react";

import Typewriter from "typewriter-effect";
import BikeAnimation from "../BikeAnimation/BikeAnimation.jsx";
const Banner = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 flex justify-center items-center">
      <div className="card lg:max-w-lg">
        <h1 className="text-5xl font-bold text-sky-600">
          <Typewriter
            options={{
              strings: [
                "We share the Passion ",
                "For motorcycles ",
                "With you and ",
                "Professionally and ",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <br />
        <p>
          We share the passion for motorcycles with you and with the customers
          who ride them day after day. We do that professionally and with
          motivation, not only by providing you with the latest, but also more
          readily available spare parts for the motorcycle as quickly and easily
          as possible.
        </p>
        <button class="btn btn-primary">Click Me</button>
      </div>
      <div className="card lg:max-w-lg">
        <BikeAnimation></BikeAnimation>
      </div>
    </div>
  );
};

export default Banner;
