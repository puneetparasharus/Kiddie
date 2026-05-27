import { Link } from "react-router-dom";

import happyKid from "../../assets/happyKid.avif";
import kindergarten from "../../assets/kindergarten.avif";
import classroom from "../../assets/classroom.avif";

const features = [
  {
    id: 1,
    title: "The Kiddie Academy Difference",
    description:
      "We create a playful and nurturing environment where children explore, learn, and grow with confidence every single day.",
    button: "ABOUT US",
    link: "/about",
    image: happyKid,
  },

  {
    id: 2,
    title: "Curriculum Focused on Outcomes",
    description:
      "Our hands-on curriculum encourages creativity, curiosity, and problem-solving skills.",
    button: "OUR PROGRAMS",
    link: "/programs",
    image: kindergarten,
  },

  {
    id: 3,
    title: "Safe & Healthy Environment",
    description:
      "Your child’s safety is our priority with secure classrooms and caring teachers.",
    button: "LEARN MORE",
    link: "/contact",
    image: classroom,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#ece7e1] py-24 px-6 md:px-12 rounded-t-[50px]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#f2a93b] font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] leading-tight">
            Why Parents Love Kiddie Academy Of Snoqualmie
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-20">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* Image Side */}
              <div className="relative flex justify-center group overflow-hidden rounded-[35px]">

                {/* Background Shape */}
                <div className="absolute bottom-0 w-[85%] h-[85%] bg-[#f2b24d] rounded-[35px] rotate-3"></div>

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "low"}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="relative z-10 w-full max-w-sm h-[420px] object-cover rounded-[35px] shadow-xl transition-transform duration-700 ease-out will-change-transform"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();

                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const moveX = (x - rect.width / 2) * 0.03;
                    const moveY = (y - rect.height / 2) * 0.05;

                    e.currentTarget.style.transform = `
                      translate(${moveX}px, ${moveY}px)
                      scale(1.05)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translate(0px, 0px) scale(1)";
                  }}
                />

                {/* Floating Decorative Circle */}
                <div className="absolute -top-5 -right-2 w-20 h-20 bg-white rounded-full blur-2xl opacity-70"></div>
              </div>

              {/* Content Card */}
              <div className="bg-white p-8 md:p-10 rounded-[35px] shadow-lg relative overflow-hidden hover:-translate-y-2 transition duration-500">

                {/* Decorative Blur */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f8d899] rounded-full blur-3xl opacity-40"></div>

                <div className="relative z-10">
                  <span className="inline-block px-4 py-2 rounded-full bg-[#fdf3d7] text-[#d18a16] text-sm font-semibold mb-5">
                    Trusted By Parents
                  </span>

                  <h3 className="text-3xl font-bold text-[#1d1d1d] leading-snug mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className="inline-flex items-center justify-center bg-[#f2b24d] hover:bg-[#e7a132] text-black font-semibold px-7 py-3 rounded-full transition duration-300 shadow-md hover:shadow-xl"
                  >
                    {item.button}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

// TODO:
// - Convert images to WebP/AVIF if larger than needed
// - Add intersection observer animations
// - Add responsive image variants
// - Add skeleton loading state


// import  happyKid from "../../assets/happyKid.avif";
// import kindergarten from "../../assets/kindergarten.avif";
// import classroom from "../../assets/classroom.avif";

// const features = [
//   {
//     id: 1,
//     title: "The Kiddie Academy Difference",
//     description:
//       "We create a playful and nurturing environment where children explore, learn, and grow with confidence every single day.",
//     button: "ABOUT US",
//     image:
//       happyKid,
//   },

//   {
//     id: 2,
//     title: "Curriculum Focused on Outcomes",
//     description:
//       "Our hands-on curriculum encourages creativity, curiosity, and problem-solving skills.",
//     button: "OUR PROGRAMS",
//     image:
// kindergarten,     },

//   {
//     id: 3,
//     title: "Safe & Healthy Environment",
//     description:
//       "Your child’s safety is our priority with secure classrooms and caring teachers.",
//     button: "LEARN MORE",
//     image:
//       classroom,},
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-[#ece7e1] py-24 px-6 md:px-12 rounded-t-[50px]">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="max-w-2xl mb-16">
//           <p className="text-[#f2a93b] font-semibold tracking-widest uppercase mb-3">
//             Why Choose Us
//           </p>

//           <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] leading-tight">
//             Why Parents Love Kiddie Academy Of Snoqualmie
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="space-y-20">
//           {features.map((item, index) => (
//             <div
//               key={item.id}
//               className={`grid lg:grid-cols-2 gap-8 items-center ${
//                 index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
//               }`}
//             >

//               {/* Image Side */}
//               <div className="relative flex justify-center group overflow-hidden rounded-[35px]">

//                 {/* Background Shape */}
//                 <div className="absolute bottom-0 w-[85%] h-[85%] bg-[#f2b24d] rounded-[35px] rotate-3"></div>

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="relative z-10 w-full max-w-sm h-[420px] object-cover rounded-[35px] shadow-xl transition-transform duration-700 ease-out"
//                   onMouseMove={(e) => {
//                     const rect = e.currentTarget.getBoundingClientRect();

//                     const x = e.clientX - rect.left;
//                     const y = e.clientY - rect.top;

//                     const moveX = (x - rect.width / 2) * 0.03;
//                     const moveY = (y - rect.height / 2) * 0.05;

//                     e.currentTarget.style.transform = `
//                       translate(${moveX}px, ${moveY}px)
//                       scale(1.05)
//                     `;
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform =
//                       "translate(0px, 0px) scale(1)";
//                   }}
//                 />

//                 {/* Floating Decorative Circle */}
//                 <div className="absolute -top-5 -right-2 w-20 h-20 bg-white rounded-full blur-2xl opacity-70"></div>
//               </div>

//               {/* Content Card */}
//               <div className="bg-white p-8 md:p-10 rounded-[35px] shadow-lg relative overflow-hidden hover:-translate-y-2 transition duration-500">

//                 {/* Decorative Blur */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#f8d899] rounded-full blur-3xl opacity-40"></div>

//                 <div className="relative z-10">
//                   <span className="inline-block px-4 py-2 rounded-full bg-[#fdf3d7] text-[#d18a16] text-sm font-semibold mb-5">
//                     Trusted By Parents
//                   </span>

//                   <h3 className="text-3xl font-bold text-[#1d1d1d] leading-snug mb-5">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed mb-8 text-lg">
//                     {item.description}
//                   </p>

//                   <button className="bg-[#f2b24d] hover:bg-[#e7a132] text-black font-semibold px-7 py-3 rounded-full transition duration-300 shadow-md hover:shadow-xl">
//                     {item.button}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

// TODO:
// - Add Framer Motion animation
// - Add responsive typography tweaks
// - Add real academy images