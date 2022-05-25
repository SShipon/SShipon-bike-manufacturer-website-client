import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/bake/9429-motobike-animation.json";

const BikeAnimation = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default BikeAnimation;
