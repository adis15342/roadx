export const Projects = () => {
  return (
    <div className="pt-20 px-4 md:px-16 max-w-[88vw] mx-auto">
      <div className="relative flex flex-col justify-center items-center text-center text-white">
          <img src="/yogesh/scott-graham-5fNmWej4tAA-unsplash%20(1)a6d8.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover -z-10" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <p className="text-6xl font-semibold py-20 z-10">Projects</p>
      </div>
      <h2 className="text-5xl font-bold my-10 text-center">DPR Projects</h2>
      <button className="bg-blue-700 text-white px-4 py-2">DPR Projects</button>
    </div>
  );
};
