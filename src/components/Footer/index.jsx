import msclublogo from '../../assets/footer/ms_club_logo.png'
import imlogo from '../../assets/footer/im_logo.png'
import imsclogo from '../../assets/footer/imsc_logo.png'

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-3 flex items-center text-center bg-neutral-50 py-10 dark:bg-black dark:text-white max-lg:grid-cols-1'>
        <div className='flex space-x-8 justify-center items-center px-4'>
          <img className='h-12 w-auto' src={imlogo} />
          <img className='h-12 w-auto' src={imsclogo} />
          <img className='h-12 w-auto' src={msclublogo} />
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
