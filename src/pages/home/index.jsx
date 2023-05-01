import { Header } from "../../components";
import Carousel from "./Carousel";
import Committee from "./Committee";
import Mentors from "./Mentors";
import OurWork from "./OurWork";

const index = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Mentors />
      <Committee />
      <OurWork />
    </>
  );
};

export default index;
