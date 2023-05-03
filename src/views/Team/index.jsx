import { committee } from "../../data/committee";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <Link to={"/"}>
        <p className="font-sans font-normal absolute top-8 left-8 border border-black hover:border-gold inline-block px-4 py-3 rounded-3xl cursor-pointer hover:text-gold transition dark:border-gold dark:text-gold">
          <FontAwesomeIcon className="mr-5 " icon={faArrowLeft} />
          Home
        </p>
      </Link>
      <div className="w-full py-[100px] text-center flex flex-col items-center justify-center  px-10 h-full bg-gradient-to-r from-[#FAE5FE] to-[#ffffff] dark:bg-gradient-to-r dark:from-[#080808] dark:to-[#161616]">
        <div className="pt-5">
          <h1 className="text-6xl font-bold dark:text-white uppercase">
            Meet{" "}
            <span className="text-4xl font-thin font-[sans] italic lowercase">
              the
            </span>{" "}
            Team
          </h1>
          <h2 className="uppercase text-[#fdac20] mb-[70px]">
            Responsible for making the magic happen
          </h2>
        </div>
        <div className="container sm:p-0 md:p-10 sm:mt-[50px] md:mt-[10px] lg:mt-[10px] sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-5 md:gap-8">
          {committee.map((member) => (
            <CarouselCard key={member.id} mentor={member} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
