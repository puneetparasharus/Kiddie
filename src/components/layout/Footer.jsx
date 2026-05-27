// components/layout/Footer.jsx
          import { Link } from "react-router-dom";


import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-white rounded-t-[40px] border-t border-gray-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-14">
          
          {/* Brand */}
          <div>

            {/* Logo */}
            <div className="flex flex-col">
              
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-wide font-serif">
                
                <span className="text-[#b22222]">
                  KIDDIE
                </span>

                <span className="inline-flex items-center text-black text-xl sm:text-2xl mx-1">
                  🎓
                </span>

                <span className="text-[#555555]">
                  ACADEMY
                </span>
              </h1>

              <p className="text-[10px] sm:text-xs tracking-[3px] uppercase text-gray-600 ml-1 mt-1">
                Educational Child Care
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-500 mt-5 leading-relaxed text-sm sm:text-base max-w-sm">
              Creating joyful learning experiences where children
              grow, explore, and thrive every single day.
            </p>

            {/* Social Icons */}
            {/* <div className="flex items-center gap-4 mt-6 flex-wrap">
              
              <button className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-black hover:text-white transition duration-300">
                <FaFacebookF size={16} />
              </button>

              <button className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-black hover:text-white transition duration-300">
                <FaInstagram size={16} />
              </button>

              <button className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-black hover:text-white transition duration-300">
                <FaTwitter size={16} />
              </button>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#1b1b1b] mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-500 text-sm sm:text-base">
              
              <a
                href="/"
                className="hover:text-black transition"
              >
                Home
              </a>

              <a
                href="/programs"
                className="hover:text-black transition"
              >
                Programs
              </a>

              <a
                href="/about"
                className="hover:text-black transition"
              >
                About Us
              </a>

              <a
                href="/contact"
                className="hover:text-black transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-[#1b1b1b] mb-5">
              Programs
            </h3>

            <div className="flex flex-col gap-4 text-gray-500 text-sm sm:text-base">
              
              <p>Toddler Care</p>

              <p>Preschool</p>

              <p>Creative Learning</p>

              <p>Summer Camp</p>

              <p>After School</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#1b1b1b] mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-5 text-gray-500 text-sm sm:text-base">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0"
                />

                <p className="leading-relaxed">
                  7730 Center Blvd SE,
                  <br />
                  Snoqualmie WA USA
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={18} />

                <p>425 842 2150</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={18} />

            <p className="break-words">
  snoqualmie@kiddieacademy.net
</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col lg:flex-row items-center justify-between gap-5">
          
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center lg:text-left">
            © 2026 Kiddie Academy. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">
            

<Link
  to="/privacy-policy"
  className="hover:text-black transition"
>
  Privacy Policy
</Link>

<Link
  to="/terms-conditions"
  className="hover:text-black transition"
>
  Terms & Conditions
</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// TODO:
// - Add real social links
// - Add newsletter section
// - Add scroll-to-top button
// - Add actual contact details
// - Add hover animations

// // components/layout/Footer.jsx

// import {
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full mt-20 bg-white rounded-t-[40px] border-t border-gray-200 overflow-hidden">
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16">
        
//         {/* Top Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-14">
          
//           {/* Brand */}
//           <div>
            
//             {/* Logo */}
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-orange-300"></div>

//               <h2 className="text-2xl sm:text-3xl font-bold text-[#1b1b1b]">
//                 KinderKid
//               </h2>
//             </div>

//             {/* Description */}
//             <p className="text-gray-500 mt-5 leading-relaxed text-sm sm:text-base max-w-sm">
//               Creating joyful learning experiences where children
//               grow, explore, and thrive every single day.
//             </p>

//             {/* Social Icons */}
//             <div className="flex items-center gap-4 mt-6 flex-wrap">
              
//               <button className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-black hover:text-white transition duration-300">
//                 <FaFacebookF size={16} />
//               </button>

//               <button className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-black hover:text-white transition duration-300">
//                 <FaInstagram size={16} />
//               </button>

//               <button className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-black hover:text-white transition duration-300">
//                 <FaTwitter size={16} />
//               </button>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#1b1b1b] mb-5">
//               Quick Links
//             </h3>

//             <div className="flex flex-col gap-4 text-gray-500 text-sm sm:text-base">
              
//               <a href="#" className="hover:text-black transition">
//                 Home
//               </a>

//               <a href="#" className="hover:text-black transition">
//                 Programs
//               </a>

//               <a href="#" className="hover:text-black transition">
//                 About Us
//               </a>

//               <a href="#" className="hover:text-black transition">
//                 Gallery
//               </a>

//               <a href="#" className="hover:text-black transition">
//                 Contact
//               </a>
//             </div>
//           </div>

//           {/* Programs */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#1b1b1b] mb-5">
//               Programs
//             </h3>

//             <div className="flex flex-col gap-4 text-gray-500 text-sm sm:text-base">
              
//               <p>Toddler Care</p>

//               <p>Preschool</p>

//               <p>Creative Learning</p>

//               <p>Summer Camp</p>

//               <p>After School</p>
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#1b1b1b] mb-5">
//               Contact
//             </h3>

//             <div className="flex flex-col gap-5 text-gray-500 text-sm sm:text-base">
              
//               {/* Address */}
//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={18}
//                   className="mt-1 flex-shrink-0"
//                 />

//                 <p className="leading-relaxed">
//                   123 Learning Street,
//                   <br />
//                   New York, USA
//                 </p>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center gap-3">
//                 <Phone size={18} />

//                 <p>+1 234 567 890</p>
//               </div>

//               {/* Email */}
//               <div className="flex items-center gap-3">
//                 <Mail size={18} />

//                 <p className="break-all">
//                   hello@kinderkid.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col lg:flex-row items-center justify-between gap-5">
          
//           {/* Copyright */}
//           <p className="text-sm text-gray-500 text-center lg:text-left">
//             © 2026 KinderKid. All rights reserved.
//           </p>

//           {/* Bottom Links */}
//           <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">
            
//             <a
//               href="#"
//               className="hover:text-black transition"
//             >
//               Privacy Policy
//             </a>

//             <a
//               href="#"
//               className="hover:text-black transition"
//             >
//               Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// // TODO:
// // - Add real social links
// // - Add newsletter section
// // - Add scroll-to-top button
// // - Add actual contact details
// // - Add hover animations