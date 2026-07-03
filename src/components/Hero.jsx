import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import lens from "../assets/lens.png";
import camera from "../assets/camera.png";

const Hero = ({ introStatus }) => {
  const ready = introStatus === "reveal";

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-start
        justify-center
        px-5
        sm:px-8
        lg:px-12
        pt-24
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,185,138,0.12),transparent_65%)]" />

      {/* Lens */}
      <motion.img
        src={lens}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2 }}
        className="
          absolute
          inset-0
          m-auto
          w-[520px]
          md:w-[720px]
          lg:w-[900px]
          pointer-events-none
          select-none
        "
      />

      {/* Decorative Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="
          absolute
          z-20
          rounded-full
          border
          border-[#D8B98A]/20
          w-[240px]
          h-[240px]
          sm:w-[340px]
          sm:h-[340px]
          md:w-[460px]
          md:h-[460px]
          lg:w-[620px]
          lg:h-[620px]
          xl:w-[720px]
          xl:h-[720px]
        "
      />

      {/* ================= CAMERA + TEXT SCENE ================= */}
      <div className="relative z-40 mx-auto max-w-6xl text-center mt-28">

        {/* CAMERA (starts above heading, falls through) */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -top-32 z-50"
          animate={
            ready
              ? {
                  y: [0, 140, 320, 600],
                  x: [0, 30, -40, 0],
                  rotate: [-18, 25, -30, 12],
                  scale: [0.9, 1.05, 0.98, 1],
                }
              : {}
          }
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 1],
          }}
        >
          <motion.img
            src={camera}
            alt="Vintage Camera"
            className="
              w-[160px]
              md:w-[220px]
              lg:w-[260px]
              drop-shadow-[0_35px_55px_rgba(0,0,0,.35)]
            "
          />
        </motion.div>

        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="
            uppercase
            tracking-[0.4em]
            text-[#a44908]
            text-[10px]
            md:text-xs
            mb-4
          "
        >
          EST. 1986 • FILM PHOTOGRAPHY
        </motion.p>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="
            font-serif
            font-semibold
            text-[#542e20]
            text-5xl
            md:text-7xl
            xl:text-[7rem]
            leading-[0.92]
          "
        >
          Framing Memories
        </motion.h1>

        {/* SUBTITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="
            mt-2
            font-serif
            italic
            text-[#8f4c05]
            text-2xl
            md:text-4xl
            lg:text-5xl
          "
        >
          with a Vintage Soul
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="
            mt-8
            max-w-xl
            mx-auto
            text-[#6D645E]
            text-lg
            leading-8
          "
        >
          Every frame tells a timeless story—capturing genuine emotion,
          nostalgic elegance, and moments you'll cherish forever.
        </motion.p>

        {/* BUTTON */}
        <motion.a
  href="#portfolio"
  initial={{ opacity: 0, y: 25 }}
  animate={ready ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 1.1 }}
  whileHover={{ 
    scale: 1.05,
    y: -3
  }}
  whileTap={{ scale: 0.98 }}

  className="
    inline-flex
    mt-10
    px-8
    py-4
    rounded-full
    bg-[#a44908]
    text-white
    uppercase
    tracking-[0.25em]
    text-xs

    shadow-[0_12px_30px_rgba(92,63,40,.35)]

    transition-all
    duration-300
    ease-out

    hover:bg-[#8f4c05]
    hover:shadow-[0_18px_40px_rgba(92,63,40,.5)]
  "
>
  Explore Gallery
</motion.a>
</div>

      {/* SCROLL INDICATOR */}
      {ready && (
        <motion.div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-[#B88A57]
          "
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;