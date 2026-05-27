// components/home/Hero.jsx

import { ArrowRight } from "lucide-react";
import happyKid from "../../assets/happyKid.avif";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 lg:py-16 overflow-hidden">
      
      <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
        
        {/* Left Content */}
        <div className="w-full">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#eef7eb] border border-[#d7ead1] px-4 py-2 rounded-full text-sm text-[#4b6b43]">
            ✨ Best Preschool Learning Platform
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-[#1b1b1b]">
            Where Little Explorers Begin Their Big Adventures!
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl">
            A playful and nurturing environment where children
            learn, grow, and discover their creativity through
            fun and interactive experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            
            <button className="bg-black text-white px-7 py-4 rounded-full text-sm sm:text-base font-medium hover:scale-105 transition flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="border border-gray-300 px-7 py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          {/* Stats + Tags */}
          {/* Stats + Tags */}
<div className="mt-10 flex flex-col xl:flex-row gap-10 xl:items-center">
  
  {/* Stats Card */}
  <div className="bg-black text-white rounded-[32px] p-6 sm:p-7 w-full sm:max-w-[340px] shadow-2xl">
    
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
      A Growing
      <br />
      Community
    </h2>

    {/* Description */}
    <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
      Creating meaningful learning experiences
      for children and parents every day.
    </p>

    {/* Bottom Section */}
    <div className="mt-7 flex flex-col gap-4">
      
      {/* Avatar Group */}
      <div className="flex -space-x-3">
        <div className="w-11 h-11 rounded-full bg-yellow-400 border-2 border-white"></div>

        <div className="w-11 h-11 rounded-full bg-pink-400 border-2 border-white"></div>

        <div className="w-11 h-11 rounded-full bg-green-400 border-2 border-white"></div>

        <div className="w-11 h-11 rounded-full bg-cyan-400 border-2 border-white"></div>
      </div>

      {/* Badge */}
      <div className="w-fit px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs text-gray-200">
        Growing Together ✨
      </div>
    </div>
  </div>

  {/* Tags */}
  <div className="flex flex-wrap gap-3 max-w-lg pt-2">
    
    <div className="px-4 py-3 rounded-full bg-purple-100 text-sm">
      Diversity
    </div>

    <div className="px-4 py-3 rounded-full bg-yellow-100 text-sm">
      Creative Learning
    </div>

    <div className="px-4 py-3 rounded-full bg-green-100 text-sm">
      Nurturing Growth
    </div>

    <div className="px-4 py-3 rounded-full bg-cyan-100 text-sm">
      Safe Environment
    </div>

    <div className="px-4 py-3 rounded-full bg-orange-100 text-sm">
      Fun Activities
    </div>
  </div>
</div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex items-center justify-center">
          
          {/* Background Shape */}
          <div className="absolute w-[90%] h-[90%] bg-[#f3b562] rounded-[40px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:40px_40px] rounded-[40px]"></div>

          {/* Main Image */}
          <img
            // src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop"
            src={happyKid}
            alt="Happy Kid"
            className="relative z-10 w-full max-w-md xl:max-w-lg object-cover rounded-[32px] shadow-2xl"
          />

          {/* Floating Elements */}
          <div className="absolute top-5 left-3 sm:left-10 text-4xl sm:text-5xl rotate-12">
            ☺
          </div>

          <div className="absolute bottom-5 right-3 sm:right-10 text-4xl sm:text-5xl -rotate-12">
            ✈
          </div>

          <div className="absolute top-1/2 -left-2 sm:left-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-300 blur-2xl opacity-70"></div>

          <div className="absolute bottom-10 -right-2 sm:right-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-300 blur-2xl opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// TODO:
// - Add Framer Motion animations
// - Add floating animation to doodles
// - Replace image with transparent PNG
// - Add autoplay testimonial badge
// - Add parallax effect