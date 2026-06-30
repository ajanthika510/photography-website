import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("street");

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14 lg:mb-16">
        <p className="font-sans text-[11px] sm:text-xs tracking-[0.35em] uppercase text-vintage-gold/60 mb-3">
          Portfolio
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#7f4e06] leading-tight"
        >
          Creative Collections
        </motion.h2>

        <div className="w-14 h-[1px] bg-vintage-gold/50 mx-auto mt-5" />
      </div>

      {/* Portfolio Accordion */}
      <div className="flex flex-col lg:flex-row gap-4 w-full h-auto lg:h-[520px] select-none">
        {portfolioData.map((item, index) => {
          const isActive = activeCategory === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActiveCategory(item.id)}
              initial={false}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              whileHover={{
                y: -4,
              }}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                cursor-pointer
                border
                border-vintage-gold/10
                hover:border-vintage-gold/30
                shadow-lg
                transition-all
                duration-500

                ${
                  isActive
                    ? "h-[340px] sm:h-[420px] lg:h-auto lg:flex-[4.5]"
                    : "h-[90px] sm:h-[110px] lg:h-auto lg:flex-1"
                }
              `}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 grayscale-[10%] sepia-[12%] brightness-[82%]"
                  style={{
                    transform: isActive
                      ? "scale(1.06)"
                      : "scale(1)",
                  }}
                />

                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                      ? "bg-black/35"
                      : "bg-black/60 hover:bg-black/50"
                  }`}
                />
              </div>

              {/* Collapsed */}
              <AnimatePresence mode="wait">
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span
                      className="
                        font-serif
                        text-lg
                        sm:text-xl
                        lg:text-base
                        tracking-[0.3em]
                        uppercase
                        text-vintage-cream
                        whitespace-nowrap
                        lg:-rotate-90
                      "
                    >
                      {item.title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      delay: 0.15,
                      duration: 0.4,
                    }}
                    className="
                      absolute
                      inset-0
                      flex
                      flex-col
                      justify-end
                      items-center
                      text-center
                      p-5
                      sm:p-7
                      lg:p-8
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-black/25
                      pointer-events-none
                    "
                  >
                    <motion.h3
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="
                        font-serif
                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                        lg:text-5xl
                        uppercase
                        tracking-[0.25em]
                        text-vintage-cream
                        mb-4
                      "
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="
                        text-xs
                        sm:text-sm
                        lg:text-base
                        text-vintage-cream/80
                        leading-relaxed
                        max-w-md
                      "
                    >
                      {item.subtitle} — developed with classic analog character
                      and {item.film} film texture.
                    </motion.p>

                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="
                        mt-4
                        text-[10px]
                        sm:text-xs
                        uppercase
                        tracking-[0.3em]
                        text-vintage-cream/60
                      "
                    >
                      {item.location} • {item.camera}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative Border */}
              {isActive && (
                <motion.div
                  layoutId="portfolio-border"
                  className="absolute inset-0 border border-vintage-gold/30 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;