import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Aura will contact you soon.");
  };

  return (
    <section
      id="contact"
      className="bg-[#c39f8f] px-4 sm:px-6 md:px-12 lg:px-20 py-14 md:py-20 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-serif text-[#4b3528] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Let’s Create Something Beautiful
        </h2>

        <p className="text-sm sm:text-base text-[#705548] max-w-xl mx-auto mt-3 leading-relaxed">
          Ready to capture your story? Get in touch and let's bring your vision to life
          with a timeless vintage style.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 md:space-y-6"
        >
          <h3 className="font-serif text-[#4b3528] text-lg sm:text-xl font-semibold">
            Get in Touch
          </h3>

          {/* Email */}
          <div className="flex items-center gap-4 bg-[#ddc0b3] rounded-lg px-4 py-3 md:py-4">
            <div className="bg-[#a45d22] rounded-full p-2 text-white shrink-0">
              <Mail size={16} />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-[#4b3528]">Email</p>
              <p className="text-xs sm:text-sm text-[#6c5145] truncate">
                hello@neirahphotography.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-[#ddc0b3] rounded-lg px-4 py-3 md:py-4">
            <div className="bg-[#a45d22] rounded-full p-2 text-white shrink-0">
              <Phone size={16} />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-[#4b3528]">Phone</p>
              <p className="text-xs sm:text-sm text-[#6c5145]">
                +94 75 12345678
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-3 pt-3">
            <div className="bg-[#a45d22] text-white p-2 rounded-full">
              <FaInstagram size={16} />
            </div>
            <div className="bg-[#a45d22] text-white p-2 rounded-full">
              <FaFacebook size={16} />
            </div>
            <div className="bg-[#a45d22] text-white p-2 rounded-full">
              <FaXTwitter size={16} />
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#dfc1b5] rounded-xl p-5 sm:p-6 md:p-8 shadow-sm w-full"
        >
          <h3 className="font-serif text-[#4b3528] text-lg sm:text-xl font-semibold mb-4">
            Book Your Session
          </h3>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-xs sm:text-sm text-[#4b3528]">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#f0ddd4] rounded-md px-3 py-2 sm:py-3 text-sm outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs sm:text-sm text-[#4b3528]">
                Email
              </label>
              <input
                type="email"
                placeholder="name@gmail.com"
                className="w-full bg-[#f0ddd4] rounded-md px-3 py-2 sm:py-3 text-sm outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs sm:text-sm text-[#4b3528]">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type here..."
                className="w-full bg-[#f0ddd4] rounded-md px-3 py-2 sm:py-3 text-sm outline-none resize-none"
              />
            </div>

            <button
              className="bg-[#a45d22] text-white text-sm px-6 py-2.5 rounded-md hover:bg-[#8d4c18] transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-[#aa8577] mt-12 pt-5 flex flex-col sm:flex-row justify-between gap-2 text-xs sm:text-sm text-[#62483d]">
        <p>Photography Studio</p>
        <p>© 2025 Photography. All rights reserved</p>
      </div>
    </section>
  );
};

export default Contact;