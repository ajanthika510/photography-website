import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#D2B6AB] overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2
              className="
                font-serif
                text-[#4D382C]
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                mb-8
              "
            >
              About the Artist
            </h2>

            <div className="space-y-3 text-[#56473F] text-base sm:text-lg leading-relaxed">
              <p>
                I'm a passionate photographer who believes that every
                moment has a story worth telling. With over a decade of
                experience, I've dedicated my craft to blending modern
                techniques with timeless vintage aesthetics.
              </p>

              <p>
                My journey began with a love for old film cameras and
                the magic they captured. Today, I bring that same
                nostalgic charm to digital photography, creating images
                that feel both contemporary and timeless.
              </p>

              <p>
                Every photograph is more than just an image—it's a
                window into a moment, a feeling, a memory that deserves
                to be preserved with the artistry and care it deserves.
              </p>
            </div>

            {/* Stats */}

            <div
  className="
    grid
    grid-cols-2
    gap-10
    mt-12
    max-w-md
  "
>

  <div className="text-center sm:text-left">

    <p
      className="
        text-xs
        uppercase
        tracking-[0.3em]
        text-[#6B554A]
        mb-3
      "
    >
      Photo Captured
    </p>


    <h4
      className="
        font-serif
        text-4xl
        lg:text-5xl
        font-semibold
        text-[#4D382C]
      "
    >
      5000+
    </h4>

  </div>



  <div className="text-center sm:text-left">

    <p
      className="
        text-xs
        uppercase
        tracking-[0.3em]
        text-[#6B554A]
        mb-3
      "
    >
      Years of Experience
    </p>


    <h4
      className="
        font-serif
        text-4xl
        lg:text-5xl
        font-semibold
        text-[#4D382C]
      "
    >
      10+
    </h4>

  </div>


</div>
</motion.div>

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">

              {/* Vintage Ring */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  scale-110
                  bg-[#9C531A]
                  blur-[1px]
                "
                style={{
                  clipPath:
                    "polygon(0% 5%,5% 0%,15% 4%,25% 0%,35% 5%,45% 1%,55% 5%,65% 0%,75% 4%,85% 1%,95% 5%,100% 15%,96% 25%,100% 35%,96% 45%,100% 55%,95% 65%,100% 75%,96% 85%,100% 95%,85% 100%,75% 96%,65% 100%,55% 96%,45% 100%,35% 95%,25% 100%,15% 96%,5% 100%,0% 85%,4% 75%,0% 65%,5% 55%,1% 45%,5% 35%,0% 25%,5% 15%)",
                }}
              />

              <div
                className="
                  relative
                  w-[280px]
                  h-[280px]
                  sm:w-[360px]
                  sm:h-[360px]
                  md:w-[460px]
                  md:h-[460px]
                  lg:w-[520px]
                  lg:h-[520px]
                  rounded-full
                  overflow-hidden
                  shadow-[0_30px_50px_rgba(0,0,0,0.25)]
                "
              >
                <img
  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80&auto=format&fit=crop"
  alt="Photographer"
  className="
    w-full
    h-full
    object-cover
    object-[center_20%]
    scale-90
    transition-transform
    duration-700
  "
/>
</div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Strip */}

      <div className="bg-[#C5A394] h-10 mt-16" />
    </section>
  );
};

export default About;