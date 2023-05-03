import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='flex justify-center'>
    <nav className="fixed z-999 bg-gray-50 shadow-lg rounded-full inline-flex justify-center ">
      <div className="px-4 py-3 flex items-center justify-between relative">
        <div className="flex items-center">
          <a href="#home" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'home' ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('home')}>
            Home
          </a>
          <a href="#mentors" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'mentors' ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('mentors')}>
            Our Mentors
          </a>
          <a href="#members" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'team' ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('team')}>
            Our Team
          </a>
          <a href="#ourwork" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'work' ? 'bg-purple-900 dark:bg-gray-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('work')}>
            Our Work
          </a>
          <a href="#contactus" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'contact' ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('contact')}>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
