import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="w-full fixed top-0 z-50 bg-white bg-opacity-100 text-gray-700 shadow-lg transition-all duration-300 ease-in-out">
        <div className="flex flex-row justify-between items-center text-center max-w-[88vw] mx-auto relative z-50">
          <div className="mb-2 sm:mb-0">
            <Link to="/">
              <img
                alt="Image"
                loading="lazy"
                width="100"
                className=" py-[7px]"
                src="/Yogesh/Untitled designd538.png"
              />
            </Link>
          </div>

          <button
            id="menuToggleBtn"
            className="lg:hidden px-4 py-2 rounded-md"
            onClick={toggleMobileMenu}
          >
            <img
              alt="Menu icon"
              loading="lazy"
              width="24"
              height="24"
              src="/Yogesh/menu2d86.png"
            />
          </button>

          <div className="max-lg:hidden lg:flex flex-wrap gap-x-4 gap-y-2 text-lg items-center text-gray-800 transition-all duration-300">
            <Link className="px-2 py-1 rounded-lg text-xl hover:scale-110 transition-transform hover:text-black" to="/">Home</Link>
            <Link className="px-2 py-1 rounded-lg text-xl hover:scale-110 transition-transform hover:text-black" to="/about">About us</Link>
            <Link className="px-2 py-1 rounded-lg text-xl hover:scale-110 transition-transform hover:text-black" to="/sector">Sectors</Link>
            <Link className="px-2 py-1 rounded-lg text-xl hover:scale-110 transition-transform hover:text-black" to="/project">Projects</Link>
            <Link className="px-2 py-1 rounded-lg text-xl hover:scale-110 transition-transform hover:text-black" to="/career">Career</Link>
            <Link className="px-2 py-1 rounded-lg text-xl hover:scale-110 transition-transform hover:text-black" to="/contactus">Contact Us</Link>
          </div>
        </div>

        <div
          id="mobileMenu"
          style={{
            textAlign: 'center',
            display: isMobileMenuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: 'white',
            fontSize: '1.125rem',
            color: '#4b5563',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Link className="text-[#4b5563] hover:text-black transition-colors duration-200 no-underline" to="/" onClick={closeMobileMenu}>Home</Link>
          <Link className="text-[#4b5563] hover:text-black transition-colors duration-200 no-underline" to="/about" onClick={closeMobileMenu}>About us</Link>
          <Link className="text-[#4b5563] hover:text-black transition-colors duration-200 no-underline" to="/sector" onClick={closeMobileMenu}>Sectors</Link>
          <Link className="text-[#4b5563] hover:text-black transition-colors duration-200 no-underline" to="/project" onClick={closeMobileMenu}>Projects</Link>
          <Link className="text-[#4b5563] hover:text-black transition-colors duration-200 no-underline" to="/career" onClick={closeMobileMenu}>Career</Link>
          <Link className="text-[#4b5563] hover:text-black transition-colors duration-200 no-underline" to="/contactus" onClick={closeMobileMenu}>Contact Us</Link>
        </div>
      </div>

      {/* Floating Action / Contact Buttons */}
      <div className="fixed z-10 bottom-20 max-sm:right-2 right-6 transform -translate-y-1/2 flex flex-col gap-y-4">
        <div className="group relative flex items-center bg-white rounded-full hover:scale-110 transition-transform duration-300 hover:-translate-x-2">
          <a href="mailto:roadxdesignconsultancy@gmail.com" className="flex items-center">
            <img
              alt="Email Us"
              loading="lazy"
              width="50"
              height="20"
              className="py-3 px-2"
              style={{ color: 'transparent' }}
              src="/Yogesh/mail.png"
            />
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-white text-black px-2 py-1 rounded shadow-lg whitespace-nowrap">
              Email Us
            </span>
          </a>
        </div>
        <div className="group relative flex items-center bg-white rounded-full hover:scale-110 transition-transform duration-300 hover:-translate-x-2">
          <a
            href="https://wa.me/9812476369?text="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              alt="whatsapp"
              loading="lazy"
              width="50"
              height="20"
              className="p-2"
              style={{ color: 'transparent' }}
              src="/Yogesh/whatsapp635c.png"
            />
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-white text-black px-2 py-1 rounded shadow-lg whitespace-nowrap">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
