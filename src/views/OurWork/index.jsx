import image from './../../assets/ourWork/ourWork.png';
import w1 from './../../assets/ourWork/w1.jpg';
import w2 from './../../assets/ourWork/w2.jpg';

const OurWork = () => {
  //change the details of the works to be displayed here
  const works = [
    {
      title: 'Poson Thorana 2022',
      thumb: w1,
      vsrc: 'https://vesak-bkt-2.s3.ap-southeast-2.amazonaws.com/Poson+Thorana+2022_480p.mp4',
    },
    {
      title: 'Poson Zone 2022',
      thumb: w2,
      vsrc: 'https://vesak-bkt-2.s3.ap-southeast-2.amazonaws.com/Poson+Zone+2022_360p.mp4',
    },
  ];
  return (
    <div className='z-0 flex flex-col items-center  bg-gradient-to-l from-fuchsia-200 to-fuchsia-100 dark:bg-gradient-to-l dark:from-[#080808] dark:to-[#161616]'>
      <img src={image} alt='OurWorksBanner' className='mt-0  w-full' />

      <div className='flex flex-col items-center -mt-24 md:-mt-40 xl:-mt-80 mb-16 lg:mb-28 w-9/12  rounded-3xl bg-gradient-to-t from-fuchsia-200 to-white dark:bg-gradient-to-t dark:from-black dark:to-slate-950 '>
        <h1 className='flex mt-10 lg:mt-24 mb-28  text-2xl lg:text-5xl font-semibold   dark:text-white'>
          <div className='underline underline-offset-8 decoration-[#fdac20]'>
            Our
          </div>
          &nbsp;Previous Works
        </h1>
        {works.map((work) => (
          <div className='flex flex-col items-center  mb-10 lg:mb-28 '>
            <p className='w-8/12 text-xs lg:text-xl dark:text-white'>
              &nbsp;{work.title}
            </p>
            <video
              class='w-8/12 rounded-xl mt-1 lg:mt-4'
              poster={work.thumb}
              controls
            >
              <source src={work.vsrc} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
