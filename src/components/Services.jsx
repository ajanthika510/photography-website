import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import { Heart, Calendar, Home, Star } from "lucide-react";

import floralcam from "../assets/Floracam.webp";

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
        overflow-visible
        pt-20
        pb-24
        px-6
        sm:px-8
        lg:px-12
      "
      style={{
        background:
          "linear-gradient(180deg,#D9BBB0 0%, #CEADA2 45%, #C49A8E 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ===========================
             Section Header
        ============================ */}

        <div className="text-center mb-20">

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              font-serif
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[64px]
              tracking-wide
            "
            style={{
              color: "#4A3426",
            }}
          >
            Our Services
          </motion.h2>

          {/* Decorative Line */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              w-28
              h-[3px]
              rounded-full
              mx-auto
              mt-5
            "
            style={{
              background:
                "linear-gradient(to right,#8B4A1E,#C17C4A,#8B4A1E)",
            }}
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-base
              sm:text-lg
              md:text-xl
              leading-relaxed
            "
            style={{
              color: "#6B5A50",
            }}
          >
            From intimate moments to grand celebrations, we specialize in capturing life's most 
            precious memories with a timeless vintage touch that stand the of time.
          </motion.p>
        </div>

        {/* ===========================
             Service Cards
        ============================ */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
  const Icon = iconComponents[service.iconName] || Star;

  return (
    <motion.div
      key={service.id}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        relative
        flex
        items-start
        gap-5
        rounded-3xl
        p-7
        h-full
        overflow-hidden
        border
        border-white/30
        backdrop-blur-sm
        transition-all
        duration-500
        shadow-[0_18px_40px_rgba(0,0,0,0.10)]
        hover:shadow-[0_28px_60px_rgba(0,0,0,0.18)]
      "
      style={{
        background: "rgba(248,240,235,0.88)",
      }}
    >
      {/* Decorative Glow */}
      <div
        className="
          absolute
          -top-16
          -right-16
          w-40
          h-40
          rounded-full
          blur-3xl
          opacity-20
          group-hover:opacity-40
          transition-all
          duration-700
        "
        style={{
          background: "#D9B29B",
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          relative
          z-10
          w-16
          h-16
          rounded-full
          flex
          items-center
          justify-center
          shrink-0
          shadow-lg
        "
        style={{
          background:
            "linear-gradient(135deg,#8B4A1E,#B66A34)",
        }}
      >
        <Icon className="w-7 h-7 text-white" />
      </motion.div>

      {/* Text */}
      <div className="relative z-10 flex-1">
        <h3
          className="
            font-serif
            text-2xl
            lg:text-[30px]
            font-semibold
            tracking-wide
            mb-3
          "
          style={{
            color: "#4A3426",
          }}
        >
          {service.title}
        </h3>

        <p
          className="
            text-[15px]
            lg:text-base
            leading-7
          "
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

        {/* Decorative Camera */}
<div className="flex justify-center mt-10 lg:mt-12">
  <motion.div
    initial={{
      opacity: 0,
      y: 30,
      scale: 0.9,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    viewport={{
      once: true,
      amount: 0.4,
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    className="relative"
  >
    {/* SOFT SHADOW RING */}
    <div
      className="
        absolute
        inset-0
        rounded-full
        scale-125
        blur-2xl
        opacity-40
      "
      style={{
        background:
          "radial-gradient(circle, rgba(156,83,26,0.35) 0%, rgba(156,83,26,0.15) 40%, transparent 70%)",
      }}
    />

    {/* INNER GLOW RING */}
    <div
      className="
        absolute
        inset-0
        rounded-full
        scale-110
        blur-md
        opacity-50
      "
      style={{
        background:
          "radial-gradient(circle, rgba(255,220,190,0.25) 0%, transparent 60%)",
      }}
    />

    {/* IMAGE */}
    <motion.img
      src={floralcam}
      alt="Vintage Camera"
      draggable={false}
      animate={{
        y: [0, -6, 0],
        rotate: [0, 1.5, -1.5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative
        z-10
        w-40
        sm:w-48
        md:w-56
        lg:w-64
        object-contain
        drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]
        select-none
      "
    />
  </motion.div>
</div>

      </div>
    </section>
  );
};

export default Services;
