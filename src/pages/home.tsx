export const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 space-y-8 lg:space-y-0">
      {/* Left Side */}
      <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">Explore Country Histories</h1>
        <p className="text-lg text-gray-600">
          Dive into the rich histories, closures, and significant events that shaped the nations of the world.
        </p>
        <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors">
          Learn More
        </button>
      </div>
      
      {/* Right Side (Image) */}
      <div className="w-full  flex justify-end">
        <img 
          src="https://img.freepik.com/premium-photo/illustration-world-cities-day-generative-ai_756405-80255.jpg" 
          alt="Historical Country Image" 
          className="w-full lg:w-2/3 h-96 object-cover rounded-lg shadow-lg"  
        />
      </div>
    </div>
  );
}
