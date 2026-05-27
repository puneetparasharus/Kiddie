// components/programs/LearningMomentum.jsx

import { motion } from "framer-motion";
import books from "../../assets/books.avif";
import toodler from "../../assets/toddler.avif";
import camp from "../../assets/camp.avif";
import boy from "../../assets/boy.avif";
import classroom from "../../assets/classroom.avif";


const topCards = [
{
id: 1,
title: "A Curriculum Focused on Outcomes",
description:
"Life Essentials is uniquely designed to help prepare children for life.",
button: "LEARN MORE",
image:
books,
},

{
id: 2,
title: "A Nurturing Learning Environment",
description:
"We provide the ideal atmosphere for your child to learn and have fun.",
button: "SEE HOW",
image:
toodler,
},

{
id: 3,
title: "All Day Adventures. All Summer Long.",
description:
"CampVentures® is a fun, educational way for your child to spend their summer.",
button: "SEE ENROLLMENT",
image:
camp,
},
];

const LearningMomentum = () => {
return ( <section className="bg-[#f6f2ec] py-24 px-6 md:px-10 overflow-hidden">


  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mb-20"
    >

      <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] leading-tight mb-6">
        Learning With Momentum
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        Our Life Essentials® curriculum is designed to nurture what is unique
        in every child and help them develop a love of learning at their own pace.
      </p>
    </motion.div>

    {/* Top Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-28">

      {topCards.map((card, index) => (

        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
          }}
          whileHover={{ y: -10 }}
          className="bg-[#0d5cc8] rounded-[35px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)]"
        >

          {/* Image */}
          <div className="h-[240px] overflow-hidden">
            <motion.img
              src={card.image}
              alt={card.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 text-white">

            <h3 className="text-2xl font-bold leading-snug mb-4">
              {card.title}
            </h3>

            <p className="text-white/80 leading-relaxed mb-8">
              {card.description}
            </p>

            <button className="bg-[#f2b24d] hover:bg-[#e3a33e] text-black font-semibold px-6 py-3 rounded-full transition duration-300">
              {card.button}
            </button>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Feature Block 1 */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-2 gap-10 items-center mb-28"
    >

      {/* Image */}
      <div className="relative">

        <div className="absolute bottom-0 right-0 w-[90%] h-[90%] bg-[#f2b24d] rounded-[40px]"></div>

        <img
          src={boy}
          alt="Educational Experts"
          className="relative z-10 w-full h-[500px] object-cover rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        />
      </div>

      {/* Content */}
      <div className="bg-white rounded-[40px] p-10 shadow-[0_15px_50px_rgba(0,0,0,0.06)]">

        <span className="inline-block px-4 py-2 rounded-full bg-[#fdf3d7] text-[#d18a16] text-sm font-semibold mb-6">
          Educational Excellence
        </span>

        <h3 className="text-4xl font-bold text-[#1c1c1c] leading-tight mb-6">
          Programs Developed by our Educational Child Care Experts
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Our Early Childhood Education Team and the Life Essentials®
          Curriculum Advisory Council evaluate and update our programs
          continuously to ensure every child receives the most effective
          educational experience.
        </p>

        <button className="bg-[#f2b24d] hover:bg-[#e3a33e] text-black font-semibold px-7 py-3 rounded-full transition duration-300">
          MEET OUR TEAM
        </button>
      </div>
    </motion.div>

    {/* Feature Block 2 */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-2 gap-10 items-center"
    >

      {/* Content */}
      <div className="bg-white rounded-[40px] p-10 shadow-[0_15px_50px_rgba(0,0,0,0.06)] order-2 lg:order-1">

        <span className="inline-block px-4 py-2 rounded-full bg-[#fdf3d7] text-[#d18a16] text-sm font-semibold mb-6">
          Focus On Excellence
        </span>

        <h3 className="text-4xl font-bold text-[#1c1c1c] leading-tight mb-6">
          Focus On Excellence
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We set high standards and deliver exceptional educational
          experiences. The quality of our curriculum, focus on
          benchmarking excellence, and proactive accreditation are
          just a few ways we achieve this.
        </p>

        <button className="bg-[#f2b24d] hover:bg-[#e3a33e] text-black font-semibold px-7 py-3 rounded-full transition duration-300">
          LEARN MORE
        </button>
      </div>

      {/* Image */}
      <div className="relative order-1 lg:order-2">

        <div className="absolute bottom-0 left-0 w-[90%] h-[90%] bg-[#0d5cc8] rounded-[40px]"></div>

        <img
          src={classroom}
          alt="Focus On Excellence"
          className="relative z-10 w-full h-[500px] object-cover rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        />
      </div>
    </motion.div>
  </div>
</section>


);
};

export default LearningMomentum;

// TODO:
// - Add image parallax
// - Add floating decorative elements
// - Add stagger animation
// - Add mobile layout optimization
// - Add section divider animation
