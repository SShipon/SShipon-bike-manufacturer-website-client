import React from 'react';
import Bake1 from "../../../assets/bake/Bake (1).jpg";
import Bake2 from "../../../assets/bake/Bake (2).jpg";
import Bake3 from "../../../assets/bake/Bake (3).jpg";
import Info from '../Info/Info.jsx';




const CardInfo = () => {
  const services = [
    {
      _id: 1,
      name: "Chain Sprocket",
      description:
        "Chain Sprocket Price in Bangladesh. Chain Sprocket UG-4, UG-4.5 Chains, Sprockets & Parts Bangladesh - Shop for best Chains, Sprockets. Motorcycle Bicycle Bike ",
      img: Bake1,
    },
    {
      _id: 2,
      name: "MRF Zapper S Tyres",
      description:
        "In this page all the available motorcycle or bike brands in Bangladesh along with their most recent Price, in detail specification, obtainable and authorized showrooms.",
      img: Bake2,
    },
    {
      _id: 3,
      name: " Motorcycle Engine",
      description:
        "In this page all the available motorcycle or bike brands in Bangladesh along with their most recent Price, in detail specification, obtainable and authorized showrooms.",
      img: Bake3,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary  text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
                  services.map(service => <Info
                      key={service.id}
                      service={service}
                  ></Info>)
        }
      </div>
    </div>
  );
};

export default CardInfo;