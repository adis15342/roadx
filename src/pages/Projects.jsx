export const Projects = () => {
  const projects = [
    // {
    //   title: 'Highway Corridor DPR',
    //   location: 'National Highway Expansion',
    //   description: 'Comprehensive road design, traffic planning, and implementation support for high-capacity mobility corridors.',
    //   image: '/Yogesh/Expressway3.jpg',
    //   tag: 'Infrastructure'
    // },
    // {
    //   title: 'Bridge & Flyover Planning',
    //   location: 'Urban Connectivity',
    //   description: 'Detailed engineering solutions for bridge structures, loading analysis, and safe urban integration.',
    //   image: '/Yogesh/about1.jpg',
    //   tag: 'Bridge Design'
    // },
    // {
    //   title: 'Geotechnical Investigation',
    //   location: 'Site Assessment & Testing',
    //   description: 'Field investigation and laboratory-backed analysis to support robust and reliable project execution.',
    //   image: '/Yogesh/about2.jpg',
    //   tag: 'Geotech'
    // }
  ];

  return (
    <div className="pt-20 pb-16 bg-[#f7f9fc]">
      <section className="relative mx-auto mt-7 overflow-hidden rounded-[32px] shadow-2xl max-w-[88vw]">        <img
          src="/Yogesh/Expressway3.jpg"
          alt="Projects hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/35"></div>

        <div className="relative z-10 flex min-h-[420px] items-center px-4 py-16 sm:px-8 lg:px-12">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-[0.25em] uppercase backdrop-blur-sm">
              Transforming Roads & Mobility
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Building smarter infrastructure through precision-led projects.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              From DPR preparation to engineering consultancy, our portfolio reflects a commitment to efficient planning, sustainable design, and long-term performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[#c58f2f]"
              >
                Explore DPR Projects
              </a>
              <a
                href="/contactus"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/90">
              <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">20+ Completed Projects</div>
              <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">Multi-sector expertise</div>
              <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">Sustainable approach</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto mt-12 max-w-[88vw]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9a441]">Featured Work</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-800 sm:text-4xl">DPR Projects</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Our projects reflect disciplined planning, reliable execution, and a strong focus on transportation innovation.
            </p>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Reliable planning • Detailed design • Sustainable delivery
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9a441]">{project.tag}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-800">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{project.location}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 mb-8 max-w-[88vw] rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9a441]">Why choose us</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-800 sm:text-3xl">
              Delivering engineering clarity at every stage of the project lifecycle.
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We combine technical depth, regulatory awareness, and practical execution support to help clients move from concept to delivery with confidence.
            </p>
          </div>
          <div className="rounded-[20px] bg-[#f7f9fc] p-6">
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="rounded-lg bg-white px-4 py-3 shadow-sm">Detailed project reports and feasibility studies</li>
              <li className="rounded-lg bg-white px-4 py-3 shadow-sm">Specialized road, bridge, and geotechnical consultancy</li>
              <li className="rounded-lg bg-white px-4 py-3 shadow-sm">Responsive support from planning through implementation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
