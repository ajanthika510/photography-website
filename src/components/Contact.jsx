import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Empty field validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    setErrors({});

    alert("Message sent! Aura will contact you soon.");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };


  return (
    <section
      id="contact"
      className="bg-[#c9a291] px-4 sm:px-6 md:px-12 lg:px-20 py-14 md:py-20 overflow-hidden"
    >

      <div className="text-center mb-10 md:mb-14">

        <h2 className="font-serif text-[#463024] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Let’s Create Something Beautiful
        </h2>

        <p className="text-sm sm:text-base text-[#705548] max-w-xl mx-auto mt-3">
          Ready to capture your story? Get in touch and let's bring your vision to life
          with a timeless vintage style.
        </p>

      </div>


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">


        {/* LEFT SIDE */}
        <motion.div
          initial={{x:-40,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:.6}}
          className="space-y-5"
        >

          <h3 className="font-serif text-[#4b3528] text-[22px] font-semibold">
            Get in Touch
          </h3>


          <div className="flex items-center gap-4 bg-[#ddc0b3] rounded-lg px-4 py-4">

            <div className="bg-[#7b3f0d] rounded-full p-2 text-white">
              <Mail size={16}/>
            </div>

            <div>
              <p className="text-[20px] text-[#4b3528]">
                Email
              </p>

              <p className="text-[16px] text-[#6c5145]">
                hello@neirahphotography.com
              </p>

            </div>

          </div>



          <div className="flex items-center gap-4 bg-[#ddc0b3] rounded-lg px-4 py-4">

            <div className="bg-[#7b3f0d] rounded-full p-2 text-white">
              <Phone size={16}/>
            </div>

            <div>

              <p className="text-[20px] text-[#4b3528]">
                Phone
              </p>

              <p className="text-[16px] text-[#6c5145]">
                +94 75 12345678
              </p>

            </div>

          </div>


          <div className="flex gap-3">

            <div className="bg-[#7b3f0d] text-white p-2 rounded-full">
              <FaInstagram/>
            </div>

            <div className="bg-[#7b3f0d] text-white p-2 rounded-full">
              <FaFacebook/>
            </div>

            <div className="bg-[#7b3f0d] text-white p-2 rounded-full">
              <FaXTwitter/>
            </div>

          </div>


        </motion.div>



        {/* FORM */}

        <motion.div
          initial={{x:40,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:.6}}
          className="bg-[#dfc1b5] rounded-xl p-6 shadow-sm"
        >

          <h3 className="font-serif text-[#4b3528] text-[22px] font-semibold mb-4">
            Book Your Session
          </h3>


          <form onSubmit={handleFormSubmit} className="space-y-4">


            <div>

              <label className="text-[20px] text-[#4b3528]">
                Name
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="w-full bg-[#f0ddd4] rounded-md px-3 py-3 text-[18px] outline-none"
              />

              {errors.name &&
                <p className="text-red-600 text-[16px] mt-1">
                  {errors.name}
                </p>
              }

            </div>



            <div>

              <label className="text-[20px] text-[#4b3528]">
                Email
              </label>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="name@gmail.com"
                className="w-full bg-[#f0ddd4] rounded-md px-3 py-3 text-[18px] outline-none"
              />


              {errors.email &&
                <p className="text-red-600 text-[16px] mt-1">
                  {errors.email}
                </p>
              }


            </div>



            <div>

              <label className="text-[20px] text-[#4b3528]">
                Message
              </label>


              <textarea

                name="message"
                value={formData.message}
                onChange={handleChange}

                rows="4"
                placeholder="Type here..."

                className="w-full bg-[#f0ddd4] rounded-md px-3 py-3 text-[18px] outline-none resize-none"

              />


              {errors.message &&
                <p className="text-red-600 text-[16px] mt-1">
                  {errors.message}
                </p>
              }


            </div>



            <button
              className="bg-[#7b3f0d] text-white px-6 py-3 rounded-md hover:bg-[#8d4c18] transition w-full sm:w-auto"
            >
              Send Message
            </button>


          </form>


        </motion.div>


      </div>


      <div className="border-t border-[#aa8577] mt-12 pt-5 flex justify-between text-[16px] text-[#62483d]">

        <p className="text-[16px]">
          Photography Studio
        </p>

        <p className="text-[16px]">
          © 2026 Neirah Photography. All rights reserved
        </p>

      </div>


    </section>
  );
};


export default Contact;

