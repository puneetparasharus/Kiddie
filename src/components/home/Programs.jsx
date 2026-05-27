// components/home/Programs.jsx
import kindergarten from "../../assets/kindergarten.avif";
import prekindergarten from "../../assets/preKindergarten.avif";
import happyKid from "../../assets/happyKid.avif";
import infant from "../../assets/infant.avif";
import toodler from "../../assets/toddler.avif";
import earlypre from "../../assets/earlypre.avif";



const programs = [
  {
    title: "Infant",
    age: "6 weeks to 12 months",
    color: "bg-[#F5F1EC]",
    image:
      infant,
  },

  {
    title: "Toddler",
    age: "13 to 24 months",
    color: "bg-[#F5F1EC]",
    image:
toodler,  },

  {
    title: "Early Preschool",
    age: "2-Year-Olds",
    color: "bg-[#F5F1EC]",
    image:
      earlypre,},

  {
    title: "Preschool",
    age: "3-Year-Olds",
    color: "bg-[#F5F1EC]",
    image:
    happyKid
  },

  {
    title: "Pre-Kindergarten",
    age: "4-Year-Olds",
    color: "bg-[#F5F1EC]",
    image:
    
      prekindergarten,},

  {
    title: "Kindergarten",
    age: "5-Year-Olds",
       color: "bg-[#F5F1EC]",
    image:
          kindergarten,

  },
];

const Programs = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-16 lg:py-24 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        
        <div className="inline-flex items-center gap-2 bg-[#eef7eb] border border-[#d7ead1] px-4 py-2 rounded-full text-sm text-[#4b6b43]">
          📚 Programs
        </div>

        <h2 className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-[#1b1b1b]">
          Learning For Every Age
        </h2>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">
        
        {programs.map((program, index) => (
          <div
            key={index}
            className={`${program.color} group rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500`}
          >
            
            {/* Image */}
            <div className="relative overflow-hidden h-[240px]">
              
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>

              {/* Floating Icon */}
              <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-2xl shadow-lg">
                ✨
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1b1b1b] group-hover:translate-x-1 transition duration-300">
                {program.title}
              </h3>

              <p className="mt-3 text-gray-600 text-base sm:text-lg">
                {program.age}
              </p>

              {/* Bottom */}
              <div className="mt-8 flex items-center justify-between">
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Active Program
                </div>

                <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:rotate-45 transition duration-300">
                  →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;

// TODO:
// - Add Framer Motion animations
// - Add active card switching
// - Add program detail modal
// - Connect cards to Programs page
// - Add gradient hover effects