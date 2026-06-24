export const About = () => {
  return (
    <div className="pt-20">
      <div className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/Home/856886-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex items-center h-full z-10 px-4 max-w-[90vw] mx-auto">
          <div className="max-w-[70vw] mt-12" style={{ transform: 'translateY(-20px)' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-secondary my-5">
              A Legacy Built to Last
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
              The Silent Force Behind Progress
            </h2>
            <p 
              className="mt-5 text-base max-sm:hidden sm:text-lg md:text-xl leading-relaxed text-white"
              style={{ willChange: 'opacity, transform', transform: 'translateY(20px)' }}
            >
              A professional firm specializing in the planning, design, and consultancy services for
              transportation infrastructure projects, including roads, highways, and related civil
              engineering works. The firm typically offers services such as road design, traffic
              planning, feasibility studies, project management, and engineering consulting to both
              public and private sector clients.
            </p>
            <p 
              className="mt-5 text-base max-sm:hidden sm:text-lg md:text-xl leading-relaxed text-white"
              style={{ willChange: 'opacity, transform', transform: 'translateY(20px)' }}
            >
              "Our team of experienced engineers and professionals is dedicated to excellence in
              every aspect of our work - from conceptual design to project completion - ensuring
              the highest standards at every stage."
            </p>
          </div>
        </div>
      </div>

      {/* Our Achievements (Commented out in blade template) */}
      {/* 
      <div className="max-lg:hidden">
        <div>
          <h1 className="unihead my-20">Our Achievements</h1>
        </div>
        <div 
          className="overflow-hidden h-[75vh] flex mb-20 bg-black"
          style={{ backgroundImage: 'url(/images/AboutUs/journey/404)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute left-0 w-full h-[75vh] bg-black opacity-50"></div>
          <div className="max-w-[88vw] mx-auto pb-52 pt-32 text-white flex justify-between items-center z-10">
            <div style={{ transform: 'translateY(-20px)' }}>
              <h1 className="text-[200px]">20<hr /></h1>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col overflow-y-scroll h-[500px] scrollbar-hidden group">
                <div>
                  <div className="flex mt-[99px] gap-x-24" style={{ transform: 'translateY(20px)' }}>
                    <h1 className="text-[200px] w-52 text-primary">16<hr className="border-primary mt-[1px]" /></h1>
                    <img 
                      alt="Journey Image" 
                      loading="lazy" 
                      width="300" 
                      height="300" 
                      className="h-[400px] rounded-md" 
                      style={{ color: 'transparent' }}
                      src="/Yogesh/Screenshot 2024-11-28 1335457cca.png" 
                    />
                    <div className="w-96">
                      <h1 className="text-6xl font-bold mb-2 une">Achievements</h1>
                      <ul className="list-disc marker:text-primary marker:text-[30px] space-y-2">
                        <li className="text-[25px]">Founded as a Prebid and Detailed Design Company</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex my-[51.5px] gap-x-24" style={{ transform: 'translateY(20px)' }}>
                    <h1 className="text-[200px] w-52 text-primary">19<hr className="border-primary mt-[1px]" /></h1>
                    <img 
                      alt="Journey Image" 
                      loading="lazy" 
                      width="300" 
                      height="300" 
                      className="h-[400px] rounded-md" 
                      style={{ color: 'transparent' }}
                      src="/Yogesh/Screenshot 2024-11-28 134020e403.png" 
                    />
                    <div className="w-96">
                      <h1 className="text-6xl font-bold mb-2 une">Achievements</h1>
                      <ul className="list-disc marker:text-primary marker:text-[30px] space-y-2">
                        <li className="text-[25px]">Entered In all sector of Highway, Bridges and Tunnels</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex my-[51.5px] gap-x-24" style={{ transform: 'translateY(20px)' }}>
                    <h1 className="text-[200px] w-52 text-primary">21<hr className="border-primary mt-[1px]" /></h1>
                    <img 
                      alt="Journey Image" 
                      loading="lazy" 
                      width="300" 
                      height="300" 
                      className="h-[400px] rounded-md" 
                      style={{ color: 'transparent' }}
                      src="/Yogesh/WhatsApp Image 2024-11-27 at 3ebd9.jpg" 
                    />
                    <div className="w-96">
                      <h1 className="text-6xl font-bold mb-2 une">Achievements</h1>
                      <ul className="list-disc marker:text-primary marker:text-[30px] space-y-2">
                        <li className="text-[25px]">1st DPR Project in Highway</li>
                        <li className="text-[25px]">Entered in water segment (DPR of Dam)</li>
                        <li className="text-[25px]">Founded GreenMantra (Geotech Solution)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex my-[51.5px] gap-x-24" style={{ transform: 'translateY(20px)' }}>
                    <h1 className="text-[200px] w-52 text-primary">23<hr className="border-primary mt-[1px]" /></h1>
                    <img 
                      alt="Journey Image" 
                      loading="lazy" 
                      width="300" 
                      height="300" 
                      className="h-[400px] rounded-md" 
                      style={{ color: 'transparent' }}
                      src="/Yogesh/2023930a.png" 
                    />
                    <div className="w-96">
                      <h1 className="text-6xl font-bold mb-2 une">Achievements</h1>
                      <ul className="list-disc marker:text-primary marker:text-[30px] space-y-2">
                        <li className="text-[25px]">Foundation of AiMantra (IT Solutions)</li>
                        <li className="text-[25px]">CIPL entered into authority and supervision.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex my-[51.5px] gap-x-24" style={{ transform: 'translateY(20px)' }}>
                    <h1 className="text-[200px] w-52 text-primary">24<hr className="border-primary mt-[1px]" /></h1>
                    <img 
                      alt="Journey Image" 
                      loading="lazy" 
                      width="300" 
                      height="300" 
                      className="h-[400px] rounded-md" 
                      style={{ color: 'transparent' }}
                      src="/Yogesh/office2fba7.jpg" 
                    />
                    <div className="w-96">
                      <h1 className="text-6xl font-bold mb-2 une">Achievements</h1>
                      <ul className="list-disc marker:text-primary marker:text-[30px] space-y-2">
                        <li className="text-[25px]">Acquired G-eng along with NABL Lab and machinery (NSV, FWD, MBIU)</li>
                        <li className="text-[25px]">Secured first railway project (FLS)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* We Deals In Section */}
      <div style={{ transform: 'translateY(-20px)' }}>
        <h1 className="unihead mt-12 md:mt-20 max-lg:mb-10 text-center">We Deals In</h1>
      </div>
      <div className="xl:py-10 lg:my-10">
        <div className="flex flex-col lg:flex-row max-w-[88vw] mx-auto gap-x-10 justify-between gap-y-10 md:gap-y-0">
          <div className="w-full lg:w-1/2 px-4 md:px-0">
            <h2 
              className="text-base md:text-lg lg:text-xl mb-4 sm:mt-20 lg:mt-0 max-sm:mt-0 text-justify"
              style={{ transform: 'translateY(-20px)' }}
            >
              <span className="text-primary">RoadX</span> Designers & Consultants is a forward-thinking engineering and design
              consultancy specializing in transportation infrastructure. With a team of
              experienced civil engineers, planners, and design experts, we deliver innovative,
              sustainable, and efficient solutions for roads, highways, and urban mobility
              systems.
            </h2>
            <ul 
              className="list-disc text-base md:text-lg lg:text-xl text-justify text-primary ml-5 mb-4 marker:text-brown"
              style={{ transform: 'translateY(-20px)' }}
            >
              <li>Pavement Evaluation</li>
              <li>Road Safety Audit</li>
              <li>Mobile Bridge Inspection Unit</li>
              <li>DPR Projects</li>
              <li>Geotechnical Investigation</li>
              <li>Pile Load Testing Services</li>
              <li>Non-Destructive Testing</li>
              <li>Laboratory Testing</li>
            </ul>
            <p 
              className="text-sm md:text-base text-justify" 
              style={{ transform: 'translateY(-20px)' }}
            >
              Our mission is to shape the future of transportation through smart design, precision
              engineering, and a commitment to safety and sustainability. From concept to
              completion, we partner with public and private sector clients to transform mobility
              challenges into lasting infrastructure.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative xl:justify-center xl:items-center mx-auto">
            <div className="flex flex-col gap-y-5 lg:mt-6 max-xl:mt-2 md:flex-row md:gap-x-5">
              <div style={{ transform: 'translateY(-20px)' }}>
                <img 
                  alt="" 
                  loading="lazy" 
                  width="500"
                  height="350" 
                  className="rounded-lg shadow-xl h-[250px] md:h-[300px]" 
                  src="/Yogesh/about1.jpg" 
                />
              </div>
              <div 
                className="absolute top-[200px] md:top-[220px] left-[420px] md:left-[350px] xl:top-[220px] xl:left-[420px] lg:left-[200px] lg:top-[290px]"
                style={{ transform: 'translateY(20px)' }}
              >
                <img 
                  alt="" 
                  loading="lazy" 
                  width="250" 
                  height="300"
                  className="rounded-lg h-[150px] shadow-2xl max-sm:w-[550px] max-sm:h-[250px] max-sm:hidden"
                  src="/Yogesh/about2.jpg" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Presence (Commented out in blade template) */}
      {/* 
      <div className="max-w-[88vw] mx-auto mb-20">
        <div style={{ transform: 'translateY(-20px)' }}>
          <h1 className="unihead my-10 text-center text-2xl md:text-3xl lg:text-4xl">Our Presence</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-1/2">
            <div className="px-2" style={{ transform: 'translateY(-20px)' }}>
              <a
                className="relative border-[3px] rounded-md border-gray-600 p-5 h-28 text-center flex items-center justify-center overflow-hidden group shadow-2xl"
                href="/sector#roadsbridges"
              >
                <span className="absolute inset-0 transition-transform duration-500 bg-primary transform -translate-x-[-280px] max-lg:-translate-x-full xl:-translate-x-[-490px] group-hover:translate-x-0 translate-y-10 rounded-sm hover:rounded-none group-hover:translate-y-0"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 text-lg md:text-xl">
                  HIGHWAYS &amp; EXPRESSWAYS
                </span>
              </a>
            </div>
            <div className="px-2" style={{ transform: 'translateY(-20px)' }}>
              <a
                className="relative border-[3px] rounded-md border-gray-600 p-5 h-28 text-center flex items-center justify-center overflow-hidden group shadow-2xl"
                href="/sector#bridges"
              >
                <span className="absolute inset-0 transition-transform duration-500 bg-primary transform -translate-x-[-280px] max-lg:-translate-x-full xl:-translate-x-[-490px] group-hover:translate-x-0 translate-y-10 rounded-sm hover:rounded-none group-hover:translate-y-0"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 text-lg md:text-xl">
                  BRIDGES &amp; FLYOVER
                </span>
              </a>
            </div>
            <div className="px-2" style={{ transform: 'translateY(-20px)' }}>
              <a
                className="relative border-[3px] rounded-md border-gray-600 p-5 h-28 text-center flex items-center justify-center overflow-hidden group shadow-2xl"
                href="/sector#tunnels"
              >
                <span className="absolute inset-0 transition-transform duration-500 bg-primary transform -translate-x-[-280px] max-lg:-translate-x-full xl:-translate-x-[-490px] group-hover:translate-x-0 translate-y-10 rounded-sm hover:rounded-none group-hover:translate-y-0"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 text-lg md:text-xl">
                  TUNNELS
                </span>
              </a>
            </div>
            <div className="px-2" style={{ transform: 'translateY(-20px)' }}>
              <a
                className="relative border-[3px] rounded-md border-gray-600 p-5 h-28 text-center flex items-center justify-center overflow-hidden group shadow-2xl"
                href="/sector#Urban"
              >
                <span className="absolute inset-0 transition-transform duration-500 bg-primary transform -translate-x-[-280px] max-lg:-translate-x-full xl:-translate-x-[-490px] group-hover:translate-x-0 translate-y-10 rounded-sm hover:rounded-none group-hover:translate-y-0"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 text-lg md:text-xl">
                  URBAN INFRASTRUCTURE
                </span>
              </a>
            </div>
            <div className="px-2" style={{ transform: 'translateY(-20px)' }}>
              <a
                className="relative border-[3px] rounded-md border-gray-600 p-5 h-28 text-center flex items-center justify-center overflow-hidden group shadow-2xl"
                href="/sector#metro"
              >
                <span className="absolute inset-0 transition-transform duration-500 bg-primary transform -translate-x-[-280px] max-lg:-translate-x-full xl:-translate-x-[-490px] group-hover:translate-x-0 translate-y-10 rounded-sm hover:rounded-none group-hover:translate-y-0"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 text-lg md:text-xl">
                  METRO &amp; RAILWAYS
                </span>
              </a>
            </div>
            <div className="px-2" style={{ transform: 'translateY(-20px)' }}>
              <a
                className="relative border-[3px] rounded-md border-gray-600 p-5 h-28 text-center flex items-center justify-center overflow-hidden group shadow-2xl"
                href="/sector#water"
              >
                <span className="absolute inset-0 transition-transform duration-500 bg-primary transform -translate-x-[-280px] max-lg:-translate-x-full xl:-translate-x-[-490px] group-hover:translate-x-0 translate-y-10 rounded-sm hover:rounded-none group-hover:translate-y-0"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 text-lg md:text-xl">
                  WATERWAYS
                </span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div style={{ transform: 'translateY(-20px)' }}>
              <h1 className="text-xl md:text-2xl font-bold">Our Locations</h1>
              <h2 className="text-lg md:text-xl font-bold mt-2 py-2">Offices</h2>
            </div>
            <div className="px-4" style={{ transform: 'translateY(-20px)' }}>
              <ul className="list-disc marker:text-lg marker:text-primary text-justify space-y-2">
                <li><span className="text-primary">Registered Office</span> - Delhi-277, Hiran Kudwa, New Delhi - 110041</li>
                <li><span className="text-primary">Corporate Office</span> - 3rd Floor, Tower 3A, DLF CORPORATE GREENS, Sector 74A, Gurugram, Haryana 122004</li>
                <li><span className="text-primary">Regional Office</span> - Vasantam Hotel, Deotsidh road, Barsar, Himachal Pradesh - 174305</li>
              </ul>
            </div>
            <h2 className="text-lg md:text-xl font-bold mt-2 py-2" style={{ transform: 'translateY(-20px)' }}>
              Project Locations
            </h2>
            <div className="px-4">
              <ul className="flex lg:justify-between flex-wrap gap-2 md:gap-3 marker:text-lg marker:text-primary">
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Arunachal Pradesh</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Assam</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Bihar</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Chhattisgarh</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Delhi</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Gujarat</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Haryana</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Himachal Pradesh</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Jharkhand</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Karnataka</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Madhya Pradesh</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Maharashtra</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Mizoram</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Nagaland</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Orissa</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Punjab</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Rajasthan</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Tamilnadu</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Telangana</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Uttar Pradesh</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>Uttarakhand</li>
                <li className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base" style={{ transform: 'translateY(-20px)' }}>West Bengal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};
