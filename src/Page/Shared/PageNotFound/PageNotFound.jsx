import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/error/29894-error-404-page.json";

const PageNotFound = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default PageNotFound;
