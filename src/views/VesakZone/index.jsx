import { Link } from "react-router-dom";
import GuidelinesModal from "./GuidelinesModal";
import { useState } from "react";

const VesakZone = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <GuidelinesModal isOpen={isOpen} closeModal={closeModal} />
      <div className="flex flex-col items-center justify-center min-h-screen pt-[140px] pb-[115px] dark:bg-gradient-to-r dark:from-[#080808] dark:to-[#161616]">
        <h1 className="text-5xl font-semibold dark:text-white text-center leading-[70px] mt-10 xs:mt-0">
          <a className="underline decoration-[#fdac20] underline-offset-[1.0rem]">
            Download
          </a>
          &nbsp;your AR App
        </h1>

        <div className="mt-10 text-lg text-center mx-10 dark:text-white">
          <p>
            This application supports for AR compatible and Android devices
            only.
          </p>
          <p>
            After installing the application, you can see Vesak Lantern button
            and Thorana button.
          </p>
          <p>
            Click the button below to download the application and follow the
            instructions in the guidelines.
          </p>
        </div>

        <div className="w-30">
          {/* TODO: This code might be useful for the future */}

          {/* <Link to="/" className="w-1/8">
          <p
            style={{
              fontWeight: "50",
              fontSize: "18px",
              textAlign: "center",
            }}
            className="w-30 px-20 py-5 mt-20 text-sm text-[22px] text-white bg-[#8600a5] rounded-full hover:bg-[#8600a5] dark:bg-[#161616] dark:border-solid dark:border-[0.5px] dark:border-[#ffffff75] dark:hover:border-[#fdac20] dark:hover:text-[#fdac20] hover:bg-[#fdac20]"
          >
            Interactive Vesak Zone
          </p>
        </Link> */}

          {/* ---------------------------------------------- */}

          <a
            href="https://drive.google.com/uc?export=download&id=14IFY6t1C9ZoQ3-YKuw8UmNnOasjhTkDc"
            className="w-30"
          >
            <p
              style={{
                fontWeight: "50",
                fontSize: "18px",
                textAlign: "center",
              }}
              className="w-30 px-20 py-5 mt-5 text-sm text-[22px] text-white bg-[#8600a5] rounded-full hover:bg-[#8600a5] dark:bg-[#161616] dark:border-solid dark:border-[0.5px] dark:border-[#ffffff75] dark:hover:border-[#fdac20] dark:hover:text-[#fdac20] hover:bg-[#fdac20]"
            >
              Up to Android 11
            </p>
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1EFjE-7JB7PgvEUc8DEWZvN9vvA5giT1-"
            className="w-30"
          >
            <p
              style={{
                fontWeight: "50",
                fontSize: "18px",
                textAlign: "center",
              }}
              className="w-30 px-20 py-5 mt-5 text-sm text-[22px] text-white bg-[#8600a5] rounded-full hover:bg-[#8600a5] dark:bg-[#161616] dark:border-solid dark:border-[0.5px] dark:border-[#ffffff75] dark:hover:border-[#fdac20] dark:hover:text-[#fdac20] hover:bg-[#fdac20]"
            >
              Android 12 & 13
            </p>
          </a>

          <Link to="/" className="w-30">
            <p
              style={{
                fontWeight: "50",
                fontSize: "18px",
                textAlign: "center",
              }}
              className="w-30 px-20 py-5 mt-5 text-sm text-[22px] text-[#8600a5] bg-white rounded-full dark:bg-[#161616] dark:border-solid border-[0.5px] border-[#8600a5] dark:border-[#8600a5] dark:hover:border-[#fdac20] dark:hover:text-[#fdac20] hover:bg-[#fdac20]"
              onClick={openModal}
            >
              Guidelines
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VesakZone;
