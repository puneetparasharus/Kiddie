// components/programs/ProgramTabs.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import kindergarten from "../../assets/kindergarten.avif";
import prekindergarten from "../../assets/preKindergarten.avif";
import happyKid from "../../assets/happyKid.avif";
import infant from "../../assets/infant.avif";
import toodler from "../../assets/toddler.avif";
import earlypre from "../../assets/earlypre.avif";
import school from "../../assets/school.avif";
import camp from "../../assets/camp.avif";


const programs = [
{
id: 1,
title: "Infant",
age: "6 Weeks - 12 Months",
image:
 infant,


description:
  "Our infant program provides a warm, nurturing environment designed to support emotional bonding, sensory exploration, and early developmental milestones.",

learn: [
  "Sensory Development",
  "Language Growth",
  "Motor Skills",
  "Emotional Bonding",
],

activities: [
  "Music & Sounds",
  "Story Time",
  "Tummy Time",
  "Nap Routine",
],


},

{
id: 2,
title: "Toddler",
age: "13 - 24 Months",
image:
toodler,


description:
  "Toddlers are encouraged to explore, communicate, and build confidence through guided play and engaging hands-on experiences.",

learn: [
  "Creative Play",
  "Social Skills",
  "Communication",
  "Problem Solving",
],

activities: [
  "Outdoor Play",
  "Art Activities",
  "Dance & Music",
  "Group Learning",
],


},

{
id: 3,
title: "Early Preschool",
age: "2-Year-Olds",
image:
earlypre,


description:
  "Early Preschool introduces structured learning while encouraging creativity, independence, and curiosity.",

learn: [
  "Early Literacy",
  "Social Interaction",
  "Creativity",
  "Motor Skills",
],

activities: [
  "Circle Time",
  "Painting",
  "Music Activities",
  "Outdoor Learning",
],


},

{
id: 4,
title: "Preschool",
age: "3-Year-Olds",
image:
happyKid,

description:
  "Our preschool curriculum promotes independence, creativity, and kindergarten readiness through meaningful learning experiences.",

learn: [
  "Early Math",
  "Reading Skills",
  "Critical Thinking",
  "Teamwork",
],

activities: [
  "STEM Activities",
  "Reading Time",
  "Creative Projects",
  "Outdoor Games",
],


},

{
id: 5,
title: "Pre-Kindergarten",
age: "4-Year-Olds",
image:
prekindergarten,


description:
  "Pre-K prepares children for academic success through advanced learning experiences and leadership-building activities.",

learn: [
  "Writing Skills",
  "Advanced Math",
  "Confidence Building",
  "Collaboration",
],

activities: [
  "Science Projects",
  "Interactive Reading",
  "Leadership Games",
  "Outdoor Activities",
],


},

{
id: 6,
title: "Kindergarten",
age: "5-Year-Olds",
image:
kindergarten,


description:
  "Our kindergarten program focuses on academic readiness while nurturing confidence, independence, and creativity.",

learn: [
  "Reading Fluency",
  "Math Skills",
  "Problem Solving",
  "Communication",
],

activities: [
  "Group Learning",
  "Creative Writing",
  "Math Games",
  "Outdoor Exploration",
],


},

{
id: 7,
title: "School Age",
age: "5 - 12 Years",
image:
school,


description:
  "Our school age program offers a balanced environment for learning, creativity, and after-school enrichment.",

learn: [
  "Teamwork",
  "Leadership",
  "Critical Thinking",
  "Creativity",
],

activities: [
  "Homework Help",
  "STEM Clubs",
  "Sports",
  "Creative Workshops",
],


},

{
id: 8,
title: "Summer Camp",
age: "2 - 12 Years",
image:
camp,

description:
  "Summer Camp combines adventure, creativity, and educational fun through engaging seasonal activities.",

learn: [
  "Creativity",
  "Social Skills",
  "Outdoor Exploration",
  "Confidence",
],

activities: [
  "Water Play",
  "Nature Activities",
  "Arts & Crafts",
  "Adventure Games",
],


},
];


const ProgramTabs = () => {

const [activeProgram, setActiveProgram] = useState(programs[0]);

return ( <section className="bg-[#f6f2ec] py-24 px-6 md:px-10 overflow-hidden">


  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="max-w-3xl mb-16">

      <p className="text-[#f2a93b] font-semibold tracking-[0.25em] uppercase mb-4">
        Our Programs
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] leading-tight">
        Programs Designed For Every Stage Of Growth
      </h2>
    </div>

    {/* Tabs */}
    <div className="flex flex-wrap gap-4 mb-16">

      {programs.map((program) => (

        <button
          key={program.id}
          onClick={() => setActiveProgram(program)}
          className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
            activeProgram.id === program.id
              ? "bg-[#0d5cc8] text-white shadow-xl"
              : "bg-white text-gray-700 hover:bg-[#ececec]"
          }`}
        >
          {program.title}
        </button>
      ))}
    </div>

    {/* Active Content */}
    <AnimatePresence mode="wait">

      <motion.div
        key={activeProgram.id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="grid lg:grid-cols-2 gap-14 items-center"
      >

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          {/* Background Shape */}
          <div className="absolute bottom-0 right-0 w-[90%] h-[90%] bg-[#f2b24d] rounded-[40px]"></div>

          {/* Main Image */}
          <motion.img
            src={activeProgram.image}
            alt={activeProgram.title}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-full h-[580px] object-cover rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          />

          {/* Floating Badge */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute top-6 left-6 z-20 bg-white px-5 py-3 rounded-2xl shadow-xl"
          >
            <p className="font-semibold text-[#1c1c1c]">
              ⭐ Trusted By Parents
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Age Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-[#fdf3d7] text-[#d18a16] text-sm font-semibold mb-6">
            {activeProgram.age}
          </span>

          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-6">
            {activeProgram.title} Program
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {activeProgram.description}
          </p>

          {/* Learn */}
          <div className="mb-10">

            <h4 className="text-2xl font-bold text-[#1c1c1c] mb-5">
              What Children Learn
            </h4>

            <div className="flex flex-wrap gap-3">

              {activeProgram.learn.map((item, index) => (
                <span
                  key={index}
                  className="px-5 py-3 rounded-full bg-white shadow-md text-gray-700 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>

            <h4 className="text-2xl font-bold text-[#1c1c1c] mb-5">
              Daily Activities
            </h4>

            <div className="grid sm:grid-cols-2 gap-4">

              {activeProgram.activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl shadow-sm text-gray-700"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>


);
};

export default ProgramTabs;

// TODO:
// - Add remaining programs
// - Add mobile accordion view
// - Add swipe animation
// - Add image parallax
// - Add active tab underline animation
