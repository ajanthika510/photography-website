import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import camera from "../assets/camera.png";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function CameraActor({ introStatus }) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (introStatus !== "reveal") return;

    const run = async () => {
      // Wait until Hero text is visible
      await sleep(1800);

      // Start position (above Hero heading)
      await controls.set({
        y: -180,
        x: 0,
        rotate: -18,
        scale: 0.9,
        opacity: 1,
      });

      // First fall
      await controls.start({
        y: 220,
        x: 25,
        rotate: 22,
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      });

      // Continue through Hero
      await controls.start({
        y: 700,
        x: -35,
        rotate: -28,
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      });

      // Into Services
      await controls.start({
        y: 1350,
        x: 20,
        rotate: 18,
        transition: {
          duration: 1.1,
          ease: "easeIn",
        },
      });

      // Land on floral camera
      await controls.start({
        y: 1680,
        x: 0,
        rotate: 0,
        scale: 0.95,
        transition: {
          type: "spring",
          stiffness: 140,
          damping: 14,
        },
      });
    };

    run();
  }, [introStatus, controls]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={controls}
      className="
        absolute
        left-1/2
        top-40
        -translate-x-1/2
        z-[80]
        pointer-events-none
      "
    >
      <img
        src={camera}
        alt="Vintage Camera"
        className="
          w-[170px]
          md:w-[230px]
          lg:w-[260px]
          drop-shadow-[0_35px_55px_rgba(0,0,0,.35)]
        "
      />
    </motion.div>
  );
}