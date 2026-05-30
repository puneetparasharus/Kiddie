import { Routes, Route } from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <main className="min-h-screen bg-[#dce8d5] overflow-hidden">
      <div className="w-full max-w-[1850px] mx-auto px-2 sm:px-4 md:px-6 xl:px-8 py-2 sm:py-4">
        <div className="bg-white rounded-[24px] sm:rounded-[36px] lg:rounded-[50px] shadow-[0_10px_60px_rgba(0,0,0,0.08)] overflow-hidden min-h-screen flex flex-col">

          <Navbar />

          <div className="flex-1">
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;

// // App.jsx

// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// import Home from "./pages/Home";
// import Programs from "./pages/Programs";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsConditions from "./pages/TermsConditions";

// function App() {
//   return (
//     <main className="min-h-screen bg-[#dce8d5] overflow-hidden">
      
//       {/* Main Container */}
//       <div className="w-full max-w-[1850px] mx-auto px-2 sm:px-4 md:px-6 xl:px-8 py-2 sm:py-4">
        
//         {/* Rounded Main Layout */}
//         <div className="bg-white rounded-[24px] sm:rounded-[36px] lg:rounded-[50px] shadow-[0_10px_60px_rgba(0,0,0,0.08)] overflow-hidden min-h-screen flex flex-col">
          
//           {/* Global Navbar */}
//           <Navbar />

//           {/* Page Content */}
//           <div className="flex-1">
//             <Routes>

//               {/* Home Page */}
//               <Route path="/" element={<Home />} />

//               {/* Programs Page */}
//               <Route path="/programs" element={<Programs />} />

//               {/* About Page */}
//               <Route path="/about" element={<About />} />

//               {/* Contact Page */}
//               <Route path="/contact" element={<Contact />} />

//               {/* Privacy Policy Page */}
//               <Route
//                 path="/privacy-policy"
//                 element={<PrivacyPolicy />}
//               />

//               {/* Terms & Conditions Page */}
//               <Route
//                 path="/terms-conditions"
//                 element={<TermsConditions />}
//               />

//             </Routes>
//           </div>

//           {/* Global Footer */}
//           <Footer />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;
// TODO:
// - Add 404 page
// - Add page transition animations
// - Add scroll-to-top on route change
// - Add lazy loading for pages

// // App.jsx

// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// import Home from "./pages/Home";
// import Programs from "./pages/Programs";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <main className="min-h-screen bg-[#dce8d5] overflow-hidden">
      
//       {/* Main Container */}
//       <div className="w-full max-w-[1850px] mx-auto px-2 sm:px-4 md:px-6 xl:px-8 py-2 sm:py-4">
        
//         {/* Rounded Main Layout */}
//         <div className="bg-white rounded-[24px] sm:rounded-[36px] lg:rounded-[50px] shadow-[0_10px_60px_rgba(0,0,0,0.08)] overflow-hidden min-h-screen flex flex-col">
          
//           {/* Global Navbar */}
//           <Navbar />

//           {/* Page Content */}
//           <div className="flex-1">
//             <Routes>

//               {/* Home Page */}
//               <Route path="/" element={<Home />} />

//               {/* Programs Page */}
//               <Route path="/programs" element={<Programs />} />

//               {/* Contact Page */}
//               <Route path="/contact" element={<Contact />} />

//             </Routes>
//           </div>

//           {/* Global Footer */}
//           <Footer />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;

// // App.jsx

// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Programs from "./pages/Programs";
// import Contact from "./pages/Contact";

// function App() {
// return ( <Routes>


//   {/* Home Page */}
//   <Route path="/" element={<Home />} />

//   {/* Programs Page */}
//   <Route path="/programs" element={<Programs />} />

//   {/* Contact Page */}
//   <Route path="/contact" element={<Contact />} />

// </Routes>


// );
// }

// export default App;

// // TODO:
// // - Add About page
// // - Add 404 page
// // - Add page transition animations
// // - Add scroll restoration

