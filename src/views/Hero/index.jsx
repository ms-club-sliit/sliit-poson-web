/**
 * Hero Section
 */
const Hero = () => {
  return (
    <div className="flex flex-col font-poppins items-center justify-center h-screen bg-gradient-to-r from-[#30013B] to-[#510263] dark:bg-gray-900">
      <div className="container mx-auto h-full">
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row h-full">
          <div className="flex-1 flex items-center justify-center basis-full lg:basis-1/2 p-3">
            <div>
              <p className="text-5xl text-white font-medium">
                Virtual Vesak <br />
                Festival
                <div className="inline text-gold font-railway font-normal">
                  {' '}
                  202<span className="text-6xl absolute">3</span>
                </div>
              </p>
              <p className="text-gold">SLIIT Interactive Media </p>
              <hr className="bg-gold h-px border-none" />
              <div className="mt-10 md:mt-32 ">
                <div className="border border-gold w-1/2 p-1">Explore Now</div>
              </div>
            </div>
          </div>
          <div className="flex-1 basis-full lg:basis-1/2 p-3">Column</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
