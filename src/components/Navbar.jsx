import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import lens from "../assets/lens.png";

const Navbar = ({ introStatus }) => {
  const isReady = introStatus === "settled" || introStatus === "reveal";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },

    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const linkContainerVariants = {
    closed: {},

    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: {
      y: 20,
      opacity: 0,
    },

    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={
          isReady
            ? {
                y: 0,
                opacity: 1,
              }
            : {
                y: -80,
                opacity: 0,
              }
        }
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-vintage-dark/40
        backdrop-blur-md
        border-b
        border-vintage-gold/10
        px-6
        py-4
        md:px-12
        flex
        items-center
        justify-between
      "
      >
        {/* Logo */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group z-50"
        >
          {isReady ? (
            <motion.img
              layoutId="lens"
              src={lens}
              alt="Lens"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 22,
              }}
              className="
              w-8
              h-8
              object-contain
              flex-shrink-0
              "
            />
          ) : (
            <div className="w-8 h-8 opacity-0" />
          )}

          <span className="font-serif text-xl font-bold tracking-wide text-vintage-gold group-hover:text-vintage-gold/80 transition-colors">
            Photograph
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) =>
                handleLinkClick(e, item.toLowerCase())
              }
              className="
              relative
              uppercase
              text-sm
              tracking-widest
              text-vintage-gold/80
              hover:text-vintage-gold
              transition
              group
            "
            >
              {item}

              <span
                className="
                absolute
                left-0
                -bottom-1
                h-[2px]
                w-0
                bg-vintage-gold
                transition-all
                duration-300
                group-hover:w-full
              "
              />
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="
            px-5
            py-2
            rounded-full
            bg-vintage-gold
            text-vintage-cream
            text-xs
            uppercase
            tracking-widest
            font-semibold
            hover:bg-vintage-gold/90
            transition
          "
          >
            Book Session
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
          className="md:hidden z-50 text-vintage-gold"
        >
          {isMobileMenuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="
            fixed
            inset-0
            z-40
            bg-vintage-dark/95
            backdrop-blur-xl
            flex
            items-center
            justify-center
            md:hidden
          "
          >
            <motion.div
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              className="flex flex-col items-center gap-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  variants={linkVariants}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) =>
                    handleLinkClick(e, item.toLowerCase())
                  }
                  className="
                  font-serif
                  text-3xl
                  uppercase
                  tracking-widest
                  text-vintage-gold
                "
                >
                  {item}
                </motion.a>
              ))}

              <motion.a
                variants={linkVariants}
                href="#contact"
                onClick={(e) =>
                  handleLinkClick(e, "contact")
                }
                className="
                mt-4
                px-8
                py-3
                rounded-full
                bg-vintage-gold
                text-vintage-cream
                uppercase
                tracking-widest
                text-xs
                font-semibold
              "
              >
                Book Session
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;