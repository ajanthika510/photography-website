import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import { Heart, Calendar, Home, Star } from "lucide-react";

import floralcam from "../assets/floralcam.webp";

const iconComponents = {
  Heart,
  Calendar,
  Home,
  Star,
};

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative
        pt-16
        pb-40
        sm:pt-20
        sm:pb-44
        lg:pt-28
        lg:pb-52
        px-5
        sm:px-8
        lg:px-12
        max-w-7xl
        mx-auto
        overflow-visible
      "
      style={{
        backgroundColor: "#C9A99E",
      }}
    >
      {/* Header */}

      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-[64px]
          "
          style={{
            color: "#4A3426",
          }}
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.85, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mt-4
            max-w-3xl
            mx-auto
            leading-relaxed
            text-base
            sm:text-lg
            md:text-xl
          "
          style={{
            color: "#6B5A50",
          }}
        >
          From intimate moments to grand celebrations,
          we capture timeless memories with elegance.
        </motion.p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 mb-20">
        {servicesData.map((service, index) => {
          const Icon = iconComponents[service.iconName] || Star;

          return (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
  y: -8,
  scale: 1.03,
}}
whileTap={{
  scale: 0.98,
}}
className="
  relative
  z-10
  rounded-2xl
  p-6
  flex
  gap-5
  shadow-lg
  transition-all
  duration-500
  ease-out
  hover:shadow-xl
"
              style={{
                background: "#E8D8CF",
              }}
            >
              <div
  className="
    w-16
    h-16
    rounded-full
    flex
    items-center
    justify-center
    shrink-0
    transition-all
    duration-500
    ease-out
    group-hover:scale-110
  "
                style={{
                  background: "#8B4A1E",
                }}
              >
                <Icon className="w-7 h-7 text-[#F3E9E1]" />
              </div>

              <div>
                <h3
                  className="
                    font-serif
                    text-2xl
                    font-semibold
                    mb-2
                  "
                  style={{
                    color: "#4A3426",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="leading-relaxed"
                  style={{
                    color: "#6B5A50",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
            {/* Decorative Floral Camera */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -bottom-28
          z-20
          pointer-events-none
        "
      >
        <motion.div
          animate={{
  y: [0, -8, 0],
  rotate: [0, 2, -2, 0],
}}
transition={{
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut",
}}
          className="
            w-28
            h-28
            sm:w-36
            sm:h-36
            md:w-44
            md:h-44
            lg:w-48
            lg:h-48
            rounded-full
            overflow-hidden
            flex
            items-center
            justify-center
          "
        >
          <img
            src={floralcam}
            alt="Vintage Floral Camera"
            className="
              w-full
              h-full
              object-contain
              select-none
            "
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;