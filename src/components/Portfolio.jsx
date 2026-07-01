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

      {/* Portfolio */}
      <div className="flex flex-col lg:flex-row gap-4 w-full h-auto lg:h-[520px] select-none">
        {portfolioData.map((item) => {
          const isActive = activeCategory === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              initial={false}
              onClick={() => setActiveCategory(item.id)}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                cursor-pointer
                border
                border-vintage-gold/10
                hover:border-vintage-gold/40
                shadow-xl
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
              <motion.img
                src={item.image}
                alt={item.title}
                animate={{
                  scale: isActive ? 1.07 : 1,
                }}
                whileHover={{
                  scale: isActive ? 1.1 : 1.06,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  grayscale-[8%]
                  sepia-[10%]
                  brightness-[82%]
                "
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundColor: isActive
                    ? "rgba(0,0,0,0.35)"
                    : "rgba(0,0,0,0.62)",
                }}
                whileHover={{
                  backgroundColor: isActive
                    ? "rgba(0,0,0,0.25)"
                    : "rgba(0,0,0,0.45)",
                }}
                transition={{
                  duration: 0.35,
                }}
              />

              {/* Inactive Card */}
              <AnimatePresence mode="wait">
                {!isActive && (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.08,
                        letterSpacing: "0.42em",
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        font-serif
                        text-lg
                        sm:text-xl
                        lg:text-base
                        uppercase
                        tracking-[0.32em]
                        text-white
                        drop-shadow-[0_3px_12px_rgba(0,0,0,1)]
                        whitespace-nowrap
                        lg:-rotate-90
                        bg-black/25
                        backdrop-blur-sm
                        px-3
                        py-2
                        rounded-md
                      "
                    >
                      {item.title}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active Card */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="expanded"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      delay: 0.15,
                      duration: 0.45,
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
                      from-black/50
                      via-black/15
                      to-transparent
                      pointer-events-auto
                    "
                  >
                    <motion.h3
                      initial={{ y: 30 }}
                      animate={{ y: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.4,
                      }}
                      className="
                        font-serif
                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                        lg:text-5xl
                        uppercase
                        tracking-[0.25em]
                        text-white
                        drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
                        mb-4
                      "
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      className="
                        text-xs
                        sm:text-sm
                        lg:text-base
                        text-vintage-cream/85
                        leading-relaxed
                        max-w-md
                      "
                    >
                      {item.subtitle} — developed with classic analog character
                      and {item.film} film texture.
                    </motion.p>
                                        <motion.span
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.4,
                        duration: 0.3,
                      }}
                      className="
                        mt-5
                        text-[10px]
                        sm:text-xs
                        uppercase
                        tracking-[0.3em]
                        text-vintage-cream/70
                      "
                    >
                      {item.location} • {item.camera}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative Active Border */}
              {isActive && (
                <motion.div
                  layoutId="portfolio-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
  font-serif
  text-2xl
  sm:text-3xl
  md:text-4xl
  lg:text-5xl
  uppercase
  tracking-[0.25em]
  text-white
  drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
  mb-4
"
                />
              )}

              {/* Glow Effect */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-gradient-to-t
                    from-vintage-gold/5
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
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