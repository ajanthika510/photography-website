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
        py-16
        sm:py-20
        lg:py-28
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

      <div className="text-center mb-10 sm:mb-14 lg:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-[64px]
          "
          style={{
            color:"#4A3426"
          }}
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity:0,y:15 }}
          whileInView={{ opacity:.85,y:0 }}
          viewport={{ once:true }}
          transition={{
            duration:.7,
            delay:.1
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
            color:"#6B5A50"
          }}
        >
          From intimate moments to grand celebrations,
          we capture timeless memories with elegance.
        </motion.p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">

        {servicesData.map((service,index)=>{

          const Icon =
            iconComponents[service.iconName] || Star;

          return(

            <motion.div

              key={service.id}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:.6,
                delay:index*.1
              }}

              whileHover={{
                y:-8,
                scale:1.02
              }}

              className="
                rounded-2xl
                p-6
                flex
                gap-5
                shadow-md
              "

              style={{
                background:"#E8D8CF"
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
                "
                style={{
                  background:"#8B4A1E"
                }}
              >
                <Icon
                  className="w-7 h-7 text-[#F3E9E1]"
                />
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
                    color:"#4A3426"
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color:"#6B5A50"
                  }}
                >
                  {service.description}
                </p>

              </div>

            </motion.div>

          )

        })}

      </div>

      {/* Floral Camera */}

      <motion.div

        id="cameraDock"

        initial={{
          opacity:0,
          scale:.8
        }}

        whileInView={{
          opacity:1,
          scale:[.8,1.08,1]
        }}

        viewport={{
          once:true,
          amount:.7
        }}

        transition={{
          duration:1
        }}

        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-[-80px]
          z-50
          pointer-events-none
        "

      >

        <img

          src={floralcam}

          alt="Floral Camera"

          className="
            w-44
            sm:w-56
            md:w-64
            lg:w-72
            drop-shadow-xl
          "

        />

      </motion.div>

    </section>
  );
};

export default Services;