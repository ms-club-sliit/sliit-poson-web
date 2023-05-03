import msclublogo from '../../assets/ms_club_logo.png'

const Footer = () => {
  return (
    <>
      <div className='grid md:grid-cols-3 flex items-center text-center bg-white py-10 dark:bg-black dark:text-white sm:grid-cols-1'>
        <div className='flex justify-center items-center px-4'>
          <img className='w-20 h-auto' src={msclublogo} />
        </div>
        <div className='flex justify-center items-center px-4 py-4 '>
          Designed and Developed by MS Club of SLIIT
        </div>
        <div className='flex justify-center items-center px-4'>
          SLIIT Interactive Media
        </div>
      </div>
    </>
  );
}

export default Footer;
