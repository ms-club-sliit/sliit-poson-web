import { Header, Footer } from "../../components";
import Carousel from "./Carousel";
import Committee from "./Committee";
import Mentors from "./Mentors";
import OurWork from "./OurWork";
import PosonZone from "./PosonZone";

const index = () => {
  return (
    <>
      <Header />
      <Carousel />
      <PosonZone />
      <Mentors />
      <Committee />
      <OurWork />
      <Footer />
    </>
  );
};

export default index;
