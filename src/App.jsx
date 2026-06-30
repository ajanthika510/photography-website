import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import lens from "./assets/lens.png";

function App() {
  const [introStatus, setIntroStatus] = useState("center");
  // center → moving → settled → reveal

  useEffect(() => {
    let timer;

    if (introStatus === "center") {
      timer = setTimeout(() => {
        setIntroStatus("moving");
      }, 1400);
    } else if (introStatus === "moving") {
      timer = setTimeout(() => {
        setIntroStatus("settled");
      }, 1200);
    } else if (introStatus === "settled") {
      timer = setTimeout(() => {
        setIntroStatus("reveal");
      }, 600);
    }

    return () => clearTimeout(timer);
  }, [introStatus]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.5,
        smoothTouch: true,
        prevent: () => introStatus !== "reveal",
      }}
    >
      <div
        className={`
          vintage-grain
          min-h-screen
          bg-vintage-dark
          text-vintage-gold
          selection:bg-vintage-gold
          selection:text-vintage-cream
          transition-colors
          duration-500
          ${
            introStatus !== "reveal"
              ? "h-screen overflow-hidden"
              : ""
          }
        `}
      >
        {/* Navbar */}
        <Navbar introStatus={introStatus} />

        {/* Intro Lens Animation */}
        <AnimatePresence>
          {(introStatus === "center" ||
            introStatus === "moving") && (
            <motion.div
              layoutId="lens"
              initial={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                opacity: 0,
              }}
              animate={
                introStatus === "center"
                  ? {
                      left: "50%",
                      top: "50%",
                      x: "-50%",
                      y: "-50%",
                      width: 260,
                      height: 260,
                      opacity: 1,
                    }
                  : {
                      left: "32px",
                      top: "20px",
                      x: 0,
                      y: 0,
                      width: 32,
                      height: 32,
                      opacity: 1,
                    }
              }
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                z-[100]
                pointer-events-none
              "
            >
              <motion.img
                src={lens}
                alt="Camera Lens"
                animate={
                  introStatus === "center"
                    ? {
                        scale: [1, 1.12, 1],
                        rotate: [0, 8, -8, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main
          className={`
            transition-all
            duration-700
            ${
              introStatus === "settled" ||
              introStatus === "reveal"
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          <Home introStatus={introStatus} />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;