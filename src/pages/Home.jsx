import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="mb-10">
      {/* ── Hero Video Section ── */}
      <div className="relative w-full h-[88vh] max-sm:h-[80vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
        >
          <source src="/videos/Home/2675508-hd_1920_1080_24fps.mp4" type="video/mp4" />
          <source src="/videos/Home/13188309_3840_2160_60fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div
          className="flex items-center h-full relative z-10 max-w-[88vw] mx-auto"
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <div className="text-white max-w-[70vw] max-sm:max-w-[80vw] mt-[62px]">
            <div style={{ textAlign: 'center', transform: 'translateY(-20px)' }}>
              <h2 className="font-semibold leading-7 lg:text-xl md:text-lg sm:text-base">
                We make a Difference
              </h2>
              <h1 className="mt-3 lg:text-5xl md:text-4xl sm:text-4xl max-sm:text-4xl">
                <span className="text-secondary">Empowering growth through intelligent, agile</span>
              </h1>
              <h2 className="mt-1 lg:text-5xl md:text-4xl sm:text-4xl max-sm:text-4xl text-secondary">
                solutions for a world in constant transformation.
              </h2>
            </div>
            <p
              className="mt-5 font-normal leading-7 lg:text-xl md:text-lg sm:text-base max-sm:hidden text-justify"
              style={{ textAlign: 'center', willChange: 'opacity' }}
            >
              At Roadx, innovation drives our approach. Whether it's through smart design,
              sustainable materials, or cutting-edge modeling techniques, we aim to enhance
              infrastructure that supports communities and fuels economic growth.
            </p>
          </div>
        </div>
      </div>

      {/* ── Ticker / Marquee Bar ── */}
      {/* CSS for animate-slide & animate-scroll is defined globally in index.css */}

      <div className="bg-primary overflow-hidden" style={{ transform: 'none' }}>
        <div className="relative overflow-hidden">
          <ul className="flex gap-x-52 py-2 cursor-default whitespace-nowrap animate-slide text-white text-xl">
            {/* Set 1 */}
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/motorway.png" alt="Expressway" className="w-8 h-8 invert" />
              <span className="mt-2">Expressway</span>
            </li>
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/tunnel.png" alt="Tunnels" className="w-8 h-8 invert" />
              <span className="mt-2">Tunnels</span>
            </li>
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/buildings.png" alt="Urban Infrastructure" className="w-8 h-8 invert" />
              <span className="mt-2">Urban Infrastructure</span>
            </li>
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/vincent-thomas-bridge.png" alt="Bridges" className="w-8 h-8 invert" />
              <span className="mt-2">Bridges</span>
            </li>
            {/* Set 2 (duplicate for seamless loop) */}
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/motorway.png" alt="Expressway" className="w-8 h-8 invert" />
              <span className="mt-2">Expressway</span>
            </li>
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/tunnel.png" alt="Tunnels" className="w-8 h-8 invert" />
              <span className="mt-2">Tunnels</span>
            </li>
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/buildings.png" alt="Urban Infrastructure" className="w-8 h-8 invert" />
              <span className="mt-2">Urban Infrastructure</span>
            </li>
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/vincent-thomas-bridge.png" alt="Bridges" className="w-8 h-8 invert" />
              <span className="mt-2">Bridges</span>
            </li>
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/metro.png" alt="Metro" className="w-8 h-8 invert" />
              <span className="mt-2">Metro</span>
            </li>
            <li className="flex items-center gap-x-2">
              <img src="/images/Home/herorail/waterfall_6735800.png" alt="Waterways" className="w-8 h-8 invert" />
              <span className="mt-2">Waterways</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── About Us Section ── */}
      <div className="mb-20 mt-10 relative">
        <div className="max-w-[88vw] mx-auto flex flex-wrap items-center justify-center">
          <div className="sm:w-1/2 p-2 flex justify-center relative group">
            <img
              alt="image"
              loading="lazy"
              width="350"
              height="300"
              decoding="async"
              className="object-cover max-w-full h-auto duration-300 ease-in-out hover:scale-110 transition-transform opacity-80 hover:opacity-90"
              src="/Yogesh/homemap.jpg"
            />
          </div>
          <div className="sm:w-1/2 max-lg:py-4 flex justify-center items-center">
            <div className="rounded-l-3xl text-left" style={{ transform: 'translateY(-20px)' }}>
              <h1 className="text-4xl font-bold font-montserrat mb-4 text-logored">About Us</h1>
              <h2 className="text-lg sm:text-xl text-justify my-5">
                <span className="font-bold">
                  <span className="text-primary">Roadx</span> Designers &amp; Consultants
                </span>{' '}
                Roadx Designers &amp; Consultants is a leading infrastructure design and consulting
                firm dedicated to delivering innovative, sustainable, and cost-effective solutions
                in the field of transportation and civil engineering. With a strong foundation in
                technical expertise and a commitment to excellence, we specialize in the planning,
                design, and supervision of highways, roads, bridges, and urban infrastructure projects.
              </h2>
              <p className="text-lg sm:text-xl text-justify my-5">
                Founded with a vision to transform connectivity and mobility, Roadx combines advanced
                engineering tools, deep industry knowledge, and client-centric strategies to bring
                every project from concept to completion with precision and efficiency. Our
                multidisciplinary team of experienced engineers, planners, and project managers
                ensures that each solution is tailored to meet the specific needs of our clients
                while adhering to the highest quality and safety standards.
              </p>
              <button>
                <h3 className="text-lg sm:text-xl mt-2 font-bold hover:bg-logored transition-all duration-300 hover:translate-x-1 hover:scale-110 rounded bg-primary text-center px-5 text-white py-2">
                  <Link to="/about">Read More</Link>
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Associates / Partners Scrolling Logo Strip ── */}
      <div className="overflow-hidden pb-8 md:pb-12">
        <div className="flex animate-scroll space-x-4 md:space-x-8" style={{ willChange: 'transform' }}>
          {[
            { src: '/Yogesh/Adani_2012ec0a.png', alt: 'Adani' },
            { src: '/Yogesh/ARCONS7f77.png', alt: 'ARCONS' },
            { src: '/Yogesh/Border_Roads_Organisation33b9.png', alt: 'Border Roads Organisation' },
            { src: '/Yogesh/CDS103a.png', alt: 'CDS' },
            { src: '/Yogesh/GHV14f7.png', alt: 'GHV' },
            { src: '/Yogesh/GMDAa984.png', alt: 'GMDA' },
            { src: '/Yogesh/MCG7062.png', alt: 'MCG' },
            { src: '/Yogesh/MPRDCb391.jpg', alt: 'MPRDC' },
            { src: '/Yogesh/NHAI-Blackcd71.png', alt: 'NHAI' },
            { src: '/Yogesh/Sadbhav_Engineeringdda7.png', alt: 'Sadbhav Engineering' },
            /* Duplicate set for seamless infinite scroll */
            { src: '/Yogesh/Adani_2012ec0a.png', alt: 'Adani' },
            { src: '/Yogesh/ARCONS7f77.png', alt: 'ARCONS' },
            { src: '/Yogesh/Border_Roads_Organisation33b9.png', alt: 'Border Roads Organisation' },
            { src: '/Yogesh/CDS103a.png', alt: 'CDS' },
            { src: '/Yogesh/GHV14f7.png', alt: 'GHV' },
            { src: '/Yogesh/GMDAa984.png', alt: 'GMDA' },
            { src: '/Yogesh/MCG7062.png', alt: 'MCG' },
            { src: '/Yogesh/MPRDCb391.jpg', alt: 'MPRDC' },
            { src: '/Yogesh/NHAI-Blackcd71.png', alt: 'NHAI' },
            { src: '/Yogesh/Sadbhav_Engineeringdda7.png', alt: 'Sadbhav Engineering' },
          ].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-white rounded-3xl my-8 md:my-16 w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center"
            >
              <img
                alt="Associate logo"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                className="object-contain w-[150px] h-[150px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px]"
                src={logo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
