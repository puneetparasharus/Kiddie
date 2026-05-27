// components/layout/Navbar.jsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Programs",
      path: "/programs",
    },

    {
      name: "About Us",
      path: "/about",
    },
  ];

  return (
    <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-4 md:py-6 relative z-50">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-300"></div>

         <h1 className="text-xl sm:text-2xl font-bold leading-tight">
  <span className="text-[#f2b24d]">KIDDIE</span>{" "}
  <span className="text-[#1b1b1b]">ACADEMY</span>
</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 text-sm font-medium">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2.5 rounded-full transition duration-300 ${
                  isActive
                    ? "bg-black text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center justify-center bg-black text-white px-5 xl:px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition duration-300"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center"
        >
          {isOpen ? (
            <X size={28} className="text-black" />
          ) : (
            <Menu size={28} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-[500px] opacity-100 mt-5"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base px-4 py-3 rounded-2xl transition ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-black text-white py-3 rounded-full mt-2 text-sm font-medium text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// TODO:
// - Add navbar blur effect on scroll
// - Add animated active indicator
// - Add dropdown menu for Programs
// - Add route transition animations

// // components/layout/Navbar.jsx

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     {
//       name: "Home",
//       path: "/",
//     },

//     {
//       name: "Programs",
//       path: "/programs",
//     },

//     {
//       name: "About Us",
//       path: "/about",
//     },
//   ];

//   return (
//     <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-4 md:py-6 relative z-50">
      
//       {/* Top Bar */}
//       <div className="flex items-center justify-between">

//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 flex-shrink-0"
//         >
//           <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-300"></div>

//           <h1 className="text-xl sm:text-2xl font-bold text-[#1b1b1b]">
//             KinderKid
//           </h1>
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium text-gray-600">

//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="hover:text-black transition duration-300"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop Contact Button */}
//         <Link
//           to="/contact"
//           className="hidden lg:flex items-center justify-center bg-black text-white px-5 xl:px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition duration-300"
//         >
//           Contact Us
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden flex items-center justify-center"
//         >
//           {isOpen ? (
//             <X size={28} className="text-black" />
//           ) : (
//             <Menu size={28} className="text-black" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden overflow-hidden transition-all duration-300 ${
//           isOpen
//             ? "max-h-[500px] opacity-100 mt-5"
//             : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-5">

//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="text-gray-700 text-base hover:text-black transition"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Mobile Contact Button */}
//           <Link
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className="bg-black text-white py-3 rounded-full mt-2 text-sm font-medium text-center"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// TODO:
// - Add active link highlight
// - Add navbar scroll effect
// - Add dropdown for Programs
// - Add smooth page transitions
