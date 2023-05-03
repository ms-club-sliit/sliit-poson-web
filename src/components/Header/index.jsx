import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="absolute w-814 h-62 left-1/2 top-20 bg-gray-50 shadow-lg rounded-full z-50 transform -translate-x-1/2">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between" style={{ position: 'relative' }}>
        <div className="flex items-center">
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>
            Home
          </a>
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'mentors' ? 'active' : ''}`} onClick={() => handleLinkClick('mentors')}>
            Our Mentors
          </a>
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'team' ? 'active' : ''}`} onClick={() => handleLinkClick('team')}>
            Our Team
          </a>
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'work' ? 'active' : ''}`} onClick={() => handleLinkClick('work')}>
            Our Work
          </a>
          <a href="#" className={`font-normal text-gray-800 font-bold mr-4 ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleLinkClick('contact')}>
            Contact Us
          </a>
        </div>
        <style jsx>{`
          .active {
            width: 165px;
            height: 52px;
            background: #3F014D;
            border-radius: 31px;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    </nav>
  );
};

export default Header;
