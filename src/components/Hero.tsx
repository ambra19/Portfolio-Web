
const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm <span className="text-green-600">Ambra 👋</span> 
        </h1>
        <h2 className="text-3xl font-semibold mb-4">
          3rd year Computer Science student at <span className="text-green-600">VU Amsterdam</span> 
        </h2>
        <p className="text-xl font-semibold text-gray-600 max-w-3xl items-center ">
          Currently, I am a research student working on improving the <span className="text-green-700"> Energy Efficiency </span> of an Autonomous Rover as part of my bachelor thesis project at the <a href="https://docs.ase.vu.nl/" className="text-blue-600"> Autonomous Systems Engineering Labs (ASE) @ VU Amsterdam </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
