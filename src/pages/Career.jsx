export const Career = () => {
  return (
    <div className="pt-20">
      <div className="relative flex flex-col justify-center items-center text-center mb-0 max-sm:px-4 text-white">
        <img
          src="/images/Career/career.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-[1px] left-0 w-full h-full bg-black opacity-60"></div>
        <div
          className="max-sm:w-full max-[1024px]:h-[35vh] max-[1024px]:w-[90%] max-sm:h-[40vh] w-[60%] h-[65vh] flex flex-col justify-center items-center max-sm:justify-start text-center gap-4 overflow-hidden z-10"
          style={{ willChange: 'opacity, transform', transform: 'translateY(-20px)' }}
        >
          <p className="max-sm:text-3xl max-[1024px]:text-4xl max-sm:pt-0 pt-20 text-6xl font-semibold max-[1024px]:pt-0 max-md:mt-36 md:mt-8">
            Be part of a visionary crew shaping the future with passion and purpose.
          </p>
          <p
            className="max-sm:text-base max-sm:w-full max-[1024px]:mt-4 w-[65%] text-gray-200 text-lg max-lg:hidden"
            style={{ willChange: 'opacity, transform', transform: 'translateY(20px)' }}
          >
            At RoadX, we strive to outsmart every threat, protecting what matters most with cutting-edge innovation.
          </p>
        </div>
      </div>

      <div id="yogesh-job-listings">
        <div className="">
          <h2 className="title">Career Opportunities</h2>

          <div className="job-card">
            <div className="content">
              <h3>Accounts Executive</h3>
              <p className="details">FULLTIME | 0 - 1 Years | Gurugram</p>
            </div>
            <button className="apply-btn">
              <a
                href="https://docs.google.com/forms/d/1TA9mSSA9zncM0qJhiw_fLgh391Dg2-W5XJk7PuFPMl0/edit"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Apply Now <span>→</span>
              </a>
            </button>
          </div>

          <div className="job-card">
            <div className="content">
              <h3>IT</h3>
              <p className="details">FULLTIME | 6 Months - 2 Years | Gurugram</p>
            </div>
            <button className="apply-btn">
              <a
                href="https://docs.google.com/forms/d/1TA9mSSA9zncM0qJhiw_fLgh391Dg2-W5XJk7PuFPMl0/edit"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Apply Now <span>→</span>
              </a>
            </button>
          </div>

          <div className="job-card">
            <div className="content">
              <h3>Highway designer</h3>
              <p className="details">FULLTIME | 2 - 3 Years | Gurugram</p>
            </div>
            <button className="apply-btn">
              <a
                href="https://docs.google.com/forms/d/1TA9mSSA9zncM0qJhiw_fLgh391Dg2-W5XJk7PuFPMl0/edit"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Apply Now <span>→</span>
              </a>
            </button>
          </div>

          <div className="job-card">
            <div className="content">
              <h3>Structure Designer</h3>
              <p className="details">FULLTIME | 3 - 5 Years | Gurugram</p>
            </div>
            <button className="apply-btn">
              <a
                href="https://docs.google.com/forms/d/1TA9mSSA9zncM0qJhiw_fLgh391Dg2-W5XJk7PuFPMl0/edit"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Apply Now <span>→</span>
              </a>
            </button>
          </div>

          <div className="job-card">
            <div className="content">
              <h3>Site Engineers</h3>
              <p className="details">FULLTIME | 8 - 10 Years | Gurugram</p>
            </div>
            <button className="apply-btn">
              <a
                href="https://docs.google.com/forms/d/1TA9mSSA9zncM0qJhiw_fLgh391Dg2-W5XJk7PuFPMl0/edit"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Apply Now <span>→</span>
              </a>
            </button>
          </div>

          <div className="job-card">
            <div className="content">
              <h3>Laboratory Engineer</h3>
              <p className="details">FULLTIME | 0 - 1 Years | Gurugram</p>
            </div>
            <button className="apply-btn">
              <a
                href="https://docs.google.com/forms/d/1TA9mSSA9zncM0qJhiw_fLgh391Dg2-W5XJk7PuFPMl0/edit"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Apply Now <span>→</span>
              </a>
            </button>
          </div>

          {/* Commented out job card in blade template */}
          {/* 
          <div className="job-card">
            <div className="content">
              <h3>Senior Digital Marketer</h3>
              <p className="details">FULLTIME | 2 - 3 Years | Gurugram</p>
            </div>
            <button className="apply-btn">
              <a
                href="https://docs.google.com/forms/d/1TA9mSSA9zncM0qJhiw_fLgh391Dg2-W5XJk7PuFPMl0/edit"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Apply Now <span>→</span>
              </a>
            </button>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};
