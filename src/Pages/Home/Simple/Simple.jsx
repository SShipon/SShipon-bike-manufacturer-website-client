import React from "react";
import BakeAnimation from "../BikeAnimation/BikeAnimation.jsx";
const Simple = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 flex justify-center items-center">
      <div className="card lg:max-w-lg">
        <h1 className="text-5xl font-bold text-purple-500">
          Motorcycle Parts for Wholesale
        </h1>
        <br />
        <p>
          We share the passion for motorcycles with you and with the customers
          who ride them day after day. We do that professionally and with
          motivation, not only by providing you with the latest, but also more
          readily available spare parts for the motorcycle as quickly and easily
          as possible.
        </p>
      </div>
      <div className="card lg:max-w-lg">
        <img
          src="https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Simple;
