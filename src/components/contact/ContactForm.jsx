// components/contact/ContactForm.jsx
   import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_05qvjwx",
        
        "template_zytuu6f"
        ,  
        formRef.current,
       
         "7RtwI33u9qS5heQEz"
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong.");
      });
  };

  return (
    <section className="bg-[#f6f2ec] py-24 px-6 md:px-10 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >

          <p className="text-[#f2a93b] font-semibold tracking-[0.25em] uppercase mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] leading-tight mb-6">
            We’d Love To Hear From You
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Fill out the form below and a member of our team will
            contact you shortly.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#ece7e1] rounded-[40px] p-6 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
        >

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="grid md:grid-cols-2 gap-8"
          >

            {/* First Name */}
            <div>
              <label className="block text-[#1c1c1c] font-semibold mb-3">
                Parent or Guardian First Name
              </label>

              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full bg-white rounded-full px-6 py-5 outline-none border border-transparent focus:border-[#0d5cc8] transition"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-[#1c1c1c] font-semibold mb-3">
                Parent or Guardian Last Name
              </label>

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                
                className="w-full bg-white rounded-full px-6 py-5 outline-none border border-transparent focus:border-[#0d5cc8] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#1c1c1c] font-semibold mb-3">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full bg-white rounded-full px-6 py-5 outline-none border border-transparent focus:border-[#0d5cc8] transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[#1c1c1c] font-semibold mb-3">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-white rounded-full px-6 py-5 outline-none border border-transparent focus:border-[#0d5cc8] transition"
              />
            </div>

            {/* Child Age */}
            <div>
              <label className="block text-[#1c1c1c] font-semibold mb-3">
                Child's Age
              </label>

              <input
                type="text"
                name="child_age"
                placeholder="Age of Child"
                className="w-full bg-white rounded-full px-6 py-5 outline-none border border-transparent focus:border-[#0d5cc8] transition"
              />
            </div>

            {/* Best Time */}
            <div>
              <label className="block text-[#1c1c1c] font-semibold mb-3">
                Best time to contact you
              </label>

              <select
                name="best_time"
                className="w-full bg-white rounded-full px-6 py-5 outline-none border border-transparent focus:border-[#0d5cc8] transition"
              >
                <option>Anytime</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>

            {/* Submit */}
          {/* Bottom Section */}
<div className="md:col-span-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pt-2">

  {/* Checkbox */}
  <div className="flex items-start gap-4 max-w-2xl">

    <input
      type="checkbox"
   
      className="mt-1 w-6 h-6 accent-[#f2b24d]"
    />


<p className="text-gray-700 leading-relaxed">
  It's OK for Kiddie Academy of Snoqualmie to send me
  text messages regarding this inquiry. Message and data rates apply. Message frequency varies. Reply HELP
  for help, or STOP to opt out. View{" "}

  <Link
    to="/terms-conditions"
    className="underline hover:text-[#f2b24d] transition"
  >
    Terms
  </Link>{" "}
  and{" "}

  <Link
    to="/privacy-policy"
    className="underline hover:text-[#f2b24d] transition"
  >
    Privacy
  </Link>.
</p>
  </div>

  {/* Submit Button */}
  <motion.button
    type="submit"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
    className="bg-[#f2b24d] hover:bg-[#e3a33e] text-black font-semibold px-10 py-5 rounded-full transition duration-300 shadow-md"
  >
    SUBMIT
  </motion.button>
</div>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
