import { Link } from "react-router-dom";

// pages/About.jsx
import Vasudha from "../assets/vasudha.jpg";
import Indira from "../assets/indira.jpg";
import Rua from "../assets/rua.avif";
import happykid from "../assets/happykid.avif";
import toddler from "../assets/toddler.avif";
const teamMembers = [
  {
    id: 1,
    name: "Indira Tiwari",
    role: "Center Assistant Director",
    image: Indira,
      
    description:
      "My name is Indira Tiwari, and I am excited to join Kiddie Academy of Snoqualmie as the new Center Assistant Director. I was born and raised in India, where I earned my Bachelor’s degree in Textile Engineering and gained professional experience in that field. After moving to the United States with my family in 2012, I discovered my passion for working with young children, which led me to pursue a career in early childhood education. Over the past 13 years, I have taken on various teaching and leadership roles and earned my Associate Degree in Early Childhood Education. I believe childcare is more than supervision—it is the foundation of learning, growth, and emotional well-being. I am dedicated to creating nurturing, inclusive, and engaging environments where children feel safe and valued.",
  },

  {
    id: 2,
    name: "Ruaa Elkhadir",
    role: "Supervisor",
    image: Rua,
    description:
      "Ruaa holds a bachelor’s degree in Telecommunication and has obtained a Basic Childcare Certificate. She is a former Qatar Airways professional who discovered her true calling after moving to Snoqualmie Ridge in 2022 with her husband and their two children. Over the past four years, she has advanced from Assistant Teacher to Teacher Supervisor, bringing the problem-solving skills of an engineer and the service excellence of an airline professional to early childhood education. Specializing in teaching three-year-old children, she creates classrooms where structure blends with joy and where every child feels valued, supported, and inspired to learn.",
  },
];

const About = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] text-[#1d2b5c]">
            Kiddie Academy
            <br />
            of Snoqualmie
          </h1>

          <p className="mt-8 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
            Every day, your child’s imagination grows and their curiosity
            gathers momentum. Kiddie Academy of Snoqualmie empowers and
            prepares them for life through engaging educational experiences,
            nurturing care, and a safe learning environment.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
  to="/contact"
  className="bg-[#f4c430] hover:scale-105 transition duration-300 text-black font-semibold px-8 py-4 rounded-full inline-flex items-center justify-center"
>
  REQUEST INFORMATION
</Link>

            {/* <button className="bg-[#0057c2] hover:scale-105 transition duration-300 text-white font-semibold px-8 py-4 rounded-full">
              SCHEDULE A TOUR
            </button> */}
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src= {toddler}
            alt="Academy Building"
            className="w-full h-[300px] sm:h-[450px] lg:h-[520px] object-cover rounded-[30px] shadow-xl"
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

        {/* Hours */}
        <div className="bg-[#f5f2ed] rounded-[28px] p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-[#1d2b5c] mb-5">
            Our Hours
          </h3>

          <div className="space-y-2 text-gray-700">
            <p>Mon 7am - 6pm</p>
            <p>Tue 7am - 6pm</p>
            <p>Wed 7am - 6pm</p>
            <p>Thu 7am - 6pm</p>
            <p>Fri 7am - 6pm</p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#f5f2ed] rounded-[28px] p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-[#1d2b5c] mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 7730 Center Boulevard SE,
              <br />
              Suite A, Snoqualmie, WA 98065
            </p>

            <p>📞 425-842-2150</p>
          </div>
        </div>
      </div>

      {/* Special Section */}
      <div className="mt-24">

        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[4px] text-orange-500 font-semibold mb-4">
            What Makes Us Special
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d2b5c] leading-tight">
            What Makes Our Kiddie Academy Special
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Our Life Essentials® curriculum is uniquely focused on the
            development of the outcomes that prepare children for life.
            We nurture curiosity, creativity, compassion, and confidence
            through engaging educational experiences every day.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="mt-14 bg-[#0057c2] rounded-[40px] p-6 sm:p-10 lg:p-14 relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Left Card */}
            <div className="bg-white rounded-[28px] p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1d2b5c] mb-4">
                What You Can Expect
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Kiddie Academy makes every day fun and educational for your
                child in an environment designed for growth and creativity.
              </p>

             <Link
  to="/contact"
  className="mt-6 bg-[#0057c2] text-white px-5 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center"
>
  REQUEST INFORMATION
</Link>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img
                src={happykid}
                alt="Kids"
                className="rounded-[28px] h-[420px] object-cover"
              />
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-[28px] p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1d2b5c] mb-4">
                Highlights Of Our Academy
              </h3>

              <ul className="space-y-3 text-gray-700 list-disc pl-5">
                <li>Caring teachers that create a nurturing atmosphere</li>
                <li>Comprehensive Life Essentials® curriculum</li>
                <li>Safe health and safety protocols</li>
                <li>Creative and engaging classrooms</li>
                <li>Activities supporting emotional growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Owner Section */}
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold mb-4">
            Meet The Owner
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d2b5c] leading-tight">
            Dr. Vasudha Sharma, DPT
          </h2>

          <p className="mt-8 text-gray-700 leading-relaxed text-base sm:text-lg">
            My name is Vasudha Sharma and I am honored to build and own
            Kiddie Academy of Snoqualmie. I am also a wife, a mother,
            a Physical therapist, a School Volunteer, and a Community
            Servant. Having worked as a Registered Physical Therapist
            for 20-plus years, I understand the importance of providing
            exceptional care for individuals in our community.
          </p>

          <p className="mt-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Quality care is sometimes hard to come by, which is why I have
            shifted my efforts to providing excellent childcare in the area.
            While raising my two boys, I found myself constantly looking for
            ways to provide an enriching and engaging environment for them.
            This opened my heart to the possibility of shaping children’s
            futures through a safe and nurturing environment.
          </p>
        </div>

        {/* Right Image */}
      <div className="max-w-[650px] mx-auto">
  <img
    src={Vasudha}
    alt="Owner"
    className="w-full aspect-[4/5] object-cover rounded-[30px] shadow-xl"
  />
</div>
      </div>

      {/* Team Section */}
      <div className="mt-28">

        <div className="text-center">
          <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold mb-4">
            Our Team
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d2b5c]">
            Meet Our Team
          </h2>
        </div>

        {/* Team Members */}
        <div className="mt-16 space-y-16">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start"
            >

              {/* Image */}
              <div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full max-w-[280px] h-[320px] object-cover rounded-[28px] shadow-lg"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold text-[#1d2b5c]">
                  {member.name}
                </h3>

                <p className="text-xl font-semibold text-gray-700 mt-2">
                  {member.role}
                </p>

                <p className="mt-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

// TODO:
// - Replace remote images with local assets
// - Add animations using Framer Motion
// - Add testimonials section
// - Add gallery section
// - Add FAQ section