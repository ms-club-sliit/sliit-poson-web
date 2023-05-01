/**
 * Home Page
 */
import { Header, Footer } from "../../components";

import Hero from "../Hero";
import VesakZone from "../VesakZone";
import Mentors from "../Mentors";
import Committee from "../Committee";
import OurWork from "../OurWork";
import Feedback from "../Feedback";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <VesakZone />
      <Mentors />
      <Committee />
      <OurWork />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
