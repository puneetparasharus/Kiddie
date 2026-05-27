// components/contact/ContactForm.jsx

import { motion } from "framer-motion";

const ContactForm = () => {
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

    {/* Form Container */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#ece7e1] rounded-[40px] p-6 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
    >

      <form className="grid md:grid-cols-2 gap-8">

        {/* First Name */}
        <div>
          <label className="block text-[#1c1c1c] font-semibold mb-3">
            Parent or Guardian First Name
          </label>

          <input
            type="text"
            placeholder="First Name"
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
            placeholder="Email Address"
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
            placeholder="Phone Number"
            className="w-full bg-white rounded-full px-6 py-5 outline-none border border-transparent focus:border-[#0d5cc8] transition"
          />
        </div>

        {/* Child Age */}
        <div>
          <label className="block text-[#1c1c1c] font-semibold mb-3">
            Child's Age (specify months or years)
          </label>

          <input
            type="text"
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
            className="w-full bg-white rounded-full px-6 py-5 outline-none border border-transparent focus:border-[#0d5cc8] transition"
          >
            <option>Anytime</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>

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
              text messages regarding this inquiry. Standard text
              message rates apply and frequency varies. Reply HELP
              for help, or STOP to opt out. View{" "}

              <span className="underline cursor-pointer">
                Terms
              </span>{" "}
              and{" "}

              <span className="underline cursor-pointer">
                Privacy
              </span>.
            </p>
          </div>

          {/* Submit Button */}
          <motion.button
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

// TODO:
// - Add form validation
// - Add success/error toast
// - Add backend integration
// - Add loading state
// - Add floating label animation
