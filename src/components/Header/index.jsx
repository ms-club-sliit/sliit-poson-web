import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolledOutOfHome, setIsScrolledOutOfHome] = useState(false);
  const [hamClicked, setHamClicked] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      if (homeSection) {
        const homeSectionRect = homeSection.getBoundingClientRect();
        setIsScrolledOutOfHome(window.scrollY >= homeSectionRect.bottom);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHamClick = () => {
    setHamClicked(!hamClicked);
  };

  return (
    <div
      className={
        `fixed z-50 w-full ${
          isScrolledOutOfHome
            ? 'bg-purple-900 dark:bg-gray-900 '
            : 'md:bg-transparent '
        }` + `${hamClicked ? 'bg-purple-900 dark:bg-gray-900' : ''}`
      }
    >
      <div className="flex justify-between md:items-center flex-col md:flex-row">
        <h1 className="text-white font-normal font-circular font-size-24 leading-52 m-5 ml-5 md:ml-20 select-none md:select-text">
          SLIIT INTERACTIVE MEDIA
        </h1>
        <FontAwesomeIcon
          icon={faBars}
          className={
            'md:hidden text-3xl cursor-pointer absolute right-5 top-5 text-white '
          }
          onClick={handleHamClick}
        />
        <nav
          className={
            (hamClicked ? 'block  ' : 'hidden ') +
            'md:block bg-gray-50 md:m-5 shadow-lg md:rounded-full w-full md:w-auto inline-flex justify-center mr-5 md:mr-20 select-none md:select-text'
          }
        >
          <div className=" px-2 py-1 flex items-center justify-between relative">
            <div className="flex flex-col m-5 md:m-auto md:flex-row items-center">
              <a
                href="#home"
                className={`mt-2 md:mt-0 font-normal text-gray-800 font-bold mr-2 md:mr-4 ${
                  activeLink === 'home'
                    ? ' bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
                    : ''
                }`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
              <a
                href="#mentors"
                className={`mt-2 md:mt-0 font-normal text-gray-800 font-bold mr-2 md:mr-4 ${
                  activeLink === 'mentors'
                    ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
                    : ''
                }`}
                onClick={() => handleLinkClick('mentors')}
              >
                Our Mentors
              </a>
              <a
                href="#members"
                className={`mt-2 md:mt-0 font-normal text-gray-800 font-bold mr-2 md:mr-4 ${
                  activeLink === 'team'
                    ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
                    : ''
                }`}
                onClick={() => handleLinkClick('team')}
              >
                Our Team
              </a>
              <a
                href="#ourwork"
                className={`mt-2 md:mt-0 font-normal text-gray-800 font-bold mr-2 md:mr-4 ${
                  activeLink === 'work'
                    ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
                    : ''
                }`}
                onClick={() => handleLinkClick('work')}
              >
                Our Work
              </a>
              <a
                href="#contactus"
                className={`mt-2 md:mt-0 font-normal text-gray-800 font-bold mr-2 md:mr-4 ${
                  activeLink === 'contact'
                    ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
                    : ''
                }`}
                onClick={() => handleLinkClick('contact')}
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
