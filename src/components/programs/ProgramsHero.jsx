// components/programs/ProgramsHero.jsx
import classroom from "../../assets/classroom.avif";
import { motion } from "framer-motion";

const ProgramsHero = () => {
return ( <section className="relative overflow-hidden px-6 md:px-10 lg:px-16 py-24 lg:py-32 bg-[#f7f4ef]">


  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-[#f6d28b] opacity-30 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#dce8d5] opacity-60 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >

      {/* Small Label */}
      <span className="inline-block px-5 py-2 rounded-full bg-[#fff3d8] text-[#d89a1d] text-sm font-semibold tracking-wide mb-6">
        Programs Designed For Growth
      </span>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold text-[#1c1c1c] leading-[1.05] mb-8">
        Inspiring Young Minds Through Meaningful Learning
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
        Our programs are thoughtfully designed to support every stage of
        your child’s development through creativity, exploration,
        collaboration, and hands-on learning experiences.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">

        {/* <button className="bg-[#0d5cc8] hover:bg-[#0849a3] text-white px-8 py-4 rounded-full font-semibold shadow-xl transition duration-300">
          Explore Programs
        </button> */}

        {/* <button className="border border-gray-300 hover:bg-white text-[#1c1c1c] px-8 py-4 rounded-full font-semibold transition duration-300">
          Learn More
        </button> */}
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-8 mt-14">

        <div>
          <h3 className="text-4xl font-bold text-[#1c1c1c]">
            8+
          </h3>

          <p className="text-gray-500 mt-2">
            Specialized Programs
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#1c1c1c]">
            500+
          </h3>

          <p className="text-gray-500 mt-2">
            Happy Families
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#1c1c1c]">
            15+
          </h3>

          <p className="text-gray-500 mt-2">
            Expert Educators
          </p>
        </div>
      </div>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="relative flex justify-center"
    >

      {/* Background Shape */}
      <motion.div
        animate={{
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 w-[90%] h-[90%] bg-[#f2b24d] rounded-[50px]"
      />

      {/* Main Image */}
      <motion.img
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        src={classroom}
        alt="Programs Hero"
        className="relative z-10 w-full max-w-lg h-[650px] object-cover rounded-[50px] shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
      />

      {/* Floating Card */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -bottom-4 -left-4 z-20 bg-white p-5 rounded-3xl shadow-2xl"
      >
        <p className="text-lg font-bold text-[#1c1c1c]">
          ⭐ Curriculum Focused On Outcomes
        </p>

        <p className="text-gray-500 mt-1 text-sm">
          Encouraging growth through creativity & exploration
        </p>
      </motion.div>

      {/* Floating Blur */}
      <div className="absolute -top-8 -right-6 w-32 h-32 bg-white opacity-70 blur-3xl rounded-full"></div>
    </motion.div>
  </div>
</section>


);
};

export default ProgramsHero;

// TODO:
// - Add responsive mobile image sizing
// - Add parallax scrolling
// - Add background decorative icons
// - Add smooth scroll CTA
// - Add real academy image
