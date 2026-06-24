import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const quickLinks = [
  { label: 'Home',       to: '/' },
  { label: 'About Us',   to: '/about' },
  { label: 'Sectors',    to: '/sector' },
  { label: 'Projects',   to: '/project' },
  { label: 'Career',     to: '/career' },
  { label: 'Contact Us', to: '/contactus' },
];

const services = [
  'Expressway',
  'Tunnels',
  'Urban Infrastructure',
  'Bridges',
  'Highway Expressway',
  'Pavement Evaluation',
  'Road Safety Audit',
];

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────── */
const FooterColumn = ({ title, children }) => (
  <div className="flex flex-col gap-y-4"   style={{ paddingTop: '20px' }}>
    <h2 className="font-bold text-xl text-primary">{title}</h2>
    {children}
  </div>
);

const NavLinks = ({ items, isService = false, columns = 1 }) => (
  <ul
    className={`text-gray-800 ${
      columns === 2
        ? 'grid grid-cols-2 gap-x-6 gap-y-2'
        : 'flex flex-col gap-y-2'
    }`}
  >
    {items.map((item) => {
      const { label, to } = isService ? { label: item, to: '/sector' } : item;
      return (
        <li key={label}>
          <Link
            to={to}
            className="text-sm md:text-base hover:text-primary transition-colors duration-200 break-words"
          >
            {label}
          </Link>
        </li>
      );
    })}
  </ul>
);

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────── */
const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollBtn(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="bg-grays w-full pt-16 border-t border-gray-200"   style={{ paddingTop: '20px' }}>
      <div className="w-[90%] max-w-[88vw] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Col 1: Logo & Address */}
        <FooterColumn>
          <img
            src="/Yogesh/Untitled designd538.png"
            alt="Roadx Logo"
            width={120}
            height={120}
            loading="lazy"
            className="object-contain"
          />
          <a
            href="https://maps.app.goo.gl/9rx2BmG2KnX8sf1t5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base md:text-lg lg:text-lg font-bold text-gray-700 hover:text-primary cursor-pointer transition-colors duration-200 leading-relaxed break-words"
          >
            Building no - 882, Barwasni<br />
            Sonipat, Haryana - 131001
          </a>
        </FooterColumn>

        {/* Col 2: Quick Links */}
        <FooterColumn title="Quick Links">
          <NavLinks items={quickLinks} columns={2} />
        </FooterColumn>

        {/* Col 3: Services */}
        <FooterColumn title="Services">
          <NavLinks items={services} isService columns={2} />
        </FooterColumn>

        {/* Col 4: Contact */}
        <FooterColumn title="Contact Us">
          <div>
            <div className="-translate-y-5">
              <ul className="mt-2 text-sm sm:text-base md:text-lg lg:text-base text-gray-800">
                
                {/* Email */}
                <div className="flex gap-x-2 items-center max-w-full group">
                  <div>
                    <img
                      src="/Yogesh/mail370b.png"
                      alt="Email"
                      width={30}
                      height={40}
                      className="max-md:w-7 max-md:h-7 cursor-pointer transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-125"
                    />
                  </div>

                  <li className="text-gray-800 overflow-hidden group-hover:text-primary text-lg list-none">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=roadxdesignconsultancy@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="max-w-full break-all"
                    >
                      roadxdesignconsultancy@gmail.com
                    </a>
                  </li>
                </div>

                {/* Phone */}
                <div className="flex gap-x-2 items-center mt-4 group">
                  <img
                    src="/Yogesh/telephonec0e3.png"
                    alt="Phone"
                    width={30}
                    height={20}
                    className="max-md:w-7 max-md:h-7 cursor-pointer transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-125"
                  />

                  <li className="text-gray-800 group-hover:text-primary text-lg list-none">
                    <a href="tel:+919050869258">
                      +91 90508 69258
                    </a>
                  </li>
                </div>

              </ul>
            </div>

            {/* Social Icons */}
            <div className="-translate-y-5">
              <div className="flex gap-x-5 max-sm:grid max-sm:grid-cols-2 md:mt-5">

                <div>
                  <a
                    href="https://www.facebook.com/share/15wRSwpJ6P/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Yogesh/facebooke020.png"
                      alt="Facebook"
                      width={35}
                      height={35}
                      className="shrink-0 cursor-pointer p-1 sm:p-[2px] hover:-translate-y-1 hover:scale-125 transition-transform duration-300 ease-in-out"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/company/roadx-design-and-consultancy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Yogesh/linkedin2031.png"
                      alt="LinkedIn"
                      width={35}
                      height={35}
                      className="shrink-0 cursor-pointer p-1 sm:p-[2px] hover:-translate-y-1 hover:scale-125 transition-transform duration-300 ease-in-out"
                    />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </FooterColumn>
      </div>

      <div className="w-[90%] max-w-[88vw] mx-auto mt-12 pt-8 border-t border-gray-300">
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
          © 2025 All Rights Reserved. Website designed by{" "}
          
          <span className="relative inline-block group font-medium cursor-pointer">
            Techno Items

            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-100 border border-gray-200 shadow-md rounded px-3 py-1 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50" style={{fontSize: 'small'}} >
              +91 78800 80817/94667 03459
            </span>
          </span>

        </p>
      </div>

      {/* Floating Buttons */}
      <div className="fixed z-50 right-4 sm:right-6 bottom-8 flex flex-col gap-y-3">
        <a href="mailto:roadxdesignconsultancy@gmail.com" className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform" aria-label="Email">
          <img src="/Yogesh/mail.png" alt="Email" width={24} height={24} />
        </a>
        <a href="https://wa.me/9812476369" target="_blank" rel="noreferrer" className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform" aria-label="WhatsApp">
          <img src="/Yogesh/whatsapp635c.png" alt="WhatsApp" width={24} height={24} />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors"
          style={{ opacity: showScrollBtn ? 1 : 0, pointerEvents: showScrollBtn ? 'auto' : 'none' }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};


export default Footer;
