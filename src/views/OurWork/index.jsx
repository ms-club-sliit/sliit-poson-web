import image from './../../assets/ourWork/ourWork.png';

const OurWork = () => {
  return (
    <div className='flex flex-col items-center z-0  h-screen bg-gradient-to-l from-fuchsia-200 to-fuchsia-100 dark:bg-gradient-to-l dark:from-gray-950 dark:to-slate-900'>
      <img src={image} alt='OurWorksBanner' className='z-0' />

      <div className=' absolute mt-20 w-9/12 h-full z-1 rounded-3xl bg-gradient-to-t from-fuchsia-300 to-fuchsia-50 dark:bg-gradient-to-t dark:from-black dark:to-slate-950 '>
        <div className='flex text-center '>
          <p>Our</p>
          <p>previous works</p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
