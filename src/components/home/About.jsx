// components/home/About.jsx

const About = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-16 lg:py-24">
      
      <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
        
        {/* Left Images */}
        <div className="relative flex justify-center">
          
          {/* Background Shape */}
          <div className="absolute w-[85%] h-[85%] bg-[#f8e7c7] rounded-[40px] top-10 left-8"></div>

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop"
            alt="Kids Learning"
            className="relative z-10 w-full max-w-md xl:max-w-lg rounded-[32px] object-cover shadow-2xl"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-5 left-0 sm:left-5 z-20 bg-white shadow-xl rounded-2xl px-5 py-4">
            
            <h3 className="text-2xl font-bold text-[#1b1b1b]">
              10+
            </h3>

            <p className="text-sm text-gray-500">
              Creative Activities
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-[#eef7eb] border border-[#d7ead1] px-4 py-2 rounded-full text-sm text-[#4b6b43]">
            🌱 About Us
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-[#1b1b1b]">
            Building Bright Futures Through Playful Learning
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed">
            We create a warm and inspiring environment where
            children feel safe, supported, and excited to learn.
            Our approach combines creativity, exploration, and
            meaningful experiences that help every child grow
            with confidence.
          </p>

          {/* Features */}
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            
            <div className="bg-[#f8f8f8] rounded-2xl p-5">
              <h3 className="text-xl font-semibold text-[#1b1b1b]">
                Safe Environment
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Creating secure and joyful spaces for children
                to learn and explore freely.
              </p>
            </div>

            <div className="bg-[#f8f8f8] rounded-2xl p-5">
              <h3 className="text-xl font-semibold text-[#1b1b1b]">
                Creative Learning
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Encouraging imagination and curiosity through
                engaging hands-on activities.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 bg-black text-white px-7 py-4 rounded-full text-sm sm:text-base font-medium hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

// TODO:
// - Add animations
// - Add counters
// - Replace with real academy image later
// - Add testimonials preview
// - Connect button to About page