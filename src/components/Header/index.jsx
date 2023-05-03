import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="fixed z-999 bg-gray-50 shadow-lg rounded-full inline-flex">
      <div className="mx-auto px-4 py-3 flex items-center justify-between relative">
        <div className="flex items-center">
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'home' ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('home')}>
            Home
          </a>
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'mentors' ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('mentors')}>
            Our Mentors
          </a>
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'team' ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('team')}>
            Our Team
          </a>
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'work' ? 'bg-purple-900 dark:bg-gray-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('work')}>
            Our Work
          </a>
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'contact' ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-6 py-2' : ''}`} onClick={() => handleLinkClick('contact')}>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
